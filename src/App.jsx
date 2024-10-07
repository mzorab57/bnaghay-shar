import React, { useState } from "react";
import Navbar from "./layouts/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <BrowserRouter>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <AppRoutes />
     
    </BrowserRouter>
  );
};

export default App;
