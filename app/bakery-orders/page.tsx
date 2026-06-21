import { whatsappLink } from '../../lib/whatsapp';

const items = [
  'Custom Cakes','Birthday Cakes','Designer Cakes','Wedding Cakes','Cookies','Biscuits','Brownies','Tea Cakes'
];

export default function BakeryOrders(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="font-serif text-3xl mb-6">Bakery Orders</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map(i=> (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-md flex gap-4">
            <div className="w-28 h-28 bg-gray-100 rounded-lg flex items-center justify-center">Image</div>
            <div className="flex-1">
              <h4 className="font-semibold">{i}</h4>
              <p className="text-sm text-gray-600 mt-2">Handcrafted premium {i.toLowerCase()} made to order for special occasions.</p>
              <div className="mt-4">
                <a href={whatsappLink(`Hello The Heaven Connection, I would like to place an order for ${i}.`)} className="text-accent font-semibold">Enquire on WhatsApp →</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
