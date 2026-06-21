"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function Hero(){
  return (
    <section className="luxury-hero min-h-[68vh] flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <motion.h1 initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} className="font-serif text-4xl md:text-6xl">Transform Your Passion For Baking Into Art</motion.h1>
          <motion.p initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.15}} className="text-lg text-gray-700 max-w-xl">Professional baking classes & premium bakery creations — online and offline. Learn with Monika Saraswat in Gurugram.</motion.p>
          <div className="flex gap-4">
            <a href="/courses"><Button>Explore Courses</Button></a>
            <a href="https://wa.me/919876543210?text=Hello%20The%20Heaven%20Connection%2C%20I%20am%20interested%20in%20your%20courses" aria-label="WhatsApp"><Button className="bg-accent">WhatsApp Us</Button></a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <motion.div initial={{scale:0.98}} animate={{scale:1}} className="w-full max-w-md rounded-3xl overflow-hidden shadow-xl bg-white">
            <img src="/generated/hero-cake.jpg" alt="Luxury cake" className="w-full h-72 object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
