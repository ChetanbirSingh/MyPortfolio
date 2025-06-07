'use client';

import { motion } from 'framer-motion';
import FramedSection from '../ui/FramedSection';

const trainings = [
  {
    date: 'Started Sept 2024',
    status: 'Active',
    title: 'Full Stack Web Development - UofA',
    desc: 'Studying full stack development through hands-on projects in both frontend and backend, with a focus on real-world skills.',
    border: 'border-yellow-400 text-yellow-300',
  },
  {
    date: 'Started Feb 2025',
    status: 'Active',
    title: "CS50 - Harvard's Intro to Computer Science",
    desc: 'Learning core computer science topics like algorithms, memory, and low-level programming using C and Python.',
    border: 'border-yellow-400 text-yellow-300',
  },
  {
    date: 'Completed July 2024',
    status: 'Completed',
    title: 'Web Dev Certification - freeCodeCamp',
    desc: 'Built projects with HTML, CSS, and JavaScript while learning responsive design and writing accessible code.',
    border: 'border-emerald-400 text-emerald-300',
  },
];

export default function TrainingLog() {
  return (
    <FramedSection heading='Training Log' mbHeading='Education'>
      <div className='relative md:px-6 py-10 md:py-20'>
        <ul className='relative z-10 flex flex-col'>
          {trainings.map(({ status, title, desc, date, border }, i) => (
            <motion.li
              key={i}
              className='flex justify-center gap-6 mb-10 last:mb-0 flex-col md:flex-row md:items-start'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.2,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.2 }}
                viewport={{ once: true }}
                className={`
                  hidden md:flex w-16 h-16 rounded-full ${
                    status === 'Completed' ? 'bg-emerald-400' : 'bg-amber-400'
                  } shadow-lg
                  items-center justify-center text-black text-3xl pixel-font relative
                  after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2
                  after:w-[4px] after:h-[150px] after:bg-[#3c3026]
                  ${i === trainings.length - 1 ? 'after:hidden' : ''}
                `}
              >
                &gt;
              </motion.div>

              <div
                className='
                  flex flex-col gap-2 max-w-3xl px-4 py-4 rounded-md 
                  bg-[#1e1e1e]/50 border border-[#333] md:border-none md:bg-transparent
                '
              >
                <div className='flex items-center gap-3 flex-wrap'>
                  <span className='text-sm'>{date}</span>
                  <span className={`px-2 py-0.5 text-sm border ${border} rounded-sm`}>
                    {status}
                  </span>
                </div>

                <h3 className='text-xl md:text-xl font-bold leading-tight'>
                  {title}
                </h3>

                <p className='pixel-font opacity-90'>{desc}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </FramedSection>
  );
}
