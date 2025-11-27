'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error('Server error:', data.error);
        throw new Error(data.error || 'Failed to send message');
      }

      console.log('Email sent successfully:', data);
      
      // Log server response details
      if (data.messageId) {
        console.log('Email Message ID:', data.messageId);
        console.log('Email accepted by server:', data.accepted);
        if (data.rejected && data.rejected.length > 0) {
          console.warn('Email rejected:', data.rejected);
        }
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 pt-20">
        <div className="absolute inset-0">
          <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-white/10 blur-3xl animate-pulse"></div>
          <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-5xl font-bold text-white sm:text-6xl md:text-7xl">
            Get In Touch
          </h1>
          <p className="text-xl text-white/90 sm:text-2xl">
            Let's discuss how we can help your business succeed with QuickBooks Online
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="rounded-2xl bg-white p-8 shadow-xl border border-gray-100">
              <h2 className="mb-2 text-3xl font-bold text-gray-900">Send us a Message</h2>
              <p className="mb-6 text-gray-700">
                Fill out the form below and we'll get back to you within 2 hours during business hours.
              </p>
              
              {submitted ? (
                <div className="rounded-lg bg-green-50 border-2 border-green-200 p-8 text-center">
                  <div className="mb-4 text-6xl">✓</div>
                  <h3 className="mb-2 text-2xl font-bold text-green-800">Thank You!</h3>
                  <p className="mb-4 text-green-700">
                    We've received your message and will get back to you as soon as possible.
                  </p>
                  <p className="text-sm text-green-600">
                    Our team typically responds within 2 hours during business hours (Mon-Fri, 9AM-6PM EST).
                  </p>
                </div>
              ) : error ? (
                <div className="rounded-lg bg-red-50 border-2 border-red-200 p-6 text-center">
                  <div className="mb-2 text-4xl">⚠️</div>
                  <h3 className="mb-2 text-xl font-bold text-red-800">Error</h3>
                  <p className="text-red-700 mb-4">{error}</p>
                  <button
                    onClick={() => setError('')}
                    className="rounded-lg bg-red-600 px-4 py-2 text-white font-semibold hover:bg-red-700 transition-colors"
                  >
                    Try Again
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 bg-white focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors placeholder:text-gray-400"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 bg-white focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors placeholder:text-gray-400"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 bg-white focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors placeholder:text-gray-400"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm font-medium text-gray-700">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 bg-white focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors placeholder:text-gray-400"
                      placeholder="Your Company Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="mb-2 block text-sm font-medium text-gray-700">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 bg-white focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="setup">Setup & Installation</option>
                      <option value="training">Training for Beginners</option>
                      <option value="migration">Data Migration & Cleanup</option>
                      <option value="bookkeeping">Monthly Bookkeeping</option>
                      <option value="support">Technical Support</option>
                      <option value="package">Service Package</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 bg-white focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors placeholder:text-gray-400"
                      placeholder="Tell us about your needs, questions, or how we can help..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl ${
                      loading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="rounded-2xl bg-gradient-to-br from-green-600 to-emerald-600 p-8 text-white shadow-xl">
                <h2 className="mb-6 text-3xl font-bold">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/20">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Email</h3>
                      <p className="text-white/90">info@qbizsolutions.com</p>
                      <p className="text-white/90">support@qbizsolutions.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/20">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Phone</h3>
                      <p className="text-white/90">(555) 123-4567</p>
                      <p className="text-sm text-white/80">Mon-Fri: 9AM - 6PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/20">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Business Hours</h3>
                      <p className="text-white/90">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-white/90">Saturday: 10:00 AM - 2:00 PM</p>
                      <p className="text-white/90">Sunday: Closed</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/20">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Location</h3>
                      <p className="text-white/90">Serving clients nationwide</p>
                      <p className="text-sm text-white/80">Remote consultations available</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-xl border border-gray-100">
                <h3 className="mb-4 text-2xl font-bold text-gray-900">Why Contact Us?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <span className="mt-1 text-green-500 shrink-0">✓</span>
                    <span>Free consultation to discuss your needs and answer questions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="mt-1 text-green-500 shrink-0">✓</span>
                    <span>Customized service packages tailored to your business</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="mt-1 text-green-500 shrink-0">✓</span>
                    <span>Quick response time - typically within 2 hours</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="mt-1 text-green-500 shrink-0">✓</span>
                    <span>No obligation quotes and transparent pricing</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="mt-1 text-green-500 shrink-0">✓</span>
                    <span>Expert advice from certified QuickBooks professionals</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-8 border border-green-100">
                <h3 className="mb-4 text-2xl font-bold text-gray-900">Response Time</h3>
                <p className="mb-4 text-gray-700">
                  We understand that your time is valuable. Here's what you can expect:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <span className="text-green-600">⏱️</span>
                    <span><strong>Email:</strong> Response within 2 hours (business hours)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-600">📞</span>
                    <span><strong>Phone:</strong> Immediate during business hours</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-600">💬</span>
                    <span><strong>Form Submission:</strong> Response within 2 hours</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-700">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'How quickly can you get started?',
                answer: 'Most setup services can begin within 24-48 hours of your request. Training sessions can be scheduled within a week. We work quickly to get you up and running.',
              },
              {
                question: 'Do you work with businesses of all sizes?',
                answer: 'Yes! We work with small startups, growing businesses, and established enterprises. Our services are scalable to fit your needs.',
              },
              {
                question: 'Can you help if I\'m already using QuickBooks?',
                answer: 'Absolutely! We provide cleanup, optimization, and training services for existing QuickBooks Online users. We can help you get more out of the software.',
              },
              {
                question: 'What if I need ongoing support?',
                answer: 'We offer flexible support packages ranging from email support to priority phone support. You can choose the level that works for your business.',
              },
              {
                question: 'Is my financial data secure?',
                answer: 'Yes, absolutely. We use secure, encrypted methods for all data transfers and follow strict confidentiality protocols. Your data security is our top priority.',
              },
            ].map((faq, index) => (
              <div key={index} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-bold text-gray-900">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="mb-4 text-lg text-gray-700">
              Still have questions? We're here to help!
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3 text-white font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
