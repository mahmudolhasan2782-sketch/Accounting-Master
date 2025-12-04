import React from 'react';
import { QUIZ_SETS } from '../constants';
import { QuizSet, TopicType } from '../types';
import { BookMarked, Calculator, PieChart, Layers, User, Star } from 'lucide-react';
import SignUpForm from './SignUpForm';

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
      case TopicType.BASIC: return "text-blue-600 bg-blue-50/50 border-blue-100 hover:border-blue-300 hover:bg-blue-50";
      case TopicType.EQUATION: return "text-purple-600 bg-purple-50/50 border-purple-100 hover:border-purple-300 hover:bg-purple-50";
      case TopicType.DOUBLE_ENTRY: return "text-emerald-600 bg-emerald-50/50 border-emerald-100 hover:border-emerald-300 hover:bg-emerald-50";
      default: return "text-orange-600 bg-orange-50/50 border-orange-100 hover:border-orange-300 hover:bg-orange-50";
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in">
      
      {/* Left Column: Profile & Quiz Sets */}
      <div className="lg:col-span-2 space-y-8">
        
        {/* Creator Profile Card */}
        <div className="bg-white/90 backdrop-blur p-6 rounded-3xl shadow-lg border border-white/50 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full blur-3xl -z-0 opacity-40 translate-x-10 -translate-y-10"></div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
            <div className="shrink-0">
              <div className="w-28 h-28 rounded-full border-4 border-white shadow-xl overflow-hidden relative">
                {/* User provided picture placeholder */}
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" 
                  alt="MAHMUDOL" 
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            <div className="text-center sm:text-left space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                <Star className="w-3 h-3 fill-current" />
                <span>Founder & Creator</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-800">
                MAHMUDOL
              </h2>
              <p className="text-slate-600 font-medium">
                অ্যাকাউন্টিং এক্সপার্ট ও মেন্টর
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-4 pt-1">
                 <div className="text-center">
                    <span className="block font-bold text-slate-800 text-lg">৮০০+</span>
                    <span className="text-xs text-slate-500 uppercase">প্রশ্ন</span>
                 </div>
                 <div className="w-px h-8 bg-slate-300"></div>
                 <div className="text-center">
                    <span className="block font-bold text-slate-800 text-lg">২০+</span>
                    <span className="text-xs text-slate-500 uppercase">সেট</span>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quiz Sets Header */}
        <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-sm border border-white/50">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">অনুশীলন সেটসমূহ</h2>
          <p className="text-slate-600">
            নিচের যেকোনো একটি সেট নির্বাচন করে আপনার দক্ষতা যাচাই করুন।
          </p>
        </div>

        {/* Quiz Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {QUIZ_SETS.map((set) => (
            <button
              key={set.id}
              onClick={() => onSelectSet(set)}
              className={`flex flex-col text-left p-5 rounded-2xl border backdrop-blur-sm transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 ${getColor(set.topic)}`}
            >
              <div className="flex items-center justify-between w-full mb-3">
                <span className="font-bold text-lg opacity-90 bg-white/50 px-2 py-1 rounded-md">সেট #{set.id}</span>
                <div className="bg-white/80 p-2 rounded-full shadow-sm">
                   {getIcon(set.topic)}
                </div>
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-1">{set.title.split('-')[1].trim()}</h3>
              <div className="mt-auto pt-4 flex items-center justify-between text-sm opacity-80 font-medium">
                <span>২০টি প্রশ্ন</span>
                <span>•</span>
                <span>১০ মিনিট</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Right Column: Sign Up Form */}
      <div className="lg:col-span-1">
        <SignUpForm />
        
        {/* Additional Info Box */}
        <div className="mt-6 bg-indigo-900/10 backdrop-blur rounded-2xl p-6 border border-indigo-100/20 text-center text-white">
          <h4 className="font-bold text-lg mb-2">কেন সাইন আপ করবেন?</h4>
          <ul className="text-sm space-y-2 text-left list-disc list-inside opacity-90">
             <li>নিজের প্রগ্রেস ট্রাক করুন</li>
             <li>লিডারবোর্ডে অংশ নিন</li>
             <li>নতুন কুইজের নোটিফিকেশন পান</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default SetSelector;