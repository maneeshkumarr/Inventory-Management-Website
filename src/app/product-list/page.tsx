'use client';

import React, { useEffect, useState } from 'react';
import { fetchProducts, deleteProduct } from '../../services/productService';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';


interface Product {
  id: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError('Failed to fetch products. Please try again later.');
      }
    };

    loadProducts();
  }, []);

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteProduct(id);
        setProducts(products.filter((product) => product.id !== id));
        alert('Product deleted successfully!');
      } catch (err) {
        alert('Failed to delete product. Please try again later.');
      }
    }
  };

  const handleEdit = (id: number) => {
    router.push(`/edit/${id}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#031B34] text-white">
    

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-grow max-w-6xl mx-auto px-6 py-12"
      >
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-green-400">
            📦 Product Inventory
          </h1>
          <p className="text-gray-300">
            Manage your product stock and details efficiently
          </p>
        </header>

        {error && (
          <div className="bg-red-600 text-white p-4 rounded-md mb-6 text-center shadow-md">
            {error}
          </div>
        )}

        <div className="overflow-x-auto bg-[#092c4c] rounded-xl shadow-lg">
          <table className="w-full table-auto border-collapse text-sm md:text-base">
            <thead>
              <tr className="bg-[#0A2A43] text-gray-200 uppercase text-left">
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Description</th>
                <th className="px-6 py-4 text-center">Quantity</th>
                <th className="px-6 py-4 text-center">Price</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <motion.tr
                  key={product.id}
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className="border-t border-[#0D2A46] hover:bg-[#0e3755]"
                >
                  <td className="px-6 py-4 font-semibold">{product.name}</td>
                  <td className="px-6 py-4">{product.description}</td>
                  <td className="px-6 py-4 text-center">{product.quantity}</td>
                  <td className="px-6 py-4 text-center text-green-400 font-bold">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => handleEdit(product.id)}
                        className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-1 rounded-full text-sm transition shadow"
                      >
                        ✏️ Edit
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="bg-red-600 hover:bg-red-500 text-white px-4 py-1 rounded-full text-sm transition shadow"
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      
    </div>
  );
};

export default ProductList;
