import React from 'react';
import DashboardHeader from '@/status/DashboardHeader';
import PinnedContactCard from '@/status/PinnedContactCard';
import StatusRow from '@/status/StatusRow';

const DashboardPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10 space-y-10 bg-[#f8f9ff] min-h-screen">
      
      {/* 1. Profile & Status Header */}
      <DashboardHeader 
        name="Alex Rivers" 
        activeTime="2h 45m" 
        status="Building the Future of Chat" 
      />

      {/* 2. Pinned Contacts Section */}
      <section className="space-y-6">
        <div className="flex justify-between items-center px-2">
          <h2 className="text-xl font-bold text-gray-900">Pinned Contacts</h2>
          <button className="text-blue-600 text-sm font-semibold hover:underline">View All</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <PinnedContactCard name="Sarah Jenkins" status="Do Not Disturb" note="Deep focus: Engineering Sprint" />
          <PinnedContactCard name="Marcus Thorne" status="Available" note="In office - grab a coffee?" isPinned />
          <PinnedContactCard name="Lena Dubois" status="Away" note="Traveling to London" />
          <PinnedContactCard name="Design Team" status="4 Members Active" note="System audit in progress" isGroup />
        </div>
      </section>

      {/* 3. Status Feed Section */}
      <section className="space-y-6">
        <div className="flex justify-between items-center px-2">
          <h2 className="text-xl font-bold text-gray-900">What's Happening Now</h2>
          <div className="flex bg-gray-200/50 p-1 rounded-lg">
            <button className="px-4 py-1.5 bg-blue-900 text-white text-xs font-bold rounded-md shadow-sm">Recent</button>
            <button className="px-4 py-1.5 text-gray-500 text-xs font-bold">A-Z</button>
          </div>
        </div>
        <div className="space-y-3">
          <StatusRow name="Elena Rodriguez" status="Available" activity="Reviewing UX research for the mobile app" />
          <StatusRow name="Jordan Smith" status="Busy" activity="Working on Design System" isActive />
          <StatusRow name="David Chen" status="Offline" activity="Out for lunch with the crew" />
        </div>
      </section>

    </div>
  );
};

export default DashboardPage;