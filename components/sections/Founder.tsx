"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Founder(){
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <motion.div initial={{x:-20, opacity:0}} animate={{x:0, opacity:1}}>
        <Image
          src="/generated/founder_image.webp"
          alt="Monika Saraswat"
          width={720}
          height={518}
          className="w-full rounded-2xl shadow-lg object-cover h-96"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
      <motion.div initial={{x:20, opacity:0}} animate={{x:0, opacity:1}}>
        <h2 className="font-serif text-3xl">Monika Saraswat — Founder, Mentor & Pastry Artist</h2>
        <p className="mt-4 text-gray-700">Monika blends classical patisserie with contemporary design to craft exquisite bakes that look and taste like luxury. Trained in premier culinary programs, she has built The Heaven Connection to teach aspiring bakers the craftsmanship behind premium desserts.</p>

      </motion.div>
    </div>
  );
}
