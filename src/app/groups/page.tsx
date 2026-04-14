import React from 'react';
import { Plus } from 'lucide-react'; // Added for the Hub card
import GroupHero from '@/components/groups/GroupHero';
import SecurityAlertCard from '@/components/groups/SecurityAlertCard';
import { ProjectCard } from '@/components/groups/ProjectCard';
import SocialCard from '@/components/groups/SocialCard';
import DiscoverSection from '@/components/groups/DiscoverSection';

const GroupsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-12 bg-[#fcfcfd]">
      
      {/* 1. Header Section */}
      <GroupHero />

      {/* 2. Security Alerts Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-1 h-6 bg-orange-700 rounded-full" />
          <h2 className="text-xl font-bold text-gray-900">Security Alerts</h2>
          <span className="bg-orange-100 text-orange-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">
            Priority
          </span>
        </div>
        <SecurityAlertCard />
      </section>

      {/* 3. Project Teams Section */}
      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-1 h-6 bg-blue-600 rounded-full" />
            <h2 className="text-xl font-bold text-gray-900">Project Teams</h2>
          </div>
          <button className="text-blue-600 text-sm font-semibold hover:underline transition-all">
            View All
          </button>
        </div>
        
        {/* Responsive Grid for Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard 
            title="Alpha Architecture" 
            badge="Active Sprint"
            desc="Redesigning the core protocol for decentralized messaging and storage layers."
            members={24} 
            online={8} 
            variant="large"
          />
          <ProjectCard 
            title="UI/UX Guild" 
            members={12} 
            online={3} 
          />
          <ProjectCard 
            title="Bot Integration" 
            members={42} 
            online={15} 
          />

          {/* 3.4 Create Hub Button Card (Inline TSX) */}
          <div className="bg-[#004791] rounded-[32px] p-8 flex flex-col justify-between text-white shadow-lg shadow-blue-900/20">
            <div className="space-y-4">
               <div className="bg-white/20 w-fit p-2 rounded-xl">
                 <Plus size={24} className="text-white" />
               </div>
               <h3 className="text-xl font-bold">Start a new project hub</h3>
               <p className="text-blue-100/80 text-sm leading-relaxed">
                 Scale your team with encrypted channels and file sharing.
               </p>
            </div>
            <button className="w-full bg-white text-[#004791] py-3 rounded-xl font-bold text-sm mt-6 hover:bg-blue-50 transition-colors">
              Create Now
            </button>
          </div>
        </div>
      </section>

      {/* 4. Social Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-1 h-6 bg-teal-600 rounded-full" />
          <h2 className="text-xl font-bold text-gray-900">Social</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <SocialCard 
            title="General Lounge" 
            members="2.4k" 
            image="/lounge.jpg" 
          />
          <SocialCard 
            title="Weekly Meetups" 
            members="538" 
            image="/meetup.jpg" 
          />
          <SocialCard 
            title="The Library" 
            members="1.2k" 
            image="/library.jpg" 
          />
        </div>
      </section>

      {/* 5. Discover Section */}
      <DiscoverSection />
      
    </div>
  );
};

export default GroupsPage;