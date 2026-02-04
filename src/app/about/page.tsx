'use client';

import React from 'react';
import Image from 'next/image';
import Header from '@/Components/Common/Header/page';
import Footer from '@/Components/Common/Footer/page';
import AnimatedButton from '@/Components/Common/AnimatedButton/AnimatedButton';
import { IoIosArrowRoundForward } from 'react-icons/io';

const whatIDoCategories = [
  {
    icon: '✺',
    iconColor: 'text-[#c45c5c]',
    title: 'Custom Web Applications',
    items: [
      'Concept to launch — full product ownership',
      'Tailored to your goals; ongoing support',
    ],
  },
  {
    icon: '✺',
    iconColor: 'text-[#8CC7A6]',
    title: 'Front-End Development',
    items: [
      'Responsive, pixel-perfect UIs',
      'Fast, accessible, SEO-ready',
    ],
  },
  {
    icon: '✺',
    iconColor: 'text-[#4a6fa5]',
    title: 'Back-End & APIs',
    items: [
      'Secure APIs, auth, integrations',
      'Caching & microservices for scale',
    ],
  },
  {
    icon: '✺',
    iconColor: 'text-[#F9A785]',
    title: 'Database & Deployment',
    items: [
      'Schema design, optimization, migrations',
      'Hosting, CI/CD, releases',
    ],
  },
  {
    icon: '✺',
    iconColor: 'text-[#555]',
    title: 'Software and tech',
    items: [
      'Frontend — React, Redux, TypeScript, Angular, Tailwind, MUI, Ant Design',
      'Backend — Node.js, NestJS, Express, GraphQL, Redis, Microservices',
      'Databases — MongoDB, MySQL, PostgreSQL, Sequelize, Mongoose',
      'Cloud & Tools — Docker, GitHub, GitLab, Slack, Cursor, Lovable.dev',
    ],
  },
];

type Experience = { role: string; period: string };

