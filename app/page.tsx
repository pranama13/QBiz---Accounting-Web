import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-white/10 blur-3xl animate-pulse"></div>
          <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <h1 className="mb-6 text-5xl font-bold text-white sm:text-6xl md:text-7xl lg:text-8xl">
              QuickBooks Online
              <span className="block bg-gradient-to-r from-yellow-200 to-green-200 bg-clip-text text-transparent">
                Made Simple
              </span>
            </h1>
            <p className="mx-auto mb-4 max-w-2xl text-xl text-white/90 sm:text-2xl">
              Expert consulting services to help you master QuickBooks Online. From setup to ongoing support, we've got you covered.
            </p>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
              Trusted by hundreds of businesses nationwide. Get professional QuickBooks Online support tailored to your needs.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group relative overflow-hidden rounded-full bg-white px-8 py-4 text-lg font-semibold text-green-600 shadow-2xl transition-all hover:scale-105 hover:shadow-3xl"
              >
                <span className="relative z-10">Get Started Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 transition-opacity group-hover:opacity-100"></div>
                <span className="relative z-10 text-white opacity-0 transition-opacity group-hover:opacity-100">Get Started Today</span>
              </Link>
              <Link
                href="/services"
                className="rounded-full border-2 border-white/50 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="h-8 w-8 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { number: '500+', label: 'Happy Clients' },
              { number: '10+', label: 'Years Experience' },
              { number: '98%', label: 'Satisfaction Rate' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-4xl font-bold text-green-600 md:text-5xl">{stat.number}</div>
                <div className="text-sm font-medium text-gray-600 md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              Why Choose QBiz Solutions?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              We provide comprehensive QuickBooks Online support to help your business thrive. Our expert team is dedicated to making your accounting process seamless and efficient.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: '🚀',
                title: 'Quick Setup',
                description: 'Get your QuickBooks Online account configured and ready to use in no time with our expert setup service. We handle everything from account creation to initial configuration.',
                details: 'Complete setup in 24-48 hours',
              },
              {
                icon: '📚',
                title: 'Expert Training',
                description: 'Learn QuickBooks Online from the ground up with personalized training sessions designed for beginners. Our step-by-step approach ensures you understand every feature.',
                details: 'One-on-one and group sessions available',
              },
              {
                icon: '🔄',
                title: 'Data Migration',
                description: 'Seamlessly migrate your existing financial data to QuickBooks Online with our professional cleanup service. We ensure data accuracy and integrity throughout the process.',
                details: '100% data accuracy guarantee',
              },
              {
                icon: '📊',
                title: 'Monthly Bookkeeping',
                description: 'Let us handle your monthly bookkeeping so you can focus on growing your business. We maintain accurate records and provide detailed financial reports.',
                details: 'Real-time financial insights',
              },
              {
                icon: '🛠️',
                title: 'Technical Support',
                description: 'Get ongoing technical support whenever you need help with QuickBooks Online. Our team is available to resolve issues quickly and efficiently.',
                details: 'Average response time: 2 hours',
              },
              {
                icon: '💼',
                title: 'Business Focused',
                description: 'We understand your business needs and provide solutions tailored to your industry. Our consultants have experience across various business sectors.',
                details: 'Industry-specific expertise',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:scale-105 hover:shadow-xl border border-gray-100"
              >
                <div className="mb-4 text-5xl">{feature.icon}</div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="mb-3 text-gray-600">{feature.description}</p>
                <p className="text-sm font-semibold text-green-600">{feature.details}</p>
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 opacity-0 blur-2xl transition-opacity group-hover:opacity-20"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              How It Works
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Getting started with QBiz Solutions is simple. Follow these easy steps to transform your QuickBooks Online experience.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Contact Us',
                description: "Reach out through our contact form or phone. We'll schedule a free consultation to understand your needs.",
              },
              {
                step: '02',
                title: 'Choose Your Plan',
                description: 'Select from our flexible service packages or customize a solution that fits your specific requirements.',
              },
              {
                step: '03',
                title: 'Get Started',
                description: 'Our team begins working on your QuickBooks Online setup, training, or bookkeeping needs immediately.',
              },
              {
                step: '04',
                title: 'Ongoing Support',
                description: 'Enjoy continuous support and monthly services to keep your books accurate and up-to-date.',
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-emerald-600 text-2xl font-bold text-white shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-green-400 to-transparent -z-10" style={{ width: 'calc(100% - 4rem)' }}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              What Our Clients Say
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Don't just take our word for it. Here's what businesses like yours have to say about our services.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: 'Sarah Johnson',
                company: 'Johnson & Associates',
                quote: 'QBiz Solutions transformed how we manage our books. The training was excellent, and their ongoing support is invaluable.',
                rating: 5,
              },
              {
                name: 'Michael Chen',
                company: 'Chen Manufacturing',
                quote: 'The data migration was seamless. They handled everything professionally and our books have never been more accurate.',
                rating: 5,
              },
              {
                name: 'Emily Rodriguez',
                company: 'Rodriguez Consulting',
                quote: 'Best investment we made for our business. The monthly bookkeeping service saves us hours every month.',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div key={index} className="rounded-2xl bg-white p-8 shadow-lg border border-gray-100">
                <div className="mb-4 flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-6 text-gray-700 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.company}</div>
                </div>
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
            Ready to Get Started?
          </h2>
          <p className="mb-4 text-xl text-white/90">
            Join hundreds of businesses that trust QBiz Solutions for their QuickBooks Online needs.
          </p>
          <p className="mb-8 text-lg text-white/80">
            Get a free consultation today and discover how we can help streamline your accounting process.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-white px-8 py-4 text-lg font-semibold text-green-600 shadow-2xl transition-all hover:scale-105 hover:shadow-3xl"
            >
              Contact Us Today
            </Link>
            <Link
              href="/services"
              className="inline-block rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white/10"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
