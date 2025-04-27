'use client'; // Ensure this page is treated as a client-side component

import { useState } from 'react';
import { useRouter } from 'next/navigation';  // Updated import for Next.js App Router

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
      const res = await fetch('/api/products', {
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
    <div className="max-w-md mx-auto mt-8 p-4 border border-gray-300 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Add New Product</h1>
      {error && <p className="text-red-600 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-gray-700">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="price" className="block text-gray-700">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="quantity" className="block text-gray-700">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md mt-4 hover:bg-blue-700"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
