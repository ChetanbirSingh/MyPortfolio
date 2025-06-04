'use client';
import FramedSection from './FramedSection';
import { motion } from 'framer-motion';

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiFigma,
  SiGit,
  SiDotnet,
  SiPython,
} from 'react-icons/si';

import { FaCuttlefish } from 'react-icons/fa';

export default function Inventory() {
  return (
    <FramedSection heading='Inventory' mbHeading='Skills'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 md:p-20 p-2'>
        {skills.map(({ name, icon, level, barColor }, idx) => (
          <article key={idx} className='skill-item' aria-labelledby={`skill-${idx}`}>
            <div className='flex items-center gap-4 mb-3'>
              <div
                className='w-9 h-9 bg-black rounded-sm flex items-center justify-center'
                aria-hidden='true'
              >
                {icon}
              </div>
              <h3 id={`skill-${idx}`} className='text-white  text-1xl'>
                {name}
              </h3>
            </div>

            <div
              className='relative w-full h-6 bg-[#2f2f2f] rounded-sm'
              role='progressbar'
              aria-valuenow={parseFloat(level)}
              aria-valuemin={0}
              aria-valuemax={10}
              aria-label={`${name} proficiency`}
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{
                  width: `${
                    (parseInt(level.split('/')[0]) / parseInt(level.split('/')[1])) * 100
                  }%`,
                }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className={`absolute top-0 left-0 h-full ${barColor} rounded-sm`}
              />

              <p
                className='absolute 
              right-1 top-1/2 -translate-y-1/2 
              text-sm'
              >
                level {level}
              </p>
            </div>
          </article>
        ))}
      </div>
    </FramedSection>
  );
}

const skills = [
  {
    name: 'React',
    icon: <SiReact size={24} className='text-cyan-400' />,
    level: '9/10',
    barColor: 'bg-cyan-400',
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs size={24} className='text-white' />,
    level: '8/10',
    barColor: 'bg-neutral-300',
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript size={24} className='text-blue-500' />,
    level: '8.5/10',
    barColor: 'bg-blue-500',
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript size={24} className='text-yellow-400' />,
    level: '9.5/10',
    barColor: 'bg-yellow-400',
  },
  {
    name: 'HTML',
    icon: <SiHtml5 size={24} className='text-orange-500' />,
    level: '10/10',
    barColor: 'bg-orange-500',
  },
  {
    name: 'CSS',
    icon: <SiCss3 size={24} className='text-blue-400' />,
    level: '9.5/10',
    barColor: 'bg-blue-400',
  },
  {
    name: 'Figma',
    icon: <SiFigma size={24} className='text-pink-500' />,
    level: '6/10',
    barColor: 'bg-pink-500',
  },
  {
    name: 'Git',
    icon: <SiGit size={24} className='text-orange-600' />,
    level: '7/10',
    barColor: 'bg-orange-600',
  },
  {
    name: 'C',
    icon: <FaCuttlefish size={24} className='text-white' />,
    level: '5/10',
    barColor: 'bg-gray-400',
  },
  {
    name: 'Python',
    icon: <SiPython size={24} className='text-gray-500 opacity-40' />,
    level: 'Not Yet',
    barColor: 'bg-gray-700 opacity-20',
  },
  {
    name: '.NET',
    icon: <SiDotnet size={24} className='text-gray-500 opacity-40' />,
    level: 'Not Yet',
    barColor: 'bg-gray-700 opacity-20',
  },
  {
    name: 'C#',
    icon: 'C#',
    level: 'Not Yet',
    barColor: 'bg-gray-700 opacity-20',
  },
];
