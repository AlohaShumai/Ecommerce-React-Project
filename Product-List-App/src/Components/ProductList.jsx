import React from 'react';
import ProductItem from './ProductItem';
import './ProductList.css';

const ProductList = ({ products }) => {
  return (
    <section className="product-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductList;
