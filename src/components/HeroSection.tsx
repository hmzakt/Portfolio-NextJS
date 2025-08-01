"use client";
import React from 'react'
import { Button } from './ui/moving-border';
import { HeroHighlight } from "./ui/hero-highlight";
import { FlipWords } from "./ui/flip-words";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import Image from 'next/image';

const ResumeLink = 'https://drive.google.com/file/d/1-kkzgA5ESTz4VtyNdRQ_AL91v_hrCmSL/view?usp=drive_link'
const socials = [
  {
    id: 1,
    name: "LeetCode",
    image:
      "https://assets.userstyles.org/assets_packs/type=style/user_id=4110296/screenshot_2f9afbff-9b59-4a2b-8fd7-8ba1209d7d0c_thumb.webp",
    link: "https://leetcode.com/u/hmz_akt/"
  },
  {
    id: 2,
    name: "GitHub",
    image:
      "https://cdn-icons-png.flaticon.com/128/11378/11378534.png",
    link: "https://github.com/hmzakt"
  },
  {
    id: 3,
    name: "LinkedIn",
    image:
      "https://img.freepik.com/premium-vector/round-linkedin-logo-isolated-white-background_469489-985.jpg?semt=ais_hybrid&w=740",
    link: "https://www.linkedin.com/in/hmzakt/"
  },
  {
    id: 4,
    name: "Instagram",
    image:
      "https://cdn-icons-png.flaticon.com/128/3670/3670125.png",
    link: "https://www.instagram.com/hmz_akt/",
  },
];

const words = ["Web Design", "Web Development", "Data Structures", "Data Science", "Machine Learning"];

function HeroSection() {
  return (
    <div className="w-full h-screen flex items-center justify-center px-4">
      <HeroHighlight>
        <div className="flex flex-col items-center justify-center text-center max-w-xl w-full">

          <div className="w-32 h-32 md:w-40 md:h-40 mb-6 hover:scale-110 transition-transform duration-200">
            <Image
              src="/svgs/temp-logo.png"
              alt="Logo"
              width={160}   
              height={160}  
              className="w-full h-full object-contain"
            />
          </div>


          <div className="text-3xl md:text-4xl font-normal text-neutral-600 dark:text-neutral-400 leading-snug">
            <div className="mb-4 text-[2.5rem] md:text-[3rem] font-semibold text-neutral-700 dark:text-neutral-100 fade-up-pulse md:whitespace-nowrap">
              Hey, I’m Md Hamza Akhtar
            </div>


            <div className="flex flex-col sm:flex-row sm:items-center text-center sm:text-left">
              <span className="mb-1 sm:mb-0">Exploring</span>
              <div className="w-full sm:w-auto flex justify-center sm:justify-start">
                <FlipWords words={words} />
              </div>
            </div>
          </div>

          <blockquote className="border-l-4 border-neutral-100 pl-4 italic text-neutral-600 dark:text-neutral-100 text-base md:text-lg max-w-xl mx-auto mt-6">
            “I’m a second-year Computer Science student at Jaypee Institute of Information Technology, driven by a passion for learning and building meaningful tech. Feel free to reach out or drop a message.”
          </blockquote>

          <div className='flex flex-row gap-y-6 sm:gap-x-6 mt-10 m-8 '>
            <div className='transform transition-transform duration-200 hover:scale-110 '>

              <Button borderRadius="1.75rem" onClick={() => window.open(ResumeLink, "_blank")} className='cursor-pointer'>Resume</Button>

            </div>
            <div className='flex flex-row scale-80 sm:scale-90 cursor-pointer'>
              <AnimatedTooltip items={socials} />
            </div>
          </div>
        </div>
      </HeroHighlight>
    </div>

  );
}

export default HeroSection
