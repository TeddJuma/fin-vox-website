function Footer() {
    try {
        const handleLinkClick = (hash) => {
            window.location.hash = hash;
        };

        return (
            <footer data-name="footer" className="footer">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-12">
                        <div data-name="footer-about">
                            <h3 className="text-xl font-bold mb-4 gradient-text">Finvox AI</h3>
                            <p className="text-gray-800">Revolutionizing financial transactions with voice-powered AI technology.</p>
                        </div>
                        <div data-name="footer-links">
                            <h4 className="text-lg font-semibold mb-4 text-black">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="#home" onClick={(e) => {
                                    e.preventDefault();
                                    handleLinkClick('home');
                                }} className="footer-link">Home</a></li>
                                <li><a href="#features" onClick={(e) => {
                                    e.preventDefault();
                                    handleLinkClick('features');
                                }} className="footer-link">Features</a></li>
                                <li><a href="#solution" onClick={(e) => {
                                    e.preventDefault();
                                    handleLinkClick('solution');
                                }} className="footer-link">Solution</a></li>
                                <li><a href="#tech" onClick={(e) => {
                                    e.preventDefault();
                                    handleLinkClick('tech');
                                }} className="footer-link">Technology</a></li>
                                <li><a href="#impact" onClick={(e) => {
                                    e.preventDefault();
                                    handleLinkClick('impact');
                                }} className="footer-link">Impact</a></li>
                                <li><a href="#team" onClick={(e) => {
                                    e.preventDefault();
                                    handleLinkClick('team');
                                }} className="footer-link">Our Team</a></li>
                            </ul>
                        </div>
                        <div data-name="footer-contact">
                            <h4 className="text-lg font-semibold mb-4 text-black">Contact</h4>
                            <ul className="space-y-2">
                                <li className="footer-link"> <a href="mailto:info@finvox.ai"> info@finvox.com </a> </li>
                                <li className="footer-link"> <a href="tel:+15551234567">+254 740 682 018 </a> </li>
                            </ul>
                        </div>
                        <div data-name="footer-social">
                            <h4 className="text-lg font-semibold mb-4 text-gray-800">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="text-2xl footer-link">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="text-2xl footer-link">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="#" className="text-2xl footer-link">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
                        <p>&copy; 2025 Finvox AI. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
