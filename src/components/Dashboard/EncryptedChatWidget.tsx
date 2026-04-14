// components/dashboard/EncryptedChatWidget.tsx
import React from 'react';
import { ShieldCheck } from 'lucide-react';

const EncryptedChatWidget = () => {
  return (
    <div className="bg-[#003d7a] p-8 rounded-[2rem] text-white flex flex-col gap-5 border border-[#002e5c] shadow-xl">
      <div className="bg-white/10 self-start p-2.5 rounded-xl">
        <ShieldCheck size={28} className="text-white" />
      </div>
      <div className="space-y-1">
        <h3 className="text-2xl font-extrabold tracking-tight">Encrypted Chat</h3>
        <p className="text-white/80 text-sm leading-relaxed max-w-xs">
          Your conversations are protected by end-to-end encryption.
        </p>
      </div>
    </div>
  );
};

export default EncryptedChatWidget;