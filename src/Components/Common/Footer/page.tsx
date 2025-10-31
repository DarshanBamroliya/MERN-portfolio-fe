"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

function Footer() {
  const [now, setNow] = useState<string>("")

  useEffect(() => {
    const update = () => {
      const formatter = new Intl.DateTimeFormat(undefined, {
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: false,
      })
      setNow(formatter.format(new Date()))
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <footer className="z-0 overflow-hidden bg-[var(--fg)] text-[var(--bg)] rounded-t-[48px] md:rounded-t-[72px] lg:rounded-t-[96px]">
      <div className="px-4 sm:px-6 lg:px-8 md:py-20 py-12">
        <div className="mx-auto max-w-6xl text-center">
          <p className="font-averia text-[12px] tracking-[0.25em] uppercase opacity-80 mb-4">Have a project in mind?</p>
          <h3 className="font-caudex font-normal lg:text-[72px] md:text-[52px] text-[32px] leading-[1.05]">
            LET’S CREATE <span className="italic">GREAT THINGS</span> together.
          </h3>
          <div className="mt-8">
            <Link href="mailto:darshanbamroliya455@gmail.com" className="inline-flex items-center justify-center rounded-full border border-[color:var(--bg)]/40 px-6 py-3 font-averia text-sm hover:bg-[var(--bg)] hover:text-[var(--fg)] transition-colors">
              darshanbamroliya@gmail.com
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-[color:var(--bg)]/15">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="mx-auto max-w-6xl flex items-center justify-between gap-4 text-[12px] font-averia">
            <span>✽ Gujrat, India</span>
            <span>{now}</span>
            <div className="flex items-center gap-6">
              <Link href="https://www.linkedin.com/in/darshanbamroliya/" target='_blank' className="opacity-90 hover:opacity-100">LinkedIn</Link>
              <Link href="https://github.com/darshanbamroliya" target='_blank' className="opacity-90 hover:opacity-100">GitHub</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer