import React from 'react'
import Image from 'next/image';
import Link from 'next/link'; 
import { Button } from '@/components/ui/button';

function Landing() {
    return (
        <div className='bg-green-700 p-10 px-28 lg:px-36'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 pt-20'>
                <div>
                    <h2 className='font-extrabold text-5xl text-white'>Help grow a startup into Fortune500.</h2>
                    <p className='text-gray-200 mt-5'>FundSathi is a crowdfunding platform made for startups. It helps new businesses raise funds by creating campaigns, sharing their ideas, and connecting with backers. FundSathi supports Indian startups with easy registration, secure uploads, and a user-friendly system for both startups and backers.
                    </p>
                    <div className='flex gap-5 mt-8'>
                        <Button className='bg-amber-400'> Explore</Button>

                        <Link href={'/discover'}>
                            <Button className='bg-blue-500'> Fund </Button>
                        </Link>

                    </div>
                </div>

                <div className='flex items-start justify-center'>
                    <Image src="/landing-photo.png" width={600} height={600} alt="Landing photo" />
                </div>
            </div>
        </div>
    )
}

export default Landing