// pages/index.tsx

import React, { useState, useEffect } from 'react';
import Link from "next/Link";

export default function Home() {
  const [text, setText] = useState<string>('테스트');

  useEffect(() => {
    setTimeout(() => setText('설정!'),
    1000);
  }, [])

  return (
    <div className="container">
      <div>
        <span>
          {text}
          {' '}
          완료
        </span>
      </div>
      <div>
        <Link href="/login/login">
          <span>로그인 페이지 이동 테스트</span>
        </Link>
      </div>
    </div>
  );
}
