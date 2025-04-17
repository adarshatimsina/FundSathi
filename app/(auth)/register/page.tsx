'use client'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import axios from 'axios'
import bcrypt from 'bcryptjs'
import { toast } from 'react-toastify'

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
    try {
      const hashedPassword = await bcrypt.hash(formData.password, 10)

      const dataToSend = {
        ...formData,
        password: hashedPassword,
      }

      const res = await axios.post('/api/register', dataToSend)

      if (res.status === 201) {
        toast.success('Registration successful!')
      } else {
        toast.error('Something went wrong!')
      }
    } catch (err) {
      console.error(err)
      toast.error('Error during registration!')
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
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="John"
          />
        </div>

        <div>
          <Label htmlFor="last_name">Last Name</Label>
          <Input
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Doe"
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
          />
        </div>

        <div>
          <Label htmlFor="phone_number">Phone Number</Label>
          <Input
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            placeholder="1234567890"
          />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="********"
          />
        </div>

        <div>
          <Label htmlFor="profile_picture_url">Profile Picture URL</Label>
          <Input
            name="profile_picture_url"
            value={formData.profile_picture_url}
            onChange={handleChange}
            placeholder="https://example.com/profile.jpg"
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
    </div>
  )
}

export default RegisterPage
