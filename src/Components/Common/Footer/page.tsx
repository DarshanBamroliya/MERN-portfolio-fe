"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

function Footer() {
  const [now, setNow] = useState("");
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const update = () => {
      const formatter = new Intl.DateTimeFormat(undefined, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setNow(formatter.format(new Date()));
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-black text-white sticky bottom-0 w-full overflow-hidden md:min-h-[80vh] min-h-[60vh] flex flex-col justify-between py-5">
      <div className="flex flex-col justify-evenly items-center md:h-[70vh] h-[50vh]">
        <div className="font-averia uppercase text-sm">
          Have a project in mind?
        </div>

        <div className="mt-3 text-center">
          <p className="font-bodoni-moda lg:text-8xl md:text-7xl sm:text-5xl text-3xl -tracking-[1px]">
            LET’S CREATE <br /> GREAT THINGS <i>together.</i>
          </p>
        </div>

        {/* ✅ Smooth Email Button Animation */}
        <div className="mt-6">
          <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => (window.location.href = "mailto:darshan.b@gmail.com")}
            className={`relative overflow-hidden border border-white md:px-10 md:py-5 px-8 py-3 rounded-full text-sm flex items-center gap-2 transition-colors duration-500 ${
              hovered ? "text-black" : "text-white"
            }`}
          >
            <span className="relative z-10">darshan.b@gmail.com</span>
            <IoIosArrowRoundForward size={24} className="relative z-10" />

            {/* Animated white fill */}
            <span
              className={`absolute top-0 left-0 h-full bg-white transition-all duration-500 ease-in-out origin-left ${
                hovered ? "w-full" : "w-0"
              }`}
            ></span>
          </button>
        </div>
      </div>

      <div className="border-t border-[color:var(--bg)]/15">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="mx-auto max-w-6xl flex items-center justify-between gap-4 text-[12px] font-averia">
            <span>✽ Gujarat, India</span>
            <span>{now}</span>
            <div className="flex items-center gap-6">
              <Link
                href="https://www.linkedin.com/in/darshanbamroliya/"
                target="_blank"
                className="opacity-90 hover:opacity-100"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/darshanbamroliya"
                target="_blank"
                className="opacity-90 hover:opacity-100"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
