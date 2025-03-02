function ImpactPage() {
    try {
        return (
            <div data-name="impact-page" className="bg-gray-900 min-h-screen">
                <Navbar />
                <div className="pt-24">
                    <Impact />
                </div>
                <Footer />
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
