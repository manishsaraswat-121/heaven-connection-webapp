import { whatsappLink } from '../../../lib/whatsapp';

type Props = { params: { slug: string }};

const courseData: Record<string, any> = {
  'beginner-baking': {
    title: 'Beginner Baking Course',
    duration: '6 weeks',
    overview: 'Solid foundations: breads, basic cakes, cookies, and patisserie principles.'
  },
  'professional-cake-baking': {
    title: 'Professional Cake Baking',
    duration: '8 weeks',
    overview: 'Tiered cakes, ganaches, modern finishes, structural techniques.'
  },
  'eggless-masterclass': {
    title: 'Eggless Baking Masterclass',
    duration: '5 weeks',
    overview: 'Recipes and techniques to achieve premium textures without eggs.'
  }
};

export default function CoursePage({ params }: Props){
  const slug = params.slug;
  const course = courseData[slug] ?? {title: 'Course', duration: 'Varies', overview: 'Detailed curriculum available.'};

  const enrollMsg = `Hello The Heaven Connection, I would like information about the ${course.title} course.`;

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="font-serif text-3xl">{course.title}</h1>
      <p className="mt-4 text-gray-700">{course.overview}</p>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h4 className="font-semibold">Overview</h4>
          <p className="text-sm text-gray-600 mt-2">{course.overview}</p>
          <h5 className="mt-4 font-semibold">Duration</h5>
          <div className="text-sm text-gray-700">{course.duration}</div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h4 className="font-semibold">Who Should Join</h4>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Aspiring home bakers</li>
            <li>Small business owners</li>
            <li>Food enthusiasts seeking refinement</li>
          </ul>
          <div className="mt-6">
            <a href={whatsappLink(enrollMsg)} className="inline-block bg-accent text-white px-5 py-2 rounded-md">Enroll via WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  );
}
