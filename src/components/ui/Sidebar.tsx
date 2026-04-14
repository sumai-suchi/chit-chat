"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutGrid, 
  MessageSquare, 
  Users, 
  LineChart, 
  Plus, 
  Settings, 
  HelpCircle 
} from 'lucide-react';

const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', icon: LayoutGrid, href: '/Dashboard' },
    { name: 'Messages', icon: MessageSquare, href: '/messages' },
    { name: 'Groups', icon: Users, href: '/groups' },
    { name: 'Status', icon: LineChart, href: '/status' },
  ];

  return (
    <aside className="w-64 h-screen bg-[#f4f7fe] flex flex-col px-4 py-6 border-r border-gray-100">
      
      {/* User Profile Section */}
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="relative">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-200 bg-white">
            <div className="bg-gray-200 w-full h-full flex items-center justify-center text-xl">
                👤
            </div>
          </div>
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-teal-500 border-2 border-[#f4f7fe] rounded-full"></span>
        </div>
        <div>
          <p className="text-sm font-bold text-[#1e293b]">Alex Rivers</p>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
            <span className="text-[10px] text-gray-500 font-medium">Online</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive 
                  ? 'bg-[#a5f3f0] text-[#1e293b] font-semibold shadow-sm' 
                  : 'text-gray-500 hover:bg-gray-200/50 hover:text-gray-700'
              }`}
            >
              <item.icon size={20} />
              <span className="text-sm">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer Section */}
      <div className="mt-auto space-y-4">
        {/* New Message Button */}
        <Link 
          href="/messages/new"
          className="w-full bg-[#004a93] hover:bg-[#003d7a] text-white flex items-center justify-center gap-2 py-3 rounded-full shadow-lg transition-transform active:scale-95"
        >
          <Plus size={18} strokeWidth={3} />
          <span className="text-sm font-bold">New Message</span>
        </Link>

        {/* Bottom Links */}
        <div className="pt-4 space-y-1 border-t border-gray-200/50">
          <Link 
            href="/settings"
            className={`w-full flex items-center gap-4 px-4 py-2 rounded-lg transition-colors ${
              pathname === '/settings' ? 'text-[#1e293b] font-bold' : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            <Settings size={20} />
            <span className="text-sm font-medium">Settings</span>
          </Link>
          <Link 
            href="/help"
            className={`w-full flex items-center gap-4 px-4 py-2 rounded-lg transition-colors ${
              pathname === '/help' ? 'text-[#1e293b] font-bold' : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            <HelpCircle size={20} />
            <span className="text-sm font-medium">Help</span>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;