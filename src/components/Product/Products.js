import React, { useState, useEffect } from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <img
        src={product.image}
        alt={product.title}
        style={{ maxWidth: "200px" }}
      />
    </div>
  );
};

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-container">
      <h1>Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
