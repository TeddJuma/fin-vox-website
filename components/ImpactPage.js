function ImpactPage() {
    try {
        return (
            <div data-name="impact-page" className="bg-green-500 min-h-screen">
                <Navbar />
                <div className="pt-24">
                    <Impact />
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
