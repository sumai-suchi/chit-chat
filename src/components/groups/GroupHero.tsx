"use client"
import { Plus, Filter } from 'lucide-react';

export default function GroupHero() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-gray-900">Groups</h1>
        <p className="text-gray-500 max-w-md">
          Secure, encrypted collaboration hubs for your teams and social circles.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full font-semibold transition-all">
          <Filter size={18} /> Filter
        </button>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-[#004791] hover:bg-blue-800 text-white rounded-full font-semibold shadow-lg shadow-blue-900/20 transition-all">
          <Plus size={18} /> New Group
        </button>
      </div>
    </div>
  );
}