import { FaGithub, FaDiscord} from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 p-4 shadow-lg">
            <div className="flex items-center justify-between px-8">
                <div className="flex items-center gap-4">
                    <a href="https://www.discord.gg/JRuthKb9E5" target="_blank" rel="noopener noreferrer" title="Discord">
                        <FaDiscord className="text-4xl hover:text-blue-600" />
                    </a>
                    <a href="https://github.com/xD499" target="_blank" rel="noopener noreferrer" title="GitHub">
                        <FaGithub className="text-4xl hover:text-gray-800" />
                    </a>
                </div>
            </div>
        </nav>
    );
}
