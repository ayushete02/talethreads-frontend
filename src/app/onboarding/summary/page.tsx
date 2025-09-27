"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import questionsData from "@/data/onboarding-questions.json";
import { QuestionsData, PersonaResult } from "@/types/onboarding";
import { useOnboarding } from "@/hooks/useOnboarding";
import { getPersonaFromAnswers } from "@/utils/personaMapping";
import Image from "next/image";

export default function OnboardingSummaryPage() {
  const router = useRouter();
  const { answers, markOnboardingComplete, isLoaded } = useOnboarding();
  const [personaResult, setPersonaResult] = useState<PersonaResult | null>(
    null
  );

  useEffect(() => {
    if (!isLoaded) return;

    // Get persona based on user answers
    const persona = getPersonaFromAnswers(answers);
    setPersonaResult(persona);
  }, [answers, isLoaded]);

  const handleFinishOnboarding = () => {
    // You can add logic here to save the user preferences to your backend
    markOnboardingComplete();
    router.push("/onboarding/reading-preference"); // Complete onboarding and go to home
  };

  if (!isLoaded || !personaResult) {
    return (
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
        style={{ backgroundImage: `url('/assets/loginBG.jpg')` }}
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-black">Discovering your persona...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url('/assets/loginBG.jpg')`,
      }}
    >
      <div className="relative z-10 max-w-4xl mx-auto p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-black mb-4 tracking-wide">
            Tale Threads
          </h1>
        </div>

        {/* Back Button */}
        <Button
          variant="ghost"
          className="absolute top-8 left-8 text-black/80 hover:text-black p-2"
          onClick={() =>
            router.push(
              `/onboarding/persona/${
                (questionsData as QuestionsData).totalQuestions
              }`
            )
          }
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>

        {/* Persona Result Card */}
        <div className="mb-8">
          <Card className="bg-white/95 border-2 border-orange-200 shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              {/* Persona Image and Title */}
              <div className="relative p-8 text-center">
                <h2 className="text-4xl font-bold text-black mb-2">
                  {personaResult.name}
                </h2>
                <div className="relative w-64 h-64 mx-auto mb-6">
                  <Image
                    src={personaResult.image}
                    alt={personaResult.name}
                    fill
                    className="object-contain rounded-full"
                    priority
                  />
                </div>
              </div>
              {/* Persona Description */}
              <div className="p-8">
                <div className="text-center mb-8">
                  <p className="text-lg text-black/80 leading-relaxed">
                    {personaResult.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button onClick={handleFinishOnboarding}>Explore Stories</Button>
        </div>
      </div>
    </div>
  );
}
