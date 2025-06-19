'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

const EditProduct = () => {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    quantity: 0,
  });
  const [error, setError] = useState('');

  // Fetch existing product data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:8080/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError('Failed to load product');
      }
    };
    fetchProduct();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:8080/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      if (res.ok) {
        router.push('/product-list');
      } else {
        setError('Failed to update product');
      }
    } catch (err) {
      setError('Error updating product');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-[#0A2740] text-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-green-400 text-center">Edit Product</h2>
      {error && <p className="text-red-400 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block">Product Name</label>
          <input
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full mt-1 p-2 rounded bg-[#031B34] border border-gray-500"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block">Description</label>
          <input
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            className="w-full mt-1 p-2 rounded bg-[#031B34] border border-gray-500"
            required
          />
        </div>
        <div>
          <label htmlFor="price" className="block">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full mt-1 p-2 rounded bg-[#031B34] border border-gray-500"
            required
          />
        </div>
        <div>
          <label htmlFor="quantity" className="block">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
            className="w-full mt-1 p-2 rounded bg-[#031B34] border border-gray-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full mt-4 p-2 bg-green-600 rounded hover:bg-green-700"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
