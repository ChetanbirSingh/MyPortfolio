'use client';

import Image from 'next/image';
import FramedSection from './FramedSection';
import Button from './Button';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const aboutMe = [
  `I'm Chetanbir Singh, started my tech journey at 16, driven by curiosity and a love for building things that live on the web. I spent those early years exploring code, learning through experimentation, and building personal projects just for the thrill of it.`,

  `Currently, I’m a web development student at the University of Alberta, specializing in full-stack development. My focus is on creating clean, responsive user interfaces and solving real-world problems through functional design and code.`,

  `I enjoy crafting experiences that feel intuitive and purposeful. Whether it’s building an AI-powered tool or experimenting with creative UI themes, I’m always looking for ways to blend logic with creativity.`,
];

export default function StatsSection() {
  const dragBoundaryRef = useRef<HTMLDivElement | null>(null);
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
          className='md:bg-[#A09484] sm:max-w-md px-18 w-full py-0 md:py-8 mx-auto 
          rounded-sm flex flex-col justify-center items-center md:shadow-md'
          ref={dragBoundaryRef}
        >
          <div className='px-4 py-3 mt-5 hidden md:block bg-black text-white text-center border-b-[5px] border-white'>
            Chetanbir Singh
          </div>
          <motion.div
            drag
            dragConstraints={dragBoundaryRef}
            dragElastic={0.2}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 12 }}
            whileTap={{
              scale: 1.1,
              rotate: 2,
            }}
            whileHover={{
              scale: 1.05,
              rotate: -1,
              transition: { type: 'spring', stiffness: 300, damping: 15 },
            }}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className='cursor-grab active:cursor-grabbing w-[200px] h-[250px] relative'
          >
            <Image
              src='/avatar.webp'
              alt='Pixel avatar of a developer sitting on bricks, working on a Laptop'
              fill
              sizes='(max-width: 640px) 120px, (max-width: 1024px) 160px, 200px'
              className='select-none pointer-events-none'
              draggable={false}
              style={{ height: '100%', width: '100%' }}
            />
          </motion.div>
        </div>

        <div className='flex flex-col justify-between gap-4 text-sm sm:text-base sm:max-w-3xl leading-6 p-0 md:px-2 '>
          {aboutMe.map((text, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.1 }}
              viewport={{ once: true }}
              className='mb-4 text-sm leading-relaxed text-white'
            >
              {text}
            </motion.p>
          ))}

          <motion.div
            className='flex flex-wrap gap-4 mt-2 justify-center'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
            viewport={{ once: true }}
          >
            <Button onClick={() => {}} theme='yellow'>
              My Resume
            </Button>
            <Button
              onClick={() =>
                window.open(
                  'https://www.github.com/ChetanbirSingh',
                  '_blank',
                  'noopener,noreferrer',
                )
              }
              theme='blue'
            >
              My GitHub
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </FramedSection>
  );
}
