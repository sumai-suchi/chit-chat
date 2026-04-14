import React from 'react';
import ChatList from '@/components/Massage/ChatList';
import ChatWindow from '@/components/Massage/ChatWindow';
import ChatDetailSidebar from '@/components/Massage/ChatDetailSidebar';

export default function MessagesPage() {
  return (
    <div className="flex h-[calc(100vh-80px)] overflow-hidden -m-6"> 
      {/* -m-6 offsets the main padding from your layout to make it full-bleed */}
      
      {/* Left: Chat List (Optional, usually 320px-350px) */}
      <div className="w-80 border-r border-gray-100 bg-white">
        <ChatList />
      </div>

      {/* Center: Main Chat */}
      <div className="flex-1 flex flex-col bg-[#f9fafc]">
        <ChatWindow />
      </div>

      {/* Right: Info Sidebar (350px) */}
      <div className="w-[350px] border-l border-gray-100 bg-white overflow-y-auto">
        <ChatDetailSidebar />
      </div>
    </div>
  );
}