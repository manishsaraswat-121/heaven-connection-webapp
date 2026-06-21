"use client";
import { motion } from 'framer-motion';
import React from 'react';

export default function Button({ children, className='', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>){
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`px-5 py-2 rounded-md bg-primary text-white font-semibold shadow-md ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
