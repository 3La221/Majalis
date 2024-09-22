import Image from 'next/image'
import React from 'react'

interface MajlisCardProps {
  title: string
  chikh: string
  date: string
  mosque: string
  location: string
  time: string
  isWomenAllowed: boolean
}

const MajlisCard: React.FC<MajlisCardProps> = ({
  title,
  chikh,
  date,
  mosque,
  location,
  time,
  isWomenAllowed,
}) => {
  return (
    <div className="xl:w-[300px] md:w-1/2 lg:w-1/3 text-right bg-accent  rounded-xl cursor-pointer p-6 space-y-4 transform transition-transform hover:scale-105 duration-300 relative overflow-hidden">
      {/* Islamic Pattern Background */}
     

      {/* Content */}
      <div className="relative z-10">
        {/* Title */}
        <h2 className="text-2xl font-bold  text-primary mb-4 border-b-2 border-primary pb-2">{title}</h2>
        
        {/* Chikh and Mosque Details */}
        <div className="text-sm text-gray-700 space-y-2">
          <p><span className="font-semibold text-primary">الشيخ:</span> {chikh}</p>
          <p><span className="font-semibold text-primary">المسجد:</span> {mosque}</p>
          <p className='border-b-2 border-primary pb-2' ><span className="font-semibold text-primary ">المكان:</span> {location}</p>
        </div>

        {/* Date and Time */}
        <div className="text-sm text-gray-700 mt-4 space-y-2">
          <p><span className="font-semibold text-primary">التاريخ:</span> {date}</p>
          <p className='border-b-2 border-primary pb-2'><span className="font-semibold text-primary">التوقيت:</span> {time}</p>
        </div>

        {/* Women Allowed */}
        <div className="text-sm mt-4">
          <p>
            <span className={`font-semibold ${isWomenAllowed ? 'text-green-600' : 'text-red-600'}`}>
              {isWomenAllowed ? 'حضور النساء متاح' : 'حضور النساء غير متاح'}
            </span>
          </p>
        </div>
      </div>


      {/* Decorative Crescent */}
    
    </div>
  )
}

export default MajlisCard