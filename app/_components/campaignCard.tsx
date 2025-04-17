'use client'

import React from 'react'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import type { Campaign } from '@/app/mockData/campaigns'

type Props = {
  campaign: Campaign
}

const CampaignCard: React.FC<Props> = ({ campaign }) => {
  if (campaign.status === 'rejected') return null 

  const progressPercentage = Math.round(
    (campaign.donation_progress / campaign.donation_goal) * 100
  )

  return (
    <div>
      <Card className="p-3">
        {/* Main campaign image */}
        <Image
          src={campaign.image || '/landing-photo.png'}
          alt={campaign.campaign_name || 'Campaign image'}
          width={400}
          height={300}
          className="object-cover rounded-md"
        />

        <div>
          <h3 className="text-xl font-semibold mt-2">{campaign.campaign_name}</h3>

          {/* Progress Bar + Goal */}
          <div className="mt-3">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium text-gray-600">Progress</span>
              <span className="text-sm font-semibold text-green-600">
                Goal: ${campaign.donation_goal.toLocaleString()}
              </span>
            </div>
            <Progress value={progressPercentage} className="h-3 rounded-full transition-all duration-700" />
            <div className="text-right text-sm text-yellow-500 font-medium mt-1">
              {progressPercentage}% funded
            </div>
          </div>

          {/* Company + Fund button */}
          <div className="mt-3 md:flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <Image
                src={campaign.logo_url || '/default-logo.png'}
                alt="Company logo"
                width={20}
                height={20}
                className="rounded-full"
              />
              <div className="flex items-center gap-1">
                <h2 className="text-sm text-gray-400">{campaign.company_name}</h2>
                {campaign.status === 'verified' && (
                  <Image
                    src="/verifiedtick.png"
                    alt="Verified tick"
                    width={16}
                    height={16}
                  />
                )}
              </div>
            </div>

            <Button className="bg-green-600 mt-2 md:mt-0">Fund</Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default CampaignCard
