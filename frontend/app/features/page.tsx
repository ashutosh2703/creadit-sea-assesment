'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { trackEvent } from '../../lib/analytics';

export default function Features() {
  useEffect(() => {
    trackEvent('page_visit', '/features', {});
  }, []);

  const handleClick = (buttonName: string) => {
    trackEvent('click', '/features', { button: buttonName });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Features</h1>
          <p className="text-xl text-gray-600">
            Discover what makes our platform unique
          </p>
        </header>

        <nav className="flex justify-center space-x-6 mb-12">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Home
          </Link>
          <Link href="/about" className="text-blue-600 hover:text-blue-800">
            About
          </Link>
          <Link href="/contact" className="text-blue-600 hover:text-blue-800">
            Contact
          </Link>
          <Link href="/profile" className="text-blue-600 hover:text-blue-800">
            Profile
          </Link>
          <Link href="/admin" className="text-green-600 hover:text-green-800 font-semibold">
            Admin Portal
          </Link>
        </nav>

        <main className="space-y-8">
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Offline-First Tracking</h2>
            <p className="text-gray-700 mb-6">
              Our platform captures user interactions even when offline, ensuring no data is lost. 
              Events are stored locally and synced when connectivity is restored.
            </p>
            <button
              onClick={() => handleClick('Learn More Offline')}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Learn More
            </button>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Real-Time Analytics</h2>
            <p className="text-gray-700 mb-6">
              Get instant insights into user behavior with our comprehensive analytics dashboard. 
              Filter by user, session, page, and time range.
            </p>
            <button
              onClick={() => handleClick('View Analytics')}
              className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors"
            >
              View Analytics
            </button>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Advanced Search</h2>
            <p className="text-gray-700 mb-6">
              Powerful search and filtering capabilities allow you to find specific events and patterns 
              in user behavior quickly and efficiently.
            </p>
            <button
              onClick={() => handleClick('Try Search')}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Try Search
            </button>
          </section>
        </main>
      </div>
    </div>
  );
} 