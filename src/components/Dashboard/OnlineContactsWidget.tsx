import React from 'react';
// Import the wrapper component, NOT the raw shadcn UI component
import { UserAvatar } from '@/components/ui/UserAvatar';

const onlineUsers = [
  { id: 1, name: 'Elena', status: 'online' },
  { id: 2, name: 'James', status: 'online' },
  { id: 3, name: 'Mila', status: 'online' },
];

const OnlineContactsWidget = () => {
  return (
    <div className="bg-[#f9fafc] p-7 rounded-[2rem] border border-gray-100">
      <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-6">
        Online Contacts
      </h3>
      
      <div className="flex items-center gap-2">
        {onlineUsers.map((user) => (
          <div key={user.id} className="text-center group flex-1">
            {/* FIXED: Using UserAvatar with valid props. 
               We pass 'name' into 'fallback' and 'status' into 'isOnline'
            */}
            <UserAvatar 
              fallback={user.name} 
              isOnline={user.status === 'online'} 
              className="h-[52px] w-[52px] mx-auto border-2 border-teal-100" 
            />
            <span className="text-xs font-medium text-[#1e293b] mt-3 block group-hover:text-[#004a93] transition-colors">
              {user.name}
            </span>
          </div>
        ))}

        {/* Others Badge (Static UI) */}
        <div className="text-center flex-1">
          <div className="h-[52px] w-[52px] bg-gray-100 rounded-full flex items-center justify-center border-2 border-dashed border-gray-300 mx-auto">
            <span className="text-sm font-bold text-gray-400">+12</span>
          </div>
          <span className="text-xs font-medium text-gray-400 mt-3 block">Others</span>
        </div>
      </div>
    </div>
  );
};

export default OnlineContactsWidget;