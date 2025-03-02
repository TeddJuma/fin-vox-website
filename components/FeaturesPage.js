function FeaturesPage() {
    try {
        return (
            <div data-name="features-page" className="bg-gray-900 min-h-screen">
                <Navbar />
                <div className="pt-24">
                    <Features />
                </div>
                <Footer />
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
