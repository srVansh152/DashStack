import { useState } from 'react'
import { Link } from 'react-router-dom'

function ForgetPassword() {
  const [emailOrPhone, setEmailOrPhone] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle OTP sending logic here
    console.log('Sending OTP to:', emailOrPhone)
  }

  return (
    <div className="flex min-h-screen ">
      {/* Left side with illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#F6F8FB]  p-12 flex-col justify-between items-center">
        <div className="w-full">
          <h1 className="text-4xl font-bold">
            <span className="text-orange-500">Dash</span>Stack
          </h1>
        </div>
        <img
          src="/image/forget.jpg"
          alt="Password Reset Illustration"
          className="max-w-full"
        />
        <div className="w-full" />
      </div>

      {/* Right side with forget password form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full shadow-lg p-6 max-w-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Forget Password</h2>
          <p className="text-gray-600 mb-8">
            Enter your email and we'll send you a otp to reset your password.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="emailOrPhone" className="block text-sm font-medium text-gray-700">
                Email*
              </label>
              <input
                type="text"
                id="emailOrPhone"
                name="emailOrPhone"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter email"
                required
              />
            </div>
            <div>
              <Link
              to={'/otp'}
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Get OTP
              </Link>
            </div>
          </form>
          <p className="mt-4 text-center text-sm">
            <Link to='/login' href="#" className="font-medium text-orange-600 hover:text-orange-500">
              Back to Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword;