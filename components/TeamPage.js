function TeamPage() {
    try {
        const teamRef = React.useRef();
        const isVisible = useIntersectionObserver(teamRef);

        const teamMembers = [
            {
                name: "Joanne Wendoh",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300",
                bio: "Overseeing the financial strategy and direction of Finvox AI, ensuring the app's fiscal health and growth."
            },
            {
                name: "Aisha Omar",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300",
                bio: "Leading the development of robust security measures to protect user data and ensure the app's integrity."
            },
            {
                name: "Henry Kimani",
                image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=300",
                bio: "Crafting intuitive and user-friendly experiences that make Finvox AI's features accessible to everyone."
            },
            {
                name: "Bethel Wanzo",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300",
                bio: "Scaling Finvox AI's infrastructure to meet growing demands, ensuring seamless performance and reliability."
            },
            {
                name: "Tedd Juma",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
                bio: "Building the front-end of Finvox AI, bringing the app's features to life with a focus on usability and design."
            }
        ];

        return (
            <div data-name="team-page" className="bg-green-600 min-h-screen">
                <Navbar />
                <section ref={teamRef} className="section pt-24">
                    <div className="container mx-auto px-6">
                        <div className={`scroll-reveal ${isVisible ? 'visible' : ''}`}>
                            <div className="scroll-reveal-content">
                                <h1 className="text-4xl font-bold mb-16 text-center">Our Team</h1>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                                    {teamMembers.map((member, index) => (
                                        <div key={index} data-name="team-member" className="card team-member-card text-center">
                                            <img 
                                                src={member.image} 
                                                alt={member.name}
                                                className="team-member-image mx-auto mb-4"
                                            />
                                            <h3 className="text-xl font-semibold mb-4">{member.name}</h3>
                                            <p className="text-gray-800">{member.bio}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <Footer /> */}
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
