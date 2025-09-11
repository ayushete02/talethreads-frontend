'use client';

import { useState } from 'react';


import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AppHeader from '@/components/layout/app-header';
import Footer from '@/components/layout/footer';

const readingTimes = [
  { id: '0-15', label: '0-15 min' },
  { id: '15-30', label: '15-30 min' },
  { id: '30-60', label: '30-60 min' },
  { id: '60+', label: '1 hour +' },
];

const preferences = [
  { id: 'short', label: 'Short Stories', description: 'Quick reads under 5 minutes' },
  { id: 'medium', label: 'Medium Stories', description: '5-15 minute reads' },
  { id: 'long', label: 'Long Stories', description: '15+ minute reads' },
];



export default function ReadingPreferencePage() {
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(1);

  const handleTimeSelect = (timeId: string) => {
    setSelectedTime(timeId);
  };

  const handlePreferenceToggle = (prefId: string) => {
    setSelectedPreferences(prev => 
      prev.includes(prefId)
        ? prev.filter(id => id !== prefId)
        : [...prev, prefId]
    );
  };

  const handleNext = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else {
      // Navigate to next onboarding step
      window.location.href = '/onboarding/interests';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader />

      <div className="max-w-2xl mx-auto p-8">
        {/* Progress */}
        <div className="text-center mb-8">
          <p className="text-sm text-gray-600 mb-2">QUESTIONS {currentStep + 1}/6</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / 6) * 100}%` }}
            ></div>
          </div>
        </div>

        {currentStep === 1 && (
          <div className="text-center">
            <Badge variant="secondary" className="mb-6">
              QUESTION 02
            </Badge>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              How much time do you have for reading daily?
            </h1>
            <p className="text-gray-600 mb-12">Select one that fits your schedule</p>

            <div className="space-y-3 mb-12">
              {readingTimes.map((time) => (
                <Card 
                  key={time.id}
                  className={`cursor-pointer transition-all duration-200 ${
                    selectedTime === time.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'hover:border-gray-300'
                  }`}
                  onClick={() => handleTimeSelect(time.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        selectedTime === time.id
                          ? 'bg-blue-600 border-blue-600'
                          : 'border-gray-400'
                      }`}>
                        {selectedTime === time.id && (
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        )}
                      </div>
                      <span className="font-medium">{time.label}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-between">
              <Button
                variant="ghost"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button
                onClick={handleNext}
                disabled={!selectedTime}
              >
                Next <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="text-center">
            <Badge variant="secondary" className="mb-6">
              QUESTION 03
            </Badge>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              What type of stories do you prefer?
            </h1>
            <p className="text-gray-600 mb-12">You can select multiple options</p>

            <div className="space-y-4 mb-12">
              {preferences.map((pref) => (
                <Card 
                  key={pref.id}
                  className={`cursor-pointer transition-all duration-200 ${
                    selectedPreferences.includes(pref.id)
                      ? 'border-blue-500 bg-blue-50'
                      : 'hover:border-gray-300'
                  }`}
                  onClick={() => handlePreferenceToggle(pref.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-4 h-4 rounded border-2 mt-1 ${
                        selectedPreferences.includes(pref.id)
                          ? 'bg-blue-600 border-blue-600'
                          : 'border-gray-400'
                      }`}>
                        {selectedPreferences.includes(pref.id) && (
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-sm"></div>
                          </div>
                        )}
                      </div>
                      <div className="text-left">
                        <h3 className="font-medium text-gray-800">{pref.label}</h3>
                        <p className="text-sm text-gray-600">{pref.description}</p>
                      </div>
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
                disabled={selectedPreferences.length === 0}
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
