"use client";
import { motion } from 'framer-motion';

export default function Founder(){
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <motion.div initial={{x:-20, opacity:0}} animate={{x:0, opacity:1}}>
        <img src="/generated/founder.svg" alt="Monika Saraswat" className="w-full rounded-2xl shadow-lg object-cover h-96" />
      </motion.div>
      <motion.div initial={{x:20, opacity:0}} animate={{x:0, opacity:1}}>
        <h2 className="font-serif text-3xl">Monika Saraswat — Founder, Mentor & Pastry Artist</h2>
        <p className="mt-4 text-gray-700">Monika blends classical patisserie with contemporary design to craft exquisite bakes that look and taste like luxury. Trained in premier culinary programs, she has built The Heaven Connection to teach aspiring bakers the craftsmanship behind premium desserts.</p>
        <div className="mt-6 space-y-3">
          <div><strong>Achievements:</strong></div>
          <ul className="list-disc list-inside text-gray-700">
            <li>Winner — National Patisserie Showcase 2021</li>
            <li>Featured in Gourmet India & Luxe Dining</li>
            <li>Mentored 500+ home bakers to business success</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
