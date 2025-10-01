"use client";

import Image from "next/image";
import { useState } from "react";

const comicCovers = [
  {
    id: "bravest-warriors",
    title: "BRAVEST WARRIORS",
    image: "/assets/reding-preference/bravest-warriors.png",
    colors: "from-red-400 to-primary",
  },
  {
    id: "scott-pilgrim",
    title: "SCOTT PILGRIM",
    image: "/assets/reding-preference/scott-piligrim.png",
    colors: "from-blue-400 to-purple-400",
  },
  {
    id: "peanuts",
    title: "PEANUTS",
    image: "/assets/reding-preference/peanuts.png",
    colors: "from-yellow-400 to-primary",
  },
];

export default function ReadingPreferencePage() {
  const [selectedType, setSelectedType] = useState<"stories" | "comics">(
    "stories"
  );

  const handleTypeSelect = (type: "stories" | "comics") => {
    setSelectedType(type);
  };

  return (
    <div className="relative flex justify-evenly overflow-hidden h-screen z-10 max-w-6xl mx-auto px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Choose Your Reading
          <br />
          Experience
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Scroll the pages or swipe the panels
        </p>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 ">
          <button
            onClick={() => handleTypeSelect("stories")}
            className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedType === "stories"
                ? "bg-primary text-white shadow-lg"
                : "bg-white text-gray-700 border border-gray-300 hover:border-gray-400"
            }`}
          >
            Stories
          </button>
          <button
            onClick={() => handleTypeSelect("comics")}
            className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedType === "comics"
                ? "bg-primary text-white shadow-lg"
                : "bg-white text-gray-700 border border-gray-300 hover:border-gray-400"
            }`}
          >
            Comics
          </button>
        </div>
      </div>

      {/* Comic Cards Display */}
      <div className="flex justify-center items-center gap-5 absolute  -bottom-10">
        {comicCovers.map((comic, index) => (
          <div
            key={comic.id}
            className={`relative transform  transition-all duration-500 ${
              index === 0
                ? "rotate-[-10deg] pt-20 scale-150 z-10"
                : index === 1
                ? "rotate-0 scale-150 z-20"
                : "rotate-[10deg] pt-20 scale-150 z-10"
            }`}
          >
            <div className={`w-64 h-80`}>
              <Image
                width={128}
                height={128}
                src={comic.image}
                alt={`${comic.title} cover`}
                className="w-full h-full rounded-[50px] "
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
