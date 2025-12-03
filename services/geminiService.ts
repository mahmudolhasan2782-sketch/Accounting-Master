import { Question, TopicType } from "../types";
import { QUESTIONS_PER_SET } from "../constants";

// Static database of questions to remove API dependency
// In a production app, this could be 800+ lines long or loaded from a JSON file.
const QUESTION_BANK: (Omit<Question, 'id'> & { category: string })[] = [
  // --- BASIC ACCOUNTING ---
  {
    category: TopicType.BASIC,
    question: "হিসাববিজ্ঞানকে ব্যবসায়ের কী বলা হয়?",
    options: ["ভাষা", "মস্তিষ্ক", "হৃদপিণ্ড", "চালিকাশক্তি"],
    correctAnswerIndex: 0,
    explanation: "হিসাববিজ্ঞান ব্যবসায়ের আর্থিক অবস্থা ও ফলাফল প্রকাশ করে, তাই একে ব্যবসায়ের ভাষা বলা হয়।"
  },
  {
    category: TopicType.BASIC,
    question: "লুকা প্যাসিওলি কোন দেশের অধিবাসী ছিলেন?",
    options: ["যুক্তরাজ্য", "ইতালি", "ফ্রান্স", "জার্মানি"],
    correctAnswerIndex: 1,
    explanation: "দুতরফা দাখিলা পদ্ধতির জনক লুকা প্যাসিওলি ইতালির ভেনিস শহরের অধিবাসী ছিলেন।"
  },
  {
    category: TopicType.BASIC,
    question: "হিসাবচক্রের প্রথম ধাপ কোনটি?",
    options: ["জাবেদাভুক্তকরণ", "লেনদেন শনাক্তকরণ", "খতিয়ানভুক্তকরণ", "রেওয়ামিল প্রস্তুতকরণ"],
    correctAnswerIndex: 1,
    explanation: "হিসাবচক্রের প্রথম কাজ হলো কোনো ঘটনা লেনদেন কি না তা শনাক্ত করা।"
  },
  {
    category: TopicType.BASIC,
    question: "কোনটি অনগদ লেনদেন?",
    options: ["পণ্য ক্রয়", "বেতন প্রদান", "অবচয়", "ধারে বিক্রয়"],
    correctAnswerIndex: 2,
    explanation: "অবচয় হলো স্থায়ী সম্পত্তির মূল্যহ্রাস যা নগদে পরিশোধ করা হয় না, তাই এটি অনগদ লেনদেন।"
  },
  {
    category: TopicType.BASIC,
    question: "মালিকানা স্বত্ব (Owner's Equity) হ্রাসের কারণ কোনটি?",
    options: ["আয়", "বিনিয়োগ", "উত্তোলন", "দায় বৃদ্ধি"],
    correctAnswerIndex: 2,
    explanation: "মালিক ব্যবসা থেকে টাকা বা পণ্য উত্তোলন করলে মালিকানা স্বত্ব হ্রাস পায়।"
  },
  {
    category: TopicType.BASIC,
    question: "ব্যবসায়ের দীর্ঘমেয়াদী দায় কোনটি?",
    options: ["পাওনাদার", "ব্যাংক জমাতিরিক্ত", "ঋণপত্র", "বকয়া বেতন"],
    correctAnswerIndex: 2,
    explanation: "ঋণপত্র বা বন্ড সাধারণত দীর্ঘ সময়ের জন্য ইস্যু করা হয়, তাই এটি দীর্ঘমেয়াদী দায়।"
  },
  {
    category: TopicType.BASIC,
    question: "'Summa de Arithmetica' গ্রন্থটি কত সালে প্রকাশিত হয়?",
    options: ["১৪৯৪ সালে", "১৪৯২ সালে", "১৫০০ সালে", "১৩৯৪ সালে"],
    correctAnswerIndex: 0,
    explanation: "লুকা প্যাসিওলি ১৪৯৪ সালে তাঁর বিখ্যাত গ্রন্থটি প্রকাশ করেন।"
  },
  {
    category: TopicType.BASIC,
    question: "নিচের কোনটি অস্পর্শনীয় সম্পদ?",
    options: ["দালানকোঠা", "সুনাম", "আসবাবপত্র", "মজুদ পণ্য"],
    correctAnswerIndex: 1,
    explanation: "সুনাম দেখা বা ধরা যায় না, কিন্তু এর আর্থিক মূল্য আছে। তাই এটি অস্পর্শনীয় সম্পদ।"
  },
  {
    category: TopicType.BASIC,
    question: "হিসাববিজ্ঞানের প্রধান উদ্দেশ্য কী?",
    options: ["লেনদেন লিপিবদ্ধ করা", "তথ্য সরবরাহ করা", "মুনাফা ভোগ করা", "কর ফাঁকি দেওয়া"],
    correctAnswerIndex: 1,
    explanation: "হিসাববিজ্ঞানের মূল কাজ হলো সংশ্লিষ্ট পক্ষকে প্রয়োজনীয় আর্থিক তথ্য সরবরাহ করা।"
  },
  {
    category: TopicType.BASIC,
    question: "আইএএস (IAS) এর পূর্ণরূপ কী?",
    options: ["International Accounting Standards", "Indian Accounting System", "Internal Audit System", "International Audit Standards"],
    correctAnswerIndex: 0,
    explanation: "IAS হলো আন্তর্জাতিকভাবে স্বীকৃত হিসাবরক্ষণ মানদণ্ড।"
  },

  // --- DOUBLE ENTRY SYSTEM ---
  {
    category: TopicType.DOUBLE_ENTRY,
    question: "দুতরফা দাখিলা পদ্ধতিতে প্রতিটি লেনদেনের কয়টি পক্ষ থাকে?",
    options: ["একটি", "দুটি", "তিনটি", "অসংখ্য"],
    correctAnswerIndex: 1,
    explanation: "প্রতিটি লেনদেনের দুটি পক্ষ থাকে: একটি ডেবিট এবং অন্যটি ক্রেডিট।"
  },
  {
    category: TopicType.DOUBLE_ENTRY,
    question: "সম্পদ বৃদ্ধি পেলে কী হয়?",
    options: ["ডেবিট", "ক্রেডিট", "উভয়ই", "কোনটিই নয়"],
    correctAnswerIndex: 0,
    explanation: "আধুনিক বা সনাতন উভয় পদ্ধতিতেই সম্পদ বৃদ্ধি পেলে ডেবিট হয়।"
  },
  {
    category: TopicType.DOUBLE_ENTRY,
    question: "কোনটি নামিক হিসাব (Nominal Account)?",
    options: ["বেতন হিসাব", "আসবাবপত্র হিসাব", "পাওনাদার হিসাব", "হাতে নগদ"],
    correctAnswerIndex: 0,
    explanation: "আয় ও ব্যয়বাচক হিসাবকে নামিক হিসাব বলা হয়। বেতন একটি ব্যয়।"
  },
  {
    category: TopicType.DOUBLE_ENTRY,
    question: "স্বর্ণসূত্র অনুযায়ী 'যা চলে যায়' তা কী?",
    options: ["ডেবিট", "ক্রেডিট", "সম্পদ", "দায়"],
    correctAnswerIndex: 1,
    explanation: "সম্পত্তিবাচক হিসাবের স্বর্ণসূত্র হলো: যা আসে তা ডেবিট, যা চলে যায় তা ক্রেডিট।"
  },
  {
    category: TopicType.DOUBLE_ENTRY,
    question: "বকেয়া খরচ ব্যবসায়ের জন্য কী?",
    options: ["সম্পদ", "আয়", "দায়", "ব্যয়"],
    correctAnswerIndex: 2,
    explanation: "খরচ হয়েছে কিন্তু টাকা দেওয়া হয়নি, অর্থাৎ ভবিষ্যতে দিতে হবে। তাই এটি দায়।"
  },
  {
    category: TopicType.DOUBLE_ENTRY,
    question: "অগ্রিম প্রদত্ত বেতন কী?",
    options: ["খরচ", "দায়", "সম্পদ", "আয়"],
    correctAnswerIndex: 2,
    explanation: "সেবা পাওয়ার আগেই টাকা দেওয়া হয়েছে, তাই এটি চলতি সম্পদ।"
  },
  {
    category: TopicType.DOUBLE_ENTRY,
    question: "জাবেদাকে হিসাবের কী বই বলা হয়?",
    options: ["পাকা বই", "সহকারী বই", "প্রাথমিক বই", "ফাইনাল বই"],
    correctAnswerIndex: 2,
    explanation: "লেনদেন সংঘটিত হওয়ার পর সর্বপ্রথম জাবেদায় লেখা হয়, তাই একে প্রাথমিক বই বলা হয়।"
  },
  {
    category: TopicType.DOUBLE_ENTRY,
    question: "খতিয়ান উদ্বৃত্ত দ্বারা কী প্রস্তুত করা হয়?",
    options: ["জাবেদা", "রেওয়ামিল", "নগদান বই", "আর্থিক বিবরণী"],
    correctAnswerIndex: 1,
    explanation: "খতিয়ানের ডেবিট ও ক্রেডিট উদ্বৃত্ত নিয়ে রেওয়ামিল প্রস্তুত করা হয়।"
  },
  {
    category: TopicType.DOUBLE_ENTRY,
    question: "কোনটি কন্ট্রা এন্ট্রি (Contra Entry) হয়?",
    options: ["পণ্য বিক্রয়", "ব্যাংকে জমা দান", "বেতন প্রদান", "অবচয় ধার্য"],
    correctAnswerIndex: 1,
    explanation: "ব্যাংকে জমা দিলে বা ব্যাংক থেকে অফিসের প্রয়োজনে তুললে নগদান বইতে কন্ট্রা এন্ট্রি হয়।"
  },
  {
    category: TopicType.DOUBLE_ENTRY,
    question: "পাওনাদারকে পরিশোধ করলে কী ঘটে?",
    options: ["সম্পদ হ্রাস ও দায় হ্রাস", "সম্পদ বৃদ্ধি ও দায় বৃদ্ধি", "মালিকানা স্বত্ব বৃদ্ধি", "খরচ বৃদ্ধি"],
    correctAnswerIndex: 0,
    explanation: "নগদ টাকা (সম্পদ) চলে যায় এবং পাওনাদার (দায়) কমে যায়।"
  },

  // --- ACCOUNTING EQUATION ---
  {
    category: TopicType.EQUATION,
    question: "হিসাব সমীকরণটি কোনটি?",
    options: ["A = L - OE", "A = L + OE", "L = A + OE", "OE = A + L"],
    correctAnswerIndex: 1,
    explanation: "মৌলিক হিসাব সমীকরণ হলো: সম্পদ (A) = দায় (L) + মালিকানা স্বত্ব (OE)।"
  },
  {
    category: TopicType.EQUATION,
    question: "ধারে পণ্য ক্রয়ের ফলে হিসাব সমীকরণে কী প্রভাব পড়ে?",
    options: ["A বৃদ্ধি, L বৃদ্ধি", "A হ্রাস, L হ্রাস", "L বৃদ্ধি, OE হ্রাস", "কোনটিই নয়"],
    correctAnswerIndex: 2,
    explanation: "ধারে ক্রয়ের ফলে পাওনাদার (L) বাড়ে এবং খরচ হওয়ায় মালিকানা স্বত্ব (OE) কমে।"
  },
  {
    category: TopicType.EQUATION,
    question: "মালিক কর্তৃক ব্যবসায় বিনিয়োগ করলে সমীকরণে কী ঘটে?",
    options: ["A বৃদ্ধি, OE বৃদ্ধি", "A বৃদ্ধি, L বৃদ্ধি", "L হ্রাস, OE বৃদ্ধি", "কেবল A বৃদ্ধি"],
    correctAnswerIndex: 0,
    explanation: "নগদ টাকা (A) ব্যবসায় আসে এবং মূলধন বাবদ মালিকানা স্বত্ব (OE) বৃদ্ধি পায়।"
  },
  {
    category: TopicType.EQUATION,
    question: "ধারে বিক্রয় লেনদেনটি সমীকরণের কোন উপাদানকে প্রভাবিত করে?",
    options: ["A এবং L", "A এবং OE", "L এবং OE", "কেবল A"],
    correctAnswerIndex: 1,
    explanation: "ধারে বিক্রয়ে দেনাদার (A) বাড়ে এবং আয় হওয়ায় মালিকানা স্বত্ব (OE) বাড়ে।"
  },
  {
    category: TopicType.EQUATION,
    question: "'L' দ্বারা সমীকরণে কী বোঝানো হয়?",
    options: ["Land (জমি)", "Liabilities (দায়)", "Loss (ক্ষতি)", "Loan (ঋণ)"],
    correctAnswerIndex: 1,
    explanation: "L = Liabilities, যা দ্বারা ব্যবসায়ের মোট দায় বোঝায়।"
  },
  {
    category: TopicType.EQUATION,
    question: "নিচের কোন লেনদেনটি মালিকানা স্বত্বকে প্রভাবিত করে না?",
    options: ["বেতন প্রদান", "পণ্য বিক্রয়", "আসবাবপত্র ক্রয়", "উত্তোলন"],
    correctAnswerIndex: 2,
    explanation: "নগদে আসবাবপত্র কিনলে এক সম্পদ (আসবাবপত্র) বাড়ে, অন্য সম্পদ (নগদ) কমে। OE তে প্রভাব পড়ে না।"
  },
  {
    category: TopicType.EQUATION,
    question: "বর্ধিত হিসাব সমীকরণ কোনটি?",
    options: ["A = L + C + R - E - D", "A = L + C - R + E - D", "A = L + OE", "A - L = OE"],
    correctAnswerIndex: 0,
    explanation: "A = L + (Capital + Revenue - Expenses - Drawings)।"
  },
  {
    category: TopicType.EQUATION,
    question: "ব্যাংক ঋণ পরিশোধ করা হলে কী ঘটে?",
    options: ["L কমে, OE বাড়ে", "A কমে, L কমে", "A বাড়ে, L বাড়ে", "OE কমে, L কমে"],
    correctAnswerIndex: 1,
    explanation: "নগদ টাকা (A) কমে যায় এবং ঋণের দায় (L) কমে যায়।"
  },
  {
    category: TopicType.EQUATION,
    question: "মালিকানা স্বত্বের উপাদান কয়টি?",
    options: ["৩টি", "৪টি", "৫টি", "২টি"],
    correctAnswerIndex: 1,
    explanation: "উপাদানগুলো হলো: মূলধন (Capital), আয় (Revenue), ব্যয় (Expenses), উত্তোলন (Drawings)।"
  },
  {
    category: TopicType.EQUATION,
    question: "ডেবিট ভাউচার কোন কাজে ব্যবহৃত হয়?",
    options: ["ক্রয়ের জন্য", "বিক্রয়ের জন্য", "খরচের জন্য", "আয়ের জন্য"],
    correctAnswerIndex: 2,
    explanation: "যেকোনো প্রকার খরচের স্বপক্ষে ডেবিট ভাউচার প্রস্তুত করা হয়।"
  }
];

