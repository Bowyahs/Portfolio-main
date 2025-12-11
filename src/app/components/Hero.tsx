
// src/app/components/Hero.tsx
import { Playfair_Display, Dancing_Script } from 'next/font/google'

// 1. Load the "Classy" Serif font for the intro
const playfair = Playfair_Display({ subsets: ['latin'] })

// 2. Load the "Stylish" Script font for your name
const dancingScript = Dancing_Script({ subsets: ['latin'], weight: ['700'] })

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center bg-black text-white relative overflow-hidden px-4">
      
      {/* Optional: Subtle background glow for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-3xl">
        
        {/* Small Intro */}
        <p className="text-gray-400 text-sm md:text-base uppercase tracking-[0.2em] mb-4">
          Welcome to my Portfolio
        </p>

        {/* Main Heading - Mixed Fonts */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          {/* "Hi, I'm" in Classy Serif */}
          {/* <span className={playfair.className}>Hi, I'm </span> */}
          
          {/* "Bhavya" in Stylish Script */}
          <span className={`${dancingScript.className} text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 ml-2`}>
            Hi, I'm Bhavya.
          </span>
        </h1>

        {/* Funny / Witty Description (Kept exactly as you liked) */}
        <div className="text-xl md:text-2xl text-gray-300 mb-2 font-light">
          <p>Software Developer</p>
          {/* <p className="mt-1">
            <span className="text-white font-normal italic">Professional Google Searcher</span> by night.
          </p> */}
        </div>
        
        <p className="text-gray-500 text-sm mt-4 mb-12 italic">
          (I write code that works.. eventually!)
        </p>

        {/* Buttons (Kept exactly as you liked) */}
        <div className="flex justify-center space-x-6">
          <a
            href="/projects"
            className="border border-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition duration-300"
          >
            View Projects
          </a>
          <a
            href="/Resume.pdf" 
            target="_blank" 
            className="border border-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition duration-300"
          >
            View Resume
          </a>
        </div>

      </div>
    </section>
  );
}