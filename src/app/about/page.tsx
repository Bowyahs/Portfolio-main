// src/app/components/About.tsx
import { Playfair_Display } from 'next/font/google'

// Load the classy font just for the header
const playfair = Playfair_Display({ subsets: ['latin'] })

export default function About() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-black text-white">
      <div className="max-w-3xl space-y-8 text-lg leading-relaxed text-gray-300">
        
        {/* Header with Classy Font & Emoji */}
        <p className={`${playfair.className} text-4xl md:text-5xl font-bold text-white mb-4`}>
          Hey! I’m Bhavya <span className="animate-pulse">👋</span>
        </p>

        <p>
          My journey into the tech world started in 2021, fresh out of undergrad in India.
          I joined Infosys and quickly realized that full-stack development was where the magic happens; 
          writing backend logic ⚙️, debugging tricky code, and collaborating in Agile teams was extremely challenging and kinda addictive.
        </p>

        <p>
          Fast forward a bit: packed my bags for the U.S. 🇺🇸 to get my Master’s at FSU. 🎓
          Spent a lot of time there not just studying, but working as Graduate Teaching Assistant (honestly, teaching is the best way to learn). Also got to ship some real features during my internship at Datamaxx, which was a total highlight. ✨
        </p>

        <p>
          Right now, I’m on the lookout for a full-time role 💼 where I can own projects, break and fix real-world problems, and grow with a passionate team. 
          Startups excite me too; the fast pace, the energy, and the steep learning curve all make the journey even more rewarding. 🚀
        </p>

        <p>
          When I am not at the computer, you’ll probably find me experimenting with food in the kitchen 🍳, 
          or getting lost on sitcom marathons. I love going out for absolutely no reason - aka "shopping therapy" 🛍️ even when my cart is empty.
          I am also obsessed with driving, though reverse parking w/o a camera? Let's just say it's an ongoing chaos. 🚗💨
        </p>
      </div>
    </section>
  );
}