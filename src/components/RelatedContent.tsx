import React from 'react';
import { Link } from 'react-router-dom';

interface RelatedContentProps {
  links: Array<{
    title: string;
    url: string;
    description?: string;
  }>;
}

export function RelatedContent({ links }: RelatedContentProps) {
  return (
    <div className="related-content">
      <h3>Related Resources</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.url} className="hover:text-primary-dark transition-colors">
              {link.title}
              {link.description && (
                <span className="text-sm text-gray-600 ml-2">
                  - {link.description}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}