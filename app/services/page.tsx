import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'Setup & Installation',
      description: 'Get your QuickBooks Online account up and running quickly with our expert setup service. We\'ll configure your chart of accounts, connect your bank accounts, and set up all the essential features to ensure you start on the right foot.',
      detailedDescription: 'Our comprehensive setup service includes everything you need to get started with QuickBooks Online. We handle the technical aspects so you can focus on running your business. Our team will work with you to understand your business structure and customize your QuickBooks setup accordingly.',
      features: [
        'Complete account configuration and customization',
        'Bank and credit card account integration',
        'Chart of accounts setup tailored to your business',
        'Initial data entry and historical transaction import',
        'User permissions and access control setup',
        'Tax settings and preferences configuration',
        'Payment method setup (invoices, payments, etc.)',
        'Inventory setup (if applicable)',
        'Sales tax configuration',
        'Initial training session included',
      ],
      icon: '⚙️',
      color: 'from-green-500 to-green-600',
      duration: '24-48 hours',
      price: 'Starting at $299',
    },
    {
      title: 'Training for Beginners',
      description: 'New to QuickBooks Online? Our comprehensive training program will teach you everything you need to know. We offer one-on-one sessions tailored to your learning pace and business needs.',
      detailedDescription: 'Whether you\'re completely new to QuickBooks or switching from another system, our training program will give you the confidence to manage your books effectively. We cover everything from basic navigation to advanced reporting, ensuring you understand how to use QuickBooks for your specific business needs.',
      features: [
        'Personalized one-on-one training sessions',
        'Step-by-step guidance through all features',
        'Best practices for your industry',
        'Report generation and analysis training',
        'Invoice and payment processing',
        'Expense tracking and categorization',
        'Bank reconciliation training',
        'Payroll setup and management (if needed)',
        'Tax preparation basics',
        'Ongoing Q&A support during training',
        'Training materials and resources',
        'Follow-up sessions available',
      ],
      icon: '📚',
      color: 'from-emerald-500 to-emerald-600',
      duration: '2-4 hours per session',
      price: 'Starting at $199/session',
    },
    {
      title: 'Data Migration & Cleanup',
      description: 'Moving from another accounting system? We\'ll help you migrate all your financial data safely and accurately. We also provide cleanup services to organize and correct existing QuickBooks data.',
      detailedDescription: 'Data migration can be complex and time-consuming. Our experts ensure a smooth transition from your old system to QuickBooks Online, with 100% data accuracy. We also offer cleanup services for existing QuickBooks accounts that need organization or error correction.',
      features: [
        'Data import from Excel, CSV, or other systems',
        'Historical transaction migration (up to 2 years)',
        'Chart of accounts mapping and setup',
        'Customer and vendor data import',
        'Product/service item setup',
        'Data cleanup and organization',
        'Error identification and correction',
        'Account reconciliation',
        'Data validation and accuracy checks',
        'Post-migration review and training',
        'Backup of original data',
        '100% accuracy guarantee',
      ],
      icon: '🔄',
      color: 'from-teal-500 to-teal-600',
      duration: '3-7 business days',
      price: 'Starting at $499',
    },
    {
      title: 'Monthly Bookkeeping Service',
      description: 'Let us handle your monthly bookkeeping so you can focus on what you do best. We\'ll manage your accounts, reconcile transactions, and keep your books accurate and up-to-date.',
      detailedDescription: 'Our monthly bookkeeping service takes the burden of day-to-day accounting off your shoulders. Our certified bookkeepers handle all your transactions, reconciliations, and reporting, giving you more time to focus on growing your business. You\'ll receive regular financial reports and insights to help you make informed decisions.',
      features: [
        'Monthly transaction entry and categorization',
        'Bank and credit card reconciliation',
        'Accounts payable management',
        'Accounts receivable tracking',
        'Payroll processing (if applicable)',
        'Monthly financial report generation',
        'Profit & Loss statements',
        'Balance sheet preparation',
        'Cash flow statements',
        'Quarterly and annual reviews',
        'Tax-ready financials',
        'Dedicated bookkeeper assigned',
        'Secure document sharing portal',
        'Monthly consultation call',
      ],
      icon: '📊',
      color: 'from-green-600 to-emerald-600',
      duration: 'Ongoing monthly service',
      price: 'Starting at $299/month',
    },
    {
      title: 'Ongoing Technical Support',
      description: 'Get help whenever you need it. Our technical support team is available to assist with any QuickBooks Online questions, issues, or feature implementations.',
      detailedDescription: 'QuickBooks Online questions don\'t always happen during business hours. Our support team is ready to help you troubleshoot issues, answer questions, and implement new features. We offer multiple support tiers to match your needs, from email support to priority phone support.',
      features: [
        '24/7 email support with 2-hour response time',
        'Priority phone support during business hours',
        'Screen sharing for complex issues',
        'Issue troubleshooting and resolution',
        'Feature implementation assistance',
        'Regular check-ins and account reviews',
        'QuickBooks updates and new feature training',
        'Custom report creation',
        'Integration setup and support',
        'Data backup and recovery assistance',
        'Security and access management',
        'Performance optimization',
      ],
      icon: '🛠️',
      color: 'from-emerald-600 to-teal-600',
      duration: 'Available 24/7',
      price: 'Starting at $99/month',
    },
  ];

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
            Our Services
          </h1>
          <p className="text-xl text-white/90 sm:text-2xl">
            Comprehensive QuickBooks Online solutions for your business
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              Complete QuickBooks Online Solutions
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-700">
              From initial setup to ongoing support, we offer a full range of services to help you succeed with QuickBooks Online. Choose individual services or bundle them for maximum value.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid gap-8 rounded-2xl bg-white p-8 shadow-xl transition-all hover:shadow-2xl lg:grid-cols-2 ${
                  index % 2 === 1 ? 'lg:grid-flow-row-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="mb-6 flex items-center space-x-4">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} text-3xl shadow-lg`}>
                      {service.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                      <div className="mt-2 flex items-center space-x-4 text-sm text-gray-700 font-medium">
                        <span>⏱️ {service.duration}</span>
                        <span>💰 {service.price}</span>
                      </div>
                    </div>
                  </div>
                  <p className="mb-4 text-lg text-gray-800 font-medium">{service.description}</p>
                  <p className="mb-6 text-gray-700 leading-relaxed">{service.detailedDescription}</p>
                  <div className="mb-6">
                    <h3 className="mb-4 text-xl font-bold text-gray-900">What's Included:</h3>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <span className="mt-1 text-green-500 shrink-0">✓</span>
                          <span className="text-gray-800">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-block rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3 text-white font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                  >
                    Get Started
                  </Link>
                </div>
                <div className={`flex items-center justify-center ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className={`relative h-64 w-full rounded-xl bg-gradient-to-br ${service.color} p-8 shadow-2xl`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-8xl opacity-20">{service.icon}</div>
                    </div>
                    <div className="relative z-10 flex h-full items-center justify-center">
                      <div className="text-center text-white">
                        <div className="mb-4 text-6xl">{service.icon}</div>
                        <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                        <p className="text-white/90">{service.duration}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
            Need a Custom Solution?
          </h2>
          <p className="mb-8 text-xl text-gray-700">
            Every business is unique. Contact us to discuss a customized service package tailored to your specific needs and budget.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-2xl transition-all hover:scale-105 hover:shadow-3xl"
            >
              Request a Custom Quote
            </Link>
            <Link
              href="/contact"
              className="rounded-full border-2 border-green-600 bg-transparent px-8 py-4 text-lg font-semibold text-green-600 transition-all hover:bg-green-50"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
