'use client';

import { useRef, useState, useEffect } from 'react';
import { Star, Shield, MonitorPlay, Sparkles } from 'lucide-react';

const points = [
  {
    title: '4.9⭐ Rated Excellence',
    description: "Trusted by hundreds of guests for creating 'Truly Memorable' celebrations.",
    icon: Star,
  },
  {
    title: 'Premium Privacy',
    description: 'A calm, cozy, and completely private space designed for intimate moments.',
    icon: Shield,
  },
  {
    title: "The 'Binge' Experience",
    description: '4K Projector setup with 20+ OTT apps for the ultimate movie date.',
    icon: MonitorPlay,
  },
  {
    title: 'Hassle-Free Hosting',
    description: 'From decor to snacks, our team handles everything.',
    icon: Sparkles,
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-[#F5EDE4] transition-all duration-700 ease-out overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-[100vw] box-border">
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-center text-brown-dark mb-12 md:mb-16 transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Why The Serenade Town?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {points.map((point, index) => (
            <div
              key={point.title}
              className={`flex flex-col items-center text-center p-8 rounded-2xl bg-white/60 border border-gold/10 shadow-sm transition-all duration-700 ease-out ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{
                transitionDelay: isInView ? `${index * 100}ms` : '0ms',
              }}
            >
              <div className="w-14 h-14 rounded-full bg-gold/15 flex items-center justify-center mb-6 text-brown-dark">
                {point.title.startsWith('4.9') ? (
                  <Star className="w-7 h-7 fill-gold text-gold" strokeWidth={1.5} />
                ) : (
                  <point.icon className="w-7 h-7" strokeWidth={1.5} />
                )}
              </div>
              <h3 className="text-xl font-serif font-semibold text-brown-dark mb-3">
                {point.title}
              </h3>
              <p className="text-brown-dark/90 text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
