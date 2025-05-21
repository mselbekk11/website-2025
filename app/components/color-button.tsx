'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

interface ColorButtonProps {
  color: string;
}

export default function ColorButton({ color }: ColorButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(color);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      className='relative w-6 h-6 rounded-full flex items-center justify-center'
      style={{ backgroundColor: color }}
      onClick={handleCopy}
      aria-label={`Copy color ${color} to clipboard`}
    >
      {copied && (
        <span className='absolute flex items-center justify-center w-full h-full bg-black/50 rounded-full'>
          <Check size={12} className='text-white' />
        </span>
      )}
    </button>
  );
}
