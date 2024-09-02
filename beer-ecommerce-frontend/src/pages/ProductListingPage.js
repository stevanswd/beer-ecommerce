import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

/**
 * A React component that displays a list of products, fetching them from a remote API.
 *
 * @return {JSX.Element} The JSX element representing the product listing page.
 */
const ProductListingPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('http://localhost:5001/api/products');
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products.', error);
        alert('Failed to fetch products.');
      }
    };

    fetchProducts();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="product-listing">
          <p className='greeting'>Hi Mr. Michael,</p>
          <h1 className='welcome'>Welcome Back!</h1>
          <h2 className='our-products'>Our Products</h2>
          <div className="product-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductListingPage;
