import React, { useState, useEffect, useRef } from 'react';
import UAside from './UAside'
import { Bell, X , ChevronDown, Hash, List, Radio, Star, Type } from 'lucide-react';
import { Link } from 'react-router-dom';

const Upools = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenn, setIsOpenn] = useState(false);
    const [openModel, setOpenModel] = useState(false);
    const [activeTab, setActiveTab] = useState('own')
    const [selectedPoll, setSelectedPoll] = useState("")

   
    const [formValues, setFormValues] = useState({
      question: "",
      option1: "",
      option2: "",
    });
  
    const pollTypes = [
        { name: "Multichoice polls", icon: <Radio className="w-4 h-4" /> },
        { name: "Ranking polls", icon: <List className="w-4 h-4" /> },
        { name: "Rating polls", icon: <Star className="w-4 h-4" /> },
        { name: "Numeric polls", icon: <Hash className="w-4 h-4" /> },
        { name: "Text polls", icon: <Type className="w-4 h-4" /> },
      ]
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form Values:", { ...formValues, selectedPoll });

    };

    const polls = Array(4).fill({
        author: "Arlene McCoy",
        title: "Sales Deal with Toyota - Azure HF - AMS Amplify ?",
        type: "Multichoice polls",
        votes: {
            yes: 75,
            no: 45
        },
        timestamp: "01/07/2024, 10:00 AM"
    })

    const handleAddModel = () => {
        setOpenModel(true);
      };


    const notifications = [
        {
            id: 1,
            user: 'Evelyn Harper',
            userCode: 'A- 101',
            message: 'gave a fund of',
            amount: '1000 rupees for Navratri.',
            time: '30 Minutes ago',
            avatar: '/api/placeholder/40/40',
            type: 'fund'
        },
        {
            id: 2,
            user: 'Evelyn Harper',
            userCode: 'A- 101',
            message: 'gave a',
            linkText: 'Maintenance',
            amount: ' of 1000 rupees.',
            time: '2 days ago',
            avatar: '/api/placeholder/40/40',
            type: 'maintenance'
        },
        {
            id: 3,
            user: 'Ganesh Chaturthi',
            userCode: 'A- 101',
            amount: '₹ 1,500',
            subtitle: 'Per Person Amount :',
            description: 'The celebration of Ganesh Chaturthi involves the installation of clay idols of Lord Ganesh in OutResident.',
            time: '2 days ago',
            type: 'event'
        }
    ];


    return (
        <div className='flex h-screen bg-gray-50'>
            <UAside />
            <div className="flex-1 overflow-auto">
                <header className="bg-white py-2 mb-3 border-b flex justify-between items-center shadow-sm sticky  top-0 z-10">
                    {/* Search Bar - hidden on smaller screens */}
                    <div className="flex items-center ms-3 gap-2 text-sm">
                        <span className="text-gray-500">Home</span>
                        <span className="text-gray-500">/</span>
                        <span className="text-blue-500">Polls</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative">
                            {/* Notification Bell Button */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
                            >
                                <Bell className="w-5 h-5 text-gray-600" />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>

                            {/* Notification Dropdown Panel */}
                            {isOpen && (
                                <div className="absolute right-0 mt-2 w-80 md:w-96 bg-white rounded-lg shadow-lg border overflow-hidden z-20">
                                    <div className="flex justify-between items-center p-4 border-b">
                                        <h2 className="font-semibold text-gray-800">Notifications</h2>
                                        <button
                                            onClick={() => { }}
                                            className="text-sm text-blue-500 hover:text-blue-600 transition-colors"
                                        >
                                            Clear all
                                        </button>
                                    </div>
                                    <div className="max-h-96 overflow-y-auto">
                                        {notifications.map((notification) => (
                                            <div key={notification.id} className="p-4 border-b hover:bg-gray-50 transition-colors">
                                                <div className="flex gap-3">
                                                    {/* Avatar or Icon */}
                                                    {notification.type !== 'event' ? (
                                                        <img
                                                            src='/image/3504bec22d3fe96515e7c73aeadb9d13.jpg'
                                                            alt=""
                                                            className="w-10 h-10 rounded-full"
                                                        />
                                                    ) : (
                                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                            <span className="text-blue-500 text-xl">G</span>
                                                        </div>
                                                    )}

                                                    {/* Content */}
                                                    <div className="flex-1">
                                                        <p className="text-sm text-gray-800">
                                                            <span className="font-medium">{notification.user}</span> {notification.message}
                                                            {notification.linkText && (
                                                                <span className="text-blue-500"> {notification.linkText}</span>
                                                            )}
                                                        </p>
                                                        <span className="text-xs text-gray-400">{notification.time}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Profile Section */}
                        <Link to="/admin/editprofile" className="hidden sm:flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-all">
                            <img
                                src="/api/placeholder/32/32"
                                alt="Profile"
                                className="w-8 h-8 rounded-full border-2 border-transparent hover:border-orange-500 transition-all"
                            />
                            <div className="hidden md:block">
                                <p className="text-sm font-medium">Moni Roy</p>
                                <p className="text-xs text-gray-500">admin</p>
                            </div>
                        </Link>
                    </div>
                </header>
                <div className="min-h-screen bg-gray-50 p-4">
                    {/* Header Tabs */}
                    <div className="mb-4 flex items-center justify-between">
                        <div className="flex gap-1 border-b border-gray-200">
                            <button
                                onClick={() => setActiveTab('own')}
                                className={`px-4 py-2 font-medium ${activeTab === 'own'
                                    ? 'border-b-2 border-orange-500 text-orange-500'
                                    : 'text-gray-500'
                                    }`}
                            >
                                Own Poll
                            </button>
                            <button
                                onClick={() => setActiveTab('new')}
                                className={`px-4 py-2 font-medium ${activeTab === 'new'
                                    ? 'border-b-2 border-orange-500 text-orange-500'
                                    : 'text-gray-500'
                                    }`}
                            >
                                New Poll
                            </button>
                            <button
                                onClick={() => setActiveTab('previous')}
                                className={`px-4 py-2 font-medium ${activeTab === 'previous'
                                    ? 'border-b-2 border-orange-500 text-orange-500'
                                    : 'text-gray-500'
                                    }`}
                            >
                                Previous Poll
                            </button>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow">
                        <div className="flex items-center justify-between px-4 py-3">
                            <h1 className="text-lg font-medium text-gray-900">Polls</h1>
                            <button onClick={handleAddModel} className="rounded-full bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600 transition-colors">
                                Create Polls
                            </button>
                        </div>
                        {/* Polls Grid */}
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

                            {polls.map((poll, index) => (
                                <div key={index} className="rounded-xl bg-white p-4 shadow">
                                    <div className="mb-4 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="h-10 w-10 overflow-hidden rounded-full">
                                                <img
                                                    src="https://s3-alpha-sig.figma.com/img/0f9b/81fa/21460d39cd98ccca0d3fa906d5718aa3?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A39uWD7F2E~HM5M7hxglW91hOeOOgjPOzK0VY56Z6Ax9zJs4F0nG3Gh4vvWAH~38VJMlFOD01sm49mOabvRx0hiA9XM67Peb0N9HB0t-2M2~bYkoSXRjhC70Jn7m3~HzhpFZrpTmvmoT4Eq2iEKsCHgABggiSBtu--RcL-Dr6~5EdcawaLlyqTcIX9Rvs2R0yrdht2nUHNwhoUzoZSHPyP2U6F9ruNvh3aGtixTG0i4jOr65j-oCE0C7RO~eWJPZU6pYjWKD~3Ip-2KXKvtrxSo8zk5V8znEFYz-fOCMQxgBR9Am-fnD~QvFsTNQX9P2ZQCTxhrRCVokJ1-tkVLR0g__"
                                                    alt="Profile"
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="font-medium text-gray-900">{poll.author}</h3>
                                                <p className="text-sm text-gray-500">{poll.type}</p>
                                            </div>
                                        </div>
                                        <span className="flex h-6 w-8 items-center justify-center rounded-full bg-blue-100 text-sm text-blue-600">
                                            20
                                        </span>
                                    </div>

                                    <h2 className="mb-4 text-lg font-medium text-gray-900">{poll.title}</h2>

                                    <div className="mb-4 text-sm text-gray-500">Select one or more</div>

                                    <div className="max-w-md space-y-4 p-4">
                                        {/* Yes Option */}
                                        <div className="relative">
                                            <label className="flex items-center gap-3">
                                                <input
                                                    type="radio"
                                                    name="poll"
                                                    className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-500"
                                                />
                                                <span className="text-sm font-medium text-gray-700">Yes</span>
                                            </label>

                                            <div className="mt-2 flex items-center gap-2">
                                                <div className="relative flex-1 h-2 rounded-full bg-gray-100">
                                                    <div
                                                        className="absolute left-0 top-0 h-full w-[65%] rounded-full bg-green-500"
                                                        style={{ transition: 'width 0.3s ease-in-out' }}
                                                    />
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <div className="flex -space-x-1">
                                                        <img
                                                            src="https://s3-alpha-sig.figma.com/img/0f9b/81fa/21460d39cd98ccca0d3fa906d5718aa3?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A39uWD7F2E~HM5M7hxglW91hOeOOgjPOzK0VY56Z6Ax9zJs4F0nG3Gh4vvWAH~38VJMlFOD01sm49mOabvRx0hiA9XM67Peb0N9HB0t-2M2~bYkoSXRjhC70Jn7m3~HzhpFZrpTmvmoT4Eq2iEKsCHgABggiSBtu--RcL-Dr6~5EdcawaLlyqTcIX9Rvs2R0yrdht2nUHNwhoUzoZSHPyP2U6F9ruNvh3aGtixTG0i4jOr65j-oCE0C7RO~eWJPZU6pYjWKD~3Ip-2KXKvtrxSo8zk5V8znEFYz-fOCMQxgBR9Am-fnD~QvFsTNQX9P2ZQCTxhrRCVokJ1-tkVLR0g__"
                                                            className="h-5 w-5 rounded-full border-2 border-white"
                                                            alt="Voter"
                                                        />
                                                        <img
                                                            src="https://s3-alpha-sig.figma.com/img/0f9b/81fa/21460d39cd98ccca0d3fa906d5718aa3?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A39uWD7F2E~HM5M7hxglW91hOeOOgjPOzK0VY56Z6Ax9zJs4F0nG3Gh4vvWAH~38VJMlFOD01sm49mOabvRx0hiA9XM67Peb0N9HB0t-2M2~bYkoSXRjhC70Jn7m3~HzhpFZrpTmvmoT4Eq2iEKsCHgABggiSBtu--RcL-Dr6~5EdcawaLlyqTcIX9Rvs2R0yrdht2nUHNwhoUzoZSHPyP2U6F9ruNvh3aGtixTG0i4jOr65j-oCE0C7RO~eWJPZU6pYjWKD~3Ip-2KXKvtrxSo8zk5V8znEFYz-fOCMQxgBR9Am-fnD~QvFsTNQX9P2ZQCTxhrRCVokJ1-tkVLR0g__"
                                                            className="h-5 w-5 rounded-full border-2 border-white"
                                                            alt="Voter"
                                                        />
                                                    </div>
                                                    <span className="text-sm text-gray-500">{poll.votes.yes}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* No Option */}
                                        <div className="relative">
                                            <label className="flex items-center gap-3">
                                                <input
                                                    type="radio"
                                                    name="poll"
                                                    className="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-500"
                                                />
                                                <span className="text-sm font-medium text-gray-700">No</span>
                                            </label>

                                            <div className="mt-2 flex items-center gap-2">
                                                <div className="relative flex-1 h-2 rounded-full bg-gray-100">
                                                    <div
                                                        className="absolute left-0 top-0 h-full w-[35%] rounded-full bg-red-500"
                                                        style={{ transition: 'width 0.3s ease-in-out' }}
                                                    />
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <div className="flex -space-x-1">
                                                        <img
                                                            src="https://s3-alpha-sig.figma.com/img/0f9b/81fa/21460d39cd98ccca0d3fa906d5718aa3?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A39uWD7F2E~HM5M7hxglW91hOeOOgjPOzK0VY56Z6Ax9zJs4F0nG3Gh4vvWAH~38VJMlFOD01sm49mOabvRx0hiA9XM67Peb0N9HB0t-2M2~bYkoSXRjhC70Jn7m3~HzhpFZrpTmvmoT4Eq2iEKsCHgABggiSBtu--RcL-Dr6~5EdcawaLlyqTcIX9Rvs2R0yrdht2nUHNwhoUzoZSHPyP2U6F9ruNvh3aGtixTG0i4jOr65j-oCE0C7RO~eWJPZU6pYjWKD~3Ip-2KXKvtrxSo8zk5V8znEFYz-fOCMQxgBR9Am-fnD~QvFsTNQX9P2ZQCTxhrRCVokJ1-tkVLR0g__"
                                                            className="h-5 w-5 rounded-full border-2 border-white"
                                                            alt="Voter"
                                                        />
                                                        <img
                                                            src="https://s3-alpha-sig.figma.com/img/0f9b/81fa/21460d39cd98ccca0d3fa906d5718aa3?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A39uWD7F2E~HM5M7hxglW91hOeOOgjPOzK0VY56Z6Ax9zJs4F0nG3Gh4vvWAH~38VJMlFOD01sm49mOabvRx0hiA9XM67Peb0N9HB0t-2M2~bYkoSXRjhC70Jn7m3~HzhpFZrpTmvmoT4Eq2iEKsCHgABggiSBtu--RcL-Dr6~5EdcawaLlyqTcIX9Rvs2R0yrdht2nUHNwhoUzoZSHPyP2U6F9ruNvh3aGtixTG0i4jOr65j-oCE0C7RO~eWJPZU6pYjWKD~3Ip-2KXKvtrxSo8zk5V8znEFYz-fOCMQxgBR9Am-fnD~QvFsTNQX9P2ZQCTxhrRCVokJ1-tkVLR0g__"
                                                            className="h-5 w-5 rounded-full border-2 border-white"
                                                            alt="Voter"
                                                        />
                                                    </div>
                                                    <span className="text-sm text-gray-500">{poll.votes.no}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Timestamp */}
                                        <div className="text-right text-sm text-gray-500">
                                            {poll.timestamp}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {openModel && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className=" p-6 space-y-6">
        <h2 className="text-xl font-semibold text-gray-900">Create Polls</h2>
        
        <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div className="relative">
          <div
            className="w-full border rounded-lg p-3 flex items-center justify-between cursor-pointer hover:bg-gray-50"
            onClick={() => setIsOpenn(!isOpenn)}
          >
            <span className="text-gray-500">{selectedPoll || "Select Polls"}</span>
            <ChevronDown
              className={`w-5 h-5 text-gray-400 transition-transform ${isOpenn ? "rotate-180" : ""}`}
            />
          </div>

          {isOpenn && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-auto">
              {pollTypes.map((type) => (
                <div
                  key={type.name}
                  className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer"
                  onClick={() => {
                    setSelectedPoll(type.name);
                    setIsOpenn(false);
                  }}
                >
                  {type.icon}
                  <span className="text-gray-700">{type.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Question<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="question"
            value={formValues.question}
            onChange={handleChange}
            placeholder="Ask a question"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Option 1<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="option1"
            value={formValues.option1}
            onChange={handleChange}
            placeholder="Add"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Option 2<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="option2"
            value={formValues.option2}
            onChange={handleChange}
            placeholder="Add"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <button
          type="button"
          onClick={() =>setOpenModel(false)}
          className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
        >
          Cancel
        </button>
        <button type="submit" className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-blue-700">
          Create
        </button>
      </div>
    </form>
      </div>
            </div>
          </div>
        )}
        </div>

    )
}

export default Upools
