// components/dashboard/WelcomeCard.tsx
import React from 'react';

const WelcomeCard = () => {
  return (
    <div className="bg-[#f9fafc] p-8 rounded-[2rem] border border-gray-100 flex-1">
      <h1 className="text-3xl font-extrabold text-[#1a1c1e] tracking-tight mb-2">
        Welcome back, Alex.
      </h1>
      <p className="text-[#1e293b] text-base mb-6 max-w-lg leading-relaxed">
        You have 3 unread messages and 2 group invitations waiting for your review.
      </p>
      
      {/* Quick Stats Pills */}
      <div className="flex gap-3">
        <div className="bg-[#a5f3f0] text-[#1e293b] font-semibold text-sm px-5 py-2 rounded-full shadow-inner-teal">
          3 Unread
        </div>
        <div className="bg-[#e0e7ff] text-[#4f46e5] font-semibold text-sm px-5 py-2 rounded-full">
          Active Now: 12
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;