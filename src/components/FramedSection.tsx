import { ReactNode } from 'react';

export default function FramedSection({
  children,
  heading,
  mbHeading,
}: {
  children: ReactNode;
  heading: string;
  mbHeading: string;
}) {
  return (
    <section
      id={`section-${heading.toLowerCase().replace(/\s+/g, '-')}`}
      className='pt-10 sm:pt-16 md:py-20 px-4 sm:px-8 flex justify-center'
    >
      <div
        className='relative w-full
          md:bg-[#736354] 
          md:border-[15px] md:border-[#50473E] 
          md:outline-[15px] md:outline-[#4B372E]
          py-10 md:py-0'
      >
        <div className='md:hidden mb-6 text-center'>
          <h2
            id={`heading-${heading.toLowerCase().replace(/\s+/g, '-')}`}
            className='font-bold text-2xl'
          >
            {mbHeading}
          </h2>
        </div>

        <div className='hidden md:block absolute -top-[30px] left-1/2 -translate-x-1/2'>
          <SectionTitleSign heading={heading} />
        </div>

        {children}

        <CornerFrame className='-top-[30px] -left-[30px] hidden md:flex' />
        <CornerFrame className='-top-[30px] -right-[30px] rotate-90 hidden md:flex' />
        <CornerFrame className='-bottom-[30px] -right-[30px] rotate-180 hidden md:flex' />
        <CornerFrame className='-bottom-[30px] -left-[30px] -rotate-90 hidden md:flex' />
      </div>
    </section>
  );
}

export function CornerFrame({ className }: { className?: string }) {
  return (
    <div
      className={`absolute w-[40px] h-[40px] pointer-events-none ${className}`}
      aria-hidden='true'
    >
      <div className='absolute top-0 left-0 h-[60px] w-[15px] bg-[#604B3A]' />
      <div className='absolute top-0 left-0 h-[15px] w-[60px] bg-[#604B3A]' />

      <div className='absolute top-[15px] left-[15px] h-full w-[15px] bg-[#544435]' />
      <div className='absolute top-[15px] left-[15px] h-[15px] w-full bg-[#544435]' />

      <div className='absolute top-[30px] left-[30px] h-[20px] w-[10px] bg-[#494949]' />
      <div className='absolute top-[30px] left-[30px] h-[10px] w-[20px] bg-[#494949]' />
    </div>
  );
}

export function SectionTitleSign({ heading }: { heading: string }) {
  return (
    <div
      role='presentation'
      className='relative bg-[#5F493C] px-10 py-4 w-fit rounded-sm border-4 border-[#3E2D23] shadow-[0px_4px_0_#3E2D23]'
    >
      <div
        className='absolute inset-2 border-2 border-[#8D7668] pointer-events-none rounded-sm'
        aria-hidden='true'
      />
      <h2
        id={`heading-${heading.toLowerCase().replace(/\s+/g, '-')}`}
        className='text-xl font-bold text-white text-center pixel-font tracking-wide relative z-10'
      >
        {heading}
      </h2>
    </div>
  );
}
