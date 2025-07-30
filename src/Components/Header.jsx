import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 shadow-md">
      <h1 className="text-2xl font-bold text-blue-400">Logo</h1>
      <input
        type="text"
        placeholder="Search..."
        className="rounded px-2 py-1 w-64"
      />
      <nav className="flex gap-4 items-center">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">Explore</a>
        <div className="w-8 h-8 bg-purple-600 rounded-full" />
      </nav>
    </header>
  );
};

export default Header;
