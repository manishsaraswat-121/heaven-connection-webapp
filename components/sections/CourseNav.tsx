"use client";
import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'what-youll-learn', label: "What You'll Learn" },
  { id: 'curriculum', label: 'Curriculum' },
  { id: 'fees', label: 'Fees & Duration' },
  { id: 'who-should-join', label: 'Who Should Join' },
  { id: 'faqs', label: 'FAQs' },
] as const;

export default function CourseNav() {
  const [active, setActive] = useState('overview');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const offsets = SECTIONS.map(({ id }) => {
        const el = document.getElementById(id);
        return el ? { id, top: el.getBoundingClientRect().top } : null;
      }).filter(Boolean) as { id: string; top: number }[];

      const buffer = 120;
      const current = offsets.find(o => o.top >= -buffer) || offsets[offsets.length - 1];
      if (current) setActive(current.id);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 120;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`sticky top-[60px] z-30 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-sm backdrop-blur-md' : 'bg-white/80'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex gap-1 overflow-x-auto py-3 no-scrollbar">
          {SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === id
                  ? 'bg-accent text-white shadow-md'
                  : 'text-gray-600 hover:text-accent hover:bg-amber-50'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
