function Hero() {
    try {
        const heroRef = React.useRef();
        const isVisible = useIntersectionObserver(heroRef);

        return (
            <section id="hero" data-name="hero" ref={heroRef} className="section bg-green-50 flex items-center h-screen">
                <div className="container mx-auto flex justify-center">
                    <div className="flex flex-row items-center">
                        {/* Image Section */}
                        <div className="w-full md:w-1/2 h-full md:h-screen">
                            <img src="https://finvox-frontend-s6e2.vercel.app/static/media/Finvox.d9af9d9678e49d07416c.png" alt="Finvox AI Logo" className="object-cover h-full w-full" />
                        </div>

                        {/* Text and Buttons Section */}
                        <div className="w-full md:w-1/2 p-12 text-center md:text-left">
                            <div className={`scroll-reveal ${isVisible ? 'visible' : ''}`}>
                                <div className="scroll-reveal-content max-w-4xl mx-auto">
                                    <h1 data-name="hero-title" className="text-5xl md:text-7xl font-bold mb-6 text-black">
                                        Secure. Seamless. <span className="gradient-text">Spoken.</span>
                                    </h1>
                                    <p data-name="hero-subtitle" className="text-xl md:text-2xl text-gray-600 mb-12">
                                        Transform your banking experience with voice-activated AI technology
                                    </p>
                                    <div data-name="hero-cta" className="flex justify-center md:justify-start gap-4">
                                        <button className="px-8 py-3 bg-green-600 text-white rounded-full hover:bg-yellow-500 transition-colors">
                                           <a href="https://finvox-frontend-s6e2.vercel.app/"> Get Started </a>
                                        </button>
                                        <button className="px-8 py-3 border-2 border-green-600 text-green-600 rounded-full hover:text-yellow-500 hover:border-yellow-500 transition-colors">
                                            <a> Learn More </a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
