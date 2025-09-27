export interface Option {
  id: string;
  label: string;
  description: string;
}

export interface Question {
  id: number;
  type: "single_choice" | "multiple_choice";
  category: string;
  title: string;
  subtitle: string;
  allowMultiple: boolean;
  options: Option[];
}

export interface QuestionsData {
  questions: Question[];
  totalQuestions: number;
}

export interface UserAnswers {
  [questionCategory: string]: string[];
}

export interface AnswerSummary {
  category: string;
  question: string;
  answers: {
    id: string;
    label: string;
    description: string;
  }[];
  questionNumber: number;
}

export interface PersonaResult {
  name: string;
  title: string;
  description: string;
  image: string;
  traits: string[];
  storyRecommendations: string[];
}
