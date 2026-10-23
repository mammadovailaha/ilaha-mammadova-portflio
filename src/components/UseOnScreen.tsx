import { useEffect, useRef, useState } from "react";

const UseOnScreen = (threshold = 0.5) => {
const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observedElement = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );
    if (observedElement) {
      observer.observe(observedElement);
    }
    return () => {
      if (observedElement) observer.unobserve(observedElement);
    };
  }, [threshold]);
  return { ref, isVisible };
};

export default UseOnScreen;
