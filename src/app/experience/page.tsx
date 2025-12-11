export default function Experience() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-12">Experience</h1>

      <div className="max-w-3xl w-full space-y-10">

        {/* HEARTLAND */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-gray-700">
          <h2 className="text-2xl font-semibold">Senior Consultant</h2>
          <p className="text-gray-400">Heartland Community Network • Jun 2025 – Present</p>

          <ul className="mt-3 space-y-2 text-lg text-gray-300 leading-relaxed">
            <li>Contributing to a Community Data Insights Platform spanning sectors like health, education, and food security.</li>
            <li>Designed SQL schemas, ingestion pipelines, and API contracts ensuring scalable and accurate data access.</li>
            <li>Built high-performance React/Next.js dashboards, reducing load times from 10s to under 2s.</li>
            <li>Developed Power BI dashboards converting raw SQL tables into actionable community insights.</li>
          </ul>
        </div>

        {/* DATAMAXX */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-gray-700">
          <h2 className="text-2xl font-semibold">Software Engineer</h2>
          <p className="text-gray-400">Datamaxx • May 2024 – Aug 2024</p>

          <ul className="mt-3 space-y-2 text-lg text-gray-300 leading-relaxed">
            <li>Worked on Omnixx Enterprise, a high-availability public safety platform used by law enforcement agencies.</li>
            <li>Optimized C# backend logic and SQL stored procedures, eliminating major performance bottlenecks.</li>
            <li>Refactored legacy UI components using HTML, CSS, JavaScript, and jQuery, improving load times by 30–40%.</li>
          </ul>
        </div>

        {/* INFOSYS */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-gray-700">
          <h2 className="text-2xl font-semibold">Systems Engineer</h2>
          <p className="text-gray-400">Infosys • Sep 2021 – Jul 2023</p>

          <ul className="mt-3 space-y-2 text-lg text-gray-300 leading-relaxed">
            <li>Supported digital transformation for retail/e-commerce systems using Spring Boot microservices.</li>
            <li>Implemented Kafka-driven event-based communication while migrating monolithic modules.</li>
            <li>Optimized high-latency APIs and MySQL queries, reducing response times from 10s to under 3s.</li>
            <li>Wrote JUnit + Mockito tests achieving 90%+ coverage.</li>
            <li>Developed CI/CD pipelines using Jenkins and Docker for automated deployments.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
