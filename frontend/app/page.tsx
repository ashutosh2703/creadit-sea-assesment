'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { trackEvent } from '../lib/analytics';

export default function Home() {
  useEffect(() => {
    trackEvent('page_visit', '/home', {});
  }, []);

  const handleClick = (buttonName: string) => {
    trackEvent('click', '/home', { button: buttonName });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('form_submission', '/home', { form: 'Newsletter Signup' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to UserTrack Portal
          </h1>
          <p className="text-xl text-gray-600">
            Experience seamless offline-first user journey tracking
          </p>
        </header>

        <nav className="flex justify-center space-x-6 mb-12">
          <Link href="/about" className="text-blue-600 hover:text-blue-800">
            About
          </Link>
          <Link href="/features" className="text-blue-600 hover:text-blue-800">
            Features
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
            <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
            <div className="space-y-4">
              <button
                onClick={() => handleClick('Get Started Button')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </button>
              <button
                onClick={() => handleClick('Learn More Button')}
                className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors ml-4"
              >
                Learn More
              </button>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Stay Updated</h2>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Subscribe to Newsletter
              </button>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
}
