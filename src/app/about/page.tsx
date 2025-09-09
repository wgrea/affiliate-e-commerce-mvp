// src/app/about/page.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 py-16">
      <main className="max-w-4xl mx-auto px-4">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 md:p-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 text-slate-800 dark:text-white">About William Greaney</h1>
            <div className="w-24 h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Exploring the intersection of fashion and technology through curated affiliate e-commerce.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Profile Section */}
            <section>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-slate-800 dark:text-white">The Creator</h2>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                I&#39;m Will — a solo creator exploring the intersection of fashion and technology through affiliate e-commerce.
                This project is my way of learning, experimenting, and sharing what I discover along the way.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                With a background in both tech and style, I&#39;m passionate about finding products that seamlessly blend 
                functionality with aesthetic appeal.
              </p>
            </section>

            {/* Mission Section */}
            <section>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-slate-800 dark:text-white">Why I&#39;m Building This</h2>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                I believe fashion and tech can empower people to express themselves in new ways.
                My goal is to curate stylish, accessible products while learning the tools that make it all possible.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Every product featured is something I genuinely believe in — selected for its quality, 
                design, and ability to solve real problems.
              </p>
            </section>
          </div>

          {/* Values Section */}
          <section className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-semibold text-center mb-12 text-slate-800 dark:text-white">My Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-slate-50 dark:bg-slate-700/30 rounded-xl">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-slate-800 dark:text-white">Authenticity</h3>
                <p className="text-slate-600 dark:text-slate-400">Only featuring products I&#39;ve personally tested and believe in</p>
              </div>
              
              <div className="text-center p-6 bg-slate-50 dark:bg-slate-700/30 rounded-xl">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-slate-800 dark:text-white">Quality</h3>
                <p className="text-slate-600 dark:text-slate-400">Prioritizing craftsmanship and durability in every selection</p>
              </div>
              
              <div className="text-center p-6 bg-slate-50 dark:bg-slate-700/30 rounded-xl">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-slate-800 dark:text-white">Community</h3>
                <p className="text-slate-600 dark:text-slate-400">Building connections with others who share similar interests</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 text-center">
            <h2 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-white">Join Me on This Journey</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Explore my curated selections and discover products that combine style, function, and innovation.
            </p>
            <a
              href="/shop"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-full px-8 py-3 transition-all shadow-md hover:shadow-lg"
            >
              Visit the Shop
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;