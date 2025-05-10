'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'react-toastify'

// Define the Reward type
interface Reward {
  reward_tier: string
  description: string
  min_donation: string
  image_url: string
}

const AddRewardsPage = ({ campaignId }: { campaignId: string }) => {
  const router = useRouter()

  // Local state for holding the rewards
  const [rewards, setRewards] = useState<Reward[]>([
    {
      reward_tier: '',
      description: '',
      min_donation: '',
      image_url: '',
    },
  ])

  const handleAddReward = () => {
    setRewards([
      ...rewards,
      {
        reward_tier: '',
        description: '',
        min_donation: '',
        image_url: '',
      },
    ])
  }

  const handleRemoveReward = (index: number) => {
    const updatedRewards = rewards.filter((_, idx) => idx !== index)
    setRewards(updatedRewards)
  }

  const handleInputChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    const updatedRewards = [...rewards]
    
    // TypeScript will now know that `name` is a key of `Reward`
    updatedRewards[index][name as keyof Reward] = value
    setRewards(updatedRewards)
  }

  const handleSubmitRewards = async () => {
    try {
      // Simulate API call (replace this with actual fetch call later)
      console.log('Preparing to submit the following rewards:', {
        campaignId,
        rewards,
      })
  
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
  
      toast.success('Rewards added successfully!')
  
      // Redirect to campaign detail page after success
      router.push(`/campaigns/${campaignId}`)
    } catch (err) {
      console.error('Error submitting rewards:', err)
      toast.error('Failed to add rewards!')
    }
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <h2 className="text-3xl font-bold mb-6">Add Rewards to Your Campaign</h2>
      <p className="mb-6">Create and manage rewards for your campaign. Add as many as you'd like!</p>

      <div className="space-y-6">
        {rewards.map((reward, index) => (
          <div key={index} className="border p-4 rounded-md shadow-md">
            <h3 className="text-xl mb-4">Reward Tier {index + 1}</h3>

            <div>
              <label htmlFor={`reward_tier_${index}`} className="block font-medium mb-2">
                Reward Tier Name
              </label>
              <Input
                id={`reward_tier_${index}`}
                name="reward_tier"
                value={reward.reward_tier}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="Bronze, Silver, Gold..."
              />
            </div>

            <div>
              <label htmlFor={`description_${index}`} className="block font-medium mb-2">
                Description
              </label>
              <Textarea
                id={`description_${index}`}
                name="description"
                value={reward.description}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="Describe this reward..."
              />
            </div>

            <div>
              <label htmlFor={`min_donation_${index}`} className="block font-medium mb-2">
                Minimum Donation
              </label>
              <Input
                id={`min_donation_${index}`}
                name="min_donation"
                type="number"
                value={reward.min_donation}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="Amount in USD"
              />
            </div>

            <div>
              <label htmlFor={`image_url_${index}`} className="block font-medium mb-2">
                Image URL (optional)
              </label>
              <Input
                id={`image_url_${index}`}
                name="image_url"
                value={reward.image_url}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="URL for reward image (optional)"
              />
            </div>

            <div className="mt-4 flex justify-between">
              <Button variant="destructive" onClick={() => handleRemoveReward(index)}>
                Remove Reward
              </Button>
              {rewards.length - 1 === index && (
                <Button variant="outline" onClick={handleAddReward}>
                  Add Another Tier
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Button className="w-full" onClick={handleSubmitRewards}>
          Submit Rewards
        </Button>
      </div>
    </div>
  )
}

export default AddRewardsPage
