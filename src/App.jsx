import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { FaHeart } from 'react-icons/fa';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products?limit=12')
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3b1f36] to-[#1f2a58] text-white">
      <header className="flex items-center justify-between p-4 shadow-md">
        <h1 className="text-2xl font-bold text-blue-400">Logo</h1>
        <input
          type="text"
          placeholder="Search..."
          className="rounded px-2 py-1 w-64"
        />
        <nav className="flex gap-4 items-center">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Explore
          </a>
          <div className="w-8 h-8 bg-purple-600 rounded-full" />
        </nav>
      </header>

      <div className="flex">
        <aside className="w-64 p-4 text-left">
          <h2 className="text-xl font-bold mb-4">Filters</h2>
          {['Status', 'Price', 'Collections', 'Chains', 'Categories'].map((f) => (
            <details key={f} className="mb-2">
              <summary className="cursor-pointer">{f}</summary>
              <div className="ml-2 text-sm text-gray-300">Option here</div>
            </details>
          ))}
        </aside>

        <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {products.map((product) => (
            <div key={product.id} className="bg-[#1f2340] p-4 rounded-xl shadow-md">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-40 w-full object-cover rounded"
              />
              <div className="mt-2">
                <p className="text-xs text-gray-400">Category</p>
                <h3 className="font-bold text-white">{product.title}</h3>
                <p className="text-sm text-gray-400">Rating: {product.rating}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-pink-500 text-sm font-bold">
                    ${product.price}
                  </span>
                  <FaHeart className="text-pink-500" />
                </div>
                <button className="mt-3 w-full py-1 rounded bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90">
                  Buy now
                </button>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default App;