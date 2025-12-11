export default function Projects() {
  const projectList = [
    {
      name: "Mini Amazon Clone",
      description: "A small e-commerce frontend built with React and TailwindCSS.",
      tech: "React, TailwindCSS, JavaScript",
      github: "#",
      demo: "#",
    },
    {
      name: "Blog App",
      description: "A full-stack blog application with user authentication and CRUD operations.",
      tech: "Next.js, Node.js, MongoDB",
      github: "#",
      demo: "#",
    },
    // Add more projects here
  ];

  return (
    <section className="min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-12">Projects</h1>

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectList.map((project, idx) => (
          <div
            key={idx}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            <h2 className="text-2xl font-semibold">{project.name}</h2>
            <p className="mt-2 text-gray-300">{project.description}</p>
            <p className="mt-2 text-gray-400">{project.tech}</p>
            <div className="mt-4 flex space-x-4">
              <a
                href={project.github}
                target="_blank"
                className="border px-4 py-2 rounded hover:bg-white hover:text-black transition"
              >
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                className="border px-4 py-2 rounded hover:bg-white hover:text-black transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
