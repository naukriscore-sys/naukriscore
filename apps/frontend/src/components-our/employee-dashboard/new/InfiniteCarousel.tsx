import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Slide {
  id: number;
  title: string;
  description: string;
  bgColor: string;
}

export const InfiniteCarousel = () => {
  const slides: Slide[] = [
    {
      id: 1,
      title: "We're Launching Our App!",
      description: "Get ready for the future of career scoring.",
      bgColor: "bg-blue-50", // soft blue
    },
    {
      id: 2,
      title: "Join NaukriScore Early Access",
      description: "Be among the first to experience our platform.",
      bgColor: "bg-blue-100", // slightly deeper blue
    },
    {
      id: 3,
      title: "Track Your Career Progress",
      description: "Monitor your growth with detailed analytics.",
      bgColor: "bg-blue-200", // highlight slide
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused, slides.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <Card
      className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg h-52 transition-all duration-300 bg-white border border-gray-100"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center ${slide.bgColor} ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-col items-center justify-center h-full px-6 text-center">
              <h2 className="text-xl font-semibold mb-2 text-blue-700">
                {slide.title}
              </h2>
              <p className="text-sm text-gray-700 max-w-xs leading-snug">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-sm border border-gray-200"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-5 w-5 text-blue-600" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-sm border border-gray-200"
        onClick={goToNext}
      >
        <ChevronRight className="h-5 w-5 text-blue-600" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-blue-600 w-5" : "bg-gray-400 w-2"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </Card>
  );
};
