import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LineGraph from "./components/Line"
import './index.css'
import React from 'react'
export default function App() {
  return (
    <>
      <div className="text-neutral-300 antialiased selection:bg-gray-100 selection:text-black min-h-screen container mx-auto px-8">
          <Navbar/>
          <Hero/>
          <LineGraph/>
      </div>
    </>
  );
}
