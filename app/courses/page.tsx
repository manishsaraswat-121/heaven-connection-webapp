import Link from 'next/link';

const courses = [
  {slug:'beginner-baking', title:'Beginner Baking Course'},
  {slug:'professional-cake-baking', title:'Professional Cake Baking'},
  {slug:'eggless-masterclass', title:'Eggless Baking Masterclass'},
  {slug:'cookies-biscuits', title:'Cookies & Biscuit Making'},
  {slug:'home-baker-business', title:'Home Baker Business Program'},
  {slug:'online-live-classes', title:'Online Live Classes'}
];

export default function Courses(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="font-serif text-3xl mb-6">Courses</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {courses.map(c=> (
          <div key={c.slug} className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-semibold text-xl">{c.title}</h3>
            <p className="text-sm text-gray-600 mt-2">Premium curriculum designed for hands-on learning and commercial readiness.</p>
            <div className="mt-4">
              <Link href={`/courses/${c.slug}`} className="text-accent font-semibold">View Details →</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
