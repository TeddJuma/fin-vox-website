function Navbar() {
    try {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);

        const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
        };

        const closeMenu = () => {
            setIsMenuOpen(false);
        };

        const handleLinkClick = (hash) => {
            window.location.hash = hash;
            closeMenu();
        };

        const handleSmoothScroll = (e, id) => {
            e.preventDefault();
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
            closeMenu();
        };

        const handleHomeLinkClick = (e) => {
            e.preventDefault();
            window.location.hash = '';
            document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
            closeMenu();
        };

        const handleSectionLinkClick = (e, id) => {
            e.preventDefault();
            closeMenu();

            if (window.location.pathname === '/') {
                handleSmoothScroll(e, id);
            } else {
                window.location.href = '/';
                window.addEventListener('load', function() {
                    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
                }, { once: true });
            }
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
                                <a href="#" onClick={handleHomeLinkClick} className="text-gray-600 hover:text-green-400 transition-colors">Home</a>
                                <a href="#" onClick={(e) => handleSectionLinkClick(e, 'features')} className="text-gray-600 hover:text-green-400 transition-colors">Features</a>
                                <a href="#" onClick={(e) => handleSectionLinkClick(e, 'solution')} className="text-gray-600 hover:text-green-400 transition-colors">Solution</a>
                                <a href="#" onClick={(e) => handleSectionLinkClick(e, 'tech')} className="text-gray-600 hover:text-green-400 transition-colors">Technology</a>
                            </div>
                        </div>

                        {/* Mobile menu */}
                        <div 
                            data-name="mobile-menu"
                            className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}
                        >
                            <div className="flex flex-col space-y-4">
                                <a href="#" onClick={handleHomeLinkClick} className="text-black hover:text-green-400 transition-colors">Home</a>
                                <a href="#" onClick={(e) => handleSectionLinkClick(e, 'features')} className="text-black hover:text-green-400 transition-colors">Features</a>
                                <a href="#" onClick={(e) => handleSectionLinkClick(e, 'solution')} className="text-black hover:text-green-400 transition-colors">Solution</a>
                                <a href="#" onClick={(e) => handleSectionLinkClick(e, 'tech')} className="text-black hover:text-green-400 transition-colors">Technology</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    } catch (error) {
        console.error("Error in Navbar:", error);
        return <div>Error loading Navbar</div>;
    }
}
