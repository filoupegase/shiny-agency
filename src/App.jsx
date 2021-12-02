import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Header from "./pages/Header";
import NotFound from "./pages/NotFound";
import Freelances from "./pages/Freelances";


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} strict exact />
        <Route path="/freelances" element={<Freelances />} strict exact />
        <Route path="/survey/:questionNumber" element={<Survey />} strict exact />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;