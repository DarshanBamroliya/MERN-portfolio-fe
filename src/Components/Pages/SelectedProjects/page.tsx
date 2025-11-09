'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import AnimatedButton from '../../Common/AnimatedButton/AnimatedButton';
import { IoIosArrowRoundForward } from "react-icons/io";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Full Stack Development",
    description: "A modern e-commerce solution built with MERN stack featuring real-time inventory management and payment integration.",
    image: "https://katherine-le.com/assets/yO1vlEicIN-2400-BsuNjpC5.avif"
  },
  {
    id: 2,
    title: "Task Management App",
    category: "React Development",
    description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://katherine-le.com/assets/giK1HCIcOm-2560-DHVVFKrt.avif"
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Next.js Development",
    description: "Responsive portfolio website with custom animations, dark mode, and optimized performance for showcasing creative work.",
    image: "https://katherine-le.com/assets/yO1vlEicIN-2400-BsuNjpC5.avif"
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    category: "Data Visualization",
    description: "Analytics dashboard for social media management with interactive charts, real-time data, and comprehensive reporting tools.",
    image: "https://katherine-le.com/assets/giK1HCIcOm-2560-DHVVFKrt.avif"
  },
  {
    id: 5,
    title: "Mobile Banking App",
    category: "Mobile Development",
    description: "Secure mobile banking application with biometric authentication, transaction history, and seamless user experience.",
    image: "https://katherine-le.com/assets/yO1vlEicIN-2400-BsuNjpC5.avif"
  },
  {
    id: 6,
    title: "AI Chat Assistant",
    category: "Machine Learning",
    description: "Intelligent chatbot with natural language processing capabilities, context awareness, and multi-language support.",
    image: "https://katherine-le.com/assets/giK1HCIcOm-2560-DHVVFKrt.avif"
  }
];

function SelectedProjects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="md:py-20 py-16 px-4 sm:px-6 lg:px-8 bg-white relative z-1">
      <div className='font-caudex lg:text-7xl md:text-5xl text-3xl font-normal'><span className='font-normal'>SELECTED <i>PROJECTS</i></span></div>
      <div className='pt-10'>
        {Array.from({ length: Math.ceil(projects.length / 2) }, (_, gridIndex) => {
          const firstProject = projects[gridIndex * 2];
          const secondProject = projects[gridIndex * 2 + 1];
          const isLastGrid = gridIndex === Math.ceil(projects.length / 2) - 1;
          
          return (
            <div key={gridIndex} className={`grid grid-cols-12 md:gap-4 md:pb-0 pb-4 ${isLastGrid ? 'pb-0' : ''}`}>
              {/* First Project */}
              <div className="md:col-span-7 col-span-12 uppercase md:pb-12 pb-4">
                <div className="overflow-hidden">
                  <Image 
                    src={firstProject.image} 
                    width={2400} 
                    height={1800} 
                    alt={firstProject.title}
                    className="object-cover object-center w-full h-full transition-all duration-[750ms] ease-[cubic-bezier(.04,.3,.4,1.01)] hover:scale-110" 
                  />
                </div>
                <div className='flex justify-between items-center py-2'>
                  <p className='font-averia font-normal md:text-[12px] text-[10px]'>{firstProject.title}</p>
                  <p className='font-averia font-light md:text-[12px] text-[10px] text-[#808080]'>{firstProject.category}</p>
                </div>
              </div>
              
              {/* Second Project */}
              <div className="md:col-span-5 col-span-12">
                <div className="overflow-hidden">
                  <Image 
                    src={secondProject.image} 
                    width={2560} 
                    height={1440} 
                    alt={secondProject.title}
                    className="object-cover w-full h-full transition-all duration-[750ms] ease-[cubic-bezier(.04,.3,.4,1.01)] object-center hover:scale-110" 
                  />
                </div>
                <div className='flex justify-between items-center py-2'>
                  <p className='font-averia font-normal md:text-[12px] text-[10px]'>{secondProject.title}</p>
                  <p className='font-averia font-light md:text-[12px] text-[10px] text-[#808080]'>{secondProject.category}</p>
                </div>
              </div>
            </div>
          );
        })}
        
        {/* View More Button */}
        <div className="flex md:mt-0 mt-5">
          <AnimatedButton 
            label="View More" 
            icon={<IoIosArrowRoundForward size={24} />}
            onClick={() => {
              // Add your navigation logic here
              console.log('View More clicked');
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default SelectedProjects;
