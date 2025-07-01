import React from 'react';
import './ProductItem.css';

const ProductItem = ({ product: { name, price, description } }) => {
  return (
    <article className="product-card">
      <h2>{name}</h2>
      <p className="price">${price.toFixed(2)}</p>
      <p>{description}</p>
    </article>
  );
};

export default ProductItem;
