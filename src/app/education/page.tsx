export default function Education() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-12">Education</h1>

      <div className="max-w-3xl w-full space-y-8">
        {/* Master’s */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 hover:bg-gray-700 transition transform">
          <h2 className="text-2xl font-semibold">Master’s in Computer Science</h2>
          <p className="text-gray-400">Florida State University | 2023–2025</p>
          <p className="mt-2 text-lg leading-relaxed">
            Focused on software engineering, algorithms, and full-stack development. Served as a Graduate Teaching Assistant for C++ and software engineering courses.
          </p>
        </div>

        {/* Bachelor’s */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 hover:bg-gray-700 transition transform">
          <h2 className="text-2xl font-semibold">Bachelor’s in Computer Science</h2>
          <p className="text-gray-400">Visvesvaraya Technological University, India | 2017–2021</p>
          <p className="mt-2 text-lg leading-relaxed">
            Learned fundamentals of computer science and worked on projects involving full-stack development and database management.
          </p>
        </div>
      </div>
    </section>
  );
}
