import React, { useState } from 'react';
import { addProduct } from '../services/productService';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    quantity: 0,
    price: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!product.name || !product.description || product.quantity < 0 || product.price < 0) {
      alert('Please provide valid input for all fields.');
      return;
    }
    try {
      await addProduct(product);
      alert('Product added successfully!');
      setProduct({ name: '', description: '', quantity: 0, price: 0 });
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product.');
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={product.name} onChange={handleChange} required />
        <input type="text" name="description" placeholder="Description" value={product.description} onChange={handleChange} required />
        <input type="number" name="quantity" placeholder="Quantity" value={product.quantity} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} required />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
