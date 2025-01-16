export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 p-4 shadow-lg rounded-sm backdrop-blur-md bg-gray/30">
            <div className="flex items-center justify-center px-8 gap-x-10">
                <a href="https://www.discord.gg/JRuthKb9E5" target="_blank" rel="noopener noreferrer" title="Discord">
                    <p className="bold">Join my Discord</p>
                </a>
            </div>
        </nav>
    );
}