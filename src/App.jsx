import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import './index.css'

export default function App() {
  return (
    <>
      <div className="text-neutral-300 antialiased selection:bg-gray-100 selection:text-black min-h-screen">
        {/* Fixed background layer */}
        <div className="container mx-auto px-8">
          <Navbar/>
          <Hero/>
          <Showcase/>
        </div>
      </div>
    </>
  );
}
