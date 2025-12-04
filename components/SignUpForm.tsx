import React from 'react';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

const SignUpForm: React.FC = () => {
  return (
    <div className="bg-white/95 backdrop-blur rounded-3xl p-6 shadow-xl border border-white/50 sticky top-24">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-slate-800">অ্যাকাউন্ট খুলুন</h3>
        <p className="text-slate-500 text-sm">বিনামূল্যে সাইন আপ করে আপনার প্রগ্রেস সেভ রাখুন</p>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-600 uppercase ml-1">আপনার নাম</label>
          <div className="relative">
            <User className="w-5 h-5 absolute left-3 top-3 text-slate-400" />
            <input 
              type="text" 
              placeholder="মাহমুদুল হাসান"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-600 uppercase ml-1">ইমেইল</label>
          <div className="relative">
            <Mail className="w-5 h-5 absolute left-3 top-3 text-slate-400" />
            <input 
              type="email" 
              placeholder="hello@hemonto.com"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-600 uppercase ml-1">পাসওয়ার্ড</label>
          <div className="relative">
            <Lock className="w-5 h-5 absolute left-3 top-3 text-slate-400" />
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
            />
          </div>
        </div>

        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-indigo-200 transition-all flex items-center justify-center gap-2 mt-2">
          সাইন আপ করুন
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-xs text-slate-400">
          সাইন আপ করার মাধ্যমে আপনি আমাদের <span className="text-indigo-600 cursor-pointer hover:underline">শর্তাবলী</span> মেনে নিচ্ছেন।
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;