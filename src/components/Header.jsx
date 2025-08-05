import React from 'react';
import { Zap } from 'lucide-react';

const Header = () => {
  return (
    <div className="text-center mb-8 animate-fade-in">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl shadow-lg transform hover:scale-110 transition-transform duration-300">
          <Zap className="w-8 h-8 text-white animate-pulse" />
        </div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          FocusFlow
        </h1>
      </div>
      <p className="text-gray-300 text-lg opacity-80">
        Organize your life with ease. Manage tasks, track progress, and stay focused with FocusFlow.
      </p>
    </div>
  );
};

export default Header;