export enum QuizStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  ERROR = 'ERROR'
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number; // 0-3
  explanation: string;
}

export interface QuizSet {
  id: number;
  title: string;
  topic: string; // Used for prompt generation
  isLocked: boolean; // Visual flair
}

export interface UserResult {
  totalQuestions: number;
  correctAnswers: number;
  score: number;
  answers: { questionId: number; selectedIndex: number }[];
}

export enum TopicType {
  BASIC = 'Basic Accounting',
  DOUBLE_ENTRY = 'Double Entry System',
  EQUATION = 'Accounting Equation',
  MIXED = 'Mixed Accounting Topics'
}