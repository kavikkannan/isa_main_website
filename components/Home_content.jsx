'use client';
import React from 'react';
import '@/public/css/LandingPage.css';
import Lottie from 'lottie-react';

import Link from 'next/link';

const HomeContent = () => {
  return (
    <div className=" w-full bg-transparent text-white min-h-screen  ">
       <div>
       <Link href='/Domain_Selection'>
            DOMAIN SELECTION
       </Link>
       </div>
       
    </div>
  );
};

export default HomeContent;
