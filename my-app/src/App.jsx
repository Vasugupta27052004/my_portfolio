import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav.jsx";

import Home from "./components/Home.jsx";
import Work from "./components/Work.jsx";
import Contact from "./components/Contact.jsx";





export default function App() {
  return (
    <>
        <Nav />

    
       <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
      
          <Route path="/contact" element={<Contact />} />
        </Routes> 
      </div> 
   
    </>
  );
}
