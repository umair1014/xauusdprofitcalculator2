import { BlogPost } from '../types/blog';

export function getRelatedPosts(currentSlug: string, posts: BlogPost[], limit = 3): BlogPost[] {
  return posts
    .filter(post => post.slug !== currentSlug)
    .slice(0, limit);
}

export function addInternalLinks(content: string): string {
  const internalLinks = {
    'pip calculator': '/pip-calculator',
    'margin calculator': '/margin-calculator',
    'spread comparison': '/spread-comparison',
    'trading journal': '/trading-journal',
    'profit calculator': '/',
    'gold trading basics': '/blog/how-to-trade-xauusd-for-beginners',
    'calculate profits': '/blog/how-to-calculate-xauusd-profit-and-loss',
    'trading strategies': '/blog/best-indicators-for-xauusd-trading',
    'what is xauusd': '/blog/what-is-xauusd-in-forex-trading',
    'xauusd investment': '/blog/is-xauusd-a-good-investment'
  };

  let modifiedContent = content;
  
  Object.entries(internalLinks).forEach(([keyword, url]) => {
    const regex = new RegExp(`\\b${keyword}\\b(?![^<]*>|[^<>]*<\/)`, 'gi');
    modifiedContent = modifiedContent.replace(regex, `<a href="${url}">${keyword}</a>`);
  });

  return modifiedContent;
}