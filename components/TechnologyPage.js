function TechnologyPage() {
    try {
        return (
            <div data-name="technology-page" className="bg-gray-900 min-h-screen">
                <Navbar />
                <div className="pt-24">
                    <TechStack />
                </div>
                <Footer />
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
