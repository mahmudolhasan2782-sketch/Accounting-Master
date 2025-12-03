import React from 'react';
import { QUIZ_SETS } from '../constants';
import { QuizSet, TopicType } from '../types';
import { BookMarked, Calculator, PieChart, Layers, User } from 'lucide-react';

interface SetSelectorProps {
  onSelectSet: (set: QuizSet) => void;
}

const SetSelector: React.FC<SetSelectorProps> = ({ onSelectSet }) => {
  const getIcon = (topic: string) => {
    switch (topic) {
      case TopicType.BASIC: return <BookMarked className="w-5 h-5" />;
      case TopicType.EQUATION: return <Calculator className="w-5 h-5" />;
      case TopicType.DOUBLE_ENTRY: return <Layers className="w-5 h-5" />;
      default: return <PieChart className="w-5 h-5" />;
    }
  };

  const getColor = (topic: string) => {
    switch (topic) {
      case TopicType.BASIC: return "text-blue-600 bg-blue-50 border-blue-100 hover:border-blue-300";
      case TopicType.EQUATION: return "text-purple-600 bg-purple-50 border-purple-100 hover:border-purple-300";
      case TopicType.DOUBLE_ENTRY: return "text-emerald-600 bg-emerald-50 border-emerald-100 hover:border-emerald-300";
      default: return "text-orange-600 bg-orange-50 border-orange-100 hover:border-orange-300";
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Branding / Author Section */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl -z-0 opacity-50"></div>
        
        {/* Image Placeholder - User should replace src with their actual image URL */}
        <div className="relative z-10 shrink-0">
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-emerald-100 shadow-md overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop" 
              alt="Hemonto Production" 
              className="w-full h-full object-cover"
            />
            {/* Overlay hint for the user */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all"></div>
          </div>
        </div>

        <div className="text-center md:text-left z-10 space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
            <User className="w-3 h-3" />
            <span>Creator</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
            একটি <span className="text-emerald-600">হেমন্ত</span> প্রোডাকশন
          </h2>
          <p className="text-slate-500 font-medium text-lg">@hemontu</p>
        </div>
      </div>

      <div className="text-center space-y-3 mb-8 pt-4">
        <h2 className="text-3xl font-bold text-slate-800">অনুশীলন সেট নির্বাচন করুন</h2>
        <p className="text-slate-500 max-w-lg mx-auto">
          এখানে প্রায় ৮০০টি প্রশ্ন ২০টি করে সেটে ভাগ করা আছে। আপনার পছন্দের বিষয় নির্বাচন করে পরীক্ষা শুরু করুন।
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {QUIZ_SETS.map((set) => (
          <button
            key={set.id}
            onClick={() => onSelectSet(set)}
            className={`flex flex-col text-left p-5 rounded-xl border transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 ${getColor(set.topic)}`}
          >
            <div className="flex items-center justify-between w-full mb-3">
              <span className="font-bold text-lg opacity-90">সেট #{set.id}</span>
              {getIcon(set.topic)}
            </div>
            <h3 className="font-medium text-slate-800 text-lg mb-1">{set.title.split('-')[1].trim()}</h3>
            <p className="text-sm opacity-70">২০টি প্রশ্ন • ১০ মিনিট</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SetSelector;