import React from 'react';
import {
    ReactLogo,
    Nodejs,
    TypeScript,
    Database,
    Rocket,
    Html5,
    Css3,
    Js,
    Wind,
    Sass,
    //Database as DatabaseIcon, // To avoid conflict with the default "Database"
    Palette,
    Redux,
    Azure,
    Sql,
    PenTool
} from 'lucide-react'; // Importing icons

const TechnicalSkillsSection = () => {
    // Array of skills with names and icons
    const skills = [
        { name: 'React.js', icon: ReactLogo, color: 'text-blue-500' },
        { name: 'Node.js', icon: Nodejs, color: 'text-green-500' },
        { name: 'TypeScript', icon: TypeScript, color: 'text-blue-700' },
        { name: 'PostgreSQL', icon: Database, color: 'text-blue-600' },
        { name: 'Hono.js', icon: Rocket, color: 'text-orange-500' },
        { name: 'HTML5', icon: Html5, color: 'text-orange-600' },
        { name: 'CSS3', icon: Css3, color: 'text-blue-400' },
        { name: 'JavaScript', icon: Js, color: 'text-yellow-400' },
        { name: 'Tailwind CSS', icon: Wind, color: 'text-sky-400' },
        { name: 'SCSS', icon: Sass, color: 'text-pink-400' },
        /* { name: 'Drizzle ORM', icon: DatabaseIcon, color: 'text-gray-700' }, */ // Using the aliased icon
        { name: 'Daisy UI', icon: Palette, color: 'text-pink-500' },
        { name: 'Redux.js', icon: Redux, color: 'text-purple-500' },
        { name: 'Azure', icon: Azure, color: 'text-blue-800' },
        { name: 'SQL', icon: Sql, color: 'text-gray-500' },
        { name: 'Figma', icon: PenTool, color: 'text-fuchsia-500' },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8 text-center">
                    Technical Skills
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center
                                       hover:shadow-lg transition-shadow duration-300 hover:scale-105"
                        >
                            {/* <skill.icon className={`w-10 h-10 mb-2 ${skill.color}`} /> */}
                            <p>
                                {skill.icon}
                            </p>
                            <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnicalSkillsSection;
