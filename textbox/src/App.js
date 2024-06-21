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
          <Route exact path="/" element={<Textform heading = "Enter your text to analyse" />} />
          <Route exact path="/about" element={<About />} />
        </Routes>

      </BrowserRouter>
    

    </>
  );
}

export default App;
