import React, { useEffect } from 'react';
import { ArrowLeft, Download, Mail, Phone, MapPin, Globe, Briefcase, GraduationCap, Award, MessageSquare } from 'lucide-react';

interface ResumeProps {
  toggleResume: () => void;
  navigateToContact: () => void;
}

const Resume: React.FC<ResumeProps> = ({ toggleResume, navigateToContact }) => {
  useEffect(() => {
    // Scroll to top when resume component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleDownloadResume = () => {
    // Create a direct link to the PDF file
    const pdfUrl = new URL('/resume.pdf', window.location.origin).href;
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="min-h-screen pt-20 pb-10 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={toggleResume}
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </button>
          
          <div className="flex gap-4">
            <button
              onClick={navigateToContact}
              className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              <MessageSquare size={20} />
              Contact Me
            </button>
            
            <button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <Download size={20} />
              View Resume PDF
            </button>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8 mb-8">
          <div className="border-b border-gray-200 dark:border-gray-700 pb-6 mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">John Doe</h1>
            <h2 className="text-xl text-blue-600 dark:text-blue-400 mb-4">Full Stack Developer</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <Mail size={18} className="text-gray-500 dark:text-gray-400" />
                <span>john.doe@example.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <Phone size={18} className="text-gray-500 dark:text-gray-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <MapPin size={18} className="text-gray-500 dark:text-gray-400" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <Globe size={18} className="text-gray-500 dark:text-gray-400" />
                <span>johndoe.com</span>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Briefcase size={20} className="text-blue-600 dark:text-blue-400" />
              Professional Experience
            </h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Senior Full Stack Developer</h4>
                  <span className="text-sm text-gray-600 dark:text-gray-400">2022 - Present</span>
                </div>
                <p className="text-blue-600 dark:text-blue-400 mb-2">TechInnovate Inc.</p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Led development of a high-traffic e-commerce platform serving 100K+ daily users</li>
                  <li>Implemented CI/CD pipeline reducing deployment time by 70%</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                </ul>
              </div>
              
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Full Stack Developer</h4>
                  <span className="text-sm text-gray-600 dark:text-gray-400">2019 - 2022</span>
                </div>
                <p className="text-blue-600 dark:text-blue-400 mb-2">WebSolutions Co.</p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Developed and maintained multiple client websites and web applications</li>
                  <li>Optimized database queries resulting in 40% faster page load times</li>
                  <li>Collaborated with design team to implement responsive UI/UX</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <GraduationCap size={20} className="text-blue-600 dark:text-blue-400" />
              Education
            </h3>
            
            <div>
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-semibold text-gray-900 dark:text-white">Master of Computer Science</h4>
                <span className="text-sm text-gray-600 dark:text-gray-400">2017 - 2019</span>
              </div>
              <p className="text-blue-600 dark:text-blue-400 mb-2">Stanford University</p>
              <p className="text-gray-700 dark:text-gray-300">Specialized in Software Engineering and Artificial Intelligence</p>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Award size={20} className="text-blue-600 dark:text-blue-400" />
              Skills
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Frontend</h4>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>React / Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Redux</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Backend</h4>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>Node.js / Express</li>
                  <li>Python / Django</li>
                  <li>PostgreSQL / MongoDB</li>
                  <li>GraphQL</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">DevOps</h4>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>Docker / Kubernetes</li>
                  <li>AWS / GCP</li>
                  <li>CI/CD (GitHub Actions)</li>
                  <li>Terraform</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Award size={20} className="text-blue-600 dark:text-blue-400" />
              Certifications
            </h3>
            
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>AWS Certified Solutions Architect</li>
              <li>Google Cloud Professional Developer</li>
              <li>MongoDB Certified Developer</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;