const experiences: Experience[] = [
  { role: 'Team Leader @ Infotechsrealm', period: '2025–Present' },
  { role: 'Senior Full Stack Developer @ WRP Solutions', period: 'Jan 2025 – Dec 2025' },
  { role: 'Junior Frontend Developer @ NopAdvance LLP', period: 'Jun 2024 – Dec 2024' },
  { role: 'Full Stack Developer Intern @ SwickTech Solutions', period: 'Feb 2023 – Jun 2024' },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fcfaf8] pt-24 md:pt-28 pb-16 md:pb-20 relative z-10 border-t border-[#101010]/5 md:rounded-b-[68px] rounded-b-[40px]">
        {/* Subtle vertical grid lines (same as projects page) */}
        <div className="mx-width underlay px-4 sm:px-6 lg:px-8">
          <div className="grid:2 g-wrapper grid">
            <div className="grid:2 grid">
              <div></div>
              <div className="lg:block hidden"></div>
            </div>
            <div className="grid:2 grid">
              <div></div>
              <div className="lg:block hidden"></div>
            </div>
          </div>
        </div>
        <div className="mx-width px-4 sm:px-6 lg:px-8">
          {/* ——— Top section: Image on top (mobile) / left (desktop), content below/right ——— */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5 items-start">
            {/* Portrait image + decorative shapes (top on mobile, left on desktop) */}
            <div className="order-1 lg:sticky lg:top-28 flex justify-center">
              <div className="relative max-w-[300px] sm:max-w-[400px] w-full">
              {/* Decorative: white circle top-left */}
              <div
                className="absolute top-0 left-0 w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white shadow-lg z-10 -translate-x-2 -translate-y-2"
                aria-hidden
              />
              {/* Decorative: green star burst right side */}
              <div
                className="absolute top-[55%] right-0 w-12 h-12 md:w-14 md:h-14 z-10 opacity-90"
                aria-hidden
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#6bcf7f]">
                  <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="currentColor" />
                </svg>
              </div>
              {/* Decorative: pink star bottom-left */}
              <div
                className="absolute bottom-[8%] left-0 w-8 h-8 md:w-10 md:h-10 z-10 opacity-90"
                aria-hidden
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#e8a4b8]">
                  <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="currentColor" />
                </svg>
              </div>
              {/* Image: max-width 400px, height auto */}
              <Image
                src="/img/me_black.png"
                alt="Darshan B. — Full Stack Developer"
                width={500}
                height={533}
                className="w-full h-auto max-w-[300px] sm:max-w-[400px] block mx-auto"
                sizes="(max-width: 1024px) 100vw, 400px"
                priority
              />
              </div>
            </div>

            {/* Intro content (below image on mobile, right on desktop) */}
            <div className="order-2 lg:pl-2">
              <p className="font-averia text-[12px] tracking-[0.2em] uppercase text-[#111] flex items-center gap-2">
                <span className="text-xl">✺</span> About me
              </p>

              <h1 className="font-caudex mt-3 font-normal text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] leading-[1.2] text-[#0f0f0f]">
                Scalable, modern web solutions — full stack expertise.
              </h1>

              <p className="font-averia mt-6 text-xs sm:text-sm md:text-lg leading-relaxed text-[#333]/80 max-w-2xl">
                Hi there! I&apos;m <strong className='text-[#333]'>Darshan B.</strong>, a rising Full Stack Developer passionate about crafting dynamic, scalable, and user-friendly web applications that deliver real business value.
              </p>
              <p className="font-averia mt-4 text-xs sm:text-sm md:text-lg leading-relaxed text-[#333]/80 max-w-2xl">
                With strong expertise across frontend, backend, and database systems, I focus on building modern digital solutions that are reliable, fast, and future-ready. I thrive on solving challenges and turning ideas into production-ready products.
              </p>

              <div className="mt-8">
                <AnimatedButton
                  label="Get my résumé"
                  icon={<IoIosArrowRoundForward size={24} />}
                  onClick={() => window.open('#', '_blank')}
                />
              </div>
            </div>
          </div>

          {/* ——— Design line (5px rounded) ——— */}
          <hr className='mt-12 sm:mt-16 md:mt-20 border-0 border-t border-[#101010]/50'/>

          {/* ——— What I do section: Title on top (mobile) / left (desktop), content below/right ——— */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5 mt-12 sm:mt-16 md:mt-20 items-start">
            <div className="order-1">
              <h2 className="font-caudex font-normal text-2xl md:text-3xl lg:text-4xl text-[#0f0f0f] italic">
                What I do
              </h2>
            </div>
            <div className="order-2 lg:pl-2 mt-6 lg:mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 sm:gap-y-12">
                {whatIDoCategories.map((cat, index) => (
                  <div
                    key={cat.title}
                    className={index === whatIDoCategories.length - 1 ? 'sm:col-span-2' : ''}
                  >
                    <h3 className="font-averia text-xs uppercase tracking-wider text-[#111] font-semibold flex items-center gap-2">
                      <span className={`text-lg ${cat.iconColor}`}>{cat.icon}</span>
                      {cat.title}
                    </h3>
                    <ul className="font-averia text-sm text-[#555] leading-relaxed space-y-1">
                      {cat.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <hr className='mt-12 sm:mt-16 md:mt-20 border-0 border-t border-[#101010]/50'/>

          {/* ——— Experiences: Title on top (mobile) / left (desktop), list below/right ——— */}
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5 mt-16 md:mt-20 items-start">
            <div className="order-1">
              <h2 className="font-caudex font-normal text-2xl md:text-3xl lg:text-4xl text-[#0f0f0f] italic">
                Experiences
              </h2>
            </div>
            <div className="order-2 lg:pl-2 mt-6 lg:mt-0">
              <ul className="space-y-0">
                {experiences.map((exp, index) => (
                  <li
                    key={exp.role}
                    className={`font-averia sm:flex justify-between items-center ${index > 0 ? 'border-t border-[#101010]/15 pt-4 mt-4' : ''}`}
                  >
                    <div className="font-semibold text-[#111] text-sm uppercase tracking-wider">
                      {exp.role}
                    </div>
                    <div className="text-xs text-[#555] mt-0.5">{exp.period}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
