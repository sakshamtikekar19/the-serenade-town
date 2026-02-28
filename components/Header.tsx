'use client';

import { useState } from 'react';
import { MapPin, Navigation, Menu, X, Home, Package, Calculator } from 'lucide-react';
import clsx from 'clsx';
import Link from 'next/link';

interface HeaderProps {
  selectedBranch: 'andheri' | 'ghatkopar';
  onBranchChange: (branch: 'andheri' | 'ghatkopar') => void;
}

const branches = {
  andheri: {
    name: 'Andheri East',
    address: 'Office 808, Tandice 69, Andheri East',
    mapLink: 'https://maps.google.com/?q=The+Serenade+Town+Andheri+East',
  },
  ghatkopar: {
    name: 'Ghatkopar',
    address: 'Coming Soon, Ghatkopar',
    mapLink: 'https://maps.google.com/?q=The+Serenade+Town+Ghatkopar',
  },
};

export default function Header({ selectedBranch, onBranchChange }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentBranch = branches[selectedBranch];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-cream/95 backdrop-blur-md border-b border-gold/20 shadow-sm">
      <div className="container mx-auto px-4 py-3 max-w-[100vw] box-border">
        {/* Top row: logo + hamburger (mobile) or full nav (desktop) */}
        <div className="flex items-center justify-between md:justify-between gap-2">
          <div className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-brown-dark truncate max-w-[160px] sm:max-w-[200px] md:max-w-none">
            The Serenade Town! ✨
          </div>

          {/* Desktop: location toggle + directions */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center bg-white rounded-full p-1 shadow-inner border border-gold/20">
              <button
                onClick={() => onBranchChange('andheri')}
                className={clsx(
                  'px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2',
                  selectedBranch === 'andheri'
                    ? 'bg-brown text-white shadow-md'
                    : 'text-brown hover:bg-cream-dark'
                )}
              >
                <MapPin size={14} className="flex-shrink-0" />
                Andheri
              </button>
              <button
                onClick={() => onBranchChange('ghatkopar')}
                className={clsx(
                  'px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2',
                  selectedBranch === 'ghatkopar'
                    ? 'bg-brown text-white shadow-md'
                    : 'text-brown hover:bg-cream-dark'
                )}
              >
                <MapPin size={14} className="flex-shrink-0" />
                Ghatkopar
              </button>
            </div>
            <Link
              href={currentBranch.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-brown hover:text-gold transition-colors gap-2"
            >
              <Navigation size={16} />
              Get Directions
            </Link>
          </div>

          {/* Mobile: hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-brown-dark hover:bg-gold/10 transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <div
          className={clsx(
            'md:hidden overflow-hidden transition-all duration-300 ease-out',
            menuOpen ? 'max-h-[320px] opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'
          )}
        >
          <nav className="flex flex-col gap-1 pb-2 border-t border-gold/20 pt-3">
            <Link
              href="#"
              onClick={closeMenu}
              className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-brown-dark hover:bg-gold/10 font-medium"
            >
              <Home size={18} />
              Home
            </Link>
            <Link
              href="#packages"
              onClick={closeMenu}
              className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-brown-dark hover:bg-gold/10 font-medium"
            >
              <Package size={18} />
              Packages
            </Link>
            <Link
              href="#calculator"
              onClick={closeMenu}
              className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-brown-dark hover:bg-gold/10 font-medium"
            >
              <Calculator size={18} />
              Book Now
            </Link>
            <Link
              href={currentBranch.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-brown-dark hover:bg-gold/10 font-medium"
            >
              <Navigation size={18} />
              Get Directions
            </Link>
            <div className="pt-2 mt-2 border-t border-gold/20">
              <span className="text-xs text-brown/70 px-3 block mb-2">Branch</span>
              <div className="flex gap-2">
                <button
                  onClick={() => { onBranchChange('andheri'); closeMenu(); }}
                  className={clsx(
                    'flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-sm font-medium',
                    selectedBranch === 'andheri' ? 'bg-brown text-white' : 'bg-white border border-gold/30 text-brown'
                  )}
                >
                  <MapPin size={14} />
                  Andheri
                </button>
                <button
                  onClick={() => { onBranchChange('ghatkopar'); closeMenu(); }}
                  className={clsx(
                    'flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-sm font-medium',
                    selectedBranch === 'ghatkopar' ? 'bg-brown text-white' : 'bg-white border border-gold/30 text-brown'
                  )}
                >
                  <MapPin size={14} />
                  Ghatkopar
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
