'use client';

import Image from 'next/image';
import FramedSection from './FramedSection';
import Button from './Button';
import { motion } from 'framer-motion';

export default function StatsSection() {
  return (
    <FramedSection heading='Stats' mbHeading='About Me'>
      <motion.div
        className='flex flex-col lg:flex-row gap-8 px-0 md:px-5 py-5 md:py-20'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <div
          className='md:bg-[#A09484] sm:max-w-md md:max-w-sm px-6 py-0 md:py-8 mx-auto 
        rounded-sm flex flex-col justify-center items-center md:shadow-md'
        >
          <div className='px-4 py-3 mt-5 hidden md:block bg-black text-white text-center border-b-[5px] border-white'>
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
              alt='Pixel avatar of a developer sitting on bricks, working on a Laptop'
              width={200}
              height={200}
              sizes='(max-width: 640px) 120px, (max-width: 1024px) 160px, 180px'
              className='mt-3'
            />
          </motion.div>
        </div>

        <div className='flex flex-col justify-between gap-4 text-sm sm:text-base text-white max-w-2xl leading-6 p-0 md:px-2'>
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
            className='flex flex-wrap gap-4 mt-2 justify-center'
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
