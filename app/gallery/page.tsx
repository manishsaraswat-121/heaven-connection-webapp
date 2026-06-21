export default function Gallery(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="font-serif text-3xl mb-6">Gallery</h1>
      <div className="grid md:grid-cols-4 gap-4">
        {Array.from({length:12}).map((_,i)=> (
          <div key={i} className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
            <img src={`/generated/gallery-${(i%8)+1}.svg`} alt={`Gallery ${i+1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
