// // src/app/components/Contact.tsx
// export default function Contact() {
//   return (
//     <section id="contact" className="min-h-screen text-white bg-black px-6 py-20 flex flex-col items-center">
//       <h1 className="text-5xl font-bold mb-12">Contact Me</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl w-full">
//         {/* Left side: phone/email */}
//         <div className="flex flex-col gap-6 text-lg">
//           <div className="flex items-center gap-4"><span className="text-3xl">📞</span><p className="text-xl">+1 (555) 123-4567</p></div>
//           <div className="flex items-center gap-4"><span className="text-3xl">📧</span><p className="text-xl">bhavya@email.com</p></div>
//         </div>
//         {/* Right side: social */}
//         <div className="flex flex-col gap-6">
//           <h2 className="text-2xl font-semibold mb-2">Find me online</h2>
//           <div className="flex gap-8 text-5xl">
//             <a href="https://github.com/yourusername" target="_blank" className="hover:text-gray-400 transition"><i className="devicon-github-original"></i></a>
//             <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-blue-400 transition"><i className="devicon-linkedin-plain"></i></a>
//             <a href="https://instagram.com/yourusername" target="_blank" className="hover:text-pink-400 transition"><i className="devicon-instagram-original"></i></a>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }



// src/app/components/Contact.tsx
export default function Contact() {
  return (
    <section id="contact" className="min-h-screen text-white bg-black px-6 py-20 flex flex-col justify-center items-center">
      
      {/* Main Title */}
      <h1 className="text-6xl mb-20">Contact Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 max-w-5xl w-full">
        
        {/* Left Column: Phone & Email */}
        <div className="flex flex-col gap-12">
            
          {/* Phone Section */}
          <div>
            <h2 className="text-3xl text-gray-200 mb-4">Phone Number</h2>
            <div className="flex items-center gap-3 text-gray-400">
              <span className="text-2xl">📱</span>
              <p className="text-xl tracking-wide">+1 (850) 966-2274</p>
            </div>
          </div>

          {/* Email Section */}
          <div>
            <h2 className="text-3xl text-gray-200 mb-4">Email</h2>
            <div className="flex items-center gap-3 text-gray-400">
              <span className="text-2xl">📧</span>
              <p className="text-xl tracking-wide">hsbhavya83@gmail.com</p>
            </div>
          </div>

        </div>

        {/* Right Column: Socials */}
        <div>
          {/* Social Network Section */}
          <div>
            <h2 className="text-3xl text-gray-200 mb-6">Social Network</h2>
            <div className="flex gap-6 text-4xl text-gray-400 items-center">
              
              {/* LinkedIn (Devicon) */}
              <a href="https://linkedin.com/in/bhavyahs" target="_blank" className="hover:text-white transition duration-300">
                <i className="devicon-linkedin-plain"></i>
              </a>

              {/* Instagram (SVG Fix) */}
              <a href="https://instagram.com/bowyuhh" target="_blank" className="hover:text-white transition duration-300 flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="36" 
                  height="36" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* GitHub (Devicon) */}
              <a href="https://github.com/bowyahs" target="_blank" className="hover:text-white transition duration-300">
                <i className="devicon-github-original"></i>
              </a>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}