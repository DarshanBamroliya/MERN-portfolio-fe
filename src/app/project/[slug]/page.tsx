import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProjectBySlug, getAllProjectSlugs } from '@/data/projects';
import Header from '@/Components/Common/Header/page';
import Footer from '@/Components/Common/Footer/page';
import { FaArrowLeft } from 'react-icons/fa6';

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const allSlugs = getAllProjectSlugs();
  const currentIndex = allSlugs.indexOf(slug);
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fcfaf8] pt-24 md:pt-28 pb-20 relative z-10 md:rounded-b-[68px] rounded-b-[40px]">
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
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          {/* HERO SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-12 md:gap-12 gap-8 lg:mb-20 md:mb-16 mb-10">
            <div className="lg:col-span-5">

              {/* Back */}
              <div className="sm:mb-8 md:mb-10 mb-3">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 font-averia text-sm md:text-base text-[#101010]/60 hover:text-[#101010] transition group"
                >
                  <FaArrowLeft />
                  Back to Projects
                </Link>
              </div>

              <h1 className="font-caudex text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#101010] md:mb-10 mb:5 leading-tight">
                {project.title}
              </h1>

              {/* Meta */}
              {/* Meta Section - Matching Reference */}
              <div className="w-full md:mt-14 sm:mt-10 mt-5">

                {/* Year */}
                {project.year && (
                  <div className="flex py-6 border-b border-[#101010]">
                    <h3 className="uppercase w-[50%] text-sm md:text-lg tracking-wider text-[#101010] font-medium">
                      Year
                    </h3>
                    <p className="text-sm md:text-lg text-[#101010] font-averia">
                      {project.year}
                    </p>
                  </div>
                )}

                {/* Client */}
                {project.client && (
                  <div className="flex py-6 border-b border-[#101010]">
                    <h3 className="uppercase w-[50%] text-sm md:text-lg tracking-wider text-[#101010]/80 font-medium">
                      Client
                    </h3>
                    <p className="text-sm md:text-lg text-[#101010] font-averia text-right max-w-[60%]">
                      {project.client}
                    </p>
                  </div>
                )}

                {/* Scope of Work */}
                {Array.isArray(project.scope) && project.scope.length > 0 && (
                  <div className="flex py-6 border-b border-[#101010]">
                    <h3 className="uppercase w-[50%] text-sm md:text-lg tracking-wider text-[#101010]/80 font-medium">
                      Scope of Work
                    </h3>
                    <p className="text-sm md:text-lg text-[#101010] font-averia">
                      {project.scope.join(', ')}
                    </p>
                  </div>
                )}

              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-7">
              {project.image && (
                <div className="relative w-full aspect-[21/12] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                  />
                </div>
              )}
            </div>
          </div>

          {/* Overview */}
          <div className="md:mb-20 lg:mb-14 mb-10 max-w-4xl">
            <h2 className="font-caudex text-2xl sm:text-3xl md:text-4xl text-[#101010] sm:mb-8 mb-2">Overview</h2>
            <p className="font-averia text-sm sm:text-lg md:text-xl leading-relaxed text-[#101010]/80">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Images Section */}
          {Array.isArray(project.images) && project.images.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12 md:mb-20 lg:mb-14 mb-10">
              {project.images.map((img, i) => (
                <div key={i} className="relative w-full aspect-[21/12] overflow-hidden">
                  <Image
                    src={img}
                    alt={`${project.title}-${i}`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>
          )}


          {/* Next / Prev Navigation */}
          <div className="lg:pt-5 lg:pb-10">
            <div className="flex flex-col md:flex-row justify-between">

              {prevSlug ? (
                <Link
                  href={`/project/${prevSlug}`}
                  className="group flex items-center gap-3 font-averia text-sm md:text-base text-[#101010]/60 hover:text-[#101010] transition"
                >
                  <FaArrowLeft />
                  Previous project
                </Link>
              ) : <div />}

              {nextSlug ? (
                <Link
                  href={`/project/${nextSlug}`}
                  className="group ml-auto flex items-center gap-3 font-averia text-lg text-[#101010]/60 hover:text-[#101010] transition"
                >
                  Next project
                  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"
                    className="group-hover:translate-x-1 transition">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : <div />}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
