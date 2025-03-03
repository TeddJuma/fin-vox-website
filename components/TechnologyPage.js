function TechnologyPage() {
    try {
        return (
            <div data-name="technology-page" className="bg-green-500 min-h-screen">
                <Navbar />
                <div className="pt-24">
                    <TechStack />
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
