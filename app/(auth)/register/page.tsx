'use client'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    password: '',
    profile_picture_url: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRegister = async () => {
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error('Please enter a valid email address.')
      return
    }

    try {
      const res = await axios.post('/api/register', formData)

      if (res.status === 201) {
        toast.success('Registration successful!')
        setTimeout(() => {
          window.location.href = '/login'
        }, 2000)
      } else {
        toast.error('Something went wrong!')
      }
    } catch (err: any) {
      console.error(err)
      if (err.response?.status === 400) {
        toast.error(err.response?.data?.error || 'Error during registration!')
      } else {
        toast.error('Error during registration!')
      }
    }
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4">
      <h2 className="text-3xl font-bold mb-4">Create Your Account</h2>
      <p className="mb-6">Join FundSathi by filling the information below.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="first_name">First Name</Label>
          <Input
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="John"
            autoComplete="given-name"
          />
        </div>

        <div>
          <Label htmlFor="last_name">Last Name</Label>
          <Input
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Doe"
            autoComplete="family-name"
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            autoComplete="email"
          />
        </div>

        <div>
          <Label htmlFor="phone_number">Phone Number</Label>
          <Input
            id="phone_number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            placeholder="1234567890"
            autoComplete="tel"
          />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="********"
            autoComplete="new-password"
          />
        </div>

        <div>
          <Label htmlFor="profile_picture_url">Profile Picture URL</Label>
          <Input
            id="profile_picture_url"
            name="profile_picture_url"
            value={formData.profile_picture_url}
            onChange={handleChange}
            placeholder="https://example.com/profile.jpg"
            autoComplete="url"
          />
        </div>
      </div>

      <Button className="mt-6 w-full text-white" onClick={handleRegister}>
        Register
      </Button>

      <p className="mt-4 text-center">
        Already have an account?{' '}
        <a href="/login" className="text-blue-500">
          Login
        </a>
      </p>

      <ToastContainer />
    </div>
  )
}

export default RegisterPage
