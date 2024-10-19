
import { useState, useEffect } from "react";
import { FaArrowCircleDown } from "react-icons/fa";


export default function Hero() {
    const [blinkText, setBlinkText] = useState(' ');

    useEffect(() => {
        const interval = setInterval(() => {
            setBlinkText(prev => (prev === '_' ? ' ' : '_'));
        }, 650);
        return() => clearInterval(interval);
    }, []);
    const openLinkInNewTab = (url) => {
        window.open(url, '_blank');
    };

    return (
        <>
            <div className="relative flex flex-col justify-center items-center h-screen">
                <div className="relative text-left text-white space-y-10 ">
                    <h1 className="text-5xl font-bold md:text-7xl pt-1 mr-10" 
                    style={{
                            textShadow: '0 0 10px rgba(255,255,255,0.1), 0 0 20px rgba(255, 255, 255, 0.1), 0 0 30px rgba(255, 255, 255, 0.5)'
                        }}>

                        I'm D4{blinkText}
                    </h1>
                    <h3 className="text-2xl font-bold md:text-4xl"
                        style={{
                            textShadow: '0 0 10px rgba(255,255,255,0.1), 0 0 20px rgba(255, 255, 255, 0.1), 0 0 30px rgba(255, 255, 255, 0.5)'
                        }}>
                            UI/UX Designer, Python programmer, and futures trader.
                    </h3>
                    <div className="flex justify-center space-x-4 whitespace-nowrap">
                        <button className="px-6 py-3 md:px-8 md:py-4 bg-white md:text-xl text-black rounded-full text-lg hover:bg-[#89c099] hover:text-white transition duration-300" 
                        style={{boxShadow: '0 0 10px rgba(255,255,255,0.1), 0 0 20px rgba(255, 255, 255, 0.1), 0 0 30px rgba(255, 255, 255, 0.5)'}} onClick={()=>openLinkInNewTab('https://www.discord.gg/JRuthKb9E5')}>
                            Contact
                        </button>
                    </div>
                </div>   
                <div className="relative flex items-top justify-center py-10">
                    <FaArrowCircleDown className="text-4xl animate-bob"/>
                </div>
            </div>
            
        </>
    );
  }
  