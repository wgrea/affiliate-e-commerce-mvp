// src/app/page.tsx
// Do not use 'use client';

import React from 'react';

export const metadata = {
  title: "Shop | Pack Lite",
  description: "Curated affiliate products with emotional resonance and modular UX.",
  icons: {
    icon: '/favicon.ico',      // ✅ correct
  },
  manifest: '/manifest.json',   // ✅ correct
};

const Home: React.FC = () => {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <main className="container mx-auto px-4 py-12">
        {/* Logo/Brand Section */}
        <div className="flex justify-center mb-16">
          <div className="w-[220px] h-[48px] bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-xl font-bold text-white shadow-lg">
            {"Pack Lite"}
          </div>
        </div>

        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6 text-slate-800 dark:text-white">
            Curated Products with <span className="text-blue-600">Purpose</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10">
            Discover thoughtfully selected items that blend functionality with emotional resonance.
          </p>
          
          <div className="flex gap-4 items-center justify-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white gap-2 hover:bg-blue-700 font-medium text-lg h-12 px-6 sm:w-auto shadow-md hover:shadow-lg"
              href="/shop"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2l10 18H2L12 2z" />
              </svg>
              Shop Now
            </a>
            <a
              className="rounded-full border border-solid border-slate-300 dark:border-slate-600 transition-colors flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 font-medium text-lg h-12 px-6 w-full sm:w-auto"
              href="/about"
            >
              Our Story
            </a>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-12 text-center text-slate-800 dark:text-white">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-800 dark:text-white">Tech Essentials</h3>
              <p className="text-slate-600 dark:text-slate-400">Tools that enhance productivity and simplify your digital life.</p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-800 dark:text-white">Home & Living</h3>
              <p className="text-slate-600 dark:text-slate-400">Products that transform your space into a sanctuary.</p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-800 dark:text-white">Outdoor Gear</h3>
              <p className="text-slate-600 dark:text-slate-400">Equipment for adventures that reconnect you with nature.</p>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl p-10 shadow-lg mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6 text-slate-800 dark:text-white">Why Choose Pack Lite?</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              Every product in our collection is personally tested and selected for its quality, 
              functionality, and emotional value. We believe the things you own should serve a 
              purpose and bring joy to your everyday life.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-medium mb-2 text-slate-800 dark:text-white">Curated Selection</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Only the best products make the cut</p>
              </div>
              <div className="p-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-medium mb-2 text-slate-800 dark:text-white">Quality Guarantee</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Thoroughly tested for durability</p>
              </div>
              <div className="p-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-medium mb-2 text-slate-800 dark:text-white">Emotional Design</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Products that resonate personally</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6 text-slate-800 dark:text-white">Ready to Find Your Next Favorite Thing?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Browse our collection of carefully selected products that combine functionality with emotional resonance.
          </p>
          <a
            href="/shop"
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-full px-8 py-4 transition-all shadow-md hover:shadow-lg"
          >
            Explore All Products
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </section>
      </main>
    </div>
  );
};

export default Home;