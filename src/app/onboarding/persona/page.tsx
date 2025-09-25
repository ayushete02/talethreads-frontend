'use client';

import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const humorTypes = [
  { id: 'witty-sarcastic', label: 'Witty/Sarcastic' },
  { id: 'silly-slapstick', label: 'Silly/Slapstick', selected: true },
  { id: 'dark-humor', label: 'Dark Humor', selected: true },
  { id: 'puns', label: 'Puns' },
  { id: 'no-humor', label: 'No Humor', selected: true },
];

export default function PersonaSetupPage() {
  const [selectedHumor, setSelectedHumor] = useState<string[]>(['silly-slapstick', 'dark-humor', 'no-humor']);

  const handleHumorToggle = (humorId: string) => {
    setSelectedHumor(prev => 
      prev.includes(humorId)
        ? prev.filter(id => id !== humorId)
        : [...prev, humorId]
    );
  };

  const handleProceed = () => {
    // Navigate to reading preference
    window.location.href = '/onboarding/reading-preference';
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url('/assets/loginBG.jpg')`,
      }}
    >
      
      <div className="relative z-10 max-w-2xl mx-auto p-8 flex flex-col items-center justify-center min-h-screen">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-black mb-4 tracking-wide">Tale Threads</h1>
        </div>

        {/* Progress */}
        <div className="text-center mb-12 w-full">
          <p className="text-sm text-black/80 mb-4 tracking-wider">QUESTIONS 1/6</p>
        
        </div>

        {/* Back Button */}
        <Button
          variant="ghost"
          className="absolute top-8 left-8 text-black/80 hover:text-black p-2"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>

        {/* Question */}
        <div className="text-center w-full max-w-lg">
          <h2 className="text-3xl font-bold text-black mb-12">
            What kind of humor do you enjoy
          </h2>

          <div className="space-y-4 mb-16">
            {humorTypes.map((humor) => (
              <button
                key={humor.id}
                onClick={() => handleHumorToggle(humor.id)}
                className={`w-full p-4 rounded-full text-left flex items-center transition-all duration-200 ${
                  selectedHumor.includes(humor.id)
                    ? 'bg-orange-400 text-black font-medium'
                    : 'bg-white/90 text-black hover:bg-white'
                }`}
              >
                <div className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center ${
                  selectedHumor.includes(humor.id)
                    ? 'border-black bg-black'
                    : 'border-gray-400'
                }`}>
                  {selectedHumor.includes(humor.id) && (
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                  )}
                </div>
                <span className="text-lg">{humor.label}</span>
              </button>
            ))}
          </div>

          <Button
            onClick={handleProceed}
            size="lg"
            className="px-16 py-4 bg-black text-black rounded-full hover:bg-gray-800 text-lg font-medium"
          >
            Proceed
          </Button>
        </div>
      </div>
    </div>
  );
}
