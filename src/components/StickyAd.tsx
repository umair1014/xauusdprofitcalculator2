import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { blogPosts } from '../data/blogPosts';
import { TrendingUp } from 'lucide-react';
import { AdPlaceholder } from './AdPlaceholder';

export function StickyAd() {
  const recentPosts = blogPosts.slice(0, 5);

  return (
    <div className="space-y-8">
      {/* Recent Posts */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="text-lg font-bold mb-4 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-yellow-500" />
          Recent Posts
        </h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group block"
            >
              <div className="flex items-start space-x-3">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                />
                <div>
                  <h4 className="font-medium text-sm group-hover:text-yellow-600 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {format(new Date(post.date), 'MMM d, yyyy')}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Ad Block */}
      <div className="sticky top-4">
        <AdPlaceholder className="min-h-[600px] bg-white rounded-lg shadow-sm p-4" />
      </div>
    </div>
  );
}