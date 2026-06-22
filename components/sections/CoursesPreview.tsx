import Link from 'next/link';
import { Clock, Monitor } from 'lucide-react';
import courses from '../../data/courses';
import type { Course } from '../../data/courses';

// Pick 3 featured courses — cookies, professional cake, and dessert masterclasses
const featuredSlugs = ['cookies-masterclass', 'professional-cake-masterclass', 'dessert-masterclass'];

const courseImages: Record<string, string> = {
  'cookies-masterclass': '/generated/cookies.webp',
  'professional-cake-masterclass': '/generated/3_floor_cake.webp',
  'dessert-masterclass': '/generated/desserts.webp',
};

export default function CoursesPreview() {
  const featured = featuredSlugs.map(slug => courses[slug]).filter(Boolean) as Course[];

  return (
    <div>
      <div className="text-center mb-10">
        <h3 className="font-serif text-3xl text-gray-900">Featured Courses</h3>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
          Start your baking journey with our most popular masterclasses
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {featured.map(c => (
          <Link
            key={c.slug}
            href={`/courses/${c.slug}`}
            className="group bg-white rounded-2xl border border-amber-100 shadow-sm overflow-hidden hover:shadow-lg hover:border-amber-200 transition-all duration-200"
          >
            {/* Course Image */}
            <div className="h-40 overflow-hidden">
              <img
                src={courseImages[c.slug]}
                alt={c.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Card Content */}
            <div className="p-5">
              <h4 className="font-semibold text-lg text-gray-900 group-hover:text-accent transition-colors">
                {c.title}
              </h4>
              <p className="text-sm text-gray-500 mt-1.5 line-clamp-2">{c.overview}</p>
              <div className="mt-3 flex items-center gap-3 text-xs text-gray-500">
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  Offline: {c.durationOffline}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Monitor className="w-3.5 h-3.5" />
                  Online: {c.durationOnline}
                </span>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-semibold text-accent">From {c.feeOnline}</span>
                <span className="text-sm text-accent font-medium group-hover:underline">
                  View Course →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 border border-amber-300 text-gray-700 px-6 py-2.5 rounded-xl font-medium hover:bg-amber-50 transition-all duration-200"
        >
          View All Courses →
        </Link>
      </div>
    </div>
  );
}
