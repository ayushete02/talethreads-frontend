import { useState, useEffect } from 'react';
import { UserAnswers } from '@/types/onboarding';

export const useOnboarding = () => {
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load answers from localStorage on mount
    const savedAnswers = localStorage.getItem('onboarding-answers');
    if (savedAnswers) {
      try {
        setAnswers(JSON.parse(savedAnswers));
      } catch (error) {
        console.error('Error parsing onboarding answers:', error);
      }
    }
    setIsLoaded(true);
  }, []);

  const saveAnswers = (newAnswers: UserAnswers) => {
    setAnswers(newAnswers);
    localStorage.setItem('onboarding-answers', JSON.stringify(newAnswers));
  };

  const updateCategoryAnswers = (category: string, categoryAnswers: string[]) => {
    const updatedAnswers = {
      ...answers,
      [category]: categoryAnswers
    };
    saveAnswers(updatedAnswers);
  };

  const clearAnswers = () => {
    setAnswers({});
    localStorage.removeItem('onboarding-answers');
  };

  const isOnboardingComplete = () => {
    return localStorage.getItem('onboarding-completed') === 'true';
  };

  const markOnboardingComplete = () => {
    localStorage.setItem('onboarding-completed', 'true');
  };

  const resetOnboarding = () => {
    clearAnswers();
    localStorage.removeItem('onboarding-completed');
  };

  return {
    answers,
    isLoaded,
    saveAnswers,
    updateCategoryAnswers,
    clearAnswers,
    isOnboardingComplete,
    markOnboardingComplete,
    resetOnboarding
  };
};
