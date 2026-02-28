import Link from 'next/link';
import { MessageCircle, Instagram, Facebook, MapPin, Star } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brown-dark text-cream py-16">
      <div className="container mx-auto px-4 max-w-[100vw] box-border">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl sm:text-3xl font-serif text-gold mb-6">The Serenade Town! ✨</h3>
            <p className="text-cream/80 mb-6 text-sm sm:text-base">
              Creating unforgettable memories in the heart of Mumbai. Your moment, perfectly celebrated.
            </p>
            <div className="flex items-center gap-2 bg-cream/10 rounded-full px-4 py-2 w-fit mb-6">
              <Star className="w-5 h-5 text-gold fill-gold" />
              <span className="font-semibold text-gold">4.9 Star Rating</span>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="text-cream/60 hover:text-gold transition-colors">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="text-cream/60 hover:text-gold transition-colors">
                <Facebook size={24} />
              </Link>
            </div>
          </div>
          
          {/* Branch 1 */}
          <div>
            <h4 className="text-xl font-serif text-gold mb-6">Andheri Branch</h4>
            <ul className="space-y-4 text-cream/80">
              <li className="flex items-start">
                <MapPin className="w-6 h-6 mr-3 text-gold flex-shrink-0 mt-1" />
                <span>Office 808, Tandice 69,<br />Andheri East, Mumbai</span>
              </li>
              <li className="flex items-center">
                <MessageCircle className="w-6 h-6 mr-3 text-gold flex-shrink-0" />
                <Link href="https://wa.me/919999999999" target="_blank" className="hover:text-gold transition-colors">
                  +91 99999 99999
                </Link>
              </li>
            </ul>
          </div>

          {/* Branch 2 */}
          <div>
            <h4 className="text-xl font-serif text-gold mb-6">Ghatkopar Branch</h4>
            <ul className="space-y-4 text-cream/80">
              <li className="flex items-start">
                <MapPin className="w-6 h-6 mr-3 text-gold flex-shrink-0 mt-1" />
                <span>Coming Soon,<br />Ghatkopar, Mumbai</span>
              </li>
              <li className="flex items-center">
                <MessageCircle className="w-6 h-6 mr-3 text-gold flex-shrink-0" />
                <Link href="https://wa.me/919999999999" target="_blank" className="hover:text-gold transition-colors">
                  +91 99999 99999
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-serif text-gold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-cream/80">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="#packages" className="hover:text-gold transition-colors">Packages</Link></li>
              <li><Link href="#calculator" className="hover:text-gold transition-colors">Book Now</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cream/10 mt-12 pt-8 text-center text-cream/40 text-sm">
          © {new Date().getFullYear()} The Serenade Town. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
