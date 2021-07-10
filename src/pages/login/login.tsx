// pages/index.tsx

import React, { useState } from 'react';
import Link from "next/Link";

export default function Home() {

  return (
    <div className="container">
      <div>
        <span>
          로그인 페이지
        </span>
      </div>
      <div>
        <Link href="/">
          <span>홈페이지 이동</span>
        </Link>
      </div>
    </div>
  );
}
