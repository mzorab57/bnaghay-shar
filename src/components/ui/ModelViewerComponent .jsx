import React, { useState, useEffect } from "react";

const ModelViewerComponent = () => {
 

  return (
    <div className="container relative mx-auto w-full h-[500px] lg:h-[800px] lg:max-w-[1100px] overflow-hidden">
     
        {/* // Once loading is done, show the model */}
        <model-viewer
          src="/models/scene.gltf"
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
