"use client"
import React, { useState } from 'react';
import DiscoverGroupItem from './DiscoverGroupItem';
import { mockGroups } from '@/data/mockGroups';

type TabType = 'Trending' | 'Newest' | 'Recommended';

const DiscoverSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('Trending');
  const tabs: TabType[] = ['Trending', 'Newest', 'Recommended'];

  return (
    <section className="bg-white border border-gray-100 rounded-[48px] p-6 md:p-10 shadow-sm">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold text-gray-900">Discover Groups</h2>
          <p className="text-gray-500 text-sm">Expand your network within the Sanctuary ecosystem.</p>
        </div>

        <div className="bg-gray-100/80 p-1 rounded-full flex self-start lg:self-center">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeTab === tab 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        {mockGroups.discover.map((group) => (
          <DiscoverGroupItem key={group.id} {...group} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <button className="text-blue-700 font-bold text-sm hover:underline transition-all">
          Browse all public categories
        </button>
      </div>
    </section>
  );
};

export default DiscoverSection;