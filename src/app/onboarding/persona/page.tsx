'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AppHeader from '@/components/layout/app-header';
import Footer from '@/components/layout/footer';



const genres = [
  { id: 'sci-fi', label: 'Sci-fi' },
  { id: 'fantasy', label: 'Fantasy' },
  { id: 'thriller', label: 'Thriller' },
  { id: 'horror', label: 'Horror' },
  { id: 'romance', label: 'Romance' },
];

export default function PersonaSetupPage() {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(1);

  const handleGenreToggle = (genreId: string) => {
    setSelectedGenres(prev => 
      prev.includes(genreId)
        ? prev.filter(id => id !== genreId)
        : [...prev, genreId]
    );
  };

  const handleNext = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else {
      // Navigate to reading preference
      window.location.href = '/onboarding/reading-preference';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader />

      <div className="max-w-2xl mx-auto p-8">
        {/* Progress */}
        <div className="text-center mb-8">
          <p className="text-sm text-gray-600 mb-2">QUESTIONS {currentStep}/6</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 6) * 100}%` }}
            ></div>
          </div>
        </div>

        {currentStep === 1 && (
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-12">
              What genres do you enjoy most?
            </h1>

            <div className="space-y-4 mb-12">
              {genres.map((genre) => (
                <Button
                  key={genre.id}
                  onClick={() => handleGenreToggle(genre.id)}
                  variant={selectedGenres.includes(genre.id) ? "default" : "outline"}
                  className="w-full p-6 h-auto text-left justify-between"
                  size="lg"
                >
                  <span className="flex-1">{genre.label}</span>
                  <div className={`w-6 h-6 rounded-full border-2 ${
                    selectedGenres.includes(genre.id)
                      ? 'bg-white border-white'
                      : 'border-gray-400'
                  }`}>
                    {selectedGenres.includes(genre.id) && (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                      </div>
                    )}
                  </div>
                </Button>
              ))}
            </div>

            <Button
              onClick={handleNext}
              disabled={selectedGenres.length === 0}
              size="lg"
              className="px-8"
            >
              Next Questions <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}

        {currentStep === 2 && (
          <div className="text-center">
            <Badge variant="secondary" className="mb-6">
              QUESTION 01
            </Badge>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              What genre do you enjoy most?
            </h1>
            <p className="text-gray-600 mb-12">Select only one</p>

            <div className="space-y-3 mb-12">
              {genres.map((genre) => (
                <Card 
                  key={genre.id}
                  className={`cursor-pointer transition-all duration-200 ${
                    selectedGenres.includes(genre.id)
                      ? 'border-blue-500 bg-blue-50'
                      : 'hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedGenres([genre.id])}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        selectedGenres.includes(genre.id)
                          ? 'bg-blue-600 border-blue-600'
                          : 'border-gray-400'
                      }`}>
                        {selectedGenres.includes(genre.id) && (
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        )}
                      </div>
                      <span>{genre.label}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-between">
              <Button
                variant="ghost"
                onClick={() => setCurrentStep(1)}
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button
                onClick={handleNext}
                disabled={selectedGenres.length === 0}
              >
                Next <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
