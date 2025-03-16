import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a new PDF document
const doc = new PDFDocument({
  size: 'LETTER',
  margin: 50
});

// Pipe the PDF to a file
doc.pipe(fs.createWriteStream(path.join(__dirname, '../public/resume.pdf')));

// Helper function for section headers
const addSectionHeader = (text) => {
  doc.fontSize(16)
     .font('Helvetica-Bold')
     .text(text)
     .moveDown(0.5);
  
  doc.moveTo(50, doc.y)
     .lineTo(562, doc.y)
     .stroke();
  
  doc.moveDown(0.5);
};

// Header
doc.fontSize(28)
   .font('Helvetica-Bold')
   .text('John Doe', { align: 'center' });

doc.fontSize(18)
   .font('Helvetica')
   .text('Full Stack Developer', { align: 'center' })
   .moveDown(0.5);

doc.fontSize(12)
   .text('Email: john.doe@example.com | Phone: +1 (555) 123-4567', { align: 'center' })
   .text('San Francisco, CA | johndoe.com', { align: 'center' })
   .moveDown(1);

// Professional Experience
addSectionHeader('Professional Experience');

doc.fontSize(14)
   .font('Helvetica-Bold')
   .text('Senior Full Stack Developer')
   .fontSize(12)
   .font('Helvetica')
   .text('TechInnovate Inc., San Francisco, CA', { continued: true })
   .text('2022 - Present', { align: 'right' })
   .moveDown(0.5);

doc.list([
  'Led development of a high-traffic e-commerce platform serving 100K+ daily users',
  'Implemented CI/CD pipeline reducing deployment time by 70%',
  'Mentored junior developers and conducted code reviews',
  'Optimized database performance resulting in 50% faster query response times'
]).moveDown(0.5);

doc.fontSize(14)
   .font('Helvetica-Bold')
   .text('Full Stack Developer')
   .fontSize(12)
   .font('Helvetica')
   .text('WebSolutions Co., San Francisco, CA', { continued: true })
   .text('2019 - 2022', { align: 'right' })
   .moveDown(0.5);

doc.list([
  'Developed and maintained multiple client websites and web applications',
  'Optimized database queries resulting in 40% faster page load times',
  'Collaborated with design team to implement responsive UI/UX',
  'Integrated third-party APIs and services to enhance application functionality'
]).moveDown(1);

// Education
addSectionHeader('Education');

doc.fontSize(14)
   .font('Helvetica-Bold')
   .text('Master of Computer Science')
   .fontSize(12)
   .font('Helvetica')
   .text('Stanford University, Stanford, CA', { continued: true })
   .text('2017 - 2019', { align: 'right' })
   .moveDown(0.5);

doc.list([
  'Specialized in Software Engineering and Artificial Intelligence',
  'GPA: 3.9/4.0',
  'Teaching Assistant for Advanced Web Development course'
]).moveDown(1);

// Technical Skills
addSectionHeader('Technical Skills');

doc.fontSize(14)
   .font('Helvetica-Bold')
   .text('Frontend Development')
   .fontSize(12)
   .font('Helvetica')
   .moveDown(0.5);

doc.list([
  'React / Next.js, TypeScript, Tailwind CSS, Redux',
  'Modern JavaScript (ES6+), HTML5, CSS3, Webpack',
  'Responsive Design, Web Accessibility, Performance Optimization'
]).moveDown(0.5);

doc.fontSize(14)
   .font('Helvetica-Bold')
   .text('Backend Development')
   .fontSize(12)
   .font('Helvetica')
   .moveDown(0.5);

doc.list([
  'Node.js / Express, Python / Django, RESTful APIs',
  'PostgreSQL, MongoDB, GraphQL, Redis',
  'Microservices Architecture, API Design, Security Best Practices'
]).moveDown(0.5);

doc.fontSize(14)
   .font('Helvetica-Bold')
   .text('DevOps & Tools')
   .fontSize(12)
   .font('Helvetica')
   .moveDown(0.5);

doc.list([
  'Docker, Kubernetes, CI/CD (GitHub Actions, Jenkins)',
  'AWS (EC2, S3, Lambda, RDS), GCP, Terraform',
  'Git, Jira, Agile Methodologies, Testing (Jest, Cypress)'
]).moveDown(1);

// Certifications
addSectionHeader('Certifications');

doc.list([
  'AWS Certified Solutions Architect - Professional',
  'Google Cloud Professional Developer',
  'MongoDB Certified Developer Associate'
]).moveDown(1);

// Additional Information
addSectionHeader('Additional Information');

doc.list([
  'Open Source Contributor to various React and Node.js projects',
  'Regular speaker at tech conferences and meetups',
  'Fluent in English and Spanish'
]);

// Finalize the PDF
doc.end();