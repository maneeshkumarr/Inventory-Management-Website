'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const adminEmail = 'admin@example.com';
    const adminPassword = 'admin123';

    if (email === adminEmail && password === adminPassword) {
      localStorage.setItem('isAuthenticated', 'true');
      router.push('/dashboard');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="min-h-screen bg-[#031B34] flex items-center justify-center p-4">
      <div className="bg-[#092c4c] w-full max-w-md p-8 rounded-2xl shadow-xl animate-fade-in">
        <h2 className="text-3xl font-extrabold text-white text-center mb-6">🔐 Admin Login</h2>

        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-center text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
             
              className="w-full px-4 py-2 rounded-md bg-[#021324] border border-blue-500 text-white focus:ring-2 focus:ring-blue-400 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Password</label>
            <input
              type="password"
              
              className="w-full px-4 py-2 rounded-md bg-[#021324] border border-blue-500 text-white focus:ring-2 focus:ring-blue-400 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-green-400 text-black font-bold rounded-md hover:bg-green-300 transition"
          >
            Login
          </button>
        </form>

        
      </div>
    </div>
  );
};

export default LoginPage;
