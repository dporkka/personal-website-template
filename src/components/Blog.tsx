import React, { useState, useEffect } from 'react';
import { Search, Calendar, User, Clock, Tag, ChevronRight } from 'lucide-react';

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: 'How to Build a Responsive Website with Tailwind CSS',
    excerpt: 'Learn how to create beautiful, responsive websites using Tailwind CSS, a utility-first CSS framework that makes development faster and more intuitive.',
    content: 'Full content of the article goes here...',
    author: 'John Doe',
    date: '2025-03-15',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8',
    tags: ['Web Development', 'CSS', 'Tailwind', 'Frontend'],
    slug: 'how-to-build-responsive-website-tailwind-css'
  },
  {
    id: 2,
    title: 'The Future of JavaScript: What to Expect in 2025',
    excerpt: 'Explore the upcoming features and trends in JavaScript that will shape web development in 2025 and beyond.',
    content: 'Full content of the article goes here...',
    author: 'John Doe',
    date: '2025-02-28',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    tags: ['JavaScript', 'Web Development', 'Programming', 'Frontend'],
    slug: 'future-of-javascript-2025'
  },
  {
    id: 3,
    title: 'Building Scalable APIs with Node.js and Express',
    excerpt: 'A comprehensive guide to creating robust, scalable RESTful APIs using Node.js and Express framework.',
    content: 'Full content of the article goes here...',
    author: 'John Doe',
    date: '2025-02-10',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    tags: ['Node.js', 'Express', 'API', 'Backend'],
    slug: 'building-scalable-apis-nodejs-express'
  },
  {
    id: 4,
    title: 'Getting Started with TypeScript: A Beginner\'s Guide',
    excerpt: 'Learn the basics of TypeScript and how it can improve your JavaScript development experience with static typing and advanced features.',
    content: 'Full content of the article goes here...',
    author: 'John Doe',
    date: '2025-01-25',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea',
    tags: ['TypeScript', 'JavaScript', 'Programming', 'Web Development'],
    slug: 'getting-started-with-typescript-beginners-guide'
  },
  {
    id: 5,
    title: 'Optimizing React Performance: Tips and Best Practices',
    excerpt: 'Discover practical techniques to improve the performance of your React applications and deliver a better user experience.',
    content: 'Full content of the article goes here...',
    author: 'John Doe',
    date: '2025-01-12',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2',
    tags: ['React', 'Performance', 'JavaScript', 'Frontend'],
    slug: 'optimizing-react-performance-tips-best-practices'
  },
  {
    id: 6,
    title: 'Introduction to Docker for Web Developers',
    excerpt: 'Learn how Docker can simplify your development workflow and ensure consistency across different environments.',
    content: 'Full content of the article goes here...',
    author: 'John Doe',
    date: '2024-12-20',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b',
    tags: ['Docker', 'DevOps', 'Web Development', 'Containers'],
    slug: 'introduction-to-docker-web-developers'
  }
];

// All unique tags from blog posts
const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags))).sort();

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Filter posts based on search term and selected tag
  useEffect(() => {
    let result = blogPosts;
    
    if (searchTerm) {
      const lowerCaseSearch = searchTerm.toLowerCase();
      result = result.filter(post => 
        post.title.toLowerCase().includes(lowerCaseSearch) || 
        post.excerpt.toLowerCase().includes(lowerCaseSearch) ||
        post.tags.some(tag => tag.toLowerCase().includes(lowerCaseSearch))
      );
    }
    
    if (selectedTag) {
      result = result.filter(post => 
        post.tags.includes(selectedTag)
      );
    }
    
    setFilteredPosts(result);
  }, [searchTerm, selectedTag]);

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on web development, programming, and technology
          </p>
        </div>
        
        {/* Search and filter */}
        <div className="mb-12">
          <div className="flex flex-col gap-4">
            <div className="relative max-w-xl mx-auto w-full mb-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center animate-fade-in" style={{animationDelay: '0.3s'}}>
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedTag === null 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                }`}
              >
                All
              </button>
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedTag === tag 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Blog posts */}
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article 
                key={post.id} 
                className="bg-[#f1f1f1] dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow animate-fade-in"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.slice(0, 2).map(tag => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs">
                        +{post.tags.length - 2} more
                      </span>
                    )}
                  </div>
                  
                  <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    <a 
                      href={`/blog/${post.slug}`} 
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {post.title}
                    </a>
                  </h2>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center mr-4">
                      <Calendar size={16} className="mr-1" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <a 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Read more
                    <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-[#f1f1f1] dark:bg-gray-800 rounded-lg animate-fade-in" style={{animationDelay: '0.4s'}}>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              No articles found matching your search criteria.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedTag(null);
              }}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;