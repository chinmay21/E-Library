export default function Home() {
  return (
    <div className="bg-blue-100">

      {/* Hero Section */}
      <div className="flex flex-col items-center pb-16 px-4">

        <div className="group text-center">
          <h1 className="text-3xl md:text-5xl font-semibold text-orange-500 pt-10">
            Welcome to E-Library
          </h1>
          <div className="w-24 h-1 mx-auto mt-2 rounded-full bg-blue-600 md:group-hover:scale-x-500 transition-all duration-200
          sm:group-hover:scale-x-300"
          ></div>
        </div>

        {/* Section 1 */}
        <div className="relative mt-10 w-full max-w-6xl">
          <img
            src="/assets/library.jpeg"
            alt="library"
            className="w-full h-auto rounded-xl object-cover"
          />

          <div className="absolute inset-0 bg-black/50 rounded-xl flex flex-col justify-center px-4 md:px-10 text-white">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              About This Platform
            </h2>

            <p className="text-sm md:text-lg font-medium leading-relaxed">
              This e-library platform is built with a simple yet powerful vision — 
              to make quality learning resources accessible to everyone, without barriers.

              In today’s world, knowledge should not be limited by cost, location, 
              or availability. This platform aims to bridge that gap by providing 
              a centralized space where users can explore, access, and benefit 
              from a wide range of educational materials for free.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="relative mt-10 w-full max-w-6xl">
          <img
            src="/assets/students.jpg"
            alt="students"
            className="w-full h-auto rounded-xl object-cover"
          />

          <div className="absolute inset-0 bg-black/50 rounded-xl flex flex-col justify-center px-4 md:px-10 text-white">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              Goal
            </h2>

            <ul className="text-sm md:text-lg font-medium space-y-2 list-disc pl-5">
              <li>Provide free access to books and learning resources</li>
              <li>Help students who cannot afford expensive materials</li>
              <li>Create a structured digital library</li>
              <li>Encourage sharing of knowledge</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
