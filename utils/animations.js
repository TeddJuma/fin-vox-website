function useIntersectionObserver(elementRef, threshold = 0.1) {
    try {
        const [isVisible, setIsVisible] = React.useState(false);

        React.useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    setIsVisible(entry.isIntersecting);
                },
                { threshold }
            );

            const element = elementRef.current;
            if (element) {
                observer.observe(element);
            }

            return () => {
                if (element) {
                    observer.unobserve(element);
                }
            };
        }, [elementRef, threshold]);

        return isVisible;
    } catch (error) {
        reportError(error);
        return false;
    }
}
