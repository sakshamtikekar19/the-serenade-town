import { Cake, CloudFog, Users } from 'lucide-react';

const addOns = [
  { name: 'Cake', price: 350, icon: Cake },
  { name: 'Fog Entry', price: 700, icon: CloudFog },
  { name: 'Extra Guests', price: 350, unit: '/person', icon: Users },
];

export default function AddOns() {
  return (
    <section className="py-16 bg-cream-dark overflow-hidden">
      <div className="container mx-auto px-4 max-w-[100vw] box-border">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center text-brown-dark mb-10 md:mb-12 px-2">
          Enhance Your Celebration
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {addOns.map((addon) => (
            <div
              key={addon.name}
              className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gold/20"
            >
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4 text-gold-dark">
                <addon.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-brown-dark mb-2">
                {addon.name}
              </h3>
              <p className="text-brown font-medium">
                ₹{addon.price}
                {addon.unit && <span className="text-sm text-brown/60">{addon.unit}</span>}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
