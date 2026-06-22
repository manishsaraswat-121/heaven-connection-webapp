import Link from 'next/link';
import { Clock, MapPin } from 'lucide-react';
import coursesData, { allCourseSlugs } from '../../data/courses';

const courseImages: Record<string, string> = {
  'cookies-masterclass': '/generated/cookies.webp',
  'professional-cake-masterclass': '/generated/3_floor_cake.webp',
  'dessert-masterclass': '/generated/desserts.webp',
  'cheesecake-masterclass': '/generated/cheese_cake.webp',
  'chocolate-masterclass': '/generated/choclates.webp',
  'continental-cooking-masterclass': '/generated/continental_pizza.webp',
  'artisan-bread-masterclass': '/generated/breads.webp',
  'bonbon-masterclass': '/generated/dry_bonbon.webp',
  'dry-cake-masterclass': '/generated/dry_cake.webp',
  'tart-pie-masterclass': '/generated/tarts_and_pies.webp',
};

export default function Courses() {
  const slugs = allCourseSlugs();
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl text-gray-900 mb-3">Our Masterclasses</h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Premium baking & culinary courses designed for passionate learners, from aspiring home bakers to
          professional pastry chefs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {slugs.map(slug => {
          const c = coursesData[slug];
          if (!c) return null;
          return (
            <Link
              key={slug}
              href={`/courses/${slug}`}
              className="group bg-white rounded-2xl border border-amber-100 shadow-sm overflow-hidden hover:shadow-lg hover:border-amber-200 transition-all duration-200"
            >
              {/* Image Area */}
              <div className="h-40 overflow-hidden">
                <img
                  src={courseImages[slug] || '/generated/floral_cake.webp'}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-lg text-gray-900 group-hover:text-accent transition-colors">
                  {c.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1.5 line-clamp-2">{c.overview}</p>

                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-gray-500">
                  <span className="inline-flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-full">
                    <Clock className="w-3 h-3" />
                    {c.durationOffline}
                  </span>
                  <span className="inline-flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-full">
                    <MapPin className="w-3 h-3" />
                    Offline & Online
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="font-bold text-accent">From {c.feeOnline}</span>
                  <span className="text-sm text-accent font-medium group-hover:underline">
                    View Details →
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
