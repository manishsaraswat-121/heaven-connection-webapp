"use client";
import { motion } from 'framer-motion';

const galleryImages = [
  '/generated/cookies.webp',
  '/generated/3_floor_cake.webp',
  '/generated/desserts.webp',
  '/generated/floral_cake.webp',
  '/generated/cheese_cake.webp',
  '/generated/choclates.webp',
  '/generated/breads.webp',
  '/generated/continental_pizza.webp',
];

export default function GalleryPreview(){
  return (
    <div>
      <h3 className="font-serif text-2xl mb-6">Gallery</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryImages.map((src, i) => (
          <motion.div key={i} whileHover={{scale:1.03}} className="w-full h-40 bg-white rounded-xl overflow-hidden shadow-sm">
            <img src={src} alt={`Gallery ${i+1}`} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
