'use client';

import Image from 'next/image';
import FramedSection from './FramedSection';
import Button from './Button';
import { motion } from 'framer-motion';

export default function StatsSection() {
  return (
    <FramedSection heading='Stats'>
      <motion.div
        className='flex flex-col lg:flex-row gap-8 px-5 py-20'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <div className='bg-[#A09484] sm:p-15 mx-auto rounded-sm flex flex-col justify-center items-center'>
          <div className='px-4 py-3 mt-5 bg-black text-white text-center border-b-[5px] border-white'>
            Chetanbir Singh
          </div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <Image
              src='/avatar.webp'
              alt='Pixel avatar'
              width={180}
              height={180}
              className='mt-3'
            />
          </motion.div>
        </div>

        <div className='flex flex-col justify-between gap-4 text-sm sm:text-base text-white max-w-2xl leading-6 px-2'>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true }}
          >
            I&apos;m Chetanbir Singh, a frontend developer passionate about building clean,
            responsive, and accessible user interfaces. I care deeply about design systems,
            maintainable code, and the details that make a UI feel right.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
            viewport={{ once: true }}
          >
            I work primarily with Next.js and TypeScript, and I have a solid foundation in HTML,
            CSS, and JavaScript. I enjoy building things that are not just functional — but
            intuitive, fast, and fun to use.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
            viewport={{ once: true }}
          >
            Whether it&apos;s aligning a single pixel or optimizing for performance, I&apos;m always
            exploring ways to improve user experience and developer workflows. I&apos;m open to
            collaboration, growth, and using code to solve meaningful problems.
          </motion.p>

          <motion.div
            className='flex flex-wrap gap-4 mt-2'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
            viewport={{ once: true }}
          >
            <Button theme='yellow'>My Resume</Button>
            <Button theme='blue'>My GitHub</Button>
          </motion.div>
        </div>
      </motion.div>
    </FramedSection>
  );
}
