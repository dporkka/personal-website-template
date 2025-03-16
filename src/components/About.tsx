import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-left mb-6 text-gray-900 dark:text-white animate-fade-in">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I'm a passionate Full Stack Developer with 5+ years of experience in building web applications.
              My journey in tech started when I built my first website, and since then, I've been hooked on
              creating digital experiences that make a difference.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I specialize in JavaScript/TypeScript, React, Node.js, and modern web technologies. I'm always
              learning and exploring new technologies to stay at the forefront of web development.
            </p>
          </div>
          
          <div className="relative animate-fade-in" style={{animationDelay: '0.4s'}}>
            <img
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c"
              alt="Professional headshot"
              className="rounded-lg shadow-xl w-5/6 mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;