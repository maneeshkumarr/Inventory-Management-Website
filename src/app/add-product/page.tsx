'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Updated import for Next.js App Router

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    quantity: 0,
  });
  const [error, setError] = useState('');
  const router = useRouter();

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the form
    if (!product.name || !product.description || !product.price || !product.quantity) {
      setError('All fields are required!');
      return;
    }

    try {
      // Example of sending data to an API endpoint (e.g., POST request)
      const res = await fetch('http://localhost:8080/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      if (res.ok) {
        router.push('/product-list'); // Redirect after successful submission
      } else {
        setError('Failed to add the product!');
      }
    } catch (error) {
      setError('Error adding the product.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-8 bg-[#0A2740] border border-gray-700 rounded-xl shadow-lg">
      <h1 className="text-3xl font-extrabold text-center text-green-400 mb-6">Add New Product</h1>
      {error && <p className="text-red-600 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-white text-lg font-medium">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full p-4 mt-2 border border-gray-600 rounded-md bg-[#031B34] text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-white text-lg font-medium">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            className="w-full p-4 mt-2 border border-gray-600 rounded-md bg-[#031B34] text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>
        <div>
          <label htmlFor="price" className="block text-white text-lg font-medium">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full p-4 mt-2 border border-gray-600 rounded-md bg-[#031B34] text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>
        <div>
          <label htmlFor="quantity" className="block text-white text-lg font-medium">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
            className="w-full p-4 mt-2 border border-gray-600 rounded-md bg-[#031B34] text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-4 text-lg font-semibold bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
