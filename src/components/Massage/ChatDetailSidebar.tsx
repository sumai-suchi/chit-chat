// components/messages/ChatDetailSidebar.tsx
import React from 'react';
import { UserAvatar } from '@/components/ui/UserAvatar';
import { User, VolumeX, Search, Download, FileText, Ban, AlertTriangle } from 'lucide-react';

const ChatDetailSidebar = () => {
  return (
    <div className="p-8 flex flex-col items-center">
      {/* Profile Info */}
      <UserAvatar fallback="EV" className="h-24 w-24 rounded-3xl" />
      <h2 className="mt-4 text-xl font-bold text-[#1a1c1e]">Elena Vanya</h2>
      <p className="text-sm text-gray-500 font-medium">Product Lead @ Sanctuary</p>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-8 w-full justify-center">
        <div className="flex flex-col items-center gap-2 group cursor-pointer">
          <div className="bg-gray-100 p-3 rounded-full group-hover:bg-gray-200 transition-colors">
            <User size={18} className="text-gray-600" />
          </div>
          <span className="text-[10px] font-bold text-gray-400 uppercase">Profile</span>
        </div>
        {/* Repeat for Mute and Search... */}
      </div>

      {/* Shared Media */}
      <div className="w-full mt-10">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Shared Media</h4>
          <button className="text-[11px] font-bold text-[#004a93] hover:underline">See all</button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-square bg-slate-900 rounded-xl overflow-hidden cursor-pointer hover:opacity-80 transition-opacity" />
          ))}
        </div>
      </div>

      {/* Documents Section */}
      <div className="w-full mt-10">
         <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Documents</h4>
         <div className="space-y-3">
            {[
              { name: 'brand_guidelines_v2.pdf', size: '4.2 MB', date: 'Oct 21' },
              { name: 'project_specs.docx', size: '1.3 MB', date: 'Oct 18' }
            ].map((doc) => (
              <div key={doc.name} className="flex items-center gap-3 bg-white p-3 border border-gray-100 rounded-xl hover:shadow-sm transition-all cursor-pointer">
                <div className="p-2 bg-red-50 text-red-500 rounded-lg"><FileText size={18} /></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-[#1a1c1e] truncate">{doc.name}</p>
                  <p className="text-[10px] text-gray-400 font-bold">{doc.size} • {doc.date}</p>
                </div>
                <Download size={16} className="text-gray-400" />
              </div>
            ))}
         </div>
      </div>

      {/* Safety Actions */}
      <div className="w-full mt-12 space-y-4 pt-4 border-t border-gray-100">
        <button className="flex items-center gap-3 text-red-600 text-sm font-bold hover:bg-red-50 w-full p-2 rounded-lg transition-colors">
          <Ban size={18} /> Block Contact
        </button>
        <button className="flex items-center gap-3 text-red-600 text-sm font-bold hover:bg-red-50 w-full p-2 rounded-lg transition-colors">
          <AlertTriangle size={18} /> Report Elena
        </button>
      </div>
    </div>
  );
};

export default ChatDetailSidebar;