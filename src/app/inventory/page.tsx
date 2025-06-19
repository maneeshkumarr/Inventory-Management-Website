'use client';
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../../services/productService';

interface Product {
  id: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
}

const InventoryOverview = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError('Failed to load products.');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const totalQuantity = products.reduce((sum, product) => sum + product.quantity, 0);
  const totalValue = products.reduce((sum, product) => sum + product.quantity * product.price, 0);

  if (loading) {
    return <div className="text-center text-white py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-8">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-[#031B34] text-white flex flex-col">
      <section className="py-24 px-6 text-center">
        <h2 className="text-5xl font-extrabold text-white tracking-tight">Inventory Overview</h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Total Products Card */}
          <div className="bg-[#1F3A53] rounded-lg p-8 shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-3xl font-semibold text-white">Total Products</h3>
            <p className="text-5xl font-extrabold text-[#04C6A1]">{products.length}</p>
          </div>

          {/* Total Quantity Card */}
          <div className="bg-[#1F3A53] rounded-lg p-8 shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-3xl font-semibold text-white">Total Quantity</h3>
            <p className="text-5xl font-extrabold text-[#04C6A1]">{totalQuantity}</p>
          </div>

          {/* Total Value Card */}
          <div className="bg-[#1F3A53] rounded-lg p-8 shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-3xl font-semibold text-white">Total Value</h3>
            <p className="text-5xl font-extrabold text-[#04C6A1]">${totalValue.toFixed(2)}</p>
          </div>
        </div>

        {/* Product List */}
        <div className="mt-12">
          <h3 className="text-3xl font-semibold text-white">Product List</h3>
          <div className="mt-6 space-y-6">
            {products.map((product) => (
              <div key={product.id} className="bg-[#1F3A53] rounded-lg p-6 shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl">
                <h4 className="text-2xl font-semibold text-[#04C6A1]">{product.name}</h4>
                <p className="text-lg text-gray-300">{product.description}</p>
                <div className="mt-4 flex justify-between">
                  <p className="text-xl text-gray-200">Quantity: {product.quantity}</p>
                  <p className="text-xl text-gray-200">Price: ${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InventoryOverview;
