// components/dashboard/RecentConversations.tsx
import React from 'react';
import { UserAvatar } from '@/components/ui/UserAvatar'; // Use the wrapper, not the raw Shadcn UI

interface Conversation {
  id: number;
  name: string;
  lastMessage: string;
  type: 'individual' | 'group';
  time: string;
  status: 'online' | 'offline';
  unreadCount?: number;
}

const recentChats: Conversation[] = [
  { id: 1, name: 'Sarah Jenkins', lastMessage: 'Hey! Did you see the latest designs for the project?', time: '12:45 PM', status: 'online', unreadCount: 3, type: 'individual' },
  { id: 2, name: 'Design System Guild', lastMessage: 'Mark: The new spacing tokens are ready for review.', time: 'Yesterday', status: 'offline', type: 'group' },
  { id: 3, name: 'David Chen', lastMessage: 'Let\'s hop on a call tomorrow at 10 AM.', time: 'Oct 24', status: 'offline', type: 'individual' },
];

const RecentConversations = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#1a1c1e]">Recent Conversations</h2>
        <button className="text-sm font-semibold text-[#004a93] hover:underline">View All</button>
      </div>

      <div className="space-y-3">
        {recentChats.map((chat) => (
          <div key={chat.id} className="bg-white p-4 rounded-2xl flex items-center justify-between hover:bg-gray-50/50 cursor-pointer transition-colors border border-gray-50">
            <div className="flex items-center gap-4 flex-1 min-w-0">
              
              {/* FIXED: Using UserAvatar wrapper which accepts 'name' and 'status' */}
              <UserAvatar 
                fallback={chat.name} 
                isOnline={chat.status === 'online'} 
                className="h-12 w-12" 
              />
              
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-[#1a1c1e] text-base">{chat.name}</p>
                <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-1.5 ml-4">
              <span className="text-xs font-medium text-gray-500 whitespace-nowrap">{chat.time}</span>
              {chat.unreadCount && (
                <div className="h-5 w-5 bg-[#004a93] rounded-full flex items-center justify-center">
                  <span className="text-[11px] font-bold text-white">{chat.unreadCount}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentConversations;