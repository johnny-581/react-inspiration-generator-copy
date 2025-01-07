'use client';

import { useState } from 'react';
import Inspirations from '@/components/Inspirations';
import { ReactNode } from 'react';

export default function InspirationGenerator() {
  const [index, setIndex] = useState(0);
  const quote = Inspirations[index];
  const next = () => setIndex((index + 1) % Inspirations.length);

  return (
    <>
      <h3 className="text-[#FFC09F]">{quote}</h3>
      <button onClick={next}>Inspire me again</button>
    </>
  );
}