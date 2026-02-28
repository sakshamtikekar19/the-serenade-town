import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

// Cozy cinema / private screening vibe – replace with your own image in public/hero.jpg
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row md:items-center md:justify-between bg-gradient-to-br from-cream to-cream-dark overflow-hidden pt-20 pb-12 md:pb-0">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brown/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-8 md:py-12 text-center md:text-left md:items-start max-w-4xl mx-auto w-full box-border min-w-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-brown-dark mb-4 md:mb-6 leading-tight">
          Your Moment, Perfectly Celebrated! ✨
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-sans text-brown mb-8 md:mb-10 font-light max-w-2xl">
          Private Movie Dates, Birthdays, and Surprises in the heart of Mumbai.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center w-full sm:w-auto">
          <Link
            href="#calculator"
            className="bg-brown text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-brown-dark transition duration-300 shadow-lg w-full sm:w-auto flex items-center justify-center gap-2"
          >
            Check Availability
            <ChevronDown size={20} className="animate-bounce" />
          </Link>
        </div>
      </div>

      {/* Hero image / video placeholder – fills space on mobile and desktop */}
      <div className="relative z-10 w-full md:max-w-[45%] md:min-h-[50vh] flex items-center justify-center px-4 md:px-8">
        <div className="relative w-full max-w-md mx-auto aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden shadow-xl border border-gold/20 bg-brown/5">
          <Image
            src={HERO_IMAGE}
            alt="Private theater experience at The Serenade Town"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 45vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/20 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
