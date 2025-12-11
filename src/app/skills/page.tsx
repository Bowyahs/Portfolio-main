export default function Skills() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-12">Skills</h1>

      {/* Triangle layout */}
      <div className="flex flex-col items-center gap-10 w-full max-w-5xl">

        {/* Row 1: Frontend + Backend */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">

          {/* FRONTEND */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition">
            <h2 className="text-2xl font-semibold mb-4 text-center">Frontend</h2>
            
            <div className="flex flex-wrap gap-3 justify-center">
              <SkillItem name="HTML" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
<SkillItem name="Tailwind CSS" logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />              <SkillItem name="JavaScript" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
              <SkillItem name="React" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
              <SkillItem name="Next.js" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
            </div>
          </div>

          {/* BACKEND */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition">
            <h2 className="text-2xl font-semibold mb-4 text-center">Backend</h2>

            <div className="flex flex-wrap gap-3 justify-center">
              <SkillItem name="Java" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
              <SkillItem name="Spring Boot" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" />
              <SkillItem name="Node.js" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
              <SkillItem name="Express.js" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
              <SkillItem name="SQL" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
            </div>
          </div>

        </div>

        {/* Row 2: Tools (smaller box) */}
        <div className="w-full flex justify-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-center">Tools</h2>

            <div className="flex flex-wrap gap-3 justify-center">
              <SkillItem name="Git" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
              <SkillItem name="GitHub" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
              <SkillItem name="VS Code" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
              <SkillItem name="Postman" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" />
              <SkillItem name="Docker" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* Small badge with smaller logos */
function SkillItem({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex flex-col items-center bg-gray-900 px-4 py-2 rounded-lg shadow hover:bg-gray-700 transition cursor-pointer">
      <img src={logo} alt={name} className="w-8 h-8" /> {/* smaller icon */}
      <p className="mt-1 text-sm">{name}</p>
    </div>
  );
}
