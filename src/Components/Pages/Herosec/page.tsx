'use client';
import AnimatedButton from '../../Common/AnimatedButton/AnimatedButton';
import Image from 'next/image';
import React from 'react';
import { FaAsterisk } from "react-icons/fa6";

function HeroSec() {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight, // 100vh
      behavior: 'smooth',
    });
  };

  return (
    <div className='relative w-full sm:h-screen h-[70vh] overflow-hidden z-1'>
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src="/img/home-video.mp4" type="video/mp4"/>
      </video>
      <div className="hero-overlay" />
      <section className="absolute top-0 right-0 left-0 sm:mt-0 mt-8 h-full w-full flex items-center justify-center">
        {/* Background video */}

        <div className='flex flex-col items-center justify-center relative w-full'>
          <div className='text-center w-full flex flex-col items-center absolute md:-top-2 -top-1'>
            <FaAsterisk className='text-4xl sm:text-5xl md:text-6xl' />
            <div className='mt-6 sm:mt-10 px-2'>
              <h1 className="font-open-sans font-[600] leading-[1] text-4xl sm:text-5xl md:text-7xl xl:text-[15vh]">We create Feelings.</h1>
            </div>
          </div>
          {/* Profile Image */}
          <Image
            src="/img/me.jpg"
            alt="Profile"
            width={301}
            height={432}
            className="object-cover mt-4 sm:mt-6 w-40 sm:w-60 md:w-[301px] h-auto"
            style={{ borderRadius: '150px 150px 0 0' }}
          />

          <p className="text-base sm:text-lg md:text-xl lg:pt-4 md:pt-2 font-averia tracking-wider font-bold mt-1 sm:mt-2">
            <span className='tracking-[5]'>MERN</span> Stack Developer
          </p>

          {/* Scroll Button */}
          <AnimatedButton className="mt-4 lg:mt-6 md:mt-3 sm:mt-6" onClick={handleScrollDown} />
        </div>
      </section>
    </div>
  );
}

export default HeroSec;
