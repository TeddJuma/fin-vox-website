function App() {
    const [currentPage, setCurrentPage] = React.useState(window.location.hash.slice(1) || 'home');

    React.useEffect(() => {
        const handleHashChange = () => {
            setCurrentPage(window.location.hash.slice(1) || 'home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return (
                    <div>
                        <Hero />
                        <Solution />
                        <Features />
                        <TechStack />
                        {/* <Impact />
                        <TeamPage /> */}
                    </div>
                );
            case 'features':
                return <FeaturesPage />;
            case 'solution':
                return <SolutionPage />;
            case 'tech':
                return <TechnologyPage />;
            case 'impact':
                return <ImpactPage />;
            case 'team':
                return <TeamPage />;
            default:
                return (
                    <div>
                        <Hero />
                        <Solution />
                        <Features />
                        <TechStack />
                        {/* <Impact />
                        <TeamPage /> */}
                    </div>
                );
        }
    };

    return (
        <div data-name="app">
            <Navbar />
            {renderPage()}
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
