import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Mail, Heart } from 'lucide-react';

interface FooterProps {
  navigateToSection: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateToSection }) => {
  const currentYear = new Date().getFullYear();
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    navigateToSection(sectionId);
  };
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              <a 
                href="#hero" 
                onClick={(e) => handleLinkClick(e, 'hero')}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Personal Site
              </a>
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 max-w-md">
              A passionate Full Stack Developer creating beautiful, functional, and user-friendly applications.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/dporkka" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/david-porkka" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://x.com/dporkka" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleLinkClick(e, 'about')}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  onClick={(e) => handleLinkClick(e, 'skills')}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  onClick={(e) => handleLinkClick(e, 'projects')}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#blog" 
                  onClick={(e) => handleLinkClick(e, 'blog')}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <Mail size={18} className="text-blue-600 dark:text-blue-400" />
                <span>contact@example.com</span>
              </li>
              <li className="text-gray-700 dark:text-gray-300">
                San Francisco, CA
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleLinkClick(e, 'contact')}
                  className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-700 dark:text-gray-300 mb-4 md:mb-0">
            &copy; {currentYear} Personal Site. All rights reserved.
          </p>
          <div className="flex flex-col items-center gap-2">
            <p className="text-gray-700 dark:text-gray-300 flex items-center">
              Made with <Heart size={16} className="mx-1 text-red-500" /> by <a href="https://davidporkka.com" className="ml-1 text-blue-600 dark:text-blue-400 hover:underline">David Porkka</a>
            </p>
            <a 
              href="https://buy.stripe.com/cN26oM84c2oT772dQX" 
              className="text-blue-600 dark:text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Support the Developer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;