import React, { useState, useEffect } from "react";

const ModelViewerComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay of 3 seconds (you can adjust this value)
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 3 seconds
    }, 4000); // 3000 milliseconds = 3 seconds

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container relative mx-auto w-full h-[500px] lg:h-[800px] lg:max-w-[1100px] overflow-hidden">
      {isLoading && (
        // Loading indicator while the model is loading
        <div className="flex justify-center items-center w-full h-full">
          <p className="text-lg font-bold">Loading 3D Model...</p>
        </div>
      )}
        {/* // Once loading is done, show the model */}
        <model-viewer
          src="/tower DRACO webp (128).glb"
          alt="3D House Model"
          auto-rotate
          camera-controls
          loading="lazy"
          shadow-intensity="1"
          shadow-softness="0.75"
          environment-image="neutral"
          exposure="1"
          min-camera-orbit="auto 0deg 0m"
          style={{ width: "100%", height: "100%" }}
          ar
        ></model-viewer>
      

      {/* Div to cover the Sketchfab logo */}
      <div className="absolute bottom-0 right-0 w-12 bg-white h-[50px] z-10"></div>
    </div>
  );
};

export default ModelViewerComponent;
