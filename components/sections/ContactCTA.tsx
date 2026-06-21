import Link from 'next/link';

export default function ContactCTA(){
  return (
    <div className="rounded-2xl p-8 bg-white shadow-md flex flex-col md:flex-row items-center justify-between">
      <div>
        <h3 className="font-serif text-2xl">Ready to Bake at a New Level?</h3>
        <p className="text-gray-700 mt-2">Enroll in a class or order a bespoke cake — we craft experiences.</p>
      </div>
      <div className="mt-6 md:mt-0">
        <Link href="/contact" className="inline-block bg-accent text-white px-6 py-3 rounded-md font-semibold">Get In Touch</Link>
      </div>
    </div>
  );
}
