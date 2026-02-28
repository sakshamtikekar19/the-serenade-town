import { Tv, Music, PartyPopper, Flame, Table, Type, Gift, Coffee, Candy, Box } from 'lucide-react';

const features = [
  {
    category: 'Entertainment',
    items: [
      { name: '20+ OTT Apps (Netflix, Hotstar)', icon: Tv },
      { name: 'Projector Setup', icon: Music },
    ],
  },
  {
    category: 'Decor',
    items: [
      { name: 'Balloons', icon: PartyPopper },
      { name: 'Bubble Machine', icon: PartyPopper },
      { name: 'Candles', icon: Flame },
      { name: 'Teapoy', icon: Table },
      { name: 'LED Name Box', icon: Type },
    ],
  },
  {
    category: 'Complimentary Hamper',
    items: [
      { name: 'Popcorn', icon: Gift },
      { name: 'Juice', icon: Coffee },
      { name: 'Snacks', icon: Candy },
      { name: 'Chocolates', icon: Box },
    ],
  },
];

export default function FeaturesList() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-[100vw] box-border">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center text-brown-dark mb-10 md:mb-12 px-2">
          What's Included
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((section) => (
            <div key={section.category} className="bg-cream-light p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gold/10">
              <h3 className="text-xl font-serif text-brown-dark mb-6 border-b border-gold pb-2 inline-block">
                {section.category}
              </h3>
              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li key={item.name} className="flex items-center text-brown">
                    <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center mr-3 text-gold-dark flex-shrink-0">
                      <item.icon size={16} className="stroke-1" />
                    </div>
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
