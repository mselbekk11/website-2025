'use client';

import { TextScramble } from '@/components/motion-primitives/text-scramble';
import { useEffect, useState } from 'react';

export default function ScrambleText({ text }: { text: string }) {
  const [trigger, setTrigger] = useState(true);

  // Using a UseEffect so the text scrambles every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTrigger(false);
      setTimeout(() => setTrigger(true), 100);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <TextScramble trigger={trigger} className=''>
      {text}
    </TextScramble>
  );
}
