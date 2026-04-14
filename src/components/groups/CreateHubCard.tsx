import React from 'react';
import { Plus } from 'lucide-react';

const CreateHubCard: React.FC = () => {
  return (
    <div className="bg-[#004791] rounded-[32px] p-8 flex flex-col justify-between text-white shadow-lg shadow-blue-900/20 group cursor-pointer hover:bg-[#003d7a] transition-all duration-300">
      <div className="space-y-6">
        {/* Icon Container with Glassmorphism effect */}
        <div className="bg-white/10 w-12 h-12 flex items-center justify-center rounded-2xl group-hover:bg-white/20 transition-colors">
          <Plus size={28} className="text-white" />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-bold leading-tight">
            Start a new project hub
          </h3>
          <p className="text-blue-100/70 text-sm leading-relaxed max-w-[200px]">
            Scale your team with encrypted channels and file sharing.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <button 
          className="w-full bg-white text-[#004791] py-3.5 rounded-2xl font-bold text-sm hover:bg-blue-50 active:scale-[0.98] transition-all shadow-sm"
          onClick={() => console.log("Opening hub creation wizard...")}
        >
          Create Now
        </button>
      </div>
    </div>
  );
};

export default CreateHubCard;