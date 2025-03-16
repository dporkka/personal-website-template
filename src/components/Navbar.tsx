import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  toggleResume: () => void;
  toggleBlog: () => void;
  navigateToSection: (sectionId: string) => void;
  activeSection: string;
  showResume: boolean;
  showBlog: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ 
  isDarkMode, 
  toggleDarkMode, 
  toggleResume, 
  toggleBlog,
  navigateToSection,
  activeSection,
  showResume,
  showBlog
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      if (!showResume && !showBlog) {
        // Determine active section based on scroll position
        const sections = ['hero', 'about', 'skills', 'projects', 'testimonials', 'contact'];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showResume, showBlog]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (sectionId === 'resume') {
      toggleResume();
    } else if (sectionId === 'blog') {
      toggleBlog();
    } else {
      navigateToSection(sectionId);
    }
  };

  const navLinks = [
    { id: 'about', label: 'About', show: true },
    { id: 'skills', label: 'Skills', show: true },
    { id: 'projects', label: 'Projects', show: true },
    { id: 'testimonials', label: 'Testimonials', show: false },
    { id: 'contact', label: 'Contact', show: true },
    { id: 'blog', label: 'Blog', show: true },
    { id: 'resume', label: 'Resume', show: true }
  ];

  const visibleNavLinks = navLinks.filter(link => link.show);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a 
              href="#hero" 
              onClick={(e) => handleNavClick(e, 'hero')}
              className="text-2xl font-bold text-gray-900 dark:text-white"
            >
              Personal Site
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {visibleNavLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`${
                    (activeSection === link.id) || 
                    (link.id === 'resume' && showResume) ||
                    (link.id === 'blog' && showBlog)
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  } transition-colors`}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 shadow-lg">
          {visibleNavLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`block px-3 py-2 ${
                (activeSection === link.id) || 
                (link.id === 'resume' && showResume) ||
                (link.id === 'blog' && showBlog)
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              } transition-colors`}
              onClick={(e) => handleNavClick(e, link.id)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;