import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}

export default App;
