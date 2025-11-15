import React, { useEffect, useState, useRef } from "react";

export const Counter: React.FC<{ endValue: string; duration?: number }> = ({
  endValue,
  duration = 2000,
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const target = parseInt(endValue.replace(/[^0-9]/g, ""));
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCount(Math.round(current));
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, endValue, duration]);

  return (
    <span ref={ref}>
      {count}
      {endValue.replace(/[0-9]/g, "")}
    </span>
  );
};

export default Counter;
