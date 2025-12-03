import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import SetSelector from './components/SetSelector';
import QuizCard from './components/QuizCard';
import Results from './components/Results';
import { QuizSet, Question, QuizStatus, UserResult } from './types';
import { generateQuizQuestions } from './services/geminiService';
import { LOADING_MESSAGES, QUESTIONS_PER_SET } from './constants';
import { Loader2, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  const [status, setStatus] = useState<QuizStatus>(QuizStatus.IDLE);
  const [currentSet, setCurrentSet] = useState<QuizSet | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [userAnswers, setUserAnswers] = useState<{ questionId: number; selectedIndex: number }[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState(LOADING_MESSAGES[0]);

  // Handle set selection and API loading
  const handleSelectSet = async (set: QuizSet) => {
    setStatus(QuizStatus.LOADING);
    setCurrentSet(set);
    
    // Cycle loading messages to keep user entertained
    const msgInterval = setInterval(() => {
      setLoadingMsg(LOADING_MESSAGES[Math.floor(Math.random() * LOADING_MESSAGES.length)]);
    }, 1500);

    try {
      const generatedQuestions = await generateQuizQuestions(set.topic, set.id);
      setQuestions(generatedQuestions);
      setStatus(QuizStatus.IN_PROGRESS);
      setCurrentQuestionIndex(0);
      setUserAnswers([]);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } catch (error) {
      console.error(error);
      setStatus(QuizStatus.ERROR);
    } finally {
      clearInterval(msgInterval);
    }
  };

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
    setShowExplanation(true);
    
    // Auto-record result locally, but don't advance yet
    const currentQ = questions[currentQuestionIndex];
    
    // We update state immediately for immediate feedback logic if needed, 
    // but actual score calculation happens at the end or cumulative.
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    // Save answer
    const currentQ = questions[currentQuestionIndex];
    setUserAnswers(prev => [...prev, { questionId: currentQ.id, selectedIndex: selectedAnswer }]);

    // Move next or finish
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    setStatus(QuizStatus.COMPLETED);
  };

  const calculateResult = (): UserResult => {
    // Need to include the last answer if it wasn't added yet (handled in handleNextQuestion usually, 
    // but if we are at finishQuiz triggered by handleNextQuestion, userAnswers is updated)
    // However, React state updates are async. 
    
    // Let's re-calculate score based on the questions and userAnswers.
    // Note: Since handleNextQuestion adds to userAnswers before calling finish, we need to be careful with closure.
    // Actually, let's just use the local state + current selection for the final question.
    
    const finalAnswers = [...userAnswers, { questionId: questions[currentQuestionIndex].id, selectedIndex: selectedAnswer! }];
    
    let correctCount = 0;
    finalAnswers.forEach(ans => {
      const q = questions.find(q => q.id === ans.questionId);
      if (q && q.correctAnswerIndex === ans.selectedIndex) {
        correctCount++;
      }
    });

    return {
      totalQuestions: questions.length,
      correctAnswers: correctCount,
      score: correctCount * 5, // 5 pts each
      answers: finalAnswers
    };
  };

  const resetQuiz = () => {
    setStatus(QuizStatus.IDLE);
    setCurrentSet(null);
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const retryCurrentSet = () => {
    // Re-start the current set of questions without re-fetching
    setStatus(QuizStatus.IN_PROGRESS);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  // --------------------------------------------------------------------------------
  // Renders
  // --------------------------------------------------------------------------------

  if (status === QuizStatus.LOADING) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-6">
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-100 rounded-full blur-xl animate-pulse"></div>
            <Loader2 className="w-16 h-16 text-emerald-600 animate-spin relative z-10" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">প্রশ্নপত্র তৈরি করা হচ্ছে</h3>
            <p className="text-slate-500 animate-pulse">{loadingMsg}</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (status === QuizStatus.ERROR) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4">
          <div className="text-red-500 bg-red-50 p-4 rounded-full">⚠️</div>
          <h3 className="text-xl font-bold text-slate-800">দুঃখিত, একটি সমস্যা হয়েছে!</h3>
          <p className="text-slate-500">ইন্টারনেট সংযোগ চেক করুন অথবা কিছুক্ষণ পর আবার চেষ্টা করুন।</p>
          <button 
            onClick={resetQuiz}
            className="px-6 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition"
          >
            হোম পেজে ফিরে যান
          </button>
        </div>
      </Layout>
    );
  }

  if (status === QuizStatus.COMPLETED) {
    return (
      <Layout>
        <Results 
          result={calculateResult()} 
          onRetry={retryCurrentSet}
          onHome={resetQuiz}
        />
      </Layout>
    );
  }

  if (status === QuizStatus.IN_PROGRESS && questions.length > 0) {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    
    return (
      <Layout title={currentSet?.title}>
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm font-medium text-slate-500 mb-2">
              <span>প্রশ্ন {currentQuestionIndex + 1}/{questions.length}</span>
              <span>{Math.round(progress)}% সম্পন্ন</span>
            </div>
            <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-500 transition-all duration-500 ease-out" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <QuizCard 
            question={questions[currentQuestionIndex]}
            selectedOptionIndex={selectedAnswer}
            onSelectOption={handleAnswerSelect}
            showResult={showExplanation}
          />

          <div className="mt-6 flex justify-end">
            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
              className={`
                flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-lg transition-all
                ${selectedAnswer !== null 
                  ? 'bg-emerald-600 text-white shadow-lg hover:bg-emerald-700 hover:shadow-xl translate-y-0' 
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'}
              `}
            >
              {currentQuestionIndex === questions.length - 1 ? 'ফলাফল দেখুন' : 'পরবর্তী প্রশ্ন'}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  // Default: IDLE state (Home)
  return (
    <Layout>
      <SetSelector onSelectSet={handleSelectSet} />
    </Layout>
  );
};

export default App;