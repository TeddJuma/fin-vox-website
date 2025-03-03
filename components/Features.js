function Features() {
    try {
        const featuresRef = React.useRef();
        const isVisible = useIntersectionObserver(featuresRef);

        const features = [
            {
                icon: "fa-mobile-screen",
                title: "Voice-Powered Mobile Payments",
                description: "Execute hands-free transactions with simple voice commands",
                color: "text-yellow-500" // Bright Yellow
            },
            {
                icon: "fa-fingerprint",
                title: "AI Voice Authentication",
                description: "Secure biometric verification through advanced voice recognition",
                color: "text-green-500" // Vibrant Orange
            },
            {
                icon: "fa-bluetooth",
                title: "BLE-Powered AirTag",
                description: "Next-gen merchant transactions replacing traditional NFC",
                color: "text-blue-500" // Deep Blue
            },
            {
                icon: "fa-hand-pointer",
                title: "Tap-to-Pay",
                description: "Instant payments without scanning or QR codes",
                color: "text-purple-500" // Rich Purple
            },
            {
                icon: "fa-cube",
                title: "Built on Web3",
                description: "Decentralized infrastructure for enhanced privacy and security",
                color: "text-pink-500" // Pastel Pink
            },
            {
                icon: "fa-globe",
                title: "International Transactions",
                description: "Seamless cross-border payments with merchant codes",
                color: "text-teal-500" // Fresh Teal
            }
        ];

        return (
            <section data-name="features" ref={featuresRef} id="features" className="section bg-green-600">
                <div className="container mx-auto px-6">
                    <div className={`scroll-reveal ${isVisible ? 'visible' : ''}`}>
                        <div className="scroll-reveal-content">
                            <h2 className="text-4xl font-bold mb-16 text-center text-white">Core Features</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {features.map((feature, index) => (
                                    <div key={index} data-name="feature-card" className="card text-center">
                                        <i className={`fas ${feature.icon} feature-icon ${feature.color} text-4xl mb-4`}></i>
                                        <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                                        <p className="text-black">{feature.description}</p>
                                    </div>
                                ))}
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
