import { Link } from "react-router-dom";

export default function RegistrationPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      {/* Left side */}
      <div className="lg:w-1/2 p-8 flex flex-col bg-gray-50">
        <div className="text-2xl font-bold text-gray-800 mb-8">
          <span className="text-red-500">Dash</span>Stack
        </div>
        <div className="flex-grow flex flex-col items-center justify-center">
          <img
            src="/image/Registration.png"
            alt="Society Management Illustration"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="lg:w-1/2 p-8">
        <div className="w-3/5 mx-auto shadow-lg p-10 rounded-lg">
          <h1 className="text-2xl font-bold mb-6">Registration</h1>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name*
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Enter First Name"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name*
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Enter Last Name"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address*
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter Email Address"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number*
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Enter Phone Number"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country*
                </label>
                <input
                  id="country"
                  type="text"
                  placeholder="Enter Country"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700"
                >
                  State*
                </label>
                <input
                  id="state"
                  type="text"
                  placeholder="Enter State"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City*
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="Enter City"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="society"
                className="block text-sm font-medium text-gray-700"
              >
                Select Society*
              </label>
              <div className="mt-1 relative">
                <select
                  id="society"
                  onChange={(e) => {
                    if (e.target.value === "create") {
                      // Handle create new society
                      console.log("Create new society");
                      // Reset the select value
                      e.target.value = "";
                    }
                  }}
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  <option value=" Shantigram residency ">
                    Shantigram residency
                  </option>
                  <option value="Russett House Park">Russett House Park</option>
                  <option value="Saurya residency ">Saurya residency </option>
                  <option value="Shamruddh Avenyu">Shamruddh Avenyu</option>
                  <option value="Utsav society">Utsav society</option>
                  <option value="Murlidhar ">Murlidhar </option>
                  <option value="Shree Sharanam">Shree Sharanam</option>
                  <option value="vasantnagar township">
                    vasantnagar township
                  </option>
                  <Link to="/create">Create New Society</Link>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password*
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter Password"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password*
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to all the Terms and Privacy Policies
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
