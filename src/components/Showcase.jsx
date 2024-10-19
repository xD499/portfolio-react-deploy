import { useEffect, useState } from 'react';
import { FaPython } from 'react-icons/fa';
import { FaBitcoin } from 'react-icons/fa';
import img_1 from '../assets/BB9.png'
import img_2 from '../assets/DBO.jpg'
import img_3 from '../assets/tbot.png'

export default function Showcase() {
    
    const images = [img_1, img_2, img_3];
    const [imgIndex, setImgIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setImgIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);
    const openLinkInNewTab = (url) => {
        window.open(url, '_blank');
    };

    return(
        <>
            <div className="relative flex flex-col justify-center items-center min-h-screen"
            style={{
                backgroundImage: `url(${images[imgIndex]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'background-image 1s ease-in-out',
                boxShadow: '0 0 10px rgba(255,255,255,0.1), 0 0 20px rgba(255, 255, 255, 0.1), 0 0 30px rgba(255, 255, 255, 0.5)'
            }}>
                <div className='absolute inset-0 bg-black opacity-50 z-0'/>
                <div className="relative text-center text-white space-y-10 ">
                    <h1 className="text-5xl font-bold md:text-7xl pt-1 mr-10" style={{
                            textShadow: '0 0 10px rgba(255,255,255,0.1), 0 0 20px rgba(255, 255, 255, 0.1), 0 0 30px rgba(255, 255, 255, 0.5)'
                        }}>Algorithm Developer</h1>
                    <h3 className="text-2xl font-bold md:text-4xl"
                        style={{
                            textShadow: '0 0 10px rgba(255,255,255,0.1), 0 0 20px rgba(255, 255, 255, 0.1), 0 0 30px rgba(255, 255, 255, 0.5)'
                        }}>Take human error off the table and trade algorithmically</h3>
                    <button className="px-6 py-3 md:px-8 md:py-4 bg-white md:text-xl text-black rounded-full text-lg hover:bg-[#89c099] hover:text-white transition duration-300" 
                    style={{boxShadow: '0 0 10px rgba(255,255,255,0.1), 0 0 20px rgba(255, 255, 255, 0.1), 0 0 30px rgba(255, 255, 255, 0.5)'}} onClick={()=>openLinkInNewTab('https://www.tradingview.com/u/D499/#published-scripts')}>
                        Projects
                    </button>
                </div>
                
                <div className='m-8 flex items-center justify-center gap-4 z-50'>
                    <FaPython className="text-4xl"/>
                    <FaBitcoin className="text-4xl"/>
                </div>
                
            </div>
        </>
    )
}