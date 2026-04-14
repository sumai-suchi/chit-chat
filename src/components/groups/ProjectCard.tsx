"use client"
import { MoreHorizontal, Users } from 'lucide-react';

// 1. Define the interface for the component props
interface ProjectCardProps {
  title: string;
  desc?: string;       // Optional
  badge?: string;      // Optional
  members: number;
  online: number;
  variant?: 'small' | 'large'; // Optional with default
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  desc, 
  badge, 
  members, 
  online, 
  variant = 'small' 
}) => {
  return (
    <div 
      className={`bg-white border border-gray-100 rounded-[32px] p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow 
      ${variant === 'large' ? 'lg:col-span-2' : 'col-span-1'}`}
    >
      <div>
        <div className="flex justify-between items-start mb-4">
          {badge && (
            <span className="bg-teal-100 text-teal-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {badge}
            </span>
          )}
          <MoreHorizontal className="text-gray-400 cursor-pointer ml-auto hover:text-gray-600 transition-colors" />
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        {desc && (
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            {desc}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between mt-4">
        {/* Stats Section */}
        <div className="flex items-center gap-4 text-sm font-medium text-gray-600">
          <span className="flex items-center gap-1.5">
            <Users size={16} className="text-gray-400" /> 
            {members} Members
          </span>
          <span className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" /> 
            {online} Online
          </span>
        </div>

        {/* Action Button */}
        <button 
          className="text-blue-700 font-bold text-sm hover:underline active:opacity-70 transition-all"
          onClick={() => console.log(`Entering ${title} hub...`)}
        >
          Enter Hub
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;