'use client'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleLogin = async () => {
    // Basic validation for email and password
    if (!formData.email || !formData.password) {
      toast.error('Please enter both email and password.')
      return
    }

    try {
      const res = await fetch('/api/login', {
    method: 'POST',
   headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
  credentials: 'include', // ✅ This is required to store cookies!
  })

      const data = await res.json()

      if (res.ok) {
        toast.success('Login successful! 🎉')
        router.push('/') // Redirect to homepage after successful login
      } else {
        toast.error(data.error || 'Invalid email or password')
      }
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
