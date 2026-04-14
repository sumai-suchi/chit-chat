// components/dashboard/AnnouncementsWidget.tsx
import React from 'react';
import { Pin } from 'lucide-react';

const AnnouncementsWidget = () => {
  return (
    <div className="bg-[#a5f3f0]/30 p-8 rounded-[2rem] border border-[#a5f3f0]/50 space-y-5 flex-1">
      <div className="flex items-center gap-3 text-[#1e293b]">
        <Pin size={18} />
        <h3 className="text-base font-bold">Pinned Announcements</h3>
      </div>
      
      {/* Announcement Content */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 space-y-3">
        <div className="bg-[#ffe4e6] text-[#e11d48] text-xs font-bold px-3 py-1 rounded-full self-start inline-block uppercase tracking-wider">
          System
        </div>
        <div className="space-y-1.5">
            <p className="font-semibold text-base text-[#1a1c1e]">Weekly Server Maintenance</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Scheduled for Saturday at 02:00 UTC. Expect 15 mins downtime.
            </p>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsWidget;