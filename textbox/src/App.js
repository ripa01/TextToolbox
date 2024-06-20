import "./App.css";
import React from 'react';
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import Alert from "./components/Alert";


function App() {
  return (
    <>
      <Navbar title="TextToolBox" />
      <Alert/>
      <Textform heading="Enter Your Text To Analyze" />
      <About />
    

    </>
  );
}

export default App;
