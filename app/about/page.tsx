import Link from 'next/link';

export default function About() {
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
            About QBiz Solutions
          </h1>
          <p className="text-xl text-white/90 sm:text-2xl">
            Your trusted partner in QuickBooks Online excellence
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
                Our Mission
              </h2>
              <p className="mb-4 text-lg text-gray-600">
                At QBiz Solutions, we believe that every business deserves access to professional accounting tools and expertise. Our mission is to make QuickBooks Online accessible, understandable, and powerful for businesses of all sizes.
              </p>
              <p className="mb-4 text-lg text-gray-600">
                We understand that managing finances can be overwhelming, especially when you're trying to grow your business. That's why we've dedicated ourselves to providing comprehensive support that goes beyond just software setup.
              </p>
              <p className="mb-4 text-lg text-gray-600">
                Our team of certified QuickBooks Online experts is committed to helping you succeed by providing personalized guidance, training, and ongoing support tailored to your unique business needs.
              </p>
              <p className="text-lg text-gray-600">
                Since our founding, we've helped over 500 businesses streamline their accounting processes, save time, and make better financial decisions. We're not just consultants—we're your partners in financial success.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-12 shadow-2xl border border-green-100">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-emerald-600 text-white shadow-lg">
                      <span className="text-2xl">✓</span>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-gray-900">Certified Experts</h3>
                      <p className="text-gray-600">Our team holds professional certifications in QuickBooks Online, accounting, and bookkeeping. We stay current with the latest updates and best practices.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-emerald-600 text-white shadow-lg">
                      <span className="text-2xl">💡</span>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-gray-900">Years of Experience</h3>
                      <p className="text-gray-600">With over 10 years of combined experience, we've helped hundreds of businesses streamline their accounting processes and achieve financial clarity.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-emerald-600 text-white shadow-lg">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-gray-900">Client-Focused</h3>
                      <p className="text-gray-600">Your success is our priority. We tailor our services to your specific needs, industry, and business goals. Every client receives personalized attention.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              Our Story
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              QBiz Solutions was founded with a simple goal: to make professional accounting accessible to businesses of all sizes. We recognized that many business owners struggle with QuickBooks Online, not because it's difficult, but because they lack proper guidance and training.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                year: '2014',
                title: 'The Beginning',
                description: 'Started as a small consulting firm helping local businesses with QuickBooks setup and training.',
              },
              {
                year: '2018',
                title: 'Rapid Growth',
                description: 'Expanded services to include monthly bookkeeping and data migration. Reached 200+ clients.',
              },
              {
                year: '2024',
                title: 'Industry Leader',
                description: 'Now serving 500+ businesses nationwide with comprehensive QuickBooks Online solutions.',
              },
            ].map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-emerald-600 text-2xl font-bold text-white shadow-lg">
                  {milestone.year}
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              Our Core Values
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Excellence',
                description: 'We strive for excellence in every interaction, ensuring you receive the highest quality service and support. Our team continuously improves their skills and knowledge.',
                icon: '⭐',
                details: '98% client satisfaction rate',
              },
              {
                title: 'Integrity',
                description: 'We conduct our business with honesty, transparency, and ethical practices you can trust. Your financial data is always secure and confidential.',
                icon: '🤝',
                details: '100% data security guarantee',
              },
              {
                title: 'Innovation',
                description: 'We stay current with the latest QuickBooks Online features and best practices to serve you better. We embrace new technologies and methods.',
                icon: '🚀',
                details: 'Regular training and certification',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-8 text-center shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:scale-105"
              >
                <div className="mb-4 text-5xl">{value.icon}</div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900">{value.title}</h3>
                <p className="mb-4 text-gray-600">{value.description}</p>
                <p className="text-sm font-semibold text-green-600">{value.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              Why Choose QBiz Solutions?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              We're more than just consultants. We're your partners in financial success.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: 'Comprehensive Service',
                description: 'From initial setup to ongoing support, we provide a complete solution for all your QuickBooks Online needs. No need to work with multiple vendors.',
                icon: '📦',
              },
              {
                title: 'Personalized Approach',
                description: "Every business is unique. We customize our services to match your specific industry, size, and requirements. One-size-fits-all doesn't work for us.",
                icon: '🎯',
              },
              {
                title: 'Affordable Pricing',
                description: 'We offer competitive pricing with flexible packages to fit businesses of all sizes and budgets. Transparent pricing with no hidden fees.',
                icon: '💰',
              },
              {
                title: 'Quick Response Time',
                description: "We understand that accounting issues can't wait. Our team responds quickly to your support requests, typically within 2 hours during business hours.",
                icon: '⚡',
              },
              {
                title: 'Proven Track Record',
                description: 'With 500+ satisfied clients and a 98% satisfaction rate, we have a proven track record of delivering results. Your success is our success.',
                icon: '🏆',
              },
              {
                title: 'Ongoing Education',
                description: "We don't just set you up and leave. We provide ongoing training and support to ensure you're getting the most out of QuickBooks Online.",
                icon: '📚',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 rounded-xl bg-white p-6 shadow-md border border-gray-100 transition-all hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-emerald-600 text-2xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              Meet Our Team
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Our certified QuickBooks Online experts are here to help you succeed
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: 'Expert Consultants',
                role: 'QuickBooks Certified',
                description: 'Our team of certified QuickBooks Online ProAdvisors has years of experience helping businesses succeed.',
              },
              {
                name: 'Bookkeeping Specialists',
                role: 'Accounting Professionals',
                description: 'Trained accountants and bookkeepers who ensure your financial records are accurate and up-to-date.',
              },
              {
                name: 'Support Team',
                role: 'Always Available',
                description: 'Dedicated support staff ready to help you with any questions or issues, whenever you need assistance.',
              },
            ].map((member, index) => (
              <div
                key={index}
                className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-8 text-center shadow-lg border border-green-100"
              >
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-emerald-600 text-3xl font-bold text-white shadow-lg mx-auto">
                  {member.name.charAt(0)}
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="mb-4 text-sm font-semibold text-green-600">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="absolute inset-0">
          <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
            Ready to Work With Us?
          </h2>
          <p className="mb-8 text-xl text-white/90">
            Let's discuss how QBiz Solutions can help transform your QuickBooks Online experience.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-white px-8 py-4 text-lg font-semibold text-green-600 shadow-2xl transition-all hover:scale-105 hover:shadow-3xl"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
