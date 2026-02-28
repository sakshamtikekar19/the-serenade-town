import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-cream to-cream-dark overflow-hidden pt-20">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brown/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto w-full box-border min-w-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif text-brown-dark mb-6 leading-tight">
          Your Moment, Perfectly Celebrated! ✨
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-sans text-brown mb-10 font-light max-w-2xl mx-auto">
          Private Movie Dates, Birthdays, and Surprises in the heart of Mumbai.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="#calculator"
            className="bg-brown text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-brown-dark transition duration-300 shadow-lg w-full sm:w-auto flex items-center gap-2"
          >
            Check Availability
            <ChevronDown size={20} className="animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  );
}
