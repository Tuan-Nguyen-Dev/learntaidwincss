import React from "react";
import Navbar from "./components/Navbar";
import { Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Services/>
    </>
  );
};

export default App;
