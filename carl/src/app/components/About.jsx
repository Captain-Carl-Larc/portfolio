import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            <span className='py-2 border-b-4 border-b-indigo-700'>Know</span>  About Me
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 ">
            I am Christine Nyambwari, a full-stack developer certified by
            Teach2Give, with expertise in both frontend and backend
            technologies. My skills span across various frameworks and
            languages, including React.js, Node.js, TypeScript, JavaScript,
            HTML, CSS, Tailwind CSS, Daisy UI, Honajs, Drizzle ORM, and
            PostgreSQL. I hold a Bachelor's degree in Business Information
            Technology from Kirinyaga University, where I've developed
            a passion for building scalable and user-centric applications.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Throughout my journey, I've worked on several projects such as
            a Vehicle Rental Management System, a Comprehensive
            Health Chatbot with GPT-3 integration for mental and physical
            wellness.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            As a developer, I focus on creating responsive, efficient, and
            functional applications. My approach emphasizes clean,
            maintainable code with a keen eye for detail in UI/UX. I enjoy
            problem-solving and continuously strive to learn and adapt
            new technologies to meet the needs of the project. Feel free to
            explore some of my projects.
          </p>
          <div className="flex space-x-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300">
              Contact Me
            </button>
            <button className="bg-white hover:bg-gray-100 text-indigo-600 font-semibold py-3 px-6 rounded-full border border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300">
              Download CV
            </button>
          </div>
        </div>
        <div className="md:w-1/3 rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/assets/image.jpg"  // Changed the filename.  Make SURE this exists.
            alt="Christine Nyambwari"
            width={400} //  Set appropriate dimensions.
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
