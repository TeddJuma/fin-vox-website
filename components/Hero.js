function Hero() {
    try {
        const heroRef = React.useRef();
        const isVisible = useIntersectionObserver(heroRef);

        return (
            <section data-name="hero" ref={heroRef} className="section bg-green-50">
                <div className="container mx-auto px-6">
                    <div className={`scroll-reveal ${isVisible ? 'visible' : ''}`}>
                        <div className="scroll-reveal-content max-w-4xl mx-auto text-center">
                            <h1 data-name="hero-title" className="text-5xl md:text-7xl font-bold mb-6 text-black">
                                Secure. Seamless. <span className="gradient-text">Spoken.</span>
                            </h1>
                            <p data-name="hero-subtitle" className="text-xl md:text-2xl text-gray-600 mb-12">
                                Transform your banking experience with voice-activated AI technology
                            </p>
                            <div data-name="hero-cta" className="flex justify-center gap-4">
                                <button className="px-8 py-3 bg-green-600 text-white rounded-full hover:bg-yellow-500 transition-colors">
                                    Get Started
                                </button>
                                <button className="px-8 py-3 border-2 border-green-600 text-green-600 rounded-full hover:text-yellow-500 hover:border-yellow-500 transition-colors">
                                    <a> Learn More </a>
                                </button>
                            </div>
                            <div data-name="hero-animation" className="mt-16">
                                <i className="fas fa-microphone text-6xl text-green-600 hover:text-yellow-500 wave-animation"></i>
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
