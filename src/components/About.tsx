import React from 'react'
import { Meteors } from './ui/meteors'

type LanguageBadgeProps = {
    iconSrc: string;
    label: string;
};

const LanguageBadge = ({ iconSrc, label }: LanguageBadgeProps) => (
    <div className="flex flex-row gap-5 items-center  hover:scale-110 ">
        <img className="h-8 w-8" src={iconSrc} alt={`${label} Icon`} />
        <div className="flex flex-row gap-5 items-center cursor-pointer hover:text-[#00E0D0] transition-colors duration-200">{label}</div>
    </div>
);

function About() {
    return (
        <div className='flex flex-col justify-center items-center px-6 py-6 max-w-full mb-10'>
            <h1 className='text-4xl'>Skills and Interests</h1>


            <div className="mt-15 w-full flex flex-col md:flex-row md:items-stretch gap-12 max-w-full">
  {/* Card 1 */}
  <div className="relative w-full md:w-1/3">
    <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
    <div className="relative flex flex-col items-start h-full overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-[0_-6px_15px_rgba(0,0,0,0.3),0_6px_15px_rgba(0,0,0,0.3)]">
      <h1 className="relative z-50 mb-4 text-xl font-bold text-white">Languages</h1>
      <div className="flex flex-col gap-3 z-10 p-5">
        <LanguageBadge iconSrc="/svgs/cIcon.svg" label="C++" />
        <LanguageBadge iconSrc="/svgs/icons8-python.svg" label="Python" />
        <LanguageBadge iconSrc="/svgs/icons8-javascript.svg" label="JavaScript" />
        <LanguageBadge iconSrc="/svgs/icons8-typescript.svg" label="TypeScript" />
      </div>
      <Meteors number={20} />
    </div>
  </div>

  {/* Card 2 */}
  <div className="relative w-full md:w-1/3">
    <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
    <div className="relative flex flex-col items-start h-full overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-[0_-6px_15px_rgba(0,0,0,0.3),0_6px_15px_rgba(0,0,0,0.3)]">
      <h1 className="relative z-50 mb-4 text-xl font-bold text-white">Frameworks and Libraries</h1>
      <div className="flex flex-col gap-3 z-10 p-5">
        <LanguageBadge iconSrc="/svgs/icons8-nextjs.svg" label="NextJS" />
        <LanguageBadge iconSrc="/svgs/icons8-react.svg" label="ReactJS" />
        <LanguageBadge iconSrc="/svgs/icons8-tailwind-css.svg" label="Tailwind CSS" />
        <LanguageBadge iconSrc="/svgs/icons8-express-js.svg" label="ExpressJS" />
        <LanguageBadge iconSrc="/svgs/icons8-pandas.svg" label="Pandas" />
        <LanguageBadge iconSrc="/svgs/icons8-numpy.svg" label="Numpy" />
        <LanguageBadge iconSrc="/svgs/icons8-flask.svg" label="Flask" />
      </div>
      <Meteors number={20} />
    </div>
  </div>

  {/* Card 3 */}
  <div className="relative w-full md:w-1/3">
    <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
    <div className="relative flex flex-col items-start h-full overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-[0_-6px_15px_rgba(0,0,0,0.3),0_6px_15px_rgba(0,0,0,0.3)]">
      <h1 className="relative z-50 mb-4 text-xl font-bold text-white">Tools and Technologies</h1>
      <div className="flex flex-col gap-3 z-10 p-5">
        <LanguageBadge iconSrc="/svgs/icons8-git.svg" label="Git" />
        <LanguageBadge iconSrc="/svgs/icons8-github.svg" label="Github" />
        <LanguageBadge iconSrc="/svgs/icons8-mongodb.svg" label="MongoDB" />
        <LanguageBadge iconSrc="/svgs/mysql.svg" label="MySQL" />
        <LanguageBadge iconSrc="/svgs/icons8-postman-api.svg" label="Postman" />
      </div>
      <Meteors number={20} />
    </div>
  </div>
</div>

        </div>
    )
}

export default About
