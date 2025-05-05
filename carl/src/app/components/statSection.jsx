import React from 'react';

const ProjectStatsSection = () => {
    const stats = [
        { number: '200+', text: 'Projects' },
        { number: '100+', text: 'Clients' },
        { number: '150+', text: 'Completed' },
        { number: '100+', text: 'Upcoming' },
    ];


    return (
        <section className="py-20 bg-indigo-500/10">
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/20 backdrop-blur-md rounded-xl shadow-lg p-6 text-center border border-white/10"
                        >
                            <div className="text-4xl font-bold text-indigo-400 mb-2">
                                {item.number}
                            </div>
                            <p className="text-gray-300">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectStatsSection;
