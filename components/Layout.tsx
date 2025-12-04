import React, { ReactNode } from 'react';
import { BookOpen } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title = "হিসাববিজ্ঞান মাস্টার" }) => {
  return (
    <div className="min-h-screen flex flex-col animate-gradient-bg">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-white/20 sticky top-0 z-20 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo Image Placeholder - User can replace src with local file */}
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg transform -rotate-3">
               <span className="font-bold text-xl">H</span>
            </div>
            <div>
              <h1 className="font-logo text-3xl text-indigo-900 tracking-wide">Hemonto Inco.</h1>
            </div>
          </div>
          <div className="hidden md:block text-xs font-bold text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100 uppercase tracking-widest">
            Accounting Master
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-white/20 py-8 mt-auto">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-slate-800 font-medium">© ২০২৫ @HEMONTU INCORPORATION এর একটি সার্ভিস</p>
          <div className="flex justify-center gap-4 mt-2 text-xs text-slate-500 font-semibold uppercase tracking-wider">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;