"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import questionsData from "@/data/onboarding-questions.json";
import { Question, QuestionsData } from "@/types/onboarding";
import { useOnboarding } from "@/hooks/useOnboarding";

export default function OnboardingQuestionPage() {
  const router = useRouter();
  const params = useParams();
  const questionNumber = parseInt(params.questionNumber as string);
  const { answers, updateCategoryAnswers, isLoaded } = useOnboarding();

  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  useEffect(() => {
    if (!isLoaded) return;

    // Find the current question
    const question = (questionsData as QuestionsData).questions.find(
      (q) => q.id === questionNumber
    );
    if (question) {
      setCurrentQuestion(question);

      // Load existing answers for this question
      if (answers[question.category]) {
        setSelectedAnswers(answers[question.category]);
      } else {
        setSelectedAnswers([]);
      }
    } else {
      // Invalid question number, redirect to first question
      router.push("/onboarding/persona/1");
    }
  }, [questionNumber, router, answers, isLoaded]);

  const handleAnswerToggle = (optionId: string) => {
    if (!currentQuestion) return;

    if (currentQuestion.allowMultiple) {
      setSelectedAnswers((prev) =>
        prev.includes(optionId)
          ? prev.filter((id) => id !== optionId)
          : [...prev, optionId]
      );
    } else {
      setSelectedAnswers([optionId]);
    }
  };

  const handleNext = () => {
    if (!currentQuestion || selectedAnswers.length === 0) return;

    // Save answers
    updateCategoryAnswers(currentQuestion.category, selectedAnswers);

    // Navigate to next question or summary
    if (questionNumber < (questionsData as QuestionsData).totalQuestions) {
      router.push(`/onboarding/persona/${questionNumber + 1}`);
    } else {
      router.push("/onboarding/summary");
    }
  };

  const handleBack = () => {
    if (questionNumber > 1) {
      // Save current answers before going back
      if (currentQuestion) {
        updateCategoryAnswers(currentQuestion.category, selectedAnswers);
      }
      router.push(`/onboarding/persona/${questionNumber - 1}`);
    } else {
      router.push("/");
    }
  };

  if (!currentQuestion) {
    return (
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `url('/assets/loginBG.jpg')`,
        }}
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white/80">Loading question...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4"
      style={{
        backgroundImage: `url('/assets/loginBG.jpg')`,
      }}
    >
      <div className="w-full max-w-md mx-auto">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="absolute top-6 left-6 text-white/80 hover:text-white p-2"
          onClick={handleBack}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">Tale Threads</h1>
        </div>

        {/* Progress */}
        <div className="text-center mb-8">
          <p className="text-xs text-white/80 mb-2 tracking-wider font-medium">
            QUESTIONS {questionNumber}/
            {(questionsData as QuestionsData).totalQuestions}
          </p>
        </div>

        {/* Question */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-white mb-6">
            {currentQuestion.title}
          </h2>

          <div className="space-y-3 mb-12">
            {currentQuestion.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleAnswerToggle(option.id)}
                className={`w-full p-4 rounded-full text-left flex items-center transition-all duration-200 border-2 ${
                  selectedAnswers.includes(option.id)
                    ? "bg-orange-400 text-black font-medium border-orange-400"
                    : "bg-white text-gray-700 hover:bg-gray-50 border-gray-200 hover:border-gray-300"
                }`}
              >
                <div
                  className={`w-5 h-5 mr-4 flex items-center justify-center ${
                    currentQuestion.allowMultiple
                      ? `rounded border-2 ${
                          selectedAnswers.includes(option.id)
                            ? "border-black bg-black"
                            : "border-gray-400"
                        }`
                      : `rounded-full border-2 ${
                          selectedAnswers.includes(option.id)
                            ? "border-black bg-black"
                            : "border-gray-400"
                        }`
                  }`}
                >
                  {selectedAnswers.includes(option.id) && (
                    <div
                      className={`bg-white ${
                        currentQuestion.allowMultiple
                          ? "w-2 h-2 rounded-sm"
                          : "w-2 h-2 rounded-full"
                      }`}
                    ></div>
                  )}
                </div>
                <span className="text-base font-medium">{option.label}</span>
              </button>
            ))}
          </div>

          <Button
            onClick={handleNext}
            disabled={selectedAnswers.length === 0}
            className="w-full py-3 bg-black text-white rounded-full hover:bg-gray-800 text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {questionNumber < (questionsData as QuestionsData).totalQuestions
              ? "Next"
              : "Submit"}
          </Button>
        </div>
      </div>
    </div>
  );
}
