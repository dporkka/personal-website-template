import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Set dark mode as default
  const [showResume, setShowResume] = useState(false);
  const [showBlog, setShowBlog] = useState(false);
  const [currentBlogPost, setCurrentBlogPost] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('hero');

  // Check if URL has a blog post slug
  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith('/blog/')) {
      const slug = path.replace('/blog/', '');
      if (slug) {
        setShowBlog(true);
        setCurrentBlogPost(slug);
      }
    }
  }, []);

  useEffect(() => {
    // Check if dark mode was previously set in localStorage
    const savedDarkMode = localStorage.getItem('darkMode');
    
    // Set initial dark mode state - default to true if not set
    if (savedDarkMode !== null) {
      setIsDarkMode(savedDarkMode === 'true');
    } else {
      // Default to dark mode
      setIsDarkMode(true);
    }

    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  useEffect(() => {
    // Update document class for dark mode
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', String(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const toggleResume = () => {
    setShowResume(prevState => !prevState);
    setShowBlog(false);
    setCurrentBlogPost(null);
    // Scroll to top when toggling resume
    window.scrollTo(0, 0);
  };

  const toggleBlog = () => {
    setShowBlog(prevState => !prevState);
    setShowResume(false);
    setCurrentBlogPost(null);
    // Scroll to top when toggling blog
    window.scrollTo(0, 0);
  };

  const viewBlogPost = (slug: string) => {
    setCurrentBlogPost(slug);
    // Update URL without page reload
    window.history.pushState({}, '', `/blog/${slug}`);
    // Scroll to top
    window.scrollTo(0, 0);
  };

  const goBackToBlog = () => {
    setCurrentBlogPost(null);
    // Update URL without page reload
    window.history.pushState({}, '', '/blog');
  };

  const navigateToSection = (sectionId: string) => {
    if ((showResume || showBlog || currentBlogPost) && sectionId !== 'resume' && sectionId !== 'blog') {
      // If we're on resume/blog page and want to navigate to another section
      setShowResume(false);
      setShowBlog(false);
      setCurrentBlogPost(null);
      
      // Use setTimeout to ensure the main content is rendered before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
          setActiveSection(sectionId);
        }
      }, 100);
    } else if (sectionId === 'blog') {
      toggleBlog();
    } else if (sectionId === 'resume') {
      toggleResume();
    } else if (!showResume && !showBlog && !currentBlogPost) {
      // If already on main page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
        setActiveSection(sectionId);
      }
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar 
          isDarkMode={isDarkMode} 
          toggleDarkMode={toggleDarkMode} 
          toggleResume={toggleResume}
          toggleBlog={toggleBlog}
          navigateToSection={navigateToSection}
          activeSection={activeSection}
          showResume={showResume}
          showBlog={showBlog || !!currentBlogPost}
        />
        
        {showResume ? (
          <Resume 
            toggleResume={toggleResume} 
            navigateToContact={() => navigateToSection('contact')}
          />
        ) : showBlog ? (
          currentBlogPost ? (
            <BlogPost 
              goBack={goBackToBlog}
              postSlug={currentBlogPost}
            />
          ) : (
            <Blog />
          )
        ) : (
          <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Testimonials />
            <Contact />
          </>
        )}
        
        <Footer navigateToSection={navigateToSection} />
      </div>
    </ErrorBoundary>
  );
}

export default App;