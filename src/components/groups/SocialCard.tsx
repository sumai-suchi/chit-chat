"use client"

// 1. Define the interface for the component props
interface SocialCardProps {
  title: string;
  members: string | number; // Handles both formatted strings like "2.4k" or raw numbers
  image: string;
}

const SocialCard: React.FC<SocialCardProps> = ({ title, members, image }) => {
  return (
    <div className="group cursor-pointer">
      {/* Image Container with Zoom Effect */}
      <div className="relative h-48 rounded-[32px] overflow-hidden mb-4 bg-gray-100">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
      </div>

      {/* Content Section */}
      <div className="flex justify-between items-end px-2">
        <div className="space-y-0.5">
          <h4 className="text-xl font-bold text-gray-900 leading-tight">
            {title}
          </h4>
          <p className="text-xs text-gray-400 font-medium">
            Casual chats and daily updates
          </p>
        </div>

        {/* Member Badge */}
        <span className="text-[11px] font-bold text-blue-600 uppercase bg-blue-50 px-2.5 py-1 rounded-lg tracking-wide shrink-0">
          {members} Members
        </span>
      </div>
    </div>
  );
};

export default SocialCard;