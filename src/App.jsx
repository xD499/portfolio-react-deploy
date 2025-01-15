import Navbar from "./components/Navbar";
import Chart from './components/Chart';
import './index.css'
export default function App() {
  return (
    <>
      <div className="text-neutral-300 antialiased selection:bg-gray-100 selection:text-black min-h-screen container mx-auto px-8">
          <Navbar/>
          <Chart/>
      </div>
    </>
  );
}
