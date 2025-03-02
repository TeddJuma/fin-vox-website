function Navbar() {
    try {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);

        const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
        };

        const closeMenu = () => {
            setIsMenuOpen(false);
        };

        const smoothScrollTo = (id) => {
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        };

        return (
            <nav data-name="navbar" className="fixed w-full z-50 px-4">
                <div className="floating-nav">
                    <div className="container mx-auto px-6 py-4">
                        <div className="flex items-center justify-between">
                            <div data-name="logo" className="flex items-center space-x-2 text-2xl font-bold">
                                <img src="https://finvox-frontend-s6e2.vercel.app/static/media/Finvox.d9af9d9678e49d07416c.png" alt="Finvox AI Logo" className="w-8 h-8" />
                                <span className="gradient-text">Finvox AI</span>
                            </div>
                            
                            {/* Mobile menu button */}
                            <button 
                                data-name="mobile-menu-button"
                                className="md:hidden text-gray-600 hover:text-green-400 focus:outline-none"
                                onClick={toggleMenu}
                            >
                                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                            </button>

                            {/* Desktop menu */}
                            <div data-name="nav-links" className="hidden md:flex space-x-8">
                                <a href="#home" onClick={(e) => {
                                    e.preventDefault();
                                    smoothScrollTo('home');
                                }} className="text-gray-600 hover:text-green-400 transition-colors">Home</a>
                                <a href="#features" className="text-gray-600 hover:text-green-400 transition-colors">Features</a>
                                <a href="#solution" className="text-gray-600 hover:text-green-400 transition-colors">Solution</a>
                                <a href="#tech" onClick={(e) => {
                                    e.preventDefault();
                                    smoothScrollTo('tech');
                                }} className="text-gray-600 hover:text-green-400 transition-colors">Technology</a>
                                <a href="#impact" onClick={(e) => {
                                    e.preventDefault();
                                    smoothScrollTo('impact');
                                }} className="text-gray-600 hover:text-green-400 transition-colors">Impact</a>
                                <a href="/team" className="text-gray-600 hover:text-green-400 transition-colors">Our Team</a>
                            </div>
                        </div>

                        {/* Mobile menu */}
                        <div 
                            data-name="mobile-menu"
                            className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}
                        >
                            <div className="flex flex-col space-y-4">
                                <a href="#home" onClick={(e) => {
                                    e.preventDefault();
                                    smoothScrollTo('home');
                                    closeMenu();
                                }} className="text-black hover:text-green-400 transition-colors">Home</a>
                                <a href="/features" onClick={closeMenu} className="text-black hover:text-green-400 transition-colors">Features</a>
                                <a href="/solution" onClick={closeMenu} className="text-black hover:text-green-400 transition-colors">Solution</a>
                                <a href="#tech" onClick={(e) => {
                                    e.preventDefault();
                                    smoothScrollTo('tech');
                                    closeMenu();
                                }} className="text-black hover:text-green-400 transition-colors">Technology</a>
                                <a href="#impact" onClick={(e) => {
                                    e.preventDefault();
                                    smoothScrollTo('impact');
                                    closeMenu();
                                }} className="text-black hover:text-green-400 transition-colors">Impact</a>
                                <a href="/team" onClick={closeMenu} className="text-black hover:text-green-400 transition-colors">Our Team</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
