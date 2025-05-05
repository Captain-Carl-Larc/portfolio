import React from 'react';
import {
    Laptop,
    Server,
    Code,
    Database,
} from 'lucide-react';

const Skills = () => {
    const expertise = [
        { title: 'Frontend Development', icon: Laptop },
        { title: 'Backend Development', icon: Server },
        { title: 'Fullstack Development', icon: Code },
        { title: 'Database Management', icon: Database },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8 text-center md:text-left">
                    Area Of Expertise
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {expertise.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center
                                       hover:shadow-lg transition-shadow duration-300 hover:scale-105 border border-gray-200"
                        >
                            <item.icon className="w-12 h-12 mb-4 text-indigo-600" />
                            <h3 className="text-xl font-semibold text-gray-800 text-center">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
