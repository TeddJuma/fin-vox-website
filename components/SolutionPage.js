function SolutionPage() {
    try {
        return (
            <div data-name="solution-page" className="bg-green-500 min-h-screen">
                <Navbar />
                <div className="pt-24">
                    <Solution />
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
