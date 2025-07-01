'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { trackEvent } from '../../lib/analytics';

export default function Profile() {
  useEffect(() => {
    trackEvent('page_visit', '/profile', {});
  }, []);

  const handleClick = (buttonName: string) => {
    trackEvent('click', '/profile', { button: buttonName });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('form_submission', '/profile', { form: 'Profile Update' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">User Profile</h1>
          <p className="text-xl text-gray-600">
            Manage your account settings and preferences
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
          <Link href="/contact" className="text-blue-600 hover:text-blue-800">
            Contact
          </Link>
          <Link href="/admin" className="text-green-600 hover:text-green-800 font-semibold">
            Admin Portal
          </Link>
        </nav>

        <main className="space-y-8">
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="displayName" className="block text-sm font-medium text-gray-700 mb-2">
                  Display Name
                </label>
                <input
                  type="text"
                  id="displayName"
                  name="displayName"
                  defaultValue="Demo User"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-2">
                  Bio
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Tell us about yourself"
                />
              </div>
              <button
                type="submit"
                className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
              >
                Update Profile
              </button>
            </form>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Preferences</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="notifications"
                  name="notifications"
                  className="mr-3"
                />
                <label htmlFor="notifications" className="text-gray-700">
                  Email notifications
                </label>
                <button
                  onClick={() => handleClick('Toggle Notifications')}
                  className="ml-auto text-blue-600 hover:text-blue-800"
                >
                  Toggle
                </button>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="analytics"
                  name="analytics"
                  className="mr-3"
                />
                <label htmlFor="analytics" className="text-gray-700">
                  Share analytics data
                </label>
                <button
                  onClick={() => handleClick('Toggle Analytics')}
                  className="ml-auto text-blue-600 hover:text-blue-800"
                >
                  Toggle
                </button>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Account Actions</h2>
            <div className="space-y-4">
              <button
                onClick={() => handleClick('Export Data')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors mr-4"
              >
                Export Data
              </button>
              <button
                onClick={() => handleClick('Delete Account')}
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                Delete Account
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
} 