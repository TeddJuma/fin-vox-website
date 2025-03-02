function App() {
    try {
        const path = window.location.pathname;

        switch (path) {
            case '/features':
                return <Navbar /> && <FeaturesPage /> && <Footer />;
            case '/solution':
                return <Navbar /> && <SolutionPage /> && <Footer />;
            case '/tech':
                return <TechnologyPage />;
            case '/impact':
                return <ImpactPage />;
            case '/team':
                return <TeamPage />;
            default:
                return (
                    <div data-name="app">
                        <Navbar />
                        <Hero />
                        <ProblemStatement />
                        <Solution />
                        <Features />
                        <TechStack />
                        <Impact />
                        <TeamPage />
                        <Footer />
                    </div>
                );
        }
    } catch (error) {
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
