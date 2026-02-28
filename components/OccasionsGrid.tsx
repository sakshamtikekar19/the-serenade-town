import { Cake, Heart, Gem, PartyPopper, Film, Sparkles } from 'lucide-react';

const occasions = [
  { name: 'Birthday', icon: Cake },
  { name: 'Anniversary', icon: Heart },
  { name: 'Proposal', icon: Gem },
  { name: 'Bride to Be', icon: PartyPopper },
  { name: 'Movie Date', icon: Film },
  { name: 'Others', icon: Sparkles },
];

export default function OccasionsGrid() {
  return (
    <section className="py-20 bg-cream-dark overflow-hidden">
      <div className="container mx-auto px-4 max-w-[100vw] box-border">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-center text-brown-dark mb-10 md:mb-12 px-2">
          Occasions We Celebrate
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {occasions.map((occasion) => (
            <div
              key={occasion.name}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 group border border-gold/10"
            >
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300 text-brown">
                <occasion.icon className="w-8 h-8 stroke-1" />
              </div>
              <h3 className="text-lg font-semibold text-brown-dark text-center font-serif">
                {occasion.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
