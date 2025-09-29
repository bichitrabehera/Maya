import { useState } from 'react'
import './App.css'
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import SacredTexts from "./components/SacredTexts";
import ModernLife from "./components/ModernLife";
import PathToTruth from "./components/PathToTruth";
import Reflection from "./components/Reflection";

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <Philosophy />
      <SacredTexts />
      <ModernLife />
      <PathToTruth />
      <Reflection />
    </div>
  );
}

export default App;
