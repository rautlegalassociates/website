import React from 'react';
import { WhatsAppButton } from './WhatsAppButton';
import { Chatbot } from './Chatbot';

export const FloatingActionHub: React.FC = () => {
  return (
    <div
      aria-label="Quick Communication Hub"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5 sm:gap-3"
    >
      {/* WhatsApp Button */}
      <WhatsAppButton variant="floating" />

      {/* AI Chatbot Launcher */}
      <Chatbot />
    </div>
  );
};
