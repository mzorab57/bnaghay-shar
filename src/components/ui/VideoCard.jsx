import React, { useState } from "react";
import { FiPlay } from "react-icons/fi"; // Import Play Icon from react-icons
import bg from "../../assets/images/BGG1.webp"; // Import Play Icon from react-icons

const VideoCard = ({ number, title, description, videoSrc }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal open/close

  const handlePlayClick = () => {
    setIsModalOpen(true); // Open modal when play icon is clicked
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close modal
  };

  return (
    <>
      {/* Video card with play icon */}
      <div className="relative overflow-hidden cursor-pointer brightness-90 hover:brightness-110 duration-300 ease-out size-full ">
        <video
          loading="lazy"
          controls
          poster={bg}
          width="100%"
          height="auto"
          loop
          muted
          className="object-cover size-full lg:w-[400px] lg:h-[550px]"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute bg-gradient-to-t via-transparent from-black/70 to-transparent size-full inset-0"></div>
        <div className="absolute bottom-4 left-4 text-white w-full">
          <h3 className="text-4xl font-bold">{number}</h3>
          <p className="text-sm text-gray-300">{description}</p>
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
        {/* Play Icon */}
        <div
          className="absolute inset-0 flex justify-center items-center text-white text-6xl"
          onClick={handlePlayClick}
        >
          <FiPlay className="hover:scale-110 transition duration-300" />
        </div>
      </div>

      {/* Custom Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden w-[90vw] max-w-4xl">
            <div className="p-4">
              {/* Video inside modal */}
              <video controls autoPlay className="w-full h-full">
                <source src={videoSrc} type="video/mp4" />
              </video>
            </div>
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-xl text-white bg-gray-800 rounded-full px-1"
              onClick={handleCloseModal}
            >
              &#x2715; {/* X icon to close */}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoCard;
