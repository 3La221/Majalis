'use client'

import React, { useState, useEffect } from 'react'
import MajlisCard from '../_components/MajlisCard'

const majlisData = [
  { id: 1, title: "دروس في العقيدة", chikh: "الشيخ محمد", date: "2023-05-15", mosque: "مسجد النور", location: "الرياض", time: "20:00", isWomenAllowed: true },
  { id: 2, title: "تفسير القرآن", chikh: "الشيخ أحمد", date: "2024-09-23", mosque: "مسجد الهدى", location: "جدة", time: "19:30", isWomenAllowed: false },
  { id: 3, title: "فقه العبادات", chikh: "الشيخ عبدالله", date: "2023-05-20", mosque: "مسجد التقوى", location: "مكة", time: "21:00", isWomenAllowed: true },
  
]

const MajlisList: React.FC = () => {
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<typeof majlisData>([])
  const [filteredMajlis, setFilteredMajlis] = useState<typeof majlisData>([])

  useEffect(() => {
    filterMajlis()
  }, [filter, searchTerm])

  const filterMajlis = () => {
    const currentDate = new Date()
    let filtered = majlisData

   
    if (filter === 'today') {
      filtered = filtered.filter(majlis => new Date(majlis.date).toDateString() === currentDate.toDateString())
    } else if (filter === 'week') {
      const weekStart = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay()))
      const weekEnd = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 6))
      filtered = filtered.filter(majlis => {
        const majlisDate = new Date(majlis.date)
        return majlisDate >= weekStart && majlisDate <= weekEnd
      })
    } else if (filter === 'month') {
      filtered = filtered.filter(majlis => new Date(majlis.date).getMonth() === currentDate.getMonth())
    }

   
    if (searchTerm) {
      filtered = filtered.filter(majlis =>
        majlis.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        majlis.chikh.toLowerCase().includes(searchTerm.toLowerCase()) ||
        majlis.mosque.toLowerCase().includes(searchTerm.toLowerCase()) ||
        majlis.location.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredMajlis(filtered)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    const results = majlisData.filter(majlis =>
      majlis.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
      majlis.chikh.toLowerCase().includes(e.target.value.toLowerCase()) ||
      majlis.mosque.toLowerCase().includes(e.target.value.toLowerCase()) ||
      majlis.location.toLowerCase().includes(e.target.value.toLowerCase())
    )
    setSearchResults(results)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 space-y-4">
        {/* Filter buttons */}
        <div className="flex justify-center space-x-4 rtl:space-x-reverse">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full ${filter === 'all' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            الكل
          </button>
          <button
            onClick={() => setFilter('today')}
            className={`px-4 py-2 rounded-full ${filter === 'today' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            اليوم
          </button>
          <button
            onClick={() => setFilter('week')}
            className={`px-4 py-2 rounded-full ${filter === 'week' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            هذا الأسبوع
          </button>
          <button
            onClick={() => setFilter('month')}
            className={`px-4 py-2 rounded-full ${filter === 'month' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            هذا الشهر
          </button>
        </div>

        {/* Search bar */}
        <div className="relative flex justify-center">
          <input
            type="text"
            placeholder=" ...ابحث عن مجلس"
            className="w-1/2 text-center self-center px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {searchResults.length > 0 && searchTerm && (
            <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto">
              {searchResults.map(result => (
                <li
                  key={result.id}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setSearchTerm(result.location)}
                >
                  {result.location}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Majlis cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-full lg:justify-items-center gap-6">
        {filteredMajlis.map(majlis => (
          <MajlisCard key={majlis.id} {...majlis} />
        ))}
      </div>
    </div>
  )
}

export default MajlisList