
import React from 'react';
import LandingPage from "@/components/Home";
import HomeContent from '@/components/Home_content';


export default function Home() {
    return (
        <div>
            <div className=''> 
            <LandingPage/>
            </div>
            <div className='absolute z-10'>
                <HomeContent/>
            </div>

        </div>
    )
}
