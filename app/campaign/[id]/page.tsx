'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Campaigns from '@/app/mockData/campaigns' // Import the mock data
import { Campaign } from '@/app/mockData/campaigns'

const CampaignDetailsPage = () => {
  const [campaign, setCampaign] = useState<Campaign | null>(null)
  const router = useRouter()
  const { id } = router.query // Get the campaign ID from the URL

  useEffect(() => {
    if (id) {
      // Ensure the 'id' is a string and attempt to match it
      const selectedCampaign = Campaigns.find(
        (campaign) => campaign.campaign_id === String(id) // Convert id to string if necessary
      )

      if (selectedCampaign) {
        setCampaign(selectedCampaign)
      } else {
        console.error('Campaign not found for id:', id) // For debugging
        setCampaign(null) // Set to null if not found
      }
    }
  }, [id]) // Run whenever `id` changes

  // If campaign data is still loading or not found, show loading or error message
  if (!campaign) {
    return <div>Loading or Campaign Not Found...</div>
  }

  return (
    <div>
      <h1>{campaign.campaign_name}</h1>
      {/* Display campaign details */}
      <div>
        <img src={campaign.image} alt={campaign.campaign_name} width={400} height={300} />
        <p>Company: {campaign.company_name}</p>
        <p>Category: {campaign.category}</p>
        <p>Status: {campaign.status}</p>
        <p>Donation Goal: ${campaign.donation_goal}</p>
        <p>Donation Progress: ${campaign.donation_progress}</p>
      </div>
    </div>
  )
}

export default CampaignDetailsPage
