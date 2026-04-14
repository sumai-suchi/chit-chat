import React from 'react';
import WelcomeCard from '@/components/Dashboard/WelcomeCard'
import RecentConversations from '@/components/Dashboard/RecentConversations';
import EncryptedChatWidget from '@/components/Dashboard/EncryptedChatWidget';
import OnlineContactsWidget from '@/components/Dashboard/OnlineContactsWidget';
import AnnouncementsWidget from '@/components/Dashboard/AnnouncementsWidget';

export default function DashboardPage() {
  return (
    <div className="flex-1 flex gap-8">
      
      {/* Main Content Column (Left) */}
      <div className="flex-1 flex flex-col gap-10">
        <WelcomeCard />
        <RecentConversations />
      </div>

      {/* Sidebar Widget Column (Right) */}
      <div className="w-[380px] flex flex-col gap-8">
        <EncryptedChatWidget />
        <OnlineContactsWidget />
        <AnnouncementsWidget />
      </div>

    </div>
  );
}