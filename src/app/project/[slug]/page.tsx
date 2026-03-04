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
      <main className="min-h-screen bg-[#fcfaf8] pt-20 md:pt-28 pb-20 relative z-10 md:rounded-b-[68px] rounded-b-[40px]">
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
          <div className="mb-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-averia text-sm md:text-base text-[#101010]/60 hover:text-[#101010] transition group"
            >
              <FaArrowLeft />
              Back to Projects
            </Link>
          </div>

          <h1 className="font-caudex text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#101010] md:mb-10 mb-4 leading-tight">
            {project.title}
          </h1>
          {/* HERO SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-12 md:gap-12 gap-8 lg:mb-20 md:mb-16 mb-6">
            <div className="md:col-span-5 order-2 md:order-1">
              {/* Meta Section - Matching Reference */}
              <div className="w-full">

                {/* Year */}
                {project.year && (
                  <div className="flex py-6 border-b border-[#101010]">
                    <h3 className="uppercase w-[50%] text-xs sm:text-sm md:text-normal tracking-wider text-[#101010] font-medium">
                      Year
                    </h3>
                    <p className="text-xs sm:text-sm md:text-normal text-[#101010] font-averia w-[50%] text-end">
                      {project.year}
                    </p>
                  </div>
                )}

                {/* Client */}
                {project.client && (
                  <div className="flex py-6 border-b border-[#101010]">
                    <h3 className="uppercase w-[50%] text-xs sm:text-sm md:text-normal tracking-wider text-[#101010]/80 font-medium">
                      Client
                    </h3>
                    <p className="text-xs sm:text-sm md:text-normal text-[#101010] font-averia w-[50%] text-end">
                      {project.client}
                    </p>
                  </div>
                )}

                {/* Role */}
                {project.role && (
                  <div className="flex py-6 border-b border-[#101010]">
                    <h3 className="uppercase w-[50%] text-xs sm:text-sm md:text-normal tracking-wider text-[#101010]/80 font-medium">
                      Role
                    </h3>
                    <p className="text-xs sm:text-sm md:text-normal text-[#101010] font-averia w-[50%] text-end">
                      {project.role}
                    </p>
                  </div>
                )}

                {/* Technologies */}
                {Array.isArray(project.technologies) && project.technologies.length > 0 && (
                  <div className="flex py-6 border-b border-[#101010]">
                    <h3 className="uppercase w-[50%] text-xs sm:text-sm md:text-normal tracking-wider text-[#101010]/80 font-medium">
                      Technologies
                    </h3>
                    <p className="text-xs sm:text-sm md:text-normal text-[#101010] font-averia w-[50%] text-end">
                      {project.technologies.join(', ')}
                    </p>
                  </div>
                )}

                {/* Playstore Link */}
                {project.playstoreLink && (
                  <div className="flex py-6 border-b border-[#101010]">
                    <h3 className="uppercase w-[50%] text-xs sm:text-sm md:text-normal tracking-wider text-[#101010]/80 font-medium">
                      Play Store
                    </h3>
                    <a
                      href={project.playstoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm md:text-normal text-[#101010] font-averia hover:underline text-end w-[50%]"
                    >
                      Download App
                    </a>
                  </div>
                )}

                {/* App Store Link */}
                {project.appStoreLink && (
                  <div className="flex py-6 border-b border-[#101010]">
                    <h3 className="uppercase w-[50%] text-xs sm:text-sm md:text-normal tracking-wider text-[#101010]/80 font-medium">
                      App Store
                    </h3>
                    <a
                      href={project.appStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm md:text-normal text-[#101010] font-averia hover:underline text-end w-[50%]"
                    >
                      Download App
                    </a>
                  </div>
                )}

                {/* Website Link */}
                {project.webLink && (
                  <div className="flex py-6 border-b border-[#101010]">
                    <h3 className="uppercase w-[50%] text-xs sm:text-sm md:text-normal tracking-wider text-[#101010]/80 font-medium">
                      Website
                    </h3>
                    <a
                      href={project.webLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm md:text-normal text-[#101010] font-averia hover:underline text-end w-[50%]"
                    >
                      {project.webLink.replace('https://', '').replace('http://', '').replace('www.', '').replace(/\/$/, '')}
                    </a>
                  </div>
                )}

                {/* Admin Link */}
                {project.adminLink && (
                  <div className="flex py-6 border-b border-[#101010]">
                    <h3 className="uppercase w-[50%] text-xs sm:text-sm md:text-normal tracking-wider text-[#101010]/80 font-medium">
                      Admin Panel
                    </h3>
                    <a
                      href={project.adminLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm md:text-normal text-[#101010] font-averia hover:underline text-end w-[50%]"
                    >
                      {project.adminLink.replace('https://', '').replace('http://', '').replace('www.', '').replace(/\/$/, '')}
                    </a>
                  </div>
                )}

                {/* API Link */}
                {project.apiLink && (
                  <div className="flex py-6 border-b border-[#101010]">
                    <h3 className="uppercase w-[50%] text-xs sm:text-sm md:text-normal tracking-wider text-[#101010]/80 font-medium">
                      API
                    </h3>
                    <a
                      href={project.apiLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm md:text-normal text-[#101010] font-averia hover:underline text-end w-[50%]"
                    >
                      {project.apiLink.replace('https://', '').replace('http://', '').replace('www.', '').replace(/\/$/, '').replace('#', '')}
                    </a>
                  </div>
                )}

                {/* Other Web Links */}
                {Array.isArray(project.webLinks) && project.webLinks.length > 0 && (
                  <div className="flex py-6 border-b border-[#101010]">
                    <h3 className="uppercase w-[50%] text-xs sm:text-sm md:text-normal tracking-wider text-[#101010]/80 font-medium">
                      Other Links
                    </h3>
                    <div className="flex flex-col gap-1 items-end text-end w-[50%]">
                      {project.webLinks.map((link, i) => (
                        <a
                          key={i}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs sm:text-sm md:text-normal text-[#101010] font-averia hover:underline truncate w-full text-right"
                        >
                          {link.replace('https://', '').replace('http://', '').replace('www.', '').replace(/\/$/, '')}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Hero Image */}
            <div className="md:col-span-7 order-1 md:order-2">
              {project.image && (
                <div className="relative h-full min-h-[250px] sm:min-h-[300px] xl:min-h-[450px] border border-black/5 shadow-sm flex justify-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}   // adjust as needed
                    height={800}  // adjust as needed
                    className="h-full w-auto object-contain"
                    priority
                  />
                </div>
              )}
            </div>
          </div>

          {/* Features Section */}
          {Array.isArray(project.features) && project.features.length > 0 && (
            <div className="mb-10 sm:mb-16 md:mb-24">
              <h2 className="font-caudex 
                   text-xl 
                   sm:text-2xl 
                   md:text-4xl 
                   text-[#101010] 
                   mb-4 md:mb-8">
                Key Features
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {project.features.map((feature, i) => (
                  <div
                    key={i}
                    className="p-3 sm:p-6 
                     border border-[#101010]/10 
                     bg-white/50 
                     rounded-lg sm:rounded-xl"
                  >
                    <p className="font-averia 
                        text-xs 
                        sm:text-sm 
                        md:text-lg 
                        text-[#101010]">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Overview */}
          <div className="mb-8 sm:mb-14 md:mb-20 lg:mb-14 max-w-4xl">
            <h2 className="font-caudex 
                 text-xl 
                 sm:text-2xl 
                 md:text-4xl 
                 text-[#101010] 
                 mb-3 sm:mb-6 md:mb-8">
              About the Project
            </h2>

            <p className="font-averia 
                text-xs 
                sm:text-base 
                md:text-md
                leading-relaxed 
                tracking-wide 
                text-[#101010]/80 
                whitespace-pre-line">
              {project.fullDescription || project.description}
            </p>
          </div>

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
