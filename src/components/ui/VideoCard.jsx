import React from 'react'

const VideoCard = ({ number, title, description, imgSrc }) => {
  return (
    <div className="relative overflow-hidden   shadow-md size-full  ">
      <img src={imgSrc} alt={title} className="object-cover lg:w-[400px] lg:h-[550px] bg-red-100  " />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent  to-black opacity-60"></div>
      <div className="absolute bottom-4 left-4 text-white ">
        <h3 className="text-4xl font-bold">{number}</h3>
        <p className="text-sm text-gray-300">{description}</p>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
    </div>
  )
}

export default VideoCard
