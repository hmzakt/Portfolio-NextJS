import React from 'react'
import projectsData from '../data/projects_Data.json'
import { CardSpotlight } from "@/components/ui/card-spotlight";
import Link from 'next/link';
import { Button } from './ui/moving-border';
import { cn } from "@/lib/utils";


function FeaturedProjects() {

  interface Project {
    id: number,
    title: string,
    slug: string,
    description: string,
    Github: string,
    isFeatured: boolean,
    LiveDemo: string
  }

  const featuredProjects = projectsData.projects.filter((projects: Project) => projects.isFeatured)

  return (
        <div className="relative flex flex-col min-h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
    <div className="py-12 relative z-10">
      <div>
        <div className="text-center">
          <h2 className="text-2xl text-teal-600 font-semibold tracking-wide uppercase z-20">FEATURED PROJECTS</h2>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredProjects.map((projects: Project) => (
            <div key={projects.id} className="flex justify-center">


              <CardSpotlight className="w-96 min-h-[24rem]">
                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                  {projects.title}
                </p>
                <div className="text-neutral-200 mt-4 relative z-20">
                  {projects.description}
                </div>
                <div className='flex flex-col mt-6'>
                  <div><a
                    href={projects.Github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      borderRadius="1.75rem"
                      className="bg-white dark:bg-slate-900 text-black dark:text-white border border-neutral-200 dark:border-slate-800"
                    >
                      Github
                    </Button>
                  </a></div>
                  <div className='mt-3'><a
                    href={projects.LiveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      borderRadius="1.75rem"
                      className="bg-white dark:bg-slate-900 text-black dark:text-white border border-neutral-200 dark:border-slate-800"
                    >
                      Demo
                    </Button>
                  </a></div></div>
              </CardSpotlight>
            </div>
          ))}
        </div>
      </div>
       </div>
      <div className="mt-20 text-center relative z-20">
        <Link href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-400 transition duration-200"
        >
          View All projects
        </Link>
      </div>   
    </div>
    
  )
}

export default FeaturedProjects



