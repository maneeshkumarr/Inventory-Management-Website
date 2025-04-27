import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard-container p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="dashboard-card hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-lg font-semibold">Total Products</h2>
          <p className="text-3xl font-bold">10,226</p>
        </div>
        <div className="dashboard-card hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-lg font-semibold">Total Quantity on Hand</h2>
          <p className="text-3xl font-bold">2,000,508</p>
        </div>
        <div className="dashboard-card hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-lg font-semibold">Total Products to be Received</h2>
          <p className="text-3xl font-bold">5,680</p>
        </div>
        <div className="dashboard-card hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-lg font-semibold">Total Packed</h2>
          <p className="text-3xl font-bold">878</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
