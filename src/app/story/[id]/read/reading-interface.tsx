"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Maximize, Bookmark, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ReadingInterfaceProps {
  storyId: string;
}

export default function ReadingInterface({ storyId }: ReadingInterfaceProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div
      className={`min-h-screen ${
        isFullscreen
          ? "bg-black"
          : "bg-gradient-to-br from-blue-500 to-purple-600"
      }`}
    >
      {/* Reading Interface */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        {/* Exit Button */}
        {!isFullscreen && (
          <Link
            href={`/story/${storyId}`}
            className="absolute top-6 left-6 w-10 h-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all z-10"
          >
            <X className="w-4 h-4" />
          </Link>
        )}

        {/* Story Content */}
        <div className="max-w-4xl w-full">
          {/* Story Image/Visual */}
          <div className="mb-8 text-center">
            <div className="w-64 h-48 mx-auto bg-gradient-to-br from-pink-400 to-red-500 rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-center text-white">
                {/* Character illustrations would go here */}
                <div className="space-y-2">
                  <div className="w-8 h-8 bg-pink-300 rounded-full mx-auto"></div>
                  <div className="w-6 h-6 bg-red-300 rounded-full mx-auto"></div>
                  <div className="w-10 h-10 bg-yellow-300 rounded-full mx-auto"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Story Text */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 mx-auto max-w-2xl">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              TITLE OF THE STORY
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6">
                The Crimson Corsair, a tale of daring adventure and
                swashbuckling heroism, begins in the bustling port city of
                Nethelburg. Our protagonist, Captain Elias Thorne, a man of
                renowned skill and charisma, stands at the helm of his ship, The
                Sea Serpent, preparing for a voyage into uncharted waters. The
                air is thick with anticipation as the crew, a motley assortment
                of seasoned sailors and eager recruits, readies the vessel for
                departure. Thorne, with his weathered face and piercing gaze,
                surveys the scene, a mixture of excitement and determination
                etched upon his features.
              </p>

              <p className="mb-6 text-gray-500">
                His reputation precedes him, tales of his exploits spreading far
                beyond the harbors and marketplaces across the land. This
                journey, however, promises to be his most challenging yet, a
                quest for a legendary artifact said to possess unimaginable
                power. As the sun dips below the horizon, casting long shadows
                across the harbor, The Sea Serpent sets sail, its sails
                billowing in the wind, carrying Thorne and his crew toward an
                uncertain fate...
              </p>
            </div>

            {/* Reading Controls */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Previous
              </button>

              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleFullscreen}
                  className="text-gray-600 hover:text-gray-800"
                >
                  <Maximize className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <Bookmark className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <Settings className="w-4 h-4" />
                </Button>
              </div>

              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
                Next
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mt-8 text-center">
            <div className="flex justify-center gap-2 mb-4">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white bg-opacity-50 rounded-full"></div>
              <div className="w-2 h-2 bg-white bg-opacity-50 rounded-full"></div>
              <div className="w-2 h-2 bg-white bg-opacity-50 rounded-full"></div>
            </div>
            <p className="text-white text-sm opacity-75">Page 1 of 4</p>
          </div>
        </div>
      </div>
    </div>
  );
}
