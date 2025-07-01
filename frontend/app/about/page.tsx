'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { trackEvent } from '../../lib/analytics';

export default function About() {
  useEffect(() => {
    trackEvent('page_visit', '/about', {});
  }, []);

  const handleClick = (buttonName: string) => {
    trackEvent('click', '/about', { button: buttonName });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-xl text-gray-600">
            Learn more about our mission and values
          </p>
        </header>

        <nav className="flex justify-center space-x-6 mb-12">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Home
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
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              We are dedicated to providing seamless user experience tracking with offline-first capabilities. 
              Our platform ensures that no user interaction goes unnoticed, even when connectivity is limited.
            </p>
            <button
              onClick={() => handleClick('Read More Mission')}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Read More
            </button>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold">Ashutosh Sharma</h3>
                <p className="text-gray-600">CEO & Founder</p>
                <button
                  onClick={() => handleClick('Contact John')}
                  className="mt-2 text-blue-600 hover:text-blue-800"
                >
                  Contact
                </button>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold">Jane Smith</h3>
                <p className="text-gray-600">CTO</p>
                <button
                  onClick={() => handleClick('Contact Jane')}
                  className="mt-2 text-blue-600 hover:text-blue-800"
                >
                  Contact
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
} 