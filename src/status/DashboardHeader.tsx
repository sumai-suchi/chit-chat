import React from 'react';
import { Send } from 'lucide-react';

interface Props { name: string; activeTime: string; status: string; }

const DashboardHeader: React.FC<Props> = ({ name, activeTime, status }) => {
  return (
    <div className="bg-white p-4 rounded-[24px] border border-gray-100 flex flex-wrap items-center justify-between gap-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-12 h-12 bg-blue-100 rounded-2xl overflow-hidden">
             <img src="https://i.pravatar.cc/150?u=alex" alt="profile" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-teal-400 border-2 border-white rounded-full" />
        </div>
        <div>
          <h1 className="font-bold text-gray-900 text-lg">{name}</h1>
          <p className="text-[11px] text-gray-400 font-medium">● Active for {activeTime}</p>
        </div>
      </div>

      <div className="flex-1 max-w-2xl bg-gray-50 rounded-2xl p-2 flex items-center gap-3 border border-gray-100">
        <div className="p-2 text-teal-600"><Send size={18} /></div>
        <input 
          className="bg-transparent flex-1 text-sm outline-none font-medium text-gray-700" 
          defaultValue={status} 
        />
        <button className="bg-blue-600 text-white px-5 py-2 rounded-xl text-xs font-bold">Update</button>
      </div>

      <div className="bg-teal-50 text-teal-600 px-4 py-2 rounded-xl flex items-center gap-2 text-xs font-bold border border-teal-100">
        <div className="w-2 h-2 bg-teal-500 rounded-full" /> Available
      </div>
    </div>
  );
};

export default DashboardHeader;