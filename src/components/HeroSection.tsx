"use client";

import React from 'react'
import Link from 'next/link'
import { Button } from './ui/moving-border';

import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

function HeroSection() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        <div className='flex flex-col'>
        <div>Not a specialist...</div>
        <div>Not a generalist...</div>{" "}
        </div>
        <Highlight className="text-black dark:text-white">
          Hey, I am Md Hamza Akhtar.
        </Highlight>
      </motion.h1>
      <div className="mt-8 flex justify-center">
                    <Link href={'/projects'}>
                    <Button borderRadius='1.75rem' className=''>Projects</Button></Link>
                </div>
    </HeroHighlight>
    </div>
  );
}

export default HeroSection