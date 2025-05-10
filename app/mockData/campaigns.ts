export type Campaign = {
  campaign_id: string
  campaign_name: string
  description: string
  logo_url: string
  image: string  // Main campaign image
  category: string
  registration_number: string
  govt_document_image_url: string
  donation_goal: number
  donation_progress: number
  video_url: string
  business_idea_pdf_url: string
  status: 'pending' | 'verified' | 'rejected'
  company_name: string
  created_at: string
  updated_at: string
}

const Campaigns: Campaign[] = [
  {
    campaign_id: '1',
    campaign_name: 'E-commerce App UI Kit',
    description: 'A comprehensive UI kit for building modern e-commerce applications. Includes 100+ components, 20+ page templates, and a complete design system.',
    donation_goal: 10000,
    donation_progress: 2500,
    image: '/sample.png',
    logo_url: '/user.png',
    category: 'Tech',
    status: 'verified',
    company_name: 'E-commerce App Pvt. Ltd.',
    registration_number: 'REG123456',
    govt_document_image_url: '/documents/govt-doc-1.pdf',
    video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    business_idea_pdf_url: '/documents/business-plan-1.pdf',
    created_at: '2024-03-15T10:00:00Z',
    updated_at: '2024-03-15T10:00:00Z'
  },
  {
    campaign_id: '2',
    campaign_name: 'Finance Dashboard Kit',
    description: 'A powerful dashboard solution for financial applications. Features real-time data visualization, customizable widgets, and advanced analytics tools.',
    donation_goal: 5000,
    donation_progress: 2000,
    image: '/sample.png',
    logo_url: '/user.png',
    category: 'Finance',
    status: 'pending',
    company_name: 'Finance Dashboard Inc.',
    registration_number: 'REG789012',
    govt_document_image_url: '/documents/govt-doc-2.pdf',
    video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    business_idea_pdf_url: '/documents/business-plan-2.pdf',
    created_at: '2024-03-14T15:30:00Z',
    updated_at: '2024-03-14T15:30:00Z'
  },
  {
    campaign_id: '3',
    campaign_name: 'AI Marketing Tool',
    description: 'An AI-powered marketing automation platform that helps businesses optimize their campaigns and increase ROI through machine learning algorithms.',
    donation_goal: 20000,
    donation_progress: 12000,
    image: '/sample.png',
    logo_url: '/user.png',
    category: 'AI',
    status: 'verified',
    company_name: 'AI Marketing Solutions',
    registration_number: 'REG345678',
    govt_document_image_url: '/documents/govt-doc-3.pdf',
    video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    business_idea_pdf_url: '/documents/business-plan-3.pdf',
    created_at: '2024-03-13T09:15:00Z',
    updated_at: '2024-03-13T09:15:00Z'
  },
  {
    campaign_id: '4',
    campaign_name: 'New Marketing Tool',
    description: 'A comprehensive marketing platform that combines social media management, email marketing, and analytics in one powerful tool.',
    donation_goal: 15000,
    donation_progress: 10500,
    image: '/sample.png',
    logo_url: '/user.png',
    category: 'Marketing',
    status: 'verified',
    company_name: 'New Marketing Tool Ltd.',
    registration_number: 'REG901234',
    govt_document_image_url: '/documents/govt-doc-4.pdf',
    video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    business_idea_pdf_url: '/documents/business-plan-4.pdf',
    created_at: '2024-03-12T14:45:00Z',
    updated_at: '2024-03-12T14:45:00Z'
  }
]

export default Campaigns
