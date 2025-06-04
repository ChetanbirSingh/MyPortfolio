export default function SectionTitleSign({
  heading,
  mbHeading,
}: {
  heading: string;
  mbHeading: string;
}) {
  return (
    <>
      <div
        role='presentation'
        className='hidden md:block relative bg-[#5F493C] px-10 py-4 w-fit rounded-sm border-4 border-[#3E2D23] shadow-[0px_4px_0_#3E2D23]'
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

      <div className='md:hidden mb-6 text-center'>
        <h2
          id={`heading-${heading.toLowerCase().replace(/\s+/g, '-')}`}
          className='font-bold text-2xl'
        >
          {mbHeading}
        </h2>
      </div>
    </>
  );
}
