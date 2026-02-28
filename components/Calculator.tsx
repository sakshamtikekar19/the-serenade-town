'use client';

import { useState, useEffect } from 'react';
import { Cake, CloudFog, Users, Check, ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import Link from 'next/link';

interface CalculatorProps {
  selectedBranch: 'andheri' | 'ghatkopar';
}

const packages = [
  { name: 'Silver Package', price: 900 },
  { name: 'Golden Package', price: 1800 },
  { name: 'Diamond Package', price: 2800 },
];

export default function Calculator({ selectedBranch }: CalculatorProps) {
  const [selectedPackage, setSelectedPackage] = useState(packages[1]); // Default to Golden
  const [isWeekend, setIsWeekend] = useState(false);
  const [hasCake, setHasCake] = useState(false);
  const [hasFog, setHasFog] = useState(false);
  const [extraGuests, setExtraGuests] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let price = selectedPackage.price;
    if (isWeekend) price += 200;
    if (hasCake) price += 350;
    if (hasFog) price += 700;
    price += extraGuests * 350;
    setTotal(price);
  }, [selectedPackage, isWeekend, hasCake, hasFog, extraGuests]);

  const generateWhatsAppLink = () => {
    const packageName = selectedPackage.name;
    const branchName = selectedBranch === 'andheri' ? 'Andheri East' : 'Ghatkopar';
    const addOns = [];
    if (hasCake) addOns.push('Normal Cake');
    if (hasFog) addOns.push('Fog Entry');
    if (extraGuests > 0) addOns.push(`${extraGuests} Extra Guests`);
    
    const addOnsText = addOns.length > 0 ? ` with ${addOns.join(', ')}` : '';
    const message = `Hi Serenade Town! I want to book the ${packageName} for ${branchName}${addOnsText}. My total is ₹${total}.`;
    
    // Using a placeholder number for now, should be updated with real numbers per branch if needed
    const phoneNumber = '919999999999'; 
    
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="calculator" className="py-20 bg-gradient-to-br from-cream to-gold/10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 max-w-[100vw] box-border">
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
          <div className="bg-brown text-white p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.png')] opacity-10"></div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif mb-2 relative z-10 px-2">
              Plan Your Celebration
            </h2>
            <p className="text-white/80 relative z-10 font-light">
              Get an instant estimate for your perfect moment
            </p>
          </div>
          
          <div className="p-4 sm:p-6 md:p-12 space-y-8 md:space-y-10">
            {/* Step 1: Package Selection */}
            <div className="space-y-4">
              <label className="block text-sm font-semibold text-brown-dark uppercase tracking-wider">
                Step 1: Select Package
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {packages.map((pkg) => (
                  <button
                    key={pkg.name}
                    onClick={() => setSelectedPackage(pkg)}
                    className={clsx(
                      'p-4 rounded-xl border-2 transition-all duration-300 text-left relative overflow-hidden group',
                      selectedPackage.name === pkg.name
                        ? 'border-gold bg-gold/5 shadow-md'
                        : 'border-gray-200 hover:border-gold/50 hover:bg-gray-50'
                    )}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className={clsx("font-serif font-bold text-lg", selectedPackage.name === pkg.name ? "text-brown-dark" : "text-gray-600")}>
                        {pkg.name}
                      </span>
                      {selectedPackage.name === pkg.name && (
                        <div className="bg-gold text-white rounded-full p-1">
                          <Check size={12} />
                        </div>
                      )}
                    </div>
                    <div className="text-sm text-gray-500">
                      ₹{pkg.price}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Day Toggle */}
            <div className="space-y-4">
              <label className="block text-sm font-semibold text-brown-dark uppercase tracking-wider">
                Step 2: Select Day
              </label>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <span className="font-semibold text-brown-dark text-sm sm:text-base">Celebration Day</span>
                <div className="flex bg-white rounded-full p-1 shadow-sm border border-gray-200 w-full sm:w-auto">
                  <button
                    onClick={() => setIsWeekend(false)}
                    className={clsx(
                      'flex-1 sm:flex-none px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300',
                      !isWeekend ? 'bg-brown text-white shadow-sm' : 'text-gray-500 hover:bg-gray-50'
                    )}
                  >
                    Weekday
                  </button>
                  <button
                    onClick={() => setIsWeekend(true)}
                    className={clsx(
                      'flex-1 sm:flex-none px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300',
                      isWeekend ? 'bg-brown text-white shadow-sm' : 'text-gray-500 hover:bg-gray-50'
                    )}
                  >
                    Weekend (+₹200)
                  </button>
                </div>
              </div>
            </div>

            {/* Step 3: Add-Ons */}
            <div className="space-y-4">
              <label className="block text-sm font-semibold text-brown-dark uppercase tracking-wider">
                Step 3: Add-Ons
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => setHasCake(!hasCake)}
                  className={clsx(
                    'flex items-center p-4 rounded-xl border transition-all duration-300',
                    hasCake ? 'border-gold bg-gold/5 shadow-sm' : 'border-gray-200 hover:bg-gray-50'
                  )}
                >
                  <div className={clsx("p-2 rounded-lg mr-4 transition-colors", hasCake ? "bg-gold text-white" : "bg-gray-100 text-gray-400")}>
                    <Cake size={20} />
                  </div>
                  <div className="text-left flex-grow">
                    <div className="font-medium text-brown-dark">Normal Cake</div>
                    <div className="text-sm text-gray-500">₹350</div>
                  </div>
                  {hasCake && <Check size={20} className="text-gold" />}
                </button>

                <button
                  onClick={() => setHasFog(!hasFog)}
                  className={clsx(
                    'flex items-center p-4 rounded-xl border transition-all duration-300',
                    hasFog ? 'border-gold bg-gold/5 shadow-sm' : 'border-gray-200 hover:bg-gray-50'
                  )}
                >
                  <div className={clsx("p-2 rounded-lg mr-4 transition-colors", hasFog ? "bg-gold text-white" : "bg-gray-100 text-gray-400")}>
                    <CloudFog size={20} />
                  </div>
                  <div className="text-left flex-grow">
                    <div className="font-medium text-brown-dark">Fog Entry</div>
                    <div className="text-sm text-gray-500">₹700</div>
                  </div>
                  {hasFog && <Check size={20} className="text-gold" />}
                </button>
              </div>

              {/* Extra Guests */}
              <div className="p-4 rounded-xl border border-gray-200 bg-white flex items-center justify-between">
                <div className="flex items-center">
                  <div className="p-2 rounded-lg bg-gray-100 text-gray-500 mr-4">
                    <Users size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-brown-dark">Extra Guests</div>
                    <div className="text-sm text-gray-500">₹350 per person</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setExtraGuests(Math.max(0, extraGuests - 1))}
                    className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200 transition-colors"
                    disabled={extraGuests === 0}
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-semibold text-brown-dark">{extraGuests}</span>
                  <button
                    onClick={() => setExtraGuests(extraGuests + 1)}
                    className="w-8 h-8 rounded-full bg-brown text-white flex items-center justify-center hover:bg-brown-dark transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Total & CTA */}
            <div className="pt-8 border-t border-gray-100">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="min-w-0">
                  <div className="text-sm text-gray-500 mb-1">Estimated Total</div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-brown-dark truncate">
                    ₹{total.toLocaleString()}
                  </div>
                </div>
                
                <Link
                  href={generateWhatsAppLink()}
                  target="_blank"
                  className="w-full md:w-auto bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition duration-300 shadow-lg flex items-center justify-center gap-2 group"
                >
                  <span>Book Now</span>
                  <ChevronDown className="rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
