'use client'
import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Heart } from 'lucide-react'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-6 md:px-32 lg:px-48">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-800 mb-10">
        About FundSathi
      </h1>

      <Card className="mb-8 shadow-xl">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-3">What is FundSathi?</h2>
          <p className="text-gray-700">
            FundSathi is a modern crowdfunding platform built to empower startups by connecting them with passionate backers. Whether you're launching your first MVP or scaling up, FundSathi provides a safe, verified space to share your vision and receive the support you need.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8 shadow-xl">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-3">How It Works</h2>
          <ul className="space-y-3 text-gray-700 list-disc list-inside">
            <li><strong>Create a Campaign:</strong> Startups submit their campaign details and documents.</li>
            <li><strong>Admin Verification:</strong> Our team verifies every campaign before it's listed.</li>
            <li><strong>Raise Funds:</strong> Verified campaigns go live and start receiving backer donations.</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8 shadow-xl">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-3">Why Choose Us?</h2>
          <ul className="space-y-2 text-gray-700 list-disc list-inside">
            <li>Admin-verified campaigns only — no scams.</li>
            <li>Simple and beautiful UI for both startups and backers.</li>
            <li>Real-time progress tracking and reward system.</li>
            <li>Made in Nepal, for Nepali Entrepreneurs</li> 
          </ul>
        </CardContent>
      </Card>

      <div className="text-center mt-12">
        <Link href="/dashboard">
          <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-lg rounded-xl shadow-md flex items-center gap-2">
            <Heart className="w-5 h-5" /> Start a Campaign
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default AboutPage
