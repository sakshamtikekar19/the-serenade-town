import { Film } from 'lucide-react';

const SEO_KEYWORDS = [
  'Private theater for birthday in Andheri',
  'Best place for anniversary celebration Mumbai',
  'Private movie date night',
  'The Serenade Town event venue',
];

export default function AboutPrivateTheater() {
  return (
    <section className="py-20 bg-white border-y border-gold/10 overflow-hidden">
      <div className="container mx-auto px-4 max-w-[100vw] box-border">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-w-0">
          {/* Text block */}
          <div className="min-w-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-brown-dark mb-8 leading-tight">
              What is a Private Theater Celebration at The Serenade Town?
            </h2>
            <div className="text-brown-dark/90 space-y-5 text-base md:text-lg leading-relaxed">
              <p>
                Private Theater celebration is an exclusive, modern concept for those who want to celebrate away from the crowds. At The Serenade Town Andheri, guests book a fully private theater to celebrate birthdays, anniversaries, romantic date nights, or bride-to-be parties.
              </p>
              <p>
                Enjoy your favorite movies, shows, or personal tribute videos on a massive 4K big screen with premium sound. Beyond the screen, we make celebrations effortless and affordable by providing customized decorations, delicious food, beverages, and add-ons like cakes and professional photoshoots. It is the ultimate way to make your special day fun, intimate, and truly memorable in Mumbai.
              </p>
            </div>
            {/* SEO keywords - visible for crawlability, styled subtly */}
            <div className="mt-10 pt-8 border-t border-gold/20">
              <p className="text-xs font-medium text-brown/60 uppercase tracking-wider mb-3">
                Find us for
              </p>
              <div className="flex flex-wrap gap-2">
                {SEO_KEYWORDS.map((keyword) => (
                  <span
                    key={keyword}
                    className="inline-block px-3 py-1.5 rounded-full bg-cream-dark text-brown/80 text-sm border border-gold/10"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Image block - placeholder frame for SEO-friendly visual */}
          <div className="relative min-w-0">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-cream-dark to-gold/10 border border-gold/20 shadow-lg flex items-center justify-center">
              {/* Placeholder: replace src with actual image when available */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Film className="w-24 h-24 text-gold/30" strokeWidth={1} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-brown-dark/80 to-transparent text-white text-sm font-medium">
                Private theater experience at The Serenade Town, Andheri
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
