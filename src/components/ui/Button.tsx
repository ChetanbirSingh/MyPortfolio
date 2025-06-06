'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonPropsInterface {
  children: ReactNode;
  className?: string;
  theme?: 'yellow' | 'blue';
  onClick: () => void;
}
export default function Button({ children, className, theme, onClick }: ButtonPropsInterface) {
  const bgColor = theme === 'yellow' ? 'bg-[#FBC949]' : 'bg-[#51C9EF]';

  return (
    <motion.button
      className={`
    px-6 py-3 
    ${bgColor} 
    cursor-pointer 
    text-black 
    border-2 border-black 
    shadow-[4px_4px_0_#444] 
    active:translate-x-[2px] 
    active:translate-y-[2px] 
    active:shadow-none
    select-none
    ${className}
  `}
      whileHover={{
        y: -2,
        scale: 1.03,
        transition: { type: 'spring', stiffness: 300, damping: 10 },
      }}
      whileTap={{
        scale: 0.95,
        y: 0,
        transition: { type: 'spring', stiffness: 500 },
      }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
