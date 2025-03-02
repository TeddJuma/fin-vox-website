function SolutionPage() {
    try {
        return (
            <div data-name="solution-page" className="bg-gray-900 min-h-screen">
                <Navbar />
                <div className="pt-24">
                    <Solution />
                </div>
                <Footer />
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
