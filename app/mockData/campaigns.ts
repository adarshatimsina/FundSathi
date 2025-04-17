export type Campaign = {
  campaign_id: string
  campaign_name: string
  donation_goal: number
  donation_progress: number
  image: string  // Main campaign image
  logo_url: string  // Company logo image
  category: string
  status: 'pending' | 'verified' | 'rejected'
  company_name: string
}

const Campaigns: Campaign[] = [
  {
    campaign_id: '1',
    campaign_name: 'E-commerce App UI Kit',
    donation_goal: 10000,
    donation_progress: 2500,
    image: '/sample.png',  // Main campaign image
    logo_url: '/user.png',  // Company logo
    category: 'Tech',
    status: 'verified',
    company_name: 'E-commerce App Pvt. Ltd.'
  },
  {
    campaign_id: '2',
    campaign_name: 'Finance Dashboard Kit',
    donation_goal: 5000,
    donation_progress: 2000,
    image: '/sample.png',
    logo_url: '/user.png',
    category: 'Finance',
    status: 'pending',
    company_name: 'Finance Dashboard Inc.'
  },
  {
    campaign_id: '3',
    campaign_name: 'AI Marketing Tool',
    donation_goal: 20000,
    donation_progress: 12000,
    image: '/sample.png',
    logo_url: '/user.png',
    category: 'AI',
    status: 'verified',
    company_name: 'AI Marketing Solutions'
  },
  {
    campaign_id: '4',
    campaign_name: 'New Marketing Tool',
    donation_goal: 15000,
    donation_progress: 10500,
    image: '/sample.png',
    logo_url: '/user.png',
    category: 'Marketing',
    status: 'verified',
    company_name: 'New Marketing Tool Ltd.'
  }
]

export default Campaigns
