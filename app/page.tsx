import Hero from '../components/sections/Hero';
import Founder from '../components/sections/Founder';
import CoursesPreview from '../components/sections/CoursesPreview';
import Testimonials from '../components/sections/Testimonials';
import GalleryPreview from '../components/sections/GalleryPreview';
import ContactCTA from '../components/sections/ContactCTA';

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="max-w-6xl mx-auto px-6 py-16">
        <Founder />
      </section>
      <section className="max-w-6xl mx-auto px-6 py-16">
        <CoursesPreview />
      </section>
      <section className="bg-white/60 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <GalleryPreview />
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-16">
        <Testimonials />
      </section>
      <section className="max-w-6xl mx-auto px-6 py-16">
        <ContactCTA />
      </section>
    </div>
  );
}
