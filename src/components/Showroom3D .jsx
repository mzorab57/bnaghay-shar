import React from 'react';

const Showroom3D = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-20 px-3">
      
      {/* Heading Section */}
      <div className="animate-fadeInUp mb-8 ">
        <h1 className="text-3xl font-bold text-center">Explore Our Showroom in 3D</h1>
      </div>

      {/* 3D Showroom for Desktop */}
      <div className="">
        <iframe
          className=" w-full h-[250px] sm:w-[400px] sm:h-[300px]  md:w-[700px] md:h-[450px] xl:w-[1100px] xl:h-[750px]"
          src="https://camera1.mattiraq.com/"
          frameBorder="0"
          allowFullScreen
          allow="xr-spatial-tracking"
        ></iframe>
      </div>

      {/* 3D Showroom for Mobile and Tablet */}
      {/* <div className="block md:hidden">
        <iframe
          className="w-full h-[250px]"
          src="https://camera1.mattiraq.com/"
          frameBorder="0"
          allowFullScreen
          allow="xr-spatial-tracking"
        ></iframe>
      </div> */}
      
    </div>
  );
};

export default Showroom3D;
