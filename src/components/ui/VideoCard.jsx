import React from 'react'

const VideoCard = ({ number, title, description, imgSrc }) => {
  return (
    <div className="relative overflow-hidden cursor-pointer brightness-90 hover:brightness-110 duration-300 ease-out  size-full ">
      <img src={imgSrc} alt={title} className="object-cover  size-full lg:w-[400px] lg:h-[550px] " />
      <div className="absolute bg-gradient-to-t via-transparent  from-black/70 to-transparent size-full inset-0 "></div>
      <div className="absolute bottom-4 left-4 text-white  w-full ">
        <h3 className="text-4xl font-bold">{number}</h3>
        <p className="text-sm text-gray-300">{description}</p>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
    </div>
  )
}

export default VideoCard
