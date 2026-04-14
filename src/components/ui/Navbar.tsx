// components/ui/Navbar.tsx

import React from 'react';
import { Search, Bell, Settings } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between w-full px-8 py-3 bg-[#f9fafc] border-b border-gray-200">
      <div className="flex items-center">
        <span className="text-xl font-semibold text-[#1e293b] tracking-tight">
          Sanctuary Chat
        </span>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative flex items-center">
          <Search className="absolute left-3 text-gray-500" size={16} />
          {/* FIXED CLASSNAME BELOW: No backticks or line breaks */}
          <input
            type="text"
            placeholder="Search conversations"
            className="bg-[#eceef3] text-sm py-2 pl-10 pr-4 rounded-full w-64 outline-none focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-gray-500 text-gray-700"
          />
        </div>

        <div className="flex items-center gap-4 text-gray-500">
          <button className="hover:text-gray-800 transition-colors"><Bell size={20} /></button>
          <button className="hover:text-gray-800 transition-colors"><Settings size={20} /></button>
        </div>

        <div className="flex items-center justify-center h-9 w-9 rounded-full bg-[#1a1c1e] cursor-pointer hover:opacity-90 transition-opacity">
          <span className="text-[10px] font-bold text-white uppercase">SC</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;