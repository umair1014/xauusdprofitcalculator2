import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { BlogPost } from '../types/blog';
import blogPosts from '../data/blogPosts';

interface Props {
  currentPost: BlogPost;
}

export function RelatedPosts({ currentPost }: Props) {
  const relatedPosts = blogPosts
    .filter((post) => post.slug !== currentPost.slug)
    .slice(0, 3);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold mb-6">Related Articles</h3>
      <div className="space-y-6">
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="block group"
          >
            <div className="flex items-start space-x-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                loading="lazy"
              />
              <div>
                <h4 className="font-medium text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  {format(new Date(post.date), 'MMM d, yyyy')}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}