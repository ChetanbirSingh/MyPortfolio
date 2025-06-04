import { ReactNode } from 'react';

export default function FramedSection({
  children,
  heading,
}: {
  children: ReactNode;
  heading: string;
}) {
  return (
    <section
      id={`section-${heading.toLocaleLowerCase()}`}
      className=' py-16 md:py-20 md:p-10 flex justify-center'
    >
      <div
        className='relative w-full bg-[#736354] border-[15px] border-[#50473E] 
      outline-[15px] outline-[#4B372E]'
      >
        {children}
        <div className='absolute -top-[30px] left-1/2 -translate-x-1/2'>
          <SectionTitleSign heading={heading} />
        </div>
        <CornerFrame className='-top-[30px] -left-[30px]' />
        <CornerFrame className='-top-[30px] -right-[30px] rotate-90' />
        <CornerFrame className='-bottom-[30px] -right-[30px] rotate-180' />
        <CornerFrame className='-bottom-[30px] -left-[30px] -rotate-90' />
      </div>
      p
    </section>
  );
}

export function CornerFrame({ className }: { className?: string }) {
  return (
    <div className={`absolute w-[40px] h-[40px] pointer-events-none ${className}`}>
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
    <div className='relative bg-[#5F493C] px-10 py-4 w-fit rounded-sm border-4 border-[#3E2D23] shadow-[0px_4px_0_#3E2D23]'>
      <div className='absolute inset-2 border-2 border-[#8D7668] pointer-events-none rounded-sm' />

      <h2 className='text-xl sm:text-2xl font-bold text-white text-center pixel-font tracking-wide relative z-10'>
        {heading}
      </h2>
    </div>
  );
}
