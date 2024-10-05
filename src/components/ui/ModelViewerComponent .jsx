import React from "react";

const ModelViewerComponent = () => {
  return (
    <div className="container relative mx-auto w-full h-[500px]  lg:h-[800px] lg:max-w-[1100px] overflow-hidden">
      <model-viewer
        src="/tower.glb"
        alt="3D House Model"
        auto-rotate
        camera-controls
        loading="lazy" // Enable lazy loading
        shadow-intensity="1"
        shadow-softness="0.75"
        //  min-camera-orbit="auto auto 0m"
        //  max-camera-orbit="auto auto 00m"
        environment-image="neutral" // Adds realistic lighting environment
        exposure="1" // Controls the brightness
        // Zoom out limit
        min-camera-orbit="auto 0deg 0m"
        // Zoom in limit
        // max-camera-orbit="auto 90deg 1m"
        // Min zoom-in (closer view)  bo nzik krdnaway model ka la saratawa pshan adre
        // min-field-of-view="0deg"
        // Max zoom-out (farther view) bo dwr krdnaway model ka la saratawa pshan adre
        // max-field-of-view="0deg"
        style={{ width: "100%", height: "100%" }}
        ar
      ></model-viewer>

      {/* Div to cover the Sketchfab logo */}
      <div className="absolute bottom-0 right-0 w-12 bg-white h-[50px]  z-10"></div>
    </div>
  );
};

export default ModelViewerComponent;
