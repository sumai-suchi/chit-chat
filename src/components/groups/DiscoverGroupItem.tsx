"use client"
import { Leaf, Cpu, Database, LucideIcon } from 'lucide-react';

// 1. Define the Interface for the Component Props
interface DiscoverGroupItemProps {
  name: string;
  desc: string;
  followers: string;
  color: string;
  iconColor: string;
}

// 2. Type the icons mapping object
// We use Record<string, LucideIcon> to tell TS that keys are strings and values are components
const icons: Record<string, LucideIcon> = {
  "Sustainable Living": Leaf,
  "Crypto Analysis": Database,
  "AI Research Lab": Cpu,
};

const DiscoverGroupItem: React.FC<DiscoverGroupItemProps> = ({
  name,
  desc,
  followers,
  color,
  iconColor,
}) => {
  // 3. Select the icon based on name, fallback to Leaf if not found
  const Icon = icons[name] || Leaf;

  return (
    <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-2xl transition-colors group">
      <div className="flex items-center gap-4">
        {/* Icon Container */}
        <div className={`${color} ${iconColor} p-3 rounded-xl`}>
          <Icon size={24} />
        </div>

        {/* Text Content */}
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{desc}</p>
        </div>
      </div>

      <div className="flex items-center gap-8">
        {/* Statistics - Hidden on mobile, visible on small screens and up */}
        <div className="hidden sm:block text-right">
          <p className="text-sm font-bold text-gray-900">{followers}</p>
          <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">
            Followers
          </p>
        </div>

        {/* Action Button */}
        <button 
          className="bg-[#004791] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-blue-800 transition-all active:scale-95"
          onClick={() => console.log(`Joining ${name}...`)}
        >
          Join
        </button>
      </div>
    </div>
  );
};

export default DiscoverGroupItem;