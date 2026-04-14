import React from 'react';
import { Pin } from 'lucide-react';

interface Props { name: string; status: string; note: string; isGroup?: boolean; isPinned?: boolean; }

const PinnedContactCard: React.FC<Props> = ({ name, status, note, isGroup }) => {
  return (
    <div className="bg-white p-5 rounded-[28px] border border-gray-100 shadow-sm hover:shadow-md transition-all relative group">
      <Pin size={16} className="absolute top-5 right-5 text-gray-300 group-hover:text-blue-500 rotate-45" />
      
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-14 h-14 rounded-2xl overflow-hidden ${isGroup ? 'bg-orange-100 text-orange-600 flex items-center justify-center font-bold' : ''}`}>
          {isGroup ? 'DT' : <img src={`https://i.pravatar.cc/150?u=${name}`} alt={name} />}
        </div>
      </div>

      <div className="space-y-1">
        <h3 className="font-bold text-gray-900">{name}</h3>
        <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-red-500">
          <div className="w-1.5 h-1.5 bg-red-500 rounded-full" /> {status}
        </div>
      </div>

      <div className="mt-4 bg-gray-50 p-3 rounded-xl">
        <p className="text-xs text-gray-500 italic">"{note}"</p>
      </div>
    </div>
  );
};

export default PinnedContactCard;