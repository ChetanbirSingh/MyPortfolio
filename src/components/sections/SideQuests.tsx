'use client';
import SectionTitleSign from '../ui/SectionTitleSign';
import { motion } from 'framer-motion';
import { GiSpellBook, GiStarSwirl } from 'react-icons/gi';
import { SiGithub, SiVercel } from 'react-icons/si';

const sideQuests = [
  {
    title: 'FitCheck',
    stack: 'Next.js, TypeScript',
    features: ['Repo Analysis', 'Persona Review'],
    objective: 'Provide tailored feedback on codebases based on tech stack and role.',
    outcome: 'Sharpened code quality and alignment with job expectations.',
    role: 'Solo Dev & Designer',
    tags: ['AI Tool', 'Persona Review', 'Frontend Focused', 'Stack Aligned'],
    video: 'https://www.youtube.com/embed/RUU7WHGPRJw',
    repo: 'https://github.com/ChetanbirSingh/fitcheck',
    demo: 'https://fitcheck-pi.vercel.app/',
  },
  {
    title: 'PokeXplorer',
    stack: 'HTML, CSS, JavaScript',
    features: ['Cry Audio on Click', 'Evolution Chain Tree'],
    objective: 'Deliver an engaging visual + audio Pokémon search experience.',
    outcome: 'Fully interactive UI that plays cries and shows type-based stats & evolutions.',
    role: 'Frontend Dev',
    tags: ['Vanilla JS', 'PokéAPI', 'Interactive UI'],
    video: 'https://www.youtube.com/embed/X3Vye_Ma_PM',
    repo: 'https://github.com/ChetanbirSingh/PokeXplorer',
    demo: 'https://pokexplorer.vercel.app/',
  },
];

export default function SideQuests() {
  return (
    <section id='projects-section' className='pt-10 md:pt-16 md:px-10 px-2'>
      <div className='flex justify-center items-center'>
        <SectionTitleSign heading='Side Quests' mbHeading='Projects' />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-8 md:gap-10 w-full py-12'>
        {sideQuests.map(
          ({ video, title, repo, demo, features, tags, role, stack, objective, outcome }, i) => (
            <motion.div
              key={i}
              className='bg-[#2e1e12] border-2 border-[#674b2e] rounded-lg shadow-[0_8px_0_#674b2e] flex flex-col gap-5 hover:shadow-[0_12px_0_#674b2e] transition-all duration-300'
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className='aspect-video w-full rounded-md overflow-hidden border-2 border-[#674b2e] shadow-inner'>
                <iframe
                  src={video}
                  title={`${title} Video Demo`}
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope'
                  allowFullScreen
                  loading='lazy'
                  className='w-full h-full'
                />
              </div>

              <h3 className='text-xl sm:text-2xl text-[#ffe3b8] font-bold pixel-font tracking-wide flex items-center gap-2 px-4'>
                <GiSpellBook className='text-[#ffe3b8]' /> {title}
              </h3>

              <div className='flex gap-4 px-4 pt-2 sm:pt-4'>
                <button
                  aria-label={`${title} GitHub Repo`}
                  className='px-4 py-2 text-[#ffe3b8] hover:text-[#ecdbd1] transition cursor-pointer'
                  onClick={() => window.open(repo, '_blank')}
                >
                  <SiGithub size={22} />
                </button>
                <button
                  aria-label={`${title} Live Demo`}
                  className='px-4 py-2 text-[#ffe3b8] hover:text-[#ecdbd1] transition cursor-pointer text-lg'
                  onClick={() => window.open(demo, '_blank')}
                >
                  <SiVercel size={22} />
                </button>
              </div>

              <div className='text-sm text-[#fef9f3] pixel-font space-y-2 leading-relaxed bg-[#1e1410] p-4 rounded-md border border-[#4a2e1c] mx-4'>
                <p>
                  <span className='text-[#ffd580] font-semibold'>STACK:</span> {stack}
                </p>
                <p>
                  <span className='text-[#ffd580] font-semibold'>ROLE:</span> {role}
                </p>
                <p>
                  <span className='text-[#ffd580] font-semibold'>FEATURES:</span>{' '}
                  {features.join(', ')}
                </p>
                <p>
                  <span className='text-[#ffd580] font-semibold'>OBJECTIVE:</span> {objective}
                </p>
                <p>
                  <span className='text-[#ffd580] font-semibold'>OUTCOME:</span> {outcome}
                </p>
              </div>

              {/* Tags */}
              <div className='flex flex-wrap gap-2 px-4 pb-6 pt-2'>
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className='text-xs px-3 py-1 pixel-font rounded-md bg-[#3a2a1f] border border-[#8b684c] text-[#f1e2cf] shadow-md'
                  >
                    <GiStarSwirl className='inline-block mr-1 text-[#ffe3b8]' /> {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ),
        )}
      </div>
    </section>
  );
}
