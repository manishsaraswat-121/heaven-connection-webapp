"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

const courses = [
  {slug:'beginner-baking', title:'Beginner Baking Course', desc:'Foundations of baking — breads, cakes, cookies.'},
  {slug:'professional-cake-baking', title:'Professional Cake Baking', desc:'Advanced techniques, tiered cakes, finishes.'},
  {slug:'eggless-masterclass', title:'Eggless Baking Masterclass', desc:'Premium eggless recipes that match classic textures.'}
];

export default function CoursesPreview(){
  return (
    <div>
      <h3 className="font-serif text-2xl mb-6">Featured Courses</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {courses.map(c=> (
          <motion.div key={c.slug} whileHover={{y:-6}} className="bg-white rounded-2xl p-6 shadow-md">
            <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400">Image</div>
            <h4 className="font-semibold">{c.title}</h4>
            <p className="text-sm text-gray-600 mt-2">{c.desc}</p>
            <div className="mt-4">
              <Link href={`/courses/${c.slug}`} className="text-accent font-semibold">View Course →</Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
