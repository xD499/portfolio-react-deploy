import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Ws from './components/Live Price Chart/ws';
import './index.css'
export default function App() {
  return (
    <>
      <div className="text-neutral-300 antialiased selection:bg-gray-100 selection:text-black min-h-screen container mx-auto px-8">
          <Navbar/>
          <Hero/>
      </div>
    </>
  );
}
