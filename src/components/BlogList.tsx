import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { blogPosts } from '../data/blogPosts';

export function BlogList() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl lg:text-4xl font-bold mb-6 lg:mb-8">Latest Trading Insights</h1>
      <div className="space-y-6">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 md:h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4 md:p-6 md:w-2/3">
                <p className="text-sm text-gray-500 mb-2">
                  {format(new Date(post.date), 'MMMM d, yyyy')}
                </p>
                <h2 className="text-xl md:text-2xl font-semibold mb-3">{post.title}</h2>
                <p className="text-gray-600 text-sm md:text-base">{post.excerpt}</p>
                <span className="inline-block mt-4 text-primary font-medium hover:text-primary-dark">
                  Read More →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}