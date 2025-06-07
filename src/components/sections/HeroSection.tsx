'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';

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
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className='flex flex-col items-center justify-center text-center gap-6'
        >
          <div className='md:text-3xl'>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              Chetanbir Singh
            </motion.h1>
          </div>

          <motion.p
            className='md:text-3xl'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            Frontend Dev. No Bugs Survive.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
            className='select-none'
          >
            <Button
              onClick={() => {
                window.open('/resume.pdf', '_blank', 'noopener,noreferrer');
              }}
              theme='yellow'
            >
              My Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
