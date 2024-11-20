import { BlogPost } from '../types/blog';
import howToTradeContent from '../blogs/how-to-trade-xauusd-for-beginners.html?raw';
import understandingGoldContent from '../blogs/understanding-gold-trading.html?raw';
import goldTradingStrategiesContent from '../blogs/gold-trading-strategies.html?raw';
import isXauusdGoodInvestmentContent from '../blogs/is-xauusd-a-good-investment.html?raw';
import whatIsXauusdContent from '../blogs/what-is-xauusd-in-forex-trading.html?raw';
import calculateProfitLossContent from '../blogs/how-to-calculate-xauusd-profit-and-loss.html?raw';

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-trade-xauusd-for-beginners',
    title: 'How to Trade XAUUSD for Beginners: A Complete Guide',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1591994843349-f415893b3a6b?auto=format&fit=crop&q=80',
    excerpt: 'Learn how to trade XAUUSD (Gold) with our comprehensive beginner\'s guide. Discover essential strategies, tools, and risk management techniques.',
    content: howToTradeContent
  },
  {
    slug: 'understanding-gold-trading',
    title: 'Understanding Gold Trading: A Comprehensive Guide',
    date: '2024-03-14',
    image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&q=80',
    excerpt: 'Learn the fundamentals of gold trading and how to make informed decisions in the market.',
    content: understandingGoldContent
  },
  {
    slug: 'gold-trading-strategies',
    title: 'Essential Gold Trading Strategies for 2024',
    date: '2024-03-13',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80',
    excerpt: 'Discover the most effective gold trading strategies that professional traders use in 2024.',
    content: goldTradingStrategiesContent
  },
  {
    slug: 'is-xauusd-a-good-investment',
    title: 'Is XAUUSD a Good Investment? A Complete Analysis',
    date: '2024-03-12',
    image: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&q=80',
    excerpt: 'Explore whether XAUUSD is a good investment choice. Learn about the benefits, risks, and factors to consider when trading gold.',
    content: isXauusdGoodInvestmentContent
  },
  {
    slug: 'what-is-xauusd-in-forex-trading',
    title: 'What Is XAUUSD in Forex Trading? A Complete Guide',
    date: '2024-03-11',
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80',
    excerpt: 'Discover what XAUUSD means in forex trading, its importance, and how to trade it effectively.',
    content: whatIsXauusdContent
  },
  {
    slug: 'how-to-calculate-xauusd-profit-and-loss',
    title: 'How to Calculate XAUUSD Profit and Loss: A Complete Guide',
    date: '2024-03-10',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80',
    excerpt: 'Master the art of calculating XAUUSD profit and loss. Learn essential formulas and strategies for accurate gold trading calculations.',
    content: calculateProfitLossContent
  }
];

export default blogPosts;