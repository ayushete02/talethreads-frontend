"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface SearchResult {
  id: number;
  title: string;
  genre: string;
  coverImage: string;
}

export default function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Mock search data
  const allStories: SearchResult[] = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Story Title ${i + 1}`,
    genre: ["Romance", "Thriller", "Sci-Fi", "Drama", "Horror"][i % 5],
    coverImage: [
      "/assets/reding-preference/scott-piligrim.png",
      "/assets/reding-preference/bravest-warriors.png",
      "/assets/reding-preference/peanuts.png",
    ][i % 3],
  }));

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
        setSearchQuery("");
        setResults([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = allStories.filter((story) =>
        story.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [searchQuery]);

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
    setSearchQuery("");
    setResults([]);
  };

  return (
    <div ref={searchRef} className="relative">
      {!isExpanded ? (
        <button
          onClick={handleExpand}
          className="inline-flex items-center justify-center h-9 w-9 text-black hover:bg-white/20 rounded-full transition-colors"
        >
          <Search className="h-5 w-5" />
        </button>
      ) : (
        <div className="absolute right-0 top-0 z-50">
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 w-[400px]">
            {/* Search Input */}
            <div className="flex items-center gap-2 p-3 border-b">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Lorem ipsum"
                className="flex-1 outline-none text-gray-900 placeholder:text-gray-400"
              />
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Search Results */}
            {searchQuery && (
              <div className="max-h-[500px] overflow-y-auto">
                {results.length > 0 ? (
                  <div className="p-4">
                    <div className="grid grid-cols-5 gap-3">
                      {results.map((story) => (
                        <Link
                          key={story.id}
                          href={`/story/${story.id}`}
                          onClick={handleClose}
                        >
                          <div className="group cursor-pointer">
                            <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-gray-100 mb-2">
                              <Image
                                src={story.coverImage}
                                alt={story.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform"
                                sizes="80px"
                              />
                            </div>
                            <h3 className="text-xs font-semibold text-gray-900 truncate">
                              {story.title}
                            </h3>
                            <p className="text-xs text-primary">{story.genre}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="p-8 text-center text-gray-500">
                    No stories found
                  </div>
                )}
              </div>
            )}

            {/* Empty State */}
            {!searchQuery && (
              <div className="p-8 text-center text-gray-400">
                <Search className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p className="text-sm">Start typing to search stories...</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
