import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { MainRouter } from "./MainRouter";
const App: React.FC = () => {
  return (
    <>
      <MainRouter />
    </>
  );
};

export default App;
