'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'react-toastify'

const AddCampaignPage = () => {
  const [formData, setFormData] = useState({
    campaign_name: '',
    description: '',
    logo_url: null as File | null,
    campaign_image_url: null as File | null,
    category: '',
    registration_number: '',
    govt_document_image_url: null as File | null,
    donation_goal: '',
    video_url: '',
    business_idea_pdf_url: null as File | null,
  })

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target
    if (files && files.length > 0) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }))
    }
  }

  const handleSubmit = async () => {
    try {
      const form = new FormData()

      for (const key in formData) {
        const value = formData[key as keyof typeof formData]
        if (value) {
          form.append(key, value)
        }
      }

      // Example placeholder for POST (You can connect this later to your backend route)
      const response = await fetch('/api/campaigns', {
        method: 'POST',
        body: form,
      })

      if (!response.ok) throw new Error('Submission failed')

      toast.success('Campaign submitted successfully!')
    } catch (err) {
      console.error(err)
      toast.error('Failed to submit campaign!')
    }
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h2 className="text-3xl font-bold mb-4">Start a New Campaign</h2>
      <p className="mb-6">Fill in the details to launch your fundraising campaign.</p>

      <div className="space-y-4">
        <div>
          <Label htmlFor="campaign_name">Campaign Name</Label>
          <Input name="campaign_name" value={formData.campaign_name} onChange={handleTextChange} />
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea name="description" value={formData.description} onChange={handleTextChange} />
        </div>

        <div>
          <Label htmlFor="logo_url">Upload Logo Image</Label>
          <Input type="file" name="logo_url" accept="image/*" onChange={handleFileChange} />
        </div>

        <div>
          <Label htmlFor="campaign_image_url">Upload Campaign Image</Label>
          <Input type="file" name="campaign_image_url" accept="image/*" onChange={handleFileChange} />
        </div>

        <div>
          <Label htmlFor="category">Category</Label>
          <Input name="category" value={formData.category} onChange={handleTextChange} />
        </div>

        <div>
          <Label htmlFor="registration_number">Registration Number</Label>
          <Input name="registration_number" value={formData.registration_number} onChange={handleTextChange} />
        </div>

        <div>
          <Label htmlFor="govt_document_image_url">Upload Govt. Document</Label>
          <Input type="file" name="govt_document_image_url" accept="image/*" onChange={handleFileChange} />
        </div>

        <div>
          <Label htmlFor="donation_goal">Donation Goal (in Rs.)</Label>
          <Input name="donation_goal" type="number" value={formData.donation_goal} onChange={handleTextChange} />
        </div>

        <div>
          <Label htmlFor="video_url">Intro Video URL (YouTube)</Label>
          <Input name="video_url" value={formData.video_url} onChange={handleTextChange} />
        </div>

        <div>
          <Label htmlFor="business_idea_pdf_url">Upload Business Idea PDF</Label>
          <Input type="file" name="business_idea_pdf_url" accept="application/pdf" onChange={handleFileChange} />
        </div>
      </div>

      <Button className="mt-6 w-full text-white" onClick={handleSubmit}>
        Submit Campaign
      </Button>
    </div>
  )
}

export default AddCampaignPage
