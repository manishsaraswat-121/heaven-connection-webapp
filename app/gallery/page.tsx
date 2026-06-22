const galleryImages = [
  '/generated/cookies.webp',
  '/generated/3_floor_cake.webp',
  '/generated/desserts.webp',
  '/generated/floral_cake.webp',
  '/generated/cheese_cake.webp',
  '/generated/choclates.webp',
  '/generated/breads.webp',
  '/generated/continental_pizza.webp',
  '/generated/dry_bonbon.webp',
  '/generated/dry_cake.webp',
  '/generated/tarts_and_pies.webp',
  '/generated/floral_cake2.webp',
];

export default function Gallery(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="font-serif text-3xl mb-6">Gallery</h1>
      <div className="grid md:grid-cols-4 gap-4">
        {galleryImages.map((src, i) => (
          <div key={i} className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
            <img src={src} alt={`Gallery ${i+1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
