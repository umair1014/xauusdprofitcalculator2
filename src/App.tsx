import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Disclaimer } from './pages/Disclaimer';
import { BlogList } from './pages/BlogList';
import { BlogPost } from './pages/BlogPost';
import { PipCalculator } from './pages/PipCalculator';
import { MarginCalculator } from './pages/MarginCalculator';
import { SpreadComparison } from './pages/SpreadComparison';
import { TradingJournal } from './pages/TradingJournal';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Header />
            <Navigation />
          </div>
        </div>
      </div>
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/pip-calculator" element={<PipCalculator />} />
          <Route path="/margin-calculator" element={<MarginCalculator />} />
          <Route path="/spread-comparison" element={<SpreadComparison />} />
          <Route path="/trading-journal" element={<TradingJournal />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;