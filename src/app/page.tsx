'use client';

import { useState } from 'react';
import Inspirations from '@/components/Inspirations';

export default function InspirationGenerator() {
  const [index, setIndex] = useState(0);
  const quote = Inspirations[index];
  const next = () => setIndex((index + 1) % Inspirations.length);

  return (
    <>
      <button onClick={next} className='items-center text-primary cursor-pointer'>
        {quote}
      </button>
    </>
  );
}