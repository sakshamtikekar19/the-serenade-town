'use client';

import { MapPin, Navigation } from 'lucide-react';
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
  const currentBranch = branches[selectedBranch];

  return (
    <header className="fixed top-0 w-full z-50 bg-cream/80 backdrop-blur-md border-b border-gold/20 shadow-sm">
      <div className="container mx-auto px-4 py-3 max-w-[100vw] box-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <div className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-brown-dark text-center sm:text-left truncate max-w-[180px] sm:max-w-none">
            The Serenade Town! ✨
          </div>

          {/* Location Toggle */}
          <div className="flex items-center bg-white rounded-full p-1 shadow-inner border border-gold/20">
            <button
              onClick={() => onBranchChange('andheri')}
              className={clsx(
                'px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-1 sm:gap-2',
                selectedBranch === 'andheri'
                  ? 'bg-brown text-white shadow-md'
                  : 'text-brown hover:bg-cream-dark'
              )}
            >
              <MapPin size={14} className="flex-shrink-0" />
              <span className="truncate">Andheri</span>
            </button>
            <button
              onClick={() => onBranchChange('ghatkopar')}
              className={clsx(
                'px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-1 sm:gap-2',
                selectedBranch === 'ghatkopar'
                  ? 'bg-brown text-white shadow-md'
                  : 'text-brown hover:bg-cream-dark'
              )}
            >
              <MapPin size={14} className="flex-shrink-0" />
              <span className="truncate">Ghatkopar</span>
            </button>
          </div>

          {/* Directions Link */}
          <Link
            href={currentBranch.mapLink}
            target="_blank"
            className="hidden md:flex items-center text-sm font-medium text-brown hover:text-gold transition-colors gap-2"
          >
            <Navigation size={16} />
            Get Directions
          </Link>
        </div>
      </div>
    </header>
  );
}
