'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonPropsInterface {
  children: ReactNode;
  className?: string;
  theme?: 'yellow' | 'blue';
}
export default function Button({ children, className, theme }: ButtonPropsInterface) {
  const bgColor = theme === 'yellow' ? 'bg-[#FBC949]' : 'bg-[#51C9EF]';

  return (
    <motion.button
      className={`px-6 py-3 ${bgColor}
      cursor-pointer text-black 
      transition-all 
      duration-200 border-b-5 border-white ${className}`}
      whileHover={{ y: -5 }}
    >
      {children}
    </motion.button>
  );
}
