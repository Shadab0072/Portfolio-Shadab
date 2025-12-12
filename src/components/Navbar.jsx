import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 w-full bg-black">
      <nav className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          
          {/* Left: Logo */}
          <a href="#home" className="inline-flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-[#2F3640] ring-2 ring-[#A0A7B8] grid place-items-center">
              <span className="text-white text-lg font-extrabold tracking-tight">SH</span>
            </div>
          </a>


            <div className='flex items-center gap-9'>

                {/* Center: Links */}
                <ul className="hidden md:flex items-center gap-9">
                        {[
                          { label: 'Home', href: '#' },
                          { label: 'About', href: '#about' },
                          { label: 'Skills', href: '#skills' },
                          { label: 'Projects', href: '#projects' },
                          { label: 'Contact', href: '#contact' }
                        ].map((item) => (
                          <li key={item.label}>
                            <a
                              href={item.href}
                              className="relative inline-block group text-[#94A3B8] hover:text-[#49de80] transition-colors text-[14px]"
                            >
                              {item.label}
                              <span
                                aria-hidden="true"
                                className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#49de80] transition-all duration-500 group-hover:w-full"
                              />
                            </a>
                          </li>
                        ))}
                      </ul>

                      {/* Right: Resume Button */}
                      <div className="hidden md:flex items-center">
                        <a
                          href="https://drive.google.com/file/d/1YxtYeORtatLdRDDOrQhFbIK4YxDRaaUl/view?usp=drive_link"
                          className="inline-flex items-center justify-center rounded-md bg-[#49de80] px-4 py-1.5 text-[17px] font-semibold text-black shadow-sm hover:brightness-95 
                           hover:shadow-lg hover:bg-[#3fd173] active:translate-y-0 active:shadow-md transition-all duration-300 focus:outline-none"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Resume
                        </a>
                      </div>

            </div>

            {/* Mobile: Hamburger Button */}
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[#94A3B8] hover:text-white hover:bg-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#4ADE80]"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <span className="sr-only">Toggle menu</span>
              <AnimatePresence initial={false} mode="wait">
                {isOpen ? (
                  <motion.span
                    key="icon-close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex"
                  >
                    <X size={24} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="icon-menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex"
                  >
                    <Menu size={24} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

        </div>
        {/* Desktop: Floating Social + Email rails */}
        <div className="hidden md:block">
          {/* Left social rail */}
          <div className="fixed bottom-0 left-14 z-[9999] flex flex-col items-center gap-6">
            <ul className="flex flex-col items-center gap-6 text-[#94A3B8]">
              <li>
                <a href="https://github.com/Shadab0072" target="_blank" rel="noreferrer" className="hover:text-[#49de80] transition-colors">
                  <FaGithub size={22} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/shadab-husain-5307b8231/" target="_blank" rel="noreferrer" className="hover:text-[#49de80] transition-colors">
                  <FaLinkedin size={22} />
                </a>
              </li>
              
            </ul>
            <div className="h-32 w-[2px] bg-[#94A3B8]/40" />
          </div>

          {/* Right email rail */}
          {/* <div className="fixed bottom-0 right-6 z-[9999] flex flex-col items-center">
            <a
              href="mailto:shadab223382@gmail.com"
              className="mb-6 text-sm tracking-[0.35em] text-[#94A3B8] hover:text-[#49de80] transition-colors rotate-90 origin-bottom-right"
            >
              shadab223382@gmail.com
            </a>
            <div className="h-32 w-[2px] bg-[#94A3B8]/40" />
          </div> */}
        </div>
        {/* Mobile: Right-side full-height drawer */}
        <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 bg-black/50 md:hidden z-40"
              onClick={() => setIsOpen(false)}
            />
            {/* Drawer */}
            <motion.aside
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.2 }}
              className="fixed top-0 right-0 h-screen w-72 max-w-[85vw] bg-[#111826] md:hidden z-50 border-l border-[#1f2937] shadow-xl flex flex-col"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center justify-between h-20 px-4 border-b border-[#1f2937]">
                <h1 className='text-white text-xl font-semibold '>Menu</h1>
                <button
                  className="inline-flex items-center justify-center rounded-md p-2 text-[#94A3B8] hover:text-white hover:bg-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#4ADE80]"
                  aria-label="Close menu"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col h-full">
                <nav className="flex flex-col gap-2 px-3 py-5">
                  <a
                    href="https://drive.google.com/drive/folders/1qWjIAnBUFOqjwvo7SxkB-Xps0Ioerj0O?usp=drive_link"
                    className="block w-full text-center rounded-md bg-[#49de80] px-4 py-2 text-[16px] font-semibold text-black shadow-sm hover:brightness-95 hover:shadow-lg hover:bg-[#3fd173] active:translate-y-0 active:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#4ADE80]"
                    onClick={() => setIsOpen(false)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Resume
                  </a>
                  {[
                    { label: 'Home', href: '#' },
                    { label: 'About', href: '#about' },
                    { label: 'Skills', href: '#skills' },
                    { label: 'Projects', href: '#projects' },
                    { label: 'Contact', href: '#contact' }
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-[#94A3B8] hover:text-white hover:bg-[#111827] transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </motion.aside>
          </>
        )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Navbar
