import React, { useState, useEffect } from "react";
import Navbar from "./layouts/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay of 5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 5 seconds
    }, 7000); // 5000 milliseconds = 5 seconds

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      
      {isLoading && (
        <div className="fixed inset-0 flex justify-center items-center bg-black z-50">
          <div className="text-lg text-white">Loading...</div>
        </div>
      )}
      
       <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
