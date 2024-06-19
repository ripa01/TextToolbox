import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar title="TextToolBox" />
      <Textform heading="Enter Your Text To Analyze" />
      <About />

    </>
  );
}

export default App;
