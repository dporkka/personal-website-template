import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, User, Clock, Tag, Share2, Twitter, Facebook, Linkedin } from 'lucide-react';

interface BlogPostProps {
  goBack: () => void;
  postSlug: string;
}

// This would typically come from an API or CMS
const getBlogPostBySlug = (slug: string) => {
  return {
    title: 'How to Build a Responsive Website with Tailwind CSS',
    content: `
      <p>Tailwind CSS has revolutionized the way developers approach CSS. Instead of writing custom CSS for each component, Tailwind provides utility classes that can be composed to build any design directly in your markup.</p>
      
      <h2>Getting Started with Tailwind CSS</h2>
      
      <p>To get started with Tailwind CSS, you first need to install it via npm:</p>
      
      <pre><code>npm install tailwindcss</code></pre>
      
      <p>Then, create a configuration file:</p>
      
      <pre><code>npx tailwindcss init</code></pre>
      
      <h2>The Power of Utility Classes</h2>
      
      <p>Tailwind's utility-first approach means you can style elements without ever leaving your HTML:</p>
      
      <pre><code>&lt;div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"&gt;
  &lt;div&gt;
    &lt;div class="text-xl font-medium text-black"&gt;Tailwind CSS&lt;/div&gt;
    &lt;p class="text-gray-500"&gt;The utility-first CSS framework&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      
      <h2>Responsive Design Made Easy</h2>
      
      <p>Tailwind makes responsive design straightforward with intuitive breakpoint prefixes:</p>
      
      <pre><code>&lt;div class="w-full md:w-1/2 lg:w-1/3"&gt;&lt;/div&gt;</code></pre>
      
      <p>This creates an element that's full width on mobile, half width on medium screens, and one-third width on large screens.</p>
      
      <h2>Customization</h2>
      
      <p>One of Tailwind's greatest strengths is its customizability. You can extend or override the default configuration in your tailwind.config.js file:</p>
      
      <pre><code>module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1992d4',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      }
    }
  }
}</code></pre>
      
      <h2>Conclusion</h2>
      
      <p>Tailwind CSS provides a different approach to styling your applications. By using utility classes, you can build custom designs without writing CSS. This approach leads to faster development times and more consistent UIs.</p>
    `,
    author: 'John Doe',
    date: '2025-03-15',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8',
    tags: ['Web Development', 'CSS', 'Tailwind', 'Frontend'],
  };
};

const BlogPost: React.FC<BlogPostProps> = ({ goBack, postSlug }) => {
  const post = getBlogPostBySlug(postSlug);
  
  // Fix for preserving light/dark mode when navigating to blog post
  useEffect(() => {
    // Do nothing - let the current mode persist
    // The previous code was forcing dark mode by checking and adding the dark class
  }, []);
  
  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post.title;
    
    let shareUrl = '';
    
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      default:
        // If no platform is specified, use the Web Share API if available
        if (navigator.share) {
          navigator.share({
            title: title,
            url: url
          }).catch(console.error);
          return;
        }
        // Fallback to copying to clipboard
        navigator.clipboard.writeText(url).then(() => {
          alert('Link copied to clipboard!');
        }).catch(console.error);
        return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const handleGoBack = () => {
    goBack();
    // Scroll to top when going back to blog
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen pt-20 pb-10 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={handleGoBack}
          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 mb-8 animate-fade-in"
        >
          <ArrowLeft size={20} />
          Back to Blog
        </button>
        
        <article className="animate-fade-in" style={{animationDelay: '0.2s'}}>
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
          />
          
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map(tag => (
              <span 
                key={tag}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
              >
                <Tag size={14} className="inline mr-1" />
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 mb-8 gap-4">
            <div className="flex items-center">
              <User size={18} className="mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={18} className="mr-2" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center">
              <Clock size={18} className="mr-2" />
              <span>{post.readTime}</span>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none dark:prose-invert mb-8 text-gray-800 dark:text-white">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-8">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Share this article
                </h3>
                <div className="flex gap-4">
                  <button 
                    onClick={() => handleShare('twitter')}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <Twitter size={20} />
                  </button>
                  <button 
                    onClick={() => handleShare('facebook')}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-600 transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <Facebook size={20} />
                  </button>
                  <button 
                    onClick={() => handleShare('linkedin')}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin size={20} />
                  </button>
                  <button 
                    onClick={() => handleShare('')}
                    className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500 transition-colors"
                    aria-label="Copy link"
                  >
                    <Share2 size={20} />
                  </button>
                </div>
              </div>
              
              <button
                onClick={handleGoBack}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Back to Blog
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;