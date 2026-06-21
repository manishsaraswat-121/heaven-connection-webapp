"use client";
import { motion, HTMLMotionProps } from 'framer-motion';
import React from 'react';

type ButtonProps = Omit<HTMLMotionProps<'button'>, 'ref'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button({ children, className = '', ...props }, ref) {
  return (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`px-5 py-2 rounded-md bg-primary text-white font-semibold shadow-md ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
});

export default Button;
