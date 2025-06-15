
import React from 'react';
import { PhoneCall } from 'lucide-react';

const CallButton: React.FC = () => (
  <a
    href="tel:+971503119537"
    className="fixed z-[99] bottom-6 right-6 bg-deco-gold text-deco-plum rounded-full shadow-lg p-4 flex items-center justify-center hover:bg-deco-plum hover:text-white transition-colors"
    aria-label="Call DecoPaints"
    style={{
      boxShadow: '0 4px 20px 0 rgba(96, 67, 36, 0.16)',
    }}
  >
    <PhoneCall className="w-6 h-6" />
  </a>
);

export default CallButton;
