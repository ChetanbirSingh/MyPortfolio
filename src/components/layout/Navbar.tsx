'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const links = [
  { name: 'Projects', href: '#projects-section' },
  { name: 'Skills', href: '#skills-section' },
  { name: 'Contact', href: '#contact-section' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className='w-full flex justify-center z-50'>
      <nav
        className='fixed top-0 w-full bg-[#736354] shadow-lg 
        flex flex-col md:flex-row md:items-center justify-between px-6 py-4 z-50'
      >
        <div className='flex justify-between items-center w-full md:w-auto'>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
            <Link href='/' className='text-xl font-bold tracking-wide text-white'>
              Chetanbir
            </Link>
          </motion.div>

          <button
            onClick={() => setOpen(!open)}
            className='md:hidden'
            aria-label='Toggle Menu'
          >
            {open ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>

        <ul
          className={`flex flex-col md:flex-row md:items-center gap-6 mt-4 md:mt-0 
            ${open ? 'flex' : 'hidden md:flex'}`}
        >
          {links.map(({ name, href }, idx) => (
            <motion.li
              className='text-xs'
              key={idx}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                duration: 0.3,
                delay: idx * 0.1,
                ease: 'easeOut',
              }}
            >
              <Link
                href={href}
                className='hover:underline'
                onClick={() => setOpen(false)}
              >
                {name}
              </Link>
            </motion.li>
          ))}

          <motion.button
            type='button'
            aria-label='Visit GitHub'
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.open('https://www.github.com/ChetanbirSingh', '_blank', 'noopener,noreferrer')
            }
            className='px-4 py-2 bg-black rounded-xl cursor-pointer'
          >
            GitHub
          </motion.button>
        </ul>
      </nav>
    </header>
  );
}
