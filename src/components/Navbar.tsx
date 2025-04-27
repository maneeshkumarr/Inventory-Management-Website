import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-blue-600 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">IMS</div>
        <nav className="space-x-6">
          <Link href="/" className="text-white hover:text-yellow-400">Home</Link>
          <Link href="/add-product" className="text-white hover:text-yellow-400">Add Product</Link>
          <Link href="/product-list" className="text-white hover:text-yellow-400">Product List</Link>
          <Link href="/dashboard" className="text-white hover:text-yellow-400">Dashboard</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
