export default function Home() {
  return (
    <div>
      <div className="bg-blue-100 h-fit flex flex-col items-center pb-25">

        <div className="group w-fit mx-auto">
          <div className="text-5xl font-semibold text-orange-500 w-fit mx-auto pt-10">Welcome to E-Library</div>
          <div className="w-50 h-1 mx-auto mt-2 rounded-full bg-blue-600 group-hover:scale-x-235 transition-all ease-in duration-150"></div>
        </div>

        <div>
          <img 
            src="/assets/library.jpeg" loading="lazy" alt="library-image"
            className="mt-20 w-screen h-130 relative z-0 rounded-xl"  
          />
          <div className="text-lg flex flex-col gap-5 group text-white absolute bottom-50 px-5 z-10">
            <h2 className="text-4xl font-semibold">About This Platform</h2>
            <p className="font-semibold text-xl">
              This e-library platform is built with a simple yet powerful vision — to make quality learning resources accessible to everyone, without barriers.

              In today’s world, knowledge should not be limited by cost, location, or availability. This platform aims to bridge that gap by providing a centralized space where users can explore, access, and benefit from a wide range of educational materials for free.
            </p>
            <div className="bg-[rgba(0,0,0,0.5)] w-screen absolute origin-left transition-transform duration-350 ease-in -top-7 -z-5 scale-x-0 group-hover:scale-x-100 right-0 overflow-x-hidden h-50"></div>
          </div>
        </div>

        <div>
          <img 
            src="/assets/students.jpg" loading="lazy" alt="library-image"
            className="mt-20 w-screen h-130 relative z-0 rounded-xl"  
          />
          <div className="text-lg flex flex-col gap-5 group text-white absolute top-240 px-5 z-10">
            <h2 className="text-4xl font-semibold">Goal</h2>
            <p className="font-semibold text-xl">
              The primary goal of this platform is to:
            </p>
            <ul className="text-white text-lg font-semibold space-y-5 list-disc px-5">
              <li>Provide free access to books and learning resources</li>
              <li>Help students and learners who cannot afford expensive materials</li>
              <li>Create a structured and organized digital library</li>
              <li>Encourage a culture of sharing knowledge</li>
            </ul>
            <div className="bg-[rgba(0,0,0,0.5)] w-screen absolute origin-left transition-transform duration-350 ease-in -top-7 -z-5 scale-x-0 group-hover:scale-x-100 left-0 overflow-x-hidden h-90"></div>
          </div>
        </div>


      </div>
    </div>
  );
}
