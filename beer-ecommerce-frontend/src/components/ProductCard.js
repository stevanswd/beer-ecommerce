import React from 'react';
import { Link } from 'react-router-dom';

/**
 * A React component that displays a product card with the product's brand, image, style, and a link to view more details.
 *
 * @param {object} product - The product object containing brand, image, style, and id.
 * @return {JSX.Element} The JSX element representing the product card.
 */
const ProductCard = ({ product }) => {
  return (
    <Link className="product-card" to={`/product/${product.id}-${product.brand.toLowerCase().replace(/\s+/g, '-')}`}>
      <h3>{product.brand}</h3>
      <img src={product.image} alt={product.brand} />
      <div className='card-info'>
        <p className='price'>{product.style}</p>
        <span className='view-details'>+</span>
      </div>
    </Link>
  );
};

export default ProductCard;
