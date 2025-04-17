'use client'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { toast } from 'react-toastify'

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleLogin = async () => {
    try {
      // You will handle the logic to send this data to the backend later
      console.log('Login data:', formData)

      // For now, show success toast
      toast.success('Login successful!')

      // Example error case (for testing)
      // toast.error('Invalid email or password')
    } catch (err) {
      console.error(err)
      toast.error('Error during login!')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <h2 className="text-3xl font-bold mb-4">Login to Your Account</h2>
      <p className="mb-6">Welcome back! Please login with your credentials.</p>

      <div className="space-y-4">
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
          <Label htmlFor="password">Password</Label>
          <Input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="********"
          />
        </div>
      </div>

      <Button className="mt-6 w-full text-white" onClick={handleLogin}>
        Login
      </Button>

      <p className="mt-4 text-center">
        Don't have an account?{' '}
        <a href="/register" className="text-blue-500">
          Register here
        </a>
      </p>
    </div>
  )
}

export default LoginPage
