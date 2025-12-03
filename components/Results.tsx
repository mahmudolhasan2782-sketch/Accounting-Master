import React from 'react';
import { UserResult } from '../types';
import { RefreshCw, Home, Trophy, AlertCircle } from 'lucide-react';
import { QUESTIONS_PER_SET } from '../constants';

interface ResultsProps {
  result: UserResult;
  onRetry: () => void;
  onHome: () => void;
}

const Results: React.FC<ResultsProps> = ({ result, onRetry, onHome }) => {
  const percentage = Math.round((result.correctAnswers / result.totalQuestions) * 100);
  
  let message = "";
  let color = "";
  
  if (percentage >= 80) {
    message = "অসাধারণ! আপনি একজন হিসাববিজ্ঞান মাস্টার!";
    color = "text-emerald-600";
  } else if (percentage >= 60) {
    message = "খুব ভালো! তবে আরও অনুশীলনের প্রয়োজন।";
    color = "text-blue-600";
  } else {
    message = "চেষ্টা চালিয়ে যান! বেসিক কনসেপ্টগুলো আবার দেখুন।";
    color = "text-orange-600";
  }

  return (
    <div className="max-w-md mx-auto text-center space-y-8 py-8 animate-fade-in">
      <div className="relative inline-block">
        <svg className="w-48 h-48 transform -rotate-90">
          <circle
            cx="96"
            cy="96"
            r="88"
            stroke="currentColor"
            strokeWidth="12"
            fill="transparent"
            className="text-slate-100"
          />
          <circle
            cx="96"
            cy="96"
            r="88"
            stroke="currentColor"
            strokeWidth="12"
            fill="transparent"
            strokeDasharray={2 * Math.PI * 88}
            strokeDashoffset={2 * Math.PI * 88 * (1 - percentage / 100)}
            className={percentage >= 60 ? "text-emerald-500" : "text-orange-500"}
            style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <span className="text-4xl font-bold text-slate-800">{percentage}%</span>
          <p className="text-xs text-slate-500 uppercase font-bold mt-1">স্কোর</p>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className={`text-2xl font-bold ${color}`}>{message}</h2>
        <p className="text-slate-600">
          আপনি {QUESTIONS_PER_SET}টি প্রশ্নের মধ্যে {result.correctAnswers}টির সঠিক উত্তর দিয়েছেন।
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-center gap-2 text-emerald-600 mb-1">
            <Trophy className="w-5 h-5" />
            <span className="font-bold">সঠিক</span>
          </div>
          <span className="text-2xl font-bold text-slate-800">{result.correctAnswers}</span>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-center gap-2 text-red-500 mb-1">
            <AlertCircle className="w-5 h-5" />
            <span className="font-bold">ভুল</span>
          </div>
          <span className="text-2xl font-bold text-slate-800">{result.totalQuestions - result.correctAnswers}</span>
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-4">
        <button
          onClick={onRetry}
          className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-lg shadow-md transition-all flex items-center justify-center gap-2"
        >
          <RefreshCw className="w-5 h-5" />
          আবার চেষ্টা করুন
        </button>
        <button
          onClick={onHome}
          className="w-full py-4 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2"
        >
          <Home className="w-5 h-5" />
          হোম পেজ
        </button>
      </div>
    </div>
  );
};

export default Results;