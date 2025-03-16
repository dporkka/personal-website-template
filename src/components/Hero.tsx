import React from 'react';
import { ArrowDown, Eye } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800" />
      
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <div className="mb-8 flex justify-center mt-16 md:mt-0">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5"
              alt="Developer portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 animate-fade-in" style={{animationDelay: '0.2s'}}>
          John Doe
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
          Full Stack Developer passionate about creating beautiful, functional, and user-friendly applications
        </p>
        <div className="flex flex-row justify-center gap-3 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium w-36"
          >
            <span>Hire Me</span>
            <ArrowDown size={20} className="hidden md:inline" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-300 dark:border-gray-600 w-36"
          >
            <span>Projects</span>
            <Eye size={20} className="hidden md:inline" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;