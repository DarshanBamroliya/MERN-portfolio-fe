'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedButton from '../../Common/AnimatedButton/AnimatedButton';
import { IoIosArrowRoundForward } from "react-icons/io";

import { projects, Project } from '@/data/projects';

function SelectedProjects() {
  return (
    <section className="md:py-20 py-16 px-4 sm:px-6 lg:px-8 relative z-1">
      <div className='font-caudex lg:text-7xl md:text-5xl text-3xl font-normal'><span className='font-normal'>SELECTED <i>PROJECTS</i></span></div>
      <div className='pt-10'>
        {Array.from({ length: Math.ceil(projects.slice(0, 6).length / 2) }, (_, gridIndex) => {
          const selectedProjects = projects.slice(0, 6);
          const firstProject = selectedProjects[gridIndex * 2];
          const secondProject = selectedProjects[gridIndex * 2 + 1];
          const isLastGrid = gridIndex === Math.ceil(selectedProjects.length / 2) - 1;

          return (
            <div key={gridIndex} className="grid grid-cols-12 gap-6 md:gap-10 pb-6">

              {/* First Project - 7 Columns */}
              <div className="col-span-12 md:col-span-7 uppercase">
                <Link href={`/project/${firstProject.slug}`} className="group block">

                  <div className="overflow-hidden">
                    <Image
                      src={firstProject.image}
                      alt={firstProject.title}
                      width={0}
                      height={0}
                      sizes="(max-width:768px) 100vw, 58vw"
                      className="w-full h-auto max-h-[600px] object-contain transition-transform duration-[2000ms] ease-out group-hover:scale-[1.02]"
                      priority
                    />
                  </div>

                  <div className="flex justify-between items-center py-2">
                    <p className="font-averia md:text-[14px] text-[12px]">
                      {firstProject.title}
                    </p>
                    <p className="font-averia md:text-[12px] text-[10px] text-[#808080]">
                      {firstProject.categories?.join(' & ')}
                    </p>
                  </div>

                </Link>
              </div>


              {/* Second Project - 5 Columns */}
              {secondProject && (
                <div className="col-span-12 md:col-span-5">
                  <Link href={`/project/${secondProject.slug}`} className="group block">

                    <div className="overflow-hidden">
                      <Image
                        src={secondProject.image}
                        alt={secondProject.title}
                        width={0}
                        height={0}
                        sizes="(max-width:768px) 100vw, 42vw"
                        className="w-full h-auto max-h-[600px] object-contain transition-transform duration-[2000ms] ease-out group-hover:scale-[1.02]"
                      />
                    </div>

                    <div className="flex justify-between items-center py-2">
                      <p className="font-averia md:text-[14px] text-[12px]">
                        {secondProject.title}
                      </p>
                      <p className="font-averia md:text-[12px] text-[10px] text-[#808080]">
                        {secondProject.categories?.join(' & ')}
                      </p>
                    </div>

                  </Link>
                </div>
              )}

            </div>
          );
        })}

        {/* View More Button */}
        <div className="flex md:mt-0 mt-5">
          <Link href="/projects">
            <AnimatedButton
              label="View More"
              icon={<IoIosArrowRoundForward size={24} />}
              onClick={() => { }}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SelectedProjects;
