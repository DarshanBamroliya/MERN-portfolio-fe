'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/Components/Common/Header/page';
import Footer from '@/Components/Common/Footer/page';
import AnimatedButton from '@/Components/Common/AnimatedButton/AnimatedButton';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { FaLinkedinIn, FaGithub, FaBriefcase } from 'react-icons/fa';

const contactDetails = [
  {
    icon: HiOutlineMail,
    label: 'Email',
    value: 'darshanbamroliya455@gmail.com',
    href: 'mailto:darshanbamroliya455@gmail.com',
  },
  {
    icon: HiOutlinePhone,
    label: 'Phone',
    value: '+91 7575033809',
    href: 'tel:+917575033809',
  },
  {
    icon: HiOutlineLocationMarker,
    label: 'Address',
    value: 'Surat, Gujarat 394101, India',
    href: 'https://www.google.com/maps/search/Surat',
  },
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/darshanbamroliya/', icon: FaLinkedinIn },
  { name: 'GitHub', href: 'https://github.com/darshanbamroliya', icon: FaGithub },
  { name: 'Upwork', href: 'https://www.upwork.com/freelancers/~0149bcb56ba69bef66?mp_source=share', icon: FaBriefcase },
  { name: 'Fiverr', href: 'https://www.fiverr.com/s/yvQYWRG', icon: FaBriefcase },
];

const cardBaseClasses =
  'relative overflow-hidden border border-[#101010]/20 rounded-2xl flex items-center gap-4 p-5 font-averia transition-colors duration-500';

function SocialLinkCard({
  href,
  name,
  icon: Icon,
}: {
  href: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  const [hovered, setHovered] = useState(false);
  const [leave, setLeave] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    setLeave(false);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setLeave(true);
    setTimeout(() => setLeave(false), 500);
  };

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${cardBaseClasses}
        ${hovered ? 'text-[#fcfaf8]' : 'text-[#111]'}
        ${hovered ? 'button-bg-hover' : ''}
        ${leave ? 'button-bg-leave' : ''}`}
    >
      <span className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#101010]/10">
        <Icon className="w-5 h-5" aria-hidden />
      </span>
      <span className="relative z-10 text-sm font-medium">{name}</span>
    </Link>
  );
}

const contactCardBaseClasses =
  'relative overflow-hidden border border-[#101010]/20 rounded-2xl flex items-center gap-4 p-5 font-averia text-[#111]';

function ContactDetailCard({
  label,
  value,
  href,
  icon: Icon,
}: {
  label: string;
  value: string;
  href: string | null;
  icon: React.ComponentType<{ className?: string }>;
}) {
  const cardContent = (
    <>
      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#101010]/10 flex-shrink-0">
        <Icon className="w-5 h-5" aria-hidden />
      </span>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-wider text-[#555] font-semibold">
          {label}
        </div>
        <div className="text-sm font-medium text-[#111] mt-0.5 break-all">
          {value}
        </div>
      </div>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={contactCardBaseClasses}
      >
        {cardContent}
      </Link>
    );
  }

  return <div className={contactCardBaseClasses}>{cardContent}</div>;
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fcfaf8] pt-24 md:pt-28 pb-16 md:pb-20 relative z-10 border-t border-[#101010]/5 md:rounded-b-[68px] rounded-b-[40px]">
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
          {/* Get in touch */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-0 items-start">
            <div className="order-1 relative">
              <div
                className="absolute -top-2 -left-2 w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-[#101010]/8 z-0"
                aria-hidden
              />
              <p className="font-averia text-[12px] tracking-[0.2em] uppercase text-[#111] flex items-center gap-2 relative z-10">
                <span className="text-xl text-[#c45c5c]">✺</span> Contact
              </p>
              <h1 className="font-caudex mt-3 font-normal text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] leading-[1.2] text-[#0f0f0f] italic relative z-10">
                Get in touch
              </h1>
            </div>
            <div className="order-2 lg:pl-2 mt-6 lg:mt-0">
              <p className="font-averia text-xs sm:text-sm md:text-base leading-relaxed text-[#333]/80 max-w-xl">
                Have a project in mind or want to collaborate? Reach out via email, phone, or connect on LinkedIn, GitHub, Upwork, or Fiverr.
              </p>
              <div className="mt-8">
                <AnimatedButton
                  label="Email me"
                  icon={<IoIosArrowRoundForward size={24} />}
                  onClick={() => window.open('mailto:darshanbamroliya455@gmail.com', '_self')}
                />
              </div>
            </div>
          </div>

          <hr className="mt-14 sm:mt-20 md:mt-24 border-0 border-t border-[#101010]/20" />

          {/* Contact details — theme accent strips + ✺ */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 mt-14 sm:mt-20 md:mt-24 items-start">
            <div className="order-1">
              <p className="font-averia text-[12px] tracking-[0.2em] uppercase text-[#111] flex items-center gap-2">
                <span className="text-xl text-[#4a6fa5]">✺</span> Details
              </p>
              <h2 className="font-caudex font-normal text-2xl md:text-3xl lg:text-4xl text-[#0f0f0f] italic mt-2">
                Contact details
              </h2>
            </div>
            <div className="order-2 lg:pl-2 sm:mt-8 lg:mt-0">
              <div className="grid grid-cols-1 gap-4">
                {contactDetails.map((item) => (
                  <ContactDetailCard
                    key={item.label}
                    label={item.label}
                    value={item.value}
                    href={item.href}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
          </div>

          <hr className="mt-14 sm:mt-20 md:mt-24 border-0 border-t border-[#101010]/20" />

          {/* Find me online */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 mt-14 sm:mt-20 md:mt-24 items-start">
            <div className="order-1">
              <p className="font-averia text-[12px] tracking-[0.2em] uppercase text-[#111] flex items-center gap-2">
                <span className="text-xl text-[#F9A785]">✺</span> Profiles
              </p>
              <h2 className="font-caudex font-normal text-2xl md:text-3xl lg:text-4xl text-[#0f0f0f] italic mt-2">
                Find me online
              </h2>
            </div>
            <div className="order-2 lg:pl-2 smLmt-8 lg:mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                  <SocialLinkCard
                    key={link.name}
                    href={link.href}
                    name={link.name}
                    icon={link.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
