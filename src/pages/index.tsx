// pages/index.tsx

import React, { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [text, setText] = useState<string>('테스트');

  setTimeout(() => setText('설정!'),
    1000);

  return (
    <div className="container">
      <div>
        <span>
          {text}
          {' '}
          완료
        </span>
      </div>
    </div>
  );
}
