'use client';

import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for advanced animations

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#031B34] text-white px-4 py-8">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-green-400 animate__animated animate__fadeIn">
        📊 Inventory Dashboard
      </h1>

      {/* Summary Cards with 3D effects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { title: 'Total Products', value: '10,226', color: 'text-blue-400' },
          { title: 'Total Quantity on Hand', value: '2,000,508', color: 'text-green-400' },
          { title: 'Products to Receive', value: '5,680', color: 'text-yellow-400' },
          { title: 'Total Packed', value: '878', color: 'text-purple-400' },
        ].map((card, index) => (
          <motion.div
            key={index}
            className="bg-[#0A2740] p-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }} // Add hover effect to scale cards
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <h2 className="text-lg font-semibold text-gray-300">{card.title}</h2>
            <p className={`text-4xl font-bold mt-2 ${card.color}`}>{card.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Detailed Overview */}
      <section className="mb-16 bg-[#021A2D] p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">📦 Detailed Overview</h2>
        <p className="text-lg text-gray-300 mb-4">
          Our inventory system provides real-time tracking and efficient management for your business. With features
          like detailed stock status, order fulfillment, and product tracking, you can stay on top of your inventory needs
          at all times.
        </p>
        <p className="text-lg text-gray-300">
          Easily track inventory movements, receive automatic updates, and keep your stock management streamlined for maximum
          efficiency.
        </p>
      </section>

      {/* Quick Actions with hover effects */}
      <div>
        <h2 className="text-3xl font-semibold mb-6 text-center text-white animate__animated animate__fadeIn">
          🚀 Quick Actions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Add Product',
              description: 'Easily add new products to your inventory with a few clicks.',
              href: '/add-product',
              color: 'bg-blue-600',
              hover: 'hover:bg-blue-700',
            },
            {
              title: 'View Products',
              description: 'Manage all products in your inventory, view details and stats.',
              href: '/product-list',
              color: 'bg-green-600',
              hover: 'hover:bg-green-700',
            },
            {
              title: 'Inventory Overview',
              description: 'Get a detailed view of stock movement and inventory status.',
              href: '/inventory',
              color: 'bg-yellow-600',
              hover: 'hover:bg-yellow-700',
            },
          ].map((action, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl p-6 text-white shadow-lg ${action.color} ${action.hover} transition duration-300`}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-xl font-bold">{action.title}</h3>
              <p className="text-sm mt-2">{action.description}</p>
              <a
                href={action.href}
                className="mt-4 inline-block text-sm underline hover:text-black"
              >
                Go →
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#021A2D] py-8 mt-16 text-center text-gray-400">
        <p>&copy; 2025 StockWise. All Rights Reserved.</p>
        <p>Designed with 💙 for better inventory management.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
