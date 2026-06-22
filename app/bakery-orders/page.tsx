import { whatsappLink } from '../../lib/whatsapp';

const items = [
  { name: 'Custom Cakes',    image: '/generated/bakery-custom-cakes.svg' },
  { name: 'Birthday Cakes',  image: '/generated/bakery-birthday-cakes.svg' },
  { name: 'Designer Cakes',  image: '/generated/bakery-designer-cakes.svg' },
  { name: 'Wedding Cakes',   image: '/generated/bakery-wedding-cakes.svg' },
  { name: 'Cookies',         image: '/generated/bakery-cookies.svg' },
  { name: 'Biscuits',        image: '/generated/bakery-biscuits.svg' },
  { name: 'Brownies',        image: '/generated/bakery-brownies.svg' },
  { name: 'Tea Cakes',       image: '/generated/bakery-tea-cakes.svg' },
];

export default function BakeryOrders(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="font-serif text-3xl mb-6">Bakery Orders</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map(i=> (
          <div key={i.name} className="bg-white p-6 rounded-2xl shadow-md flex gap-4 group">
            <div className="w-28 h-28 bg-amber-50 rounded-lg flex items-center justify-center overflow-hidden shrink-0">
              <img src={i.image} alt={i.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold">{i.name}</h4>
              <p className="text-sm text-gray-600 mt-2">Handcrafted premium {i.name.toLowerCase()} made to order for special occasions.</p>
              <div className="mt-4">
                <a href={whatsappLink(`Hello The Heaven Connection, I would like to place an order for ${i.name}.`)} className="text-accent font-semibold hover:underline">Enquire on WhatsApp →</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
