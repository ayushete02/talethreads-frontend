"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface ScrollableSectionProps {
  title: string;
  children: React.ReactNode;
  showAllLink?: string;
}

export default function ScrollableSection({
  title,
  children,
  showAllLink,
}: ScrollableSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    return () => window.removeEventListener("resize", checkScrollability);
  }, [children]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 800;
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="mb-12 px-4 md:px-8 relative">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-5xl font-bold text-black font-benrock">{title}</h2>
      </div>

      <div className="relative group">
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={`absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg ${
            canScrollLeft
              ? "bg-primary hover:bg-primary/80 text-black opacity-0 group-hover:opacity-100"
              : "hidden"
          }`}
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={`absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg ${
            canScrollRight
              ? "bg-primary hover:bg-primary/80 text-black opacity-0 group-hover:opacity-100"
              : "hidden"
          }`}
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div
          ref={scrollContainerRef}
          onScroll={checkScrollability}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {children}

          {/* Show All Button at the end */}
          {showAllLink && (
            <Link
              href={showAllLink}
              className="min-w-[180px] sm:min-w-[200px] md:min-w-[240px] flex-shrink-0"
            >
              <div className="aspect-[2/3]  flex flex-col items-center justify-center gap-3 transition-all cursor-pointer">
                <ChevronRight className="w-16 h-16 text-primary border-primary border-3 p-2 rounded-full" />
                <span className="text-lg font-bold text-black">Show All</span>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
