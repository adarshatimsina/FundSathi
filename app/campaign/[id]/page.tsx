'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Campaigns from '@/app/mockData/campaigns'
import { Campaign } from '@/app/mockData/campaigns'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import Image from 'next/image'
import { LucideVerified, ArrowRight, Heart, Share2, FileText, Download, Play } from 'lucide-react'
import { Card } from '@/components/ui/card'


const mockRewards = [
  {
    reward_id: '1',
    reward_tier: 'Early Bird',
    description: 'Get exclusive early access to our product',
    min_donation: 50,
    image_url: '/sample.png'
  },
  {
    reward_id: '2',
    reward_tier: 'Supporter',
    description: 'Special mention in our product and early access',
    min_donation: 100,
    image_url: '/sample.png'
  },
  {
    reward_id: '3',
    reward_tier: 'VIP',
    description: 'All above benefits plus a personal thank you call',
    min_donation: 200,
    image_url: '/sample.png'
  }
]

const CampaignDetailsPage = () => {
  const [campaign, setCampaign] = useState<Campaign | null>(null)
  const [showVideo, setShowVideo] = useState(false)
  const params = useParams()
  const id = params.id as string

  useEffect(() => {
    if (id) {
      const selectedCampaign = Campaigns.find(
        (campaign) => campaign.campaign_id === id
      )

      if (selectedCampaign) {
        setCampaign(selectedCampaign)
      } else {
        console.error('Campaign not found for id:', id)
        setCampaign(null)
      }
    }
  }, [id])

  if (!campaign) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700">Loading...</h2>
          <p className="text-gray-500 mt-2">Please wait while we fetch the campaign details</p>
        </div>
      </div>
    )
  }

  const progressPercentage = Math.round(
    (campaign.donation_progress / campaign.donation_goal) * 100
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <Image
          src={campaign.image}
          alt={campaign.campaign_name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Image
                  src={campaign.logo_url}
                  alt={campaign.company_name}
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <span className="text-lg">{campaign.company_name}</span>
                {campaign.status === 'verified' && (
                  <LucideVerified className="text-blue-400 w-5 h-5" />
                )}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold">{campaign.campaign_name}</h1>
              <div className="flex flex-wrap items-center gap-4">
                <Button className="bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-full">
                  Fund Now <ArrowRight className="ml-2" />
                </Button>
                <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                  <Heart className="mr-2" /> Save
                </Button>
                <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                  <Share2 className="mr-2" /> Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:-mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Campaign Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
              <h2 className="text-2xl font-bold mb-6">About the Campaign</h2>
              <p className="text-gray-600 leading-relaxed">
                This campaign aims to revolutionize the {campaign.category.toLowerCase()} industry with innovative solutions.
                Join us in supporting this groundbreaking initiative and be part of something extraordinary.
              </p>
            </div>

            {/* Video Section */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
              <h2 className="text-2xl font-bold mb-6">Campaign Video</h2>
              <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
                {showVideo ? (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Campaign Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div 
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    onClick={() => setShowVideo(true)}
                  >
                    <div className="text-center">
                      <Play className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">Click to watch campaign video</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Rewards Section */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
              <h2 className="text-2xl font-bold mb-6">Reward Tiers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mockRewards.map((reward) => (
                  <Card key={reward.reward_id} className="p-6">
                    <div className="flex gap-4">
                      <div className="relative w-24 h-24">
                        <Image
                          src={reward.image_url}
                          alt={reward.reward_tier}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{reward.reward_tier}</h3>
                        <p className="text-gray-600 mt-2">{reward.description}</p>
                        <p className="text-green-600 font-semibold mt-2">
                          Minimum Donation: ${reward.min_donation}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Documents Section */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
              <h2 className="text-2xl font-bold mb-6">Campaign Documents</h2>
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2" />
                  Business Idea Document
                  <Download className="ml-auto" />
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2" />
                  Government Registration Document
                  <Download className="ml-auto" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Progress & Stats */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Campaign Progress</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Raised</span>
                  <span className="text-xl md:text-2xl font-bold text-green-600">
                    ${campaign.donation_progress.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Goal</span>
                  <span className="text-lg md:text-xl font-semibold">
                    ${campaign.donation_goal.toLocaleString()}
                  </span>
                </div>
                <Progress value={progressPercentage} className="h-3 rounded-full" />
                <div className="text-center">
                  <span className="text-xl md:text-2xl font-bold text-yellow-600">{progressPercentage}%</span>
                  <span className="text-gray-600 ml-2">funded</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 md:p-8 text-white shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Why Support?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <LucideVerified className="w-5 h-5" />
                  <span>Verified Campaign</span>
                </li>
                <li className="flex items-center gap-2">
                  <LucideVerified className="w-5 h-5" />
                  <span>Transparent Progress</span>
                </li>
                <li className="flex items-center gap-2">
                  <LucideVerified className="w-5 h-5" />
                  <span>Secure Funding</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CampaignDetailsPage
