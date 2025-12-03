import React from 'react';
import { Question } from '../types';
import { CheckCircle2, XCircle } from 'lucide-react';

interface QuizCardProps {
  question: Question;
  selectedOptionIndex: number | null;
  onSelectOption: (index: number) => void;
  showResult: boolean;
}

const QuizCard: React.FC<QuizCardProps> = ({ 
  question, 
  selectedOptionIndex, 
  onSelectOption, 
  showResult 
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 animate-fade-in">
      <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-6 leading-relaxed">
        {question.question}
      </h3>

      <div className="space-y-3">
        {question.options.map((option, idx) => {
          let optionClass = "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ";
          
          if (showResult) {
            if (idx === question.correctAnswerIndex) {
              optionClass += "bg-emerald-50 border-emerald-500 text-emerald-700 font-medium";
            } else if (idx === selectedOptionIndex && idx !== question.correctAnswerIndex) {
              optionClass += "bg-red-50 border-red-500 text-red-700";
            } else {
              optionClass += "bg-slate-50 border-transparent opacity-60";
            }
          } else {
            if (selectedOptionIndex === idx) {
              optionClass += "bg-emerald-50 border-emerald-500 text-emerald-800 shadow-md";
            } else {
              optionClass += "bg-slate-50 border-transparent hover:bg-slate-100 hover:border-slate-300 text-slate-700";
            }
          }

          return (
            <button
              key={idx}
              onClick={() => !showResult && onSelectOption(idx)}
              disabled={showResult}
              className={optionClass}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border ${
                  showResult && idx === question.correctAnswerIndex 
                    ? 'bg-emerald-500 border-emerald-500 text-white'
                    : selectedOptionIndex === idx
                      ? 'bg-emerald-500 border-emerald-500 text-white'
                      : 'bg-white border-slate-300 text-slate-500 group-hover:border-slate-400'
                }`}>
                  {['ক', 'খ', 'গ', 'ঘ'][idx]}
                </div>
                <span>{option}</span>
              </div>
              
              {showResult && idx === question.correctAnswerIndex && (
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              )}
              {showResult && idx === selectedOptionIndex && idx !== question.correctAnswerIndex && (
                <XCircle className="w-6 h-6 text-red-500" />
              )}
            </button>
          );
        })}
      </div>

      {showResult && (
        <div className="mt-6 p-4 bg-blue-50 text-blue-800 rounded-xl border border-blue-100">
          <p className="font-bold mb-1 text-sm uppercase tracking-wide opacity-70">ব্যাখ্যা:</p>
          <p>{question.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default QuizCard;