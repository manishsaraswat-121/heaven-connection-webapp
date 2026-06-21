"use client";
import { motion } from 'framer-motion';

const testimonials = [
  {name:'Aisha Rao', text:'Monika transformed my baking — I now run a boutique cookie brand.'},
  {name:'Ravi Kumar', text:'The Professional Cake course taught me salon-quality finishes.'},
  {name:'Sana Verma', text:'Warm, precise teaching. My confidence soared.'}
];

export default function Testimonials(){
  return (
    <div>
      <h3 className="font-serif text-2xl mb-6">Student Success Stories</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i)=> (
          <motion.blockquote key={i} initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} className="bg-white p-6 rounded-2xl shadow-md">
            <p className="text-gray-700">“{t.text}”</p>
            <div className="mt-4 text-sm font-semibold">— {t.name}</div>
          </motion.blockquote>
        ))}
      </div>
    </div>
  );
}
