import { Box } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Cards } from "./Components/Cards/Cards";
import { Footer } from "./Components/Footer/Footer";
import { Navbar } from "./Components/Navbar/Navbar";

import { MainRouter } from "./MainRouter";
const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Cards />
      <Footer />
    </>
  );
};

export default App;
