import React from 'react'

const HeroSection = () => {
  return (
    <section id="home" className="bg-black">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-18 md:pb-28">
        <p className="text-[#49de80] font-medium tracking-wide text-sm md:text-base">
          Hi, my name is
        </p>

        <h1 className="mt-5 font-extrabold tracking-tight text-5xl leading-[1.1] text-slate-200 md:text-7xl">
          Shadab Husain
        </h1>

        <h2 className="mt-5 font-extrabold tracking-tight text-3xl leading-tight text-[#8792b0] md:text-6xl">
          Building the web, better.
        </h2>

        <p className="mt-8 max-w-3xl text-[20px] leading-8 text-[#8792b0]">
          Innovating the web with purpose and precision. As a full-stack engineer,
          I create accessible, user-friendly digital experiences that leave a lasting
          impact.
        </p>

        <div className="mt-12">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border border-[#49de80] px-6 py-3 text-[17px] font-semibold text-[#49de80] shadow-sm
             hover:bg-[#0b1119]/80 hover:shadow-lg active:translate-y-0 active:shadow-md transition-all duration-300 focus:outline-none 
            "
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection


