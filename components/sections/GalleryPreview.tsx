"use client";
import { motion } from 'framer-motion';

export default function GalleryPreview(){
  return (
    <div>
      <h3 className="font-serif text-2xl mb-6">Gallery</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({length:8}).map((_,i)=> (
          <motion.div key={i} whileHover={{scale:1.03}} className="w-full h-40 bg-white rounded-xl overflow-hidden shadow-sm">
            <img src={`/generated/gallery-${i+1}.svg`} alt={`Gallery ${i+1}`} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
