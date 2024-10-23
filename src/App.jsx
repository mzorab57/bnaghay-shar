import React from "react";
import Navbar from "./layouts/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";

const App = () => {
 
  

  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
     
    </BrowserRouter>
  );
};

export default App;
