import React from 'react'

const VideoText = () => {
  return (
  <div className='video-text flex '>
     <div className="uppercase -rotate-90  hidden lg:block  place-self-center   text-gray-200 font-bold text-3xl md:text-4xl lg:text-7xl ">
          Projects
        </div>
       <aside className="w-[200px]  relative  h-full ">
        
<hr className='h-[560px]  absolute left-1 -top-14  border-l ' />
      <ul className="space-y-12   ">
        <li className="text-lg text-gray-500 flex  items-center -space-x-1">
          <span className="w-2 h-2 bg-orange-950 rounded-full  z-[1] "></span>
        
          <span>&#x268A; All Project </span>
        </li>
        <li className="text-lg text-gray-500 flex items-center -space-x-1">
          <span className="w-2 h-2 bg-orange-950 rounded-full z-[1]"></span>
          <span> &#x268A; Architecture</span>
        </li>
        <li className="text-lg text-gray-500 flex items-center -space-x-1">
          <span className="w-2 h-2 bg-orange-950 rounded-full z-[1]"></span>
          <span> &#x268A; Interior </span>
        </li>
        <li className="text-lg text-gray-500 flex items-center -space-x-1">
          <span className="w-2 h-2 bg-orange-950 rounded-full z-[1]"></span>
          <span> &#x268A; Residential</span>
        </li>
        <li className="text-lg text-gray-500 flex items-center -space-x-1">
          <span className="w-2 h-2 bg-orange-950 rounded-full z-[1]"></span>
          <span> &#x268A; Exterior </span>
        </li>
      </ul>
    </aside>
    </div>
  )
}

export default VideoText
