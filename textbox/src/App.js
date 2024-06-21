import "./App.css";
import React from 'react';
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
// import Alert from "./components/Alert";

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
  <BrowserRouter>
      <Navbar title="TextToolBox"  />
      {/* <Alert />  */}
        <Routes>
          <Route path="/" element={<Textform heading = "Enter your text to analyse" />} />
          <Route path="about" element={<About />} />
        </Routes>

      </BrowserRouter>
    

    </>
  );
}

export default App;
