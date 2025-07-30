import React from 'react';
import { FaHeart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-[#1f2340] p-4 rounded-xl shadow-md">
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
          <span className="text-pink-500 text-sm font-bold">${product.price}</span>
          <FaHeart className="text-pink-500" />
        </div>
        <button className="mt-3 w-full py-1 rounded bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
