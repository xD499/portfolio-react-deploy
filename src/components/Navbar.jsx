
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 mb-20 flex items-center justify-between">
            <div className="m-8 flex items-center justify-center gap-4">
                <FaGithub className="text-4xl"/>
                
                <a href="https://www.discord.gg/JRuthKb9E5" target="_blank" rel="noopener noreferrer">
                    <FaDiscord className="text-4xl"/>
                </a>
            </div>
        </nav>
    )
}