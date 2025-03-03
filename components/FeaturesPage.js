function FeaturesPage() {
    try {
        return (
            <div data-name="features-page" className="bg-green-500 min-h-screen">
                <Navbar />
                <div className="pt-24">
                    <Features />
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
