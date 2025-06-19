import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-[#031B34] py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="text-green-400 text-3xl font-extrabold tracking-wide">StockWise</div>

        <div className="text-white hidden sm:block font-medium">
          Hello, <span className="text-blue-400">Admin</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
