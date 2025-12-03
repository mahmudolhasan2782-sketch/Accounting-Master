import { QuizSet, TopicType } from './types';

// We simulate 800 questions by creating 40 sets of 20 questions.
// In a real database app, these would be IDs. Here, they act as seeds for the AI generator.

export const TOPICS: Record<string, string> = {
  [TopicType.BASIC]: "হিসাববিজ্ঞান পরিচিতি ও ধারণা",
  [TopicType.DOUBLE_ENTRY]: "দুতরফা দাখিলা পদ্ধতি",
  [TopicType.EQUATION]: "হিসাব সমীকরণ ও লেনদেন",
  [TopicType.MIXED]: "মিশ্র অনুশীলন (সব বিষয়)"
};

export const QUIZ_SETS: QuizSet[] = Array.from({ length: 40 }, (_, i) => {
  let topic = TopicType.MIXED;
  if (i < 10) topic = TopicType.BASIC;
  else if (i < 20) topic = TopicType.DOUBLE_ENTRY;
  else if (i < 30) topic = TopicType.EQUATION;

  return {
    id: i + 1,
    title: `সেট ${i + 1} - ${TOPICS[topic]}`,
    topic: topic,
    isLocked: false // Open for all in this demo
  };
});

export const QUESTIONS_PER_SET = 20;

export const LOADING_MESSAGES = [
  "হিসাব সমীকরণ মেলানো হচ্ছে...",
  "ডেবিট ও ক্রেডিট বিশ্লেষণ করা হচ্ছে...",
  "খতিয়ান প্রস্তুত করা হচ্ছে...",
  "র্যেওয়ামিল চেক করা হচ্ছে...",
  "দুতরফা দাখিলা প্রয়োগ করা হচ্ছে..."
];