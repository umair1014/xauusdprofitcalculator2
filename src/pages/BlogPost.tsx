import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { format } from 'date-fns';
import { blogPosts } from '../data/blogPosts';
import { Comments } from '../components/Comments';
import { RelatedPosts } from '../components/RelatedPosts';
import { StickyAd } from '../components/StickyAd';
import { AdPlaceholder } from '../components/AdPlaceholder';

export function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Extract content from HTML string and remove h1 tag
  const getContent = () => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(post.content, 'text/html');
    
    // Remove h1 tag if it exists
    const h1 = doc.querySelector('h1');
    if (h1) {
      h1.remove();
    }
    
    const article = doc.querySelector('article');
    return article ? article.innerHTML : post.content;
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Content */}
        <article className="lg:col-span-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] object-cover"
              loading="eager"
            />
            
            <div className="p-8">
              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
              <p className="text-gray-500 text-lg mb-4">
                {format(new Date(post.date), 'MMMM d, yyyy')}
              </p>

              <div className="my-8">
                <AdPlaceholder className="min-h-[250px]" />
              </div>

              <div 
                className="blog-content prose max-w-none prose-lg"
                dangerouslySetInnerHTML={{ __html: getContent() }}
              />

              <div className="mt-8">
                <AdPlaceholder className="min-h-[250px]" />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Comments />
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-4">
          <div className="sticky top-4 space-y-8">
            <StickyAd />
            <RelatedPosts currentPost={post} />
          </div>
        </aside>
      </div>
    </div>
  );
}