import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  CheckCircle,
  Clock,
  MapPin,
  Monitor,
  Users,
  Award,
  BookOpen,
  Star,
  Sparkles,
  MessageCircle,
  Phone,
  ArrowRight,
  Video,
  BadgeCheck,
  Package,
} from 'lucide-react';
import { getCourse, allCourseSlugs, getRelatedCourses } from '../../../data/courses';
import { whatsappLink } from '../../../lib/whatsapp';
import CourseNav from '../../../components/sections/CourseNav';
import CourseFAQs from '../../../components/sections/CourseFAQs';
import type { Course } from '../../../data/courses';

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

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allCourseSlugs().map(slug => ({ slug }));
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const enrollMsg = `Hello The Heaven Connection, I would like information about the ${course.title} course. Please share details about batches, schedule and fees.`;
  const phone = '+919990918797';

  return (
    <div className="bg-bg">
      {/* ===== SECTION 1: HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-white to-amber-50/60">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.08),transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 relative">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Column */}
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-5">
                <Sparkles className="w-4 h-4" />
                Premium Baking Course
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
                {course.title}
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                {course.valueProposition}
              </p>
              <p className="mt-3 text-gray-500 leading-relaxed max-w-xl">
                {course.overview}
              </p>

              {/* Quick Statistics Row */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <StatCard icon={Package} label="Recipes" value={course.recipeCount} />
                <StatCard icon={Clock} label="Offline" value={course.durationOffline} />
                <StatCard icon={Monitor} label="Online" value={course.durationOnline} />
                <StatCard icon={BadgeCheck} label="Certificate" value={course.certificate} />
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={whatsappLink(enrollMsg, phone)}
                  className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:bg-accent/90 transition-all duration-200"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enroll Now
                </a>
                <a
                  href={`#overview`}
                  className="inline-flex items-center gap-2 border border-amber-300 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-amber-50 transition-all duration-200"
                >
                  <BookOpen className="w-5 h-5" />
                  View Details
                </a>
              </div>
            </div>

            {/* Right Column - Course Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl shadow-xl shadow-amber-200/30 overflow-hidden">
                <img
                  src={courseImages[slug] || '/generated/floral_cake.webp'}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative accents */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute -top-3 -left-3 w-20 h-20 bg-accent/10 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: STICKY NAV ===== */}
      <CourseNav />

      {/* ===== CONTENT AREA ===== */}
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* ===== SECTION 3: OVERVIEW ===== */}
        <section id="overview" className="scroll-mt-24 mb-20">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Left - Detailed Overview */}
            <div className="md:col-span-2">
              <h2 className="font-serif text-3xl text-gray-900 mb-6">Course Overview</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{course.description}</p>
            </div>

            {/* Right - Highlights Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-amber-100 p-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-4">Course Highlights</h3>
              <ul className="space-y-3">
                {course.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ===== SECTION 4: WHAT YOU'LL LEARN ===== */}
        <section id="what-youll-learn" className="scroll-mt-24 mb-20">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl text-gray-900 mb-3">What You&apos;ll Learn</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Comprehensive curriculum designed to take you from fundamentals to professional mastery.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {course.whatYoullLearn.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white rounded-xl p-5 border border-amber-100 shadow-sm hover:shadow-md hover:border-amber-200 transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <span className="text-gray-700 pt-1">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ===== SECTION 5: CURRICULUM ===== */}
        <section id="curriculum" className="scroll-mt-24 mb-20">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl text-gray-900 mb-3">Course Curriculum</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Day-wise breakdown of topics covered in this masterclass.
            </p>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent/30 to-primary/20 hidden md:block" />

            <div className="space-y-6">
              {course.curriculum.map((day, i) => (
                <div key={i} className="relative md:pl-16">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-3.5 top-2 w-5 h-5 rounded-full bg-white border-2 border-accent z-10 items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>

                  <div className="bg-white rounded-xl border border-amber-100 shadow-sm p-6 hover:shadow-md transition-all duration-200">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        {day.day}
                      </span>
                      <h3 className="font-semibold text-gray-900">{day.title}</h3>
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {day.topics.map((topic, j) => (
                        <li key={j} className="flex items-center gap-2 text-gray-600 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 6: FEES & DURATION + WHATSAPP CARD ===== */}
        <section id="fees" className="scroll-mt-24 mb-20">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl text-gray-900 mb-3">Fees & Duration</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Choose the learning mode that works best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Offline Card */}
            <div className="bg-white rounded-2xl border-2 border-amber-200 shadow-sm p-6 relative hover:shadow-lg transition-all duration-200">
              <div className="absolute -top-3 left-6 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                POPULAR
              </div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-accent" />
                <h3 className="font-semibold text-lg">Offline Training</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-500 text-sm">Duration</span>
                  <span className="font-medium">{course.durationOffline}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-500 text-sm">Investment</span>
                  <span className="text-2xl font-bold text-accent">{course.feeOffline}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-500 text-sm">Location</span>
                  <span className="font-medium text-sm">Gurugram</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-500 text-sm">Mode</span>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
                    <Users className="w-3.5 h-3.5" />
                    In-Person
                  </span>
                </div>
              </div>
              <a
                href={whatsappLink(enrollMsg, phone)}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-accent text-white px-5 py-3 rounded-xl font-medium hover:bg-accent/90 transition-all duration-200"
              >
                Enroll Offline <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Online Card */}
            <div className="bg-white rounded-2xl border border-amber-100 shadow-sm p-6 hover:shadow-lg transition-all duration-200">
              <div className="flex items-center gap-2 mb-4">
                <Monitor className="w-5 h-5 text-accent" />
                <h3 className="font-semibold text-lg">Online Training</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-500 text-sm">Duration</span>
                  <span className="font-medium">{course.durationOnline}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-500 text-sm">Investment</span>
                  <span className="text-2xl font-bold text-accent">{course.feeOnline}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-500 text-sm">Mode</span>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">
                    <Video className="w-3.5 h-3.5" />
                    Live Online
                  </span>
                </div>
              </div>


              <a
                href={whatsappLink(enrollMsg, phone)}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 border border-accent text-accent px-5 py-3 rounded-xl font-medium hover:bg-accent/5 transition-all duration-200"
              >
                Enroll Online <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* WhatsApp Enrollment Card (Sticky on desktop) */}
            <div className="md:sticky md:top-24 self-start">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200 shadow-sm p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900">Enrol via WhatsApp</h3>
                </div>

                <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                  <Phone className="w-4 h-4 text-green-600" />
                  <span className="font-medium">{phone}</span>
                </div>

                <ul className="space-y-2.5 mb-6">
                  <li className="flex items-center gap-2.5 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                    </div>
                    Quick Response
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                    </div>
                    Batch Details
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                    </div>
                    Enrollment Assistance
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                    </div>
                    Direct Mentor Guidance
                  </li>
                </ul>

                <a
                  href={whatsappLink(enrollMsg, phone)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-green-600 text-white px-5 py-3 rounded-xl font-semibold shadow-lg shadow-green-600/20 hover:bg-green-700 hover:shadow-xl transition-all duration-200"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>

                <p className="mt-3 text-xs text-center text-gray-500">
                  We typically respond within 5 minutes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 7: WHO SHOULD JOIN ===== */}
        <section id="who-should-join" className="scroll-mt-24 mb-20">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl text-gray-900 mb-3">Who Should Join</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              This course is designed for anyone passionate about baking, regardless of experience level.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {course.audienceDescriptions.map((audience, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-amber-100 shadow-sm p-6 hover:shadow-md hover:border-amber-200 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{audience.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{audience.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== SECTION 8: CERTIFICATION ===== */}
        <section className="scroll-mt-24 mb-20">
          <div className="bg-gradient-to-br from-secondary via-white to-amber-50 rounded-3xl border border-amber-200 shadow-sm p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h2 className="font-serif text-3xl text-gray-900 mb-3">Get Certified</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Receive a prestigious <strong>Certificate of Participation</strong> awarded upon successful completion
                  of the masterclass. This certificate validates your skills and adds professional credibility to your
                  baking portfolio.
                </p>
                <ul className="space-y-2.5">
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    Professional Recognition
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    Enhances Your Portfolio
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    Adds Business Credibility
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    Shareable on LinkedIn & Social Media
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="bg-white rounded-2xl shadow-lg border-2 border-primary/20 p-8 text-center max-w-xs">
                  <Award className="w-16 h-16 text-primary mx-auto mb-3" />
                  <div className="font-serif text-xl text-gray-900">Certificate of Participation</div>
                  <div className="mt-2 text-sm text-gray-500">The Heaven Connection</div>
                  <div className="mt-1 text-xs text-gray-400">By Monika Saraswat</div>
                  <div className="mt-4 w-full h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
                  <div className="mt-3 text-xs text-gray-500">Awarded upon successful completion</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 9: FAQ ===== */}
        <section id="faqs" className="scroll-mt-24 mb-20">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl text-gray-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Everything you need to know before enrolling.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <CourseFAQs faqs={course.faqs} />
          </div>

          {/* FAQ CTA */}
          <div className="text-center mt-8">
            <p className="text-gray-500 mb-4">Still have questions? We&apos;re here to help.</p>
            <a
              href={whatsappLink(`Hello The Heaven Connection, I have a question about the ${course.title} course.`, phone)}
              className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-xl font-medium hover:bg-accent/90 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              Ask on WhatsApp
            </a>
          </div>
        </section>

        {/* ===== SECTION 10: RELATED COURSES ===== */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl text-gray-900 mb-3">Explore More Courses</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Continue your learning journey with these related masterclasses.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {getRelatedCourses(slug, 3).map((c: Course) => (
              <Link
                key={c.slug}
                href={`/courses/${c.slug}`}
                className="group bg-white rounded-xl border border-amber-100 shadow-sm overflow-hidden hover:shadow-lg hover:border-amber-200 transition-all duration-200"
              >
                <div className="h-36 overflow-hidden">
                  <img
                    src={courseImages[c.slug] || '/generated/floral_cake.webp'}
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 group-hover:text-accent transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">{c.overview}</p>
                  <div className="mt-3 flex items-center justify-between text-sm">
                    <span className="font-medium text-accent">From {c.feeOffline}</span>
                    <span className="text-gray-400">{c.durationOffline}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="text-center bg-gradient-to-br from-secondary to-amber-50 rounded-3xl border border-amber-200 p-10 md:p-16">
          <h2 className="font-serif text-3xl text-gray-900 mb-3">Ready to Start Your Baking Journey?</h2>
          <p className="text-gray-500 max-w-lg mx-auto mb-8">
            Join {course.title} and transform your passion into professional expertise.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={whatsappLink(enrollMsg, phone)}
              className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 rounded-xl font-semibold text-lg shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:bg-accent/90 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              Get Batch Details
            </a>
            <a
              href={`/courses`}
              className="inline-flex items-center gap-2 border border-amber-300 text-gray-700 px-8 py-3.5 rounded-xl font-medium hover:bg-amber-50 transition-all duration-200"
            >
              View All Courses
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-amber-100 p-4 text-center shadow-sm hover:shadow-md transition-all duration-200">
      <Icon className="w-5 h-5 text-primary mx-auto mb-1.5" />
      <div className="text-xs text-gray-500">{label}</div>
      <div className="font-semibold text-gray-900 text-sm mt-0.5">{value}</div>
    </div>
  );
}