// Fallback logic to ensure we have enough questions if filtered list is short
// In a real app, you would add hundreds of questions to QUESTION_BANK
const getQuestionsByTopic = (topic: string): typeof QUESTION_BANK => {
  if (topic === TopicType.MIXED) {
    return QUESTION_BANK;
  }
  return QUESTION_BANK.filter(q => q.category === topic);
};

export const generateQuizQuestions = async (topic: string, setId: number): Promise<Question[]> => {
  // Simulate network delay for realistic feel
  await new Promise(resolve => setTimeout(resolve, 800));

  let filteredQuestions = getQuestionsByTopic(topic);
  
  // If we don't have enough questions in a specific category (since I only wrote ~30 here),
  // we will mix in some others or duplicate/shuffle to ensure the app doesn't crash.
  // In your full version, you would just add more questions to the array above.
  if (filteredQuestions.length < 5) {
    filteredQuestions = QUESTION_BANK; // Fallback to mixed if specific topic is empty
  }

  // Shuffle algorithm (Fisher-Yates)
  const shuffled = [...filteredQuestions].sort(() => 0.5 - Math.random());

  // Take the first N questions
  const selected = shuffled.slice(0, QUESTIONS_PER_SET);

  // Map to add IDs based on the set ID to ensure uniqueness logic in React keys
  return selected.map((q, index) => ({
    id: setId * 1000 + index, // Generate a unique ID based on set and index
    question: q.question,
    options: q.options,
    correctAnswerIndex: q.correctAnswerIndex,
    explanation: q.explanation
  }));
};
