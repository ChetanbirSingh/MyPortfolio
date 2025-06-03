'use client';

import { motion } from 'framer-motion';
import Button from './Button';

export default function HeroSection() {
  return (
    <section
      id='hero-section'
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat bg-[url('/banner.webp')]"
    >
      <div className='absolute inset-0 bg-black/40 flex items-center justify-center'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className='flex flex-col items-center justify-center text-center gap-6 px-4'
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            Chetanbir Singh
          </motion.h1>

          <motion.p
            className='text-2xl sm:text-3xl font-semibold'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            frontend web dev
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.6 }}
          >
            <Button theme='yellow'>My Resume</Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
