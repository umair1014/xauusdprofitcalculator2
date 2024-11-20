import React from 'react';
import { Calculator } from '../components/Calculator';
import { Content } from '../components/Content';
import { FeaturedPosts } from '../components/FeaturedPosts';
import { LiveChart } from '../components/LiveChart';
import { AdPlaceholder } from '../components/AdPlaceholder';

export function Home() {
  return (
    <>
      {/* Calculator Section */}
      <Calculator />

      {/* Top Ad */}
      <div className="container mx-auto px-4 my-8">
        <AdPlaceholder className="min-h-[250px]" />
      </div>

      {/* Live Chart Section */}
      <div className="container mx-auto px-4">
        <LiveChart />
      </div>

      {/* Middle Ad */}
      <div className="container mx-auto px-4 my-8">
        <AdPlaceholder className="min-h-[250px]" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <Content />
      </div>

      {/* Featured Blog Posts */}
      <div className="container mx-auto">
        <FeaturedPosts />
      </div>

      {/* Bottom Ad */}
      <div className="container mx-auto px-4 my-8">
        <AdPlaceholder className="min-h-[250px]" />
      </div>
    </>
  );
}