import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-200 to-gray-400 py-20 md:py-32">
      <div id='text-container' className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            I AM STEPHEN <span className="text-gray-900">KALWENZI</span>
          </h1>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            &amp; I AM A <span className="text-indigo-600">SOFTWARE DEVELOPER</span>
          </h2>
          <p className="text-gray-900 leading-relaxed mb-8 max-w-xl">
            Passionate about creating elegant solutions to complex problems through code.
            Specializing in full-stack development with a focus on user experience.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300">
              My Works
            </button>
            <button className="bg-white hover:bg-gray-100 text-indigo-600 font-semibold py-3 px-6 rounded-full border border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300">
              Hire Me
            </button>
          </div>
        </div>
        <div className="md:w-1/3 rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/assets/image.jpg"
            alt="Christine Nyambwari"
            width={600}
            height={800}
            className="object-cover w-full h-full"
            priority // Added priority for initial load
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
