'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import clsx from 'clsx';

const packages = [
  {
    name: 'Silver Package',
    duration: '1 hr',
    weekdayPrice: 900,
    weekendPrice: 1100,
    description: 'Perfect for a quick celebration.',
    features: ['For 2 people', 'Full Decor Setup', 'Entertainment Access'],
    color: 'from-gray-100 to-gray-200',
    borderColor: 'border-gray-300',
  },
  {
    name: 'Golden Package',
    duration: '2 hrs',
    weekdayPrice: 1800,
    weekendPrice: 2000,
    description: 'Our most popular choice.',
    features: ['For 2 people', 'Full Decor Setup', 'Entertainment Access', 'Extended Time'],
    color: 'from-gold/20 to-gold/40',
    borderColor: 'border-gold',
    popular: true,
  },
  {
    name: 'Diamond Package',
    duration: '3 hrs',
    weekdayPrice: 2800,
    weekendPrice: 3000,
    description: 'The ultimate experience.',
    features: ['For 2 people', 'Full Decor Setup', 'Entertainment Access', 'Maximum Time'],
    color: 'from-blue-50 to-blue-100',
    borderColor: 'border-blue-200',
  },
];

export default function PricingTables() {
  const [isWeekend, setIsWeekend] = useState(false);

  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 max-w-[100vw] box-border">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-center text-brown-dark mb-8 px-2">
          Choose Your Package
        </h2>
        
        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-full shadow-md flex items-center flex-wrap justify-center gap-1">
            <button
              onClick={() => setIsWeekend(false)}
              className={clsx(
                'px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300',
                !isWeekend ? 'bg-brown text-white shadow-sm' : 'text-brown-dark hover:bg-gray-100'
              )}
            >
              Weekday
            </button>
            <button
              onClick={() => setIsWeekend(true)}
              className={clsx(
                'px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300',
                isWeekend ? 'bg-brown text-white shadow-sm' : 'text-brown-dark hover:bg-gray-100'
              )}
            >
              Weekend
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={clsx(
                'relative p-6 sm:p-8 rounded-2xl border transition-all duration-300 md:hover:scale-[1.02] hover:shadow-xl glass-card flex flex-col min-w-0',
                pkg.borderColor,
                pkg.popular ? 'shadow-lg ring-2 ring-gold ring-offset-2' : ''
              )}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gold text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-serif text-brown-dark mb-2">{pkg.name}</h3>
              <p className="text-brown/80 mb-6 text-sm">{pkg.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-brown-dark">
                  ₹{isWeekend ? pkg.weekendPrice : pkg.weekdayPrice}
                </span>
                <span className="text-brown/60 ml-2">/ {pkg.duration}</span>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start text-sm text-brown-dark">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full py-3 rounded-xl font-semibold bg-brown text-white hover:bg-brown-dark transition-colors duration-300 shadow-md">
                Select Package
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
