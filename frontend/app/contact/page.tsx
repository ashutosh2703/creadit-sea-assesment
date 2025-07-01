'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { trackEvent } from '../../lib/analytics';

export default function Contact() {
  useEffect(() => {
    trackEvent('page_visit', '/contact', {});
  }, []);

  const handleClick = (buttonName: string) => {
    trackEvent('click', '/contact', { button: buttonName });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('form_submission', '/contact', { form: 'Contact Form' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Get in touch with our team
          </p>
        </header>

        <nav className="flex justify-center space-x-6 mb-12">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Home
          </Link>
          <Link href="/about" className="text-blue-600 hover:text-blue-800">
            About
          </Link>
          <Link href="/features" className="text-blue-600 hover:text-blue-800">
            Features
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
            <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Other Ways to Reach Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-600">info@usertrack.com</p>
                <button
                  onClick={() => handleClick('Email Contact')}
                  className="mt-2 text-blue-600 hover:text-blue-800"
                >
                  Send Email
                </button>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
                <button
                  onClick={() => handleClick('Phone Contact')}
                  className="mt-2 text-blue-600 hover:text-blue-800"
                >
                  Call Now
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
} 