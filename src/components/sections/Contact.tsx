'use client';
import { motion } from 'framer-motion';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import SectionTitleSign from '../ui/SectionTitleSign';

export default function SocialLinks() {
  return (
    <section id='contact-section' className='flex justify-center items-center flex-col py-20'>
      <SectionTitleSign heading='Contact Me' mbHeading='Contact me' />
      <div className='flex justify-center items-center gap-10 py-10'>
        <motion.button
          onClick={() => window.open('https://www.github.com/ChetanbirSingh')}
          aria-label='Visit Github'
          rel='noopener noreferrer'
          whileHover={{ scale: 1.3, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
          className='text-white cursor-pointer'
        >
          <SiGithub size={48} />
        </motion.button>

        <motion.button
          onClick={() => window.open('https://www.linkedin.com/in/chetanbirsingh')}
          aria-label='Visit Linkedin'
          rel='noopener noreferrer'
          whileHover={{ scale: 1.3, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className='text-white cursor-pointer'
        >
          <SiLinkedin size={48} />
        </motion.button>
      </div>
    </section>
  );
}
