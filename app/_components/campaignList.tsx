'use client'
import React, { useEffect, useState } from 'react'
import Campaigns from '@/app/mockData/campaigns'
import { Campaign } from '@/app/mockData/campaigns'
import CampaignCard from './campaignCard'
import { Button } from '@/components/ui/button'

const CampaignList: React.FC = () => {
  const [campaignList, setCampaignList] = useState<Campaign[]>([])

  useEffect(() => {
    setCampaignList(Campaigns)
  }, [])

  return (
    <div>
      <h2 className='font-bold text-4xl flex justify-between items-center'>
        Startups
        <span>
          <Button className='bg-amber-500'>View All</Button>
        </span>
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-5'>
        {campaignList.map((campaign) => (
          <CampaignCard campaign={campaign} key={campaign.campaign_id} />
        ))}
      </div>
    </div>
  )
}

export default CampaignList
