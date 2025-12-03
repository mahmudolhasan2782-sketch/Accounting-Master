import React, { ReactNode } from 'react';
import { BookOpen } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title = "হিসাববিজ্ঞান মাস্টার" }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-emerald-600">
            <BookOpen className="w-6 h-6" />
            <h1 className="font-bold text-xl tracking-tight text-slate-800">{title}</h1>
          </div>
          <div className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
            ভার্সন ১.০
          </div>
        </div>
      </header>
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6">
        {children}
      </main>
      <footer className="bg-white border-t border-slate-200 py-6 mt-auto">
        <div className="max-w-4xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>© ২০২৫ হিসাববিজ্ঞান মাস্টার। সকল স্বত্ব সংরক্ষিত।</p>
          <p className="mt-1 text-xs">AI দ্বারা চালিত শিক্ষামূলক অ্যাপ</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;