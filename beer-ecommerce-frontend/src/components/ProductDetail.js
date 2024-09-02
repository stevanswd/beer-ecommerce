import React from 'react';

/**
 * A React component that displays the details of a product.
 *
 * @param {object} product - The product object containing brand, image, information, and skus.
 * @param {object} stock - The stock object containing stock and price information for each sku.
 * @return {JSX.Element} The JSX element representing the product details.
 */
function ProductDetail({ product, stock }) {

  // Function to handle Add to Cart button click
  const handleAddToCart = () => {
    const message = `
      Product: ${product.brand}
      Price: $${stock.price}
      Stock: ${stock.stock}
      Size: ${product.skus.map(sku => sku.name).join(', ')}
    `;
    alert(message);
  };

  return (
    <div className='product-detail'>
      <div className='container-image'>
        <img src={product.image} alt={product.brand} />
      </div>
      <div className='container-information'>
        <h1>
          <span className='brand'>{product.brand}</span>
          <span className='price'>${stock.price}</span>
        </h1>

        <span className='stock'>{product.origin} | {stock.stock}</span>

        <div className='information'>
          <h2>Description</h2>
          <p>{product.information}</p>
        </div>

        <div className='information'>
          <h2>Size</h2>
          <ul>
            {product.skus.map(sku => (
              <li key={sku.code}>
                {sku.name}
              </li>
            ))}
          </ul>
        </div>

        <div className='card-information'>
          <img src="/images/add-to-bag.png" alt="Add to bag icon" className="card-icon" />
          <button className='card-btn' onClick={handleAddToCart}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
