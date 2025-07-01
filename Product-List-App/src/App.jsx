import React, { useState } from 'react';
import ProductList from './Components/ProductList';
import './App.css';

function App() {
  const [products] = useState([
    {
      id: 1,
      name: "Lego Star Destroyer Set",
      price: 649.99,
      description: "Full Replica of Star Destroyer from Star Wars",
    },
    {
      id: 2,
      name: "Lego Porsche 911",
      price: 169.99,
      description: "Display Replica of the real like Porsche 911",
    },
    {
      id: 3,
      name: "Lego Ninjago Dragon ",
      price: 299.99,
      description: "Large 3 Headed Dragons with Ninjago Characters",
    }
  ]);

  return (
    <main className="app">
      <h1>Lego E-Commerce Store</h1>
      <ProductList products={products} />
    </main>
  );
}

export default App;
