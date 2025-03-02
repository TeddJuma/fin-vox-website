function ProblemStatement() {
    try {
        const problemRef = React.useRef();
        const isVisible = useIntersectionObserver(problemRef);

        return (
            <section data-name="problem" ref={problemRef} className="section bg-green-600">
                <div className="container mx-auto px-6">
                    <div className={`scroll-reveal ${isVisible ? 'visible' : ''}`}>
                        <div className="scroll-reveal-content max-w-4xl mx-auto text-black">
                            <h2 className="text-4xl font-bold mb-12 text-center text-black">The Challenge in Modern Banking</h2>
                            <div className="grid md:grid-cols-3 gap-8 ">
                                <div data-name="problem-card" className="card">
                                    <i className="fas fa-lock feature-icon"></i>
                                    <h3 className="text-xl font-semibold mb-4 ">Security Vulnerabilities</h3>
                                    <p className="text-black">Traditional authentication methods are increasingly vulnerable to sophisticated cyber attacks.</p>
                                </div>
                                <div data-name="problem-card" className="card">
                                    <i className="fas fa-clock feature-icon"></i>
                                    <h3 className="text-xl font-semibold mb-4">Time-Consuming Process</h3>
                                    <p className="text-black">Complex authentication steps lead to friction and delays in financial transactions.</p>
                                </div>
                                <div data-name="problem-card" className="card">
                                    <i className="fas fa-ban feature-icon "></i>
                                    <h3 className="text-xl font-semibold mb-4">Accessibility Barriers</h3>
                                    <p className="text-black">Current solutions often exclude users with visual or physical impairments.</p>
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
