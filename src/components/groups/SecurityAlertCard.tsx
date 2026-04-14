"use client"
import { ShieldAlert, Users } from 'lucide-react';

export default function SecurityAlertCard() {
  return (
    <div className="bg-orange-50/50 border border-orange-100 rounded-[32px] p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden">
      <div className="flex gap-6 items-start">
        <div className="bg-orange-700 p-4 rounded-2xl text-white">
          <ShieldAlert size={32} />
        </div>
        <div className="space-y-1">
          <h3 className="text-2xl font-bold text-gray-900">Global System Integrity</h3>
          <p className="text-gray-600 max-w-sm">Real-time monitoring and threat assessments for all sanctuary nodes.</p>
          <div className="flex items-center gap-4 mt-4 text-sm font-bold">
            <span className="text-red-600">● 4 Active Threats</span>
            <span className="text-gray-400">128 Members</span>
          </div>
        </div>
      </div>
      
      {/* Stacked Avatar Preview */}
      <div className="flex -space-x-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
            <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="member" />
          </div>
        ))}
        <div className="w-12 h-12 rounded-full border-4 border-white bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-600">
          +10
        </div>
      </div>
    </div>
  );
}