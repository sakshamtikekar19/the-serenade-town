'use client';

import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '919999999999';
const DEFAULT_MESSAGE = 'Hi Serenade Town! I saw your website and would like to book a slot.';

export default function FloatingWhatsApp() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20bd5a] hover:scale-110 active:scale-95 transition-all duration-200"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} strokeWidth={2} />
    </Link>
  );
}
