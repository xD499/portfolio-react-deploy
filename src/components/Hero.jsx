
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
                    <h1> I'm D4{blinkText} </h1>
                    <h2>
                            UI/UX Designer, Python programmer, and futures trader.
                    </h2>
                    <div className="flex justify-center space-x-4 whitespace-nowrap">
                        <button 
                            className="btn md:text-xl text-lg hover:bg-[#89c099] hover:text-white"
                            onClick={() => openLinkInNewTab('https://www.discord.gg/JRuthKb9E5')}
                            >
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
  