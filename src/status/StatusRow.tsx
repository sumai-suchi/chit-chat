import React from 'react';

interface Props { name: string; activity: string; status: string; isActive?: boolean; }

const StatusRow: React.FC<Props> = ({ name, activity, status, isActive }) => {
  return (
    <div className={`flex items-center justify-between p-4 bg-white rounded-2xl border transition-all ${isActive ? 'border-l-4 border-l-blue-600 border-gray-100' : 'border-gray-50'}`}>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl overflow-hidden">
          <img src={`https://i.pravatar.cc/100?u=${name}`} alt={name} />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h4 className="font-bold text-gray-900 text-sm">{name}</h4>
            <span className="text-[9px] bg-teal-50 text-teal-600 px-1.5 py-0.5 rounded font-bold uppercase">{status}</span>
          </div>
          <p className="text-xs text-gray-500 mt-0.5 font-medium">"{activity}"</p>
        </div>
      </div>
    </div>
  );
};

export default StatusRow;