import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import ProductDetail from '../components/ProductDetail';

/**
 * A React component that displays the details of a product, including its brand, image, information, and stock details.
 *
 * @return {JSX.Element} The JSX element representing the product details page.
 */
const ProductDetailsPage = () => {
  const [product, setProduct] = useState(null);
  const [stock, setStock] = useState(null);
  const [error, setError] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    // Fetch product details
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/products`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const product = data.find(p => p.id === parseInt(productId));
        setProduct(product);
      } catch (error) {
        console.error('Error fetching product:', error);
        setError('Error fetching product details.');
      }
    };

    fetchProduct();
  }, [productId]);

  useEffect(() => {
    // Fetch stock details every 5 seconds
    const fetchStock = async () => {
      try {
        const sku = product?.skus[0]?.code; // Use the first SKU for simplicity
        if (!sku) return; // Check if SKU is available
        const response = await fetch(`http://localhost:5001/api/stock-price/${sku}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('fetching stock', data);
        setStock(data);
      } catch (error) {
        console.error('Error fetching stock:', error);
        setError('Error fetching stock details.');
      }
    };

    if (product) {
      const intervalId = setInterval(fetchStock, 5000); // Fetch every 5 seconds
      // Cleanup interval on component unmount
      return () => clearInterval(intervalId);
    }
  }, [product]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!product || !stock) {
    return <div className='loading'>Loading...</div>;
  }

  return (
    <React.Fragment>
      <Header product />
      <div className="container">
        <ProductDetail 
          product={product}
          stock={stock}
        />
      </div>
    </React.Fragment>
  );
};

export default ProductDetailsPage;
