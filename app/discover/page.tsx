import React from 'react'
import CampaignList from '../_components/campaignList'


const StorePage = () => {
  return (
    <div className="p-6 md:px-20">
      <h1 className="text-3xl font-bold mb-6">Discover Campaigns</h1>
      <CampaignList />
    </div>
  )
}

export default StorePage
