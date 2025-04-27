import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Inventory Management System</h1>
        <p className="mt-4 text-lg">Simplify your inventory tracking and management with ease.</p>
      </section>

      {/* Dashboard Overview */}
      <section className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold mb-8">Dashboard Overview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Total Products Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold">Total Products</h3>
            <p className="text-3xl font-bold">10,226</p>
          </div>

          {/* Total Quantity Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold">Total Quantity on Hand</h3>
            <p className="text-3xl font-bold">2,000,508</p>
          </div>

          {/* Total Products to Receive Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold">Total Products to Receive</h3>
            <p className="text-3xl font-bold">5,680</p>
          </div>

          {/* Total Packed Products Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold">Total Packed</h3>
            <p className="text-3xl font-bold">878</p>
          </div>
        </div>
      </section>

      {/* Featured Actions */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold">Add Product</h3>
              <p className="mt-2">Easily add new products to your inventory.</p>
              <a href="/add-product" className="mt-4 text-blue-600 hover:text-blue-800">Add Product</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold">Product List</h3>
              <p className="mt-2">View and manage all products in the inventory.</p>
              <a href="/product-list" className="mt-4 text-blue-600 hover:text-blue-800">View Products</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold">Dashboard</h3>
              <p className="mt-2">Get a comprehensive overview of your inventory.</p>
              <a href="/dashboard" className="mt-4 text-blue-600 hover:text-blue-800">Go to Dashboard</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
