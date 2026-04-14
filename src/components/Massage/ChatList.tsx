import React from 'react';
import { Search, Edit, MoreHorizontal } from 'lucide-react';

const chats = [
  {
    id: 1,
    name: 'Elena Vanya',
    role: 'Product Lead',
    lastMessage: 'Hey Alex! Have you had a chance to...',
    time: '10:24 AM',
    unread: 0,
    online: true,
    avatar: 'https://i.pravatar.cc/150?u=elena'
  },
  {
    id: 2,
    name: 'Marcus Holloway',
    role: 'Senior Designer',
    lastMessage: 'The assets are ready for review.',
    time: 'Yesterday',
    unread: 3,
    online: false,
    avatar: 'https://i.pravatar.cc/150?u=marcus'
  },
  // Add more mock data here
];

const ChatList = () => {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
          <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
            <Edit className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
          <input
            type="text"
            placeholder="Search messages..."
            className="w-full bg-gray-50 border-none rounded-xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-100 outline-none transition-all"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex px-6 border-b border-gray-50">
        <button className="pb-3 text-sm font-semibold text-blue-600 border-b-2 border-blue-600 px-2">
          All Chats
        </button>
        <button className="pb-3 text-sm font-medium text-gray-400 hover:text-gray-600 px-4">
          Groups
        </button>
        <button className="pb-3 text-sm font-medium text-gray-400 hover:text-gray-600 px-4">
          Unread
        </button>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`flex items-center gap-4 px-6 py-4 cursor-pointer transition-colors hover:bg-gray-50 ${
              chat.id === 1 ? 'bg-blue-50/50 border-r-2 border-blue-500' : ''
            }`}
          >
            {/* Avatar with Online Indicator */}
            <div className="relative flex-shrink-0">
              <img
                src={chat.avatar}
                alt={chat.name}
                className="w-12 h-12 rounded-full object-cover border border-gray-100"
              />
              {chat.online && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
              )}
            </div>

            {/* Chat Preview Info */}
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline mb-0.5">
                <h3 className="text-sm font-bold text-gray-900 truncate">
                  {chat.name}
                </h3>
                <span className="text-[11px] text-gray-400 font-medium">
                  {chat.time}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <p className="text-xs text-gray-500 truncate pr-2">
                  {chat.lastMessage}
                </p>
                {chat.unread > 0 && (
                  <span className="flex-shrink-0 bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    {chat.unread}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;