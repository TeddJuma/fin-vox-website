function TechStack() {
    try {
        const techRef = React.useRef();
        const isVisible = useIntersectionObserver(techRef);

        return (
            <section data-name="tech-stack" ref={techRef} id="tech" className="section bg-gradient-to-br from-green-50 to-white">
                <div className="container mx-auto px-6">
                    <div className={`scroll-reveal ${isVisible ? 'visible' : ''}`}>
                        <div className="scroll-reveal-content">
                            <h2 className="text-4xl font-bold mb-16 text-center">Technology Stack</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                                <div data-name="tech-item" className="tech-item card text-center hover:bg-green-500">
                                    <i className="fab fa-react text-4xl text-blue-500 mb-4"></i>
                                    <h3 className="font-semibold">React.js</h3>
                                </div>
                                <div data-name="tech-item" className="tech-item card text-center hover:bg-green-500">
                                    <i className="fab fa-python text-4xl text-yellow-500 mb-4"></i>
                                    <h3 className="font-semibold">Python</h3>
                                </div>
                                <div data-name="tech-item" className="tech-item card text-center hover:bg-green-500">
                                    <i className="fas fa-brain text-4xl text-purple-600 mb-4"></i>
                                    <h3 className="font-semibold">AI Models</h3>
                                </div>
                                <div data-name="tech-item" className="tech-item card text-center hover:bg-green-500">
                                    <i className="fas fa-database text-4xl text-blue-700 mb-4"></i>
                                    <h3 className="font-semibold">Cloud Infrastructure</h3>
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
