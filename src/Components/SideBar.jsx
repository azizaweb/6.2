import React from 'react';

const filters = ['Status', 'Price', 'Collections', 'Chains', 'Categories'];

const Sidebar = () => {
  return (
    <aside className="w-64 p-4 text-left">
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      {filters.map((f) => (
        <details key={f} className="mb-2">
          <summary className="cursor-pointer">{f}</summary>
          <div className="ml-2 text-sm text-gray-300">Option here</div>
        </details>
      ))}
    </aside>
  );
};

export default Sidebar;
