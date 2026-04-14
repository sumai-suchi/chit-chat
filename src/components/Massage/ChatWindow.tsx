// components/messages/ChatWindow.tsx
import React from 'react';
import { Phone, Video, Info, Plus, Image as ImageIcon, Smile, Send } from 'lucide-react';
import { UserAvatar } from '@/components/ui/UserAvatar';

const ChatWindow = () => {
  return (
    <>
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100 bg-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <UserAvatar fallback="Elena Vanya" isOnline={true} className="h-10 w-10" />
          <div>
            <h3 className="font-bold text-[#1a1c1e]">Elena Vanya</h3>
            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Active now • Product Lead</p>
          </div>
        </div>
        <div className="flex items-center gap-5 text-gray-500">
          <button className="hover:text-blue-600"><Phone size={20} /></button>
          <button className="hover:text-blue-600"><Video size={20} /></button>
          <button className="hover:text-blue-600"><Info size={20} /></button>
        </div>
      </div>

      {/* Message Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div className="flex justify-center">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-100 px-3 py-1 rounded-full">Yesterday</span>
        </div>

        {/* Elena's Message */}
        <div className="flex items-end gap-3 max-w-[80%]">
          <UserAvatar fallback="EV" className="h-8 w-8 mb-4" />
          <div className="space-y-1">
            <div className="bg-[#a5f3f0] text-[#1e293b] p-4 rounded-2xl rounded-bl-none text-sm font-medium leading-relaxed">
              Hey Alex! Have you had a chance to review the new design system anchors for the Sanctuary project?
            </div>
            <span className="text-[10px] text-gray-400 font-bold ml-1">10:24 AM</span>
          </div>
        </div>

        {/* Your Message */}
        <div className="flex flex-col items-end space-y-1 ml-auto max-w-[80%]">
          <div className="bg-[#004a93] text-white p-4 rounded-2xl rounded-br-none text-sm leading-relaxed">
            Just went through them. I love the "No-Line" rule. It makes the interface feel much more expansive.
          </div>
          <div className="flex items-center gap-1 mr-1">
            <span className="text-[10px] text-gray-400 font-bold">10:26 AM</span>
            <span className="text-blue-500 text-[10px]">✓✓</span>
          </div>
        </div>
      </div>

      {/* Input Bar */}
      <div className="p-6 bg-transparent">
        <div className="bg-[#e9ecf3] rounded-2xl p-2 flex items-center gap-2">
          <div className="flex items-center gap-1 px-2">
            <button className="p-2 text-gray-500 hover:text-gray-800"><Plus size={20} /></button>
            <button className="p-2 text-gray-500 hover:text-gray-800"><ImageIcon size={20} /></button>
            <button className="p-2 text-gray-500 hover:text-gray-800"><Smile size={20} /></button>
          </div>
          <input 
            type="text" 
            placeholder="Type a message..." 
            className="flex-1 bg-transparent border-none outline-none text-sm text-gray-700 py-2"
          />
          <button className="bg-[#004a93] text-white p-3 rounded-xl hover:scale-105 transition-transform">
            <Send size={18} fill="currentColor" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatWindow;