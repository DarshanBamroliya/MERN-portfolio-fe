'use client';
import React from 'react';
import AnimatedButton from '../../Common/AnimatedButton/AnimatedButton';
import { IoIosArrowRoundForward } from 'react-icons/io';

function AboutUs() {
  return (
    <section id="about" className="md:py-20 py-10 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100 rounded-b-[68px] relative z-1">
      <div className="mx-auto grid grid-cols-12 gap-6 md:gap-8 pb-14">
        <div className="col-span-12 lg:col-span-2">
          <div className="mb-6 lg:mb-0">
            <span className="font-averia text-[12px] tracking-[0.25em] uppercase text-[#111]"><span data-gsap="slidein" data-gsap-dur="0.75">✺</span>About Me</span>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-10">
          <h2 className="font-caudex font-normal lg:text-[44px] md:text-[34px] sm:text-[20px] text-[18px] leading-[1.15] text-[#0f0f0f]">
            I’m a <span className="italic">MERN</span> full‑stack developer crafting fast, accessible,
            and scalable web apps — from clean UI to reliable, production‑ready APIs.
          </h2>

          <p className="font-averia md:text-lg sm:text-sm text-[12px] md:leading-7 sm:leading-5 leading-4 text-[#333] md:mt-6 mt-4 max-w-3xl">
          I turn product ideas into exceptional digital experiences using modern React patterns, TypeScript, and Node.js. I’m passionate about performance, accessibility, and writing maintainable code that teams love to build, ship, and scale.
          </p>

          <div className="md:mt-8 mt-6">
            <div className="marquee">
              <div className="marquee__content">
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">React.js</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">Next.js</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">Redux / Redux-Saga</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">HTML5</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">Tailwind CSS</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">JavaScript (ES6+)</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">TypeScript</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">Angular</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">Node.js</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">Express.js</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">NestJS</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">Redis</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">Microservices</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">GraphQL</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">REST API</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">JWT Auth</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">MongoDB / Mongoose</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">MySQL</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">PostgreSQL</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">Sequelize ORM</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">GitHub</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">GitLab</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">Slack</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">ChatGPT</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">Cursor</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">Lovable.dev</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">GitHub Copilot</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">SaaS</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">Docker</span>
              </div>
              <div className="marquee__content" aria-hidden="true">
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">React.js</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">Next.js</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">Redux / Redux-Saga</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">HTML5</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">Tailwind CSS</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">JavaScript (ES6+)</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">TypeScript</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">Angular</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">Node.js</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">Express.js</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">NestJS</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">Redis</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">Microservices</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">GraphQL</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">REST API</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">JWT Auth</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">MongoDB / Mongoose</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">MySQL</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">PostgreSQL</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">Sequelize ORM</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">GitHub</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">GitLab</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">Slack</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">ChatGPT</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">Cursor</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">Lovable.dev</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">GitHub Copilot</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">SaaS</span>
                <span className="px-3 py-1 rounded-full border border-gray-200 text-[#222] font-averia text-[12px]">Docker</span>
              </div>
            </div>
          </div>


          <div className="flex items-center gap-4 md:mt-10 mt-7">
            <AnimatedButton
              label="More About Me"
              icon={<IoIosArrowRoundForward size={24} />}
              onClick={() => {
                console.log('More About Me clicked');
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;


