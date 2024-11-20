import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { blogPosts } from '../data/blogPosts';

export function FeaturedPosts() {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section className="my-8 lg:my-12 px-4">
      <h2 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8">Latest from Our Blog</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
        {featuredPosts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4 lg:p-6 flex-grow">
              <p className="text-sm text-gray-500 mb-2">
                {format(new Date(post.date), 'MMMM d, yyyy')}
              </p>
              <h3 className="text-lg lg:text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-6 lg:mt-8">
        <Link
          to="/blog"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
        >
          View All Posts
        </Link>
      </div>
    </section>
  );
}