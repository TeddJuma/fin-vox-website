function FAQs() {
    try {
        const faqsRef = React.useRef();
        const isVisible = useIntersectionObserver(faqsRef);

        const faqs = [
            {
                question: "What is Finvox AI?",
                answer: "Finvox AI is a cutting-edge voice-activated banking solution designed to simplify transactions and enhance user experience."
            },
            {
                icon: "fa-lock",
                question: "Is Finvox AI secure?",
                answer: "Yes, Finvox AI uses advanced AI voice authentication and decentralized infrastructure to ensure secure transactions."
            },
            {
                question: "How does voice-powered mobile payment work?",
                answer: "Voice-powered mobile payments allow users to execute transactions using simple voice commands, eliminating the need for manual input."
            },
            {
                question: "Can I use Finvox AI for international transactions?",
                answer: "Yes, Finvox AI supports seamless cross-border payments with merchant codes, making it easy to conduct international transactions."
            },
            {
                question: "What devices are compatible with Finvox AI?",
                answer: "Finvox AI is compatible with most modern smartphones and devices that support voice commands."
            }
        ];

        return (
            <section data-name="faqs" ref={faqsRef} id="faqs" className="section bg-gray-100">
                <div className="container mx-auto px-6">
                    <div className={`scroll-reveal ${isVisible ? 'visible' : ''}`}>
                        <div className="scroll-reveal-content">
                            <h2 className="text-4xl font-bold mb-16 text-center">Frequently Asked Questions</h2>
                            <div className="flex flex-col space-y-8">
                                {faqs.map((faq, index) => (
                                    <div key={index} data-name="faq-card" className="bg-white p-8 rounded-lg shadow-md">
                                        <h3 className="text-lg font-semibold mb-4">{faq.question}</h3>
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
