'use client';
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';
import Header from '@/Components/Common/Header/page';
import Footer from '@/Components/Common/Footer/page';
import { BsArrowRight } from 'react-icons/bs';

export default function ProjectsPage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [previewTop, setPreviewTop] = useState<number | null>(null);
  const [filter, setFilter] = useState<'ALL' | 'MERN' | 'MEAN'>('ALL');

  const filteredProjects = useMemo(() => {
    if (filter === 'ALL') return projects;
    return projects.filter(project => project.stack === filter);
  }, [filter]);

  const hoveredProjectData = hoveredProject
    ? projects.find((p) => p.id === hoveredProject)
    : null;

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLDivElement>,
    id: number
  ) => {
    setHoveredProject(id);
    const rect = e.currentTarget.getBoundingClientRect();
    const centerY = rect.top + rect.height / 2;
    setPreviewTop(centerY);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fcfaf8] pt-24 md:pt-28 lg:pb-28 md:pb-20 sm:pb-14 pb-8 relative z-10 border-t border-gray-100 md:rounded-b-[68px] rounded-b-[40px]">
        <div className="mx-width underlay px-4 sm:px-6 lg:px-8">
          <div className="grid:2 g-wrapper grid">
            <div className="grid:2 grid">
              <div></div>
              <div className='lg:block hidden'></div>
            </div>
            <div className="grid:2 grid">
              <div></div>
              <div className='lg:block hidden'></div>
            </div>
          </div>
        </div>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-20 lg:mb-24">
            <h1 className="font-caudex text-[48px] md:text-[64px] lg:text-[80px] xl:text-[96px] leading-[1.1]">
              SELECTED
              <br />
              <span className="italic">PROJECTS</span>
              <span className="font-averia ml-2 text-[18px] md:text-[20px] lg:text-[22px]">
                ({filteredProjects.length})
              </span>
            </h1>

            <div className="flex flex-wrap items-center gap-3">
              {(['ALL', 'MERN', 'MEAN'] as const).map((stack) => (
                <button
                  key={stack}
                  onClick={() => setFilter(stack)}
                  className={`font-averia text-[10px] md:text-[11px] uppercase tracking-[0.2em] px-5 py-2 rounded-full border transition-all duration-300 ${filter === stack
                    ? 'bg-black text-white border-black'
                    : 'bg-transparent text-[#111] border-gray-200 hover:border-black'
                    }`}
                >
                  {stack}
                </button>
              ))}
            </div>
          </div>

          {/* List */}
          <div className="relative">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onMouseEnter={(e) => handleMouseEnter(e, project.id)}
                  onMouseLeave={handleMouseLeave}
                  className='lg:mb-0 mb-8'
                >
                  <Link href={`/project/${project.slug}`} className="group block">
                    <div className="flex items-center gap-4 lg:py-6 border-0 lg:border-b lg:border-[#808080] group-hover:border-[#0c0c0c] transition-all duration-300">
                      {/* Title */}
                      <div className="w-[450px]">
                        <h2 className="font-averia uppercase lg:text-[1rem] sm:text-[0.8rem] text-[0.6rem] tracking-wide text-[#808080] group-hover:text-[#0c0c0c] transition-all duration-300">
                          {project.title}
                        </h2>
                      </div>

                      {/* Categories */}
                      <div className="w-[450px]">
                        <p className="font-averia uppercase lg:text-[1rem] sm:text-[0.8rem] text-[0.6rem] tracking-wide text-[#808080] group-hover:text-[#0c0c0c] transition-all duration-300">
                          {project.categories.join(', ')}
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="flex-1"></div>
                      <BsArrowRight className="text-xl text-black/50 group-hover:text-black transition-all duration-300 lg:block hidden" />
                    </div>

                    {/* Mobile + Tablet Thumbnail */}
                    <div className="image-static relative w-full h-[200px] sm:h-[300px] md:h-[350px] mt-2 overflow-hidden border border-black/10 shadow-md">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="py-20 text-center font-averia text-gray-400 text-xl">
                No projects found for {filter} stack.
              </div>
            )}

            {/* 👇 Desktop Hover Preview 👇 */}
            {hoveredProjectData && (
              <div
                className="hidden fixed z-50 pointer-events-none transition-all duration-300 image-hover-preview"
                style={{
                  top: previewTop ?? 0,
                  transform: 'translateY(-50%)',
                }}
              >
                <div className="relative 
                    max-w-[400px] 
                    w-full 
                    overflow-hidden 
                    bg-transparent 
                    image-hover-preview-container">
                  <Image
                    src={hoveredProjectData.image}
                    alt={hoveredProjectData.title}
                    width={800}   // large base width
                    height={1000} // large base height
                    className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-500 ease-out"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
