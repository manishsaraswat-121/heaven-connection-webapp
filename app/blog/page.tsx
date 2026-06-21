import Link from 'next/link';

const posts = [
  {slug:'mastering-buttercreme', title:'Mastering Swiss Meringue Buttercream', excerpt:'A step-by-step luxury finish guide.'},
  {slug:'eggless-textures', title:'Eggless Baking: Achieving Classic Textures', excerpt:'Techniques for premium eggless bakes.'}
];

export default function Blog(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="font-serif text-3xl mb-6">Blog</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map(p=> (
          <article key={p.slug} className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-semibold text-xl"><Link href={`/blog/${p.slug}`}>{p.title}</Link></h3>
            <p className="text-sm text-gray-600 mt-2">{p.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
