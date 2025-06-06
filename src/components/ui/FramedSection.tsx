import { ReactNode } from 'react';
import SectionTitleSign from './SectionTitleSign';
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
      id={`${mbHeading.toLowerCase().replace(/\s+/g, '-')}-section`}
      className='pt-10 md:pt-16 md:py-20 px-1 md:px-10 flex justify-center'
    >
      <div
        className='relative w-full
          md:bg-[#736354] 
          md:border-[15px] md:border-[#50473E] 
          md:outline-[15px] md:outline-[#4B372E]
          py-10 md:py-0'
      >
        <div className='absolute -top-[30px] left-1/2 -translate-x-1/2'>
          <SectionTitleSign heading={heading} mbHeading={mbHeading} />
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
