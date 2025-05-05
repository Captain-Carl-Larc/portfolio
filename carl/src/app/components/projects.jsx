"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Link } from 'lucide-react'; // Import icons

// Project data with image URLs
const projects = [
    {
        title: 'My Name Is Christine Nyambwari',
        category: 'Frontend',
        imageUrl: '/assets/image.jpg', // Updated image path
        githubUrl: 'https://github.com/your-repo-1', // Replace with your GitHub repo URL
        liveDemoUrl: 'https://your-live-demo-1.com',   // Replace with your live demo URL
    },
    {
        title: 'E-commerce Platform',
        category: 'Frontend',
        imageUrl: '/assets/image.jpg', // Updated image path
        githubUrl: 'https://github.com/your-repo-2',  // Replace with your GitHub repo URL
        liveDemoUrl: 'https://your-live-demo-2.com',    // Replace with your live demo URL
    },
    {
        title: 'api_vehiclebackend',
        category: 'Backend',
        imageUrl: '/assets/image.jpg', // Updated image path
        githubUrl: 'https://github.com/your-repo-3',  // Replace with your GitHub repo URL
        liveDemoUrl: 'https://your-live-demo-3.com',    // Replace with your live demo URL
    },
    {
        title: 'Health Chatbot',
        category: 'Fullstack',
        imageUrl: '/assets/image.jpg', // Updated image path
        githubUrl: 'https://github.com/your-repo-4',
        liveDemoUrl: 'https://your-live-demo-4.com'
    },
    {
        title: 'Mobile App',
        category: 'Mobile',
        imageUrl: '/assets/image.jpg', // Updated image path
        githubUrl: 'https://github.com/your-repo-5',
        liveDemoUrl: 'https://your-live-demo-5.com'
    }
];

// Filter buttons data
const filterButtons = [
    { category: 'All', label: 'All' },
    { category: 'Frontend', label: 'Frontend' },
    { category: 'Backend', label: 'Backend' },
    { category: 'Fullstack', label: 'Fullstack' },
    { category: 'Database', label: 'Database' },
    { category: 'Mobile', label: 'Mobile' },
];

// Animation variants for projects
const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeInOut' },
    },
};

const ProjectsSection = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8 text-center">
                    My Projects
                </h2>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {filterButtons.map((button) => (
                        <button
                            key={button.category}
                            className={`
                px-4 py-2 rounded-full font-semibold text-gray-700
                bg-white hover:bg-indigo-100 transition-colors duration-300
                ${activeFilter === button.category ? 'bg-indigo-500 text-white hover:bg-indigo-600' : ''}
              `}
                            onClick={() => setActiveFilter(button.category)}
                        >
                            {button.label}
                        </button>
                    ))}
                </div>

                {/* Project Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={projectVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="bg-white rounded-lg shadow-md overflow-hidden
                       transition-shadow duration-300 hover:shadow-lg
                       flex flex-col" // Added flex column for consistent button placement
                        >
                            <div className="relative">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-64 object-cover" // Adjusted height
                                />
                            </div>
                            <div className="p-6 flex-grow flex flex-col justify-between">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4">{project.category}</p>
                                <div className="flex justify-end gap-4 mt-auto"> {/* Moved buttons to bottom */}
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-indigo-600 transition-colors"
                                        aria-label="View on GitHub"
                                    >
                                        <Github className="w-6 h-6" />
                                    </a>
                                    <a
                                        href={project.liveDemoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-indigo-600 transition-colors"
                                        aria-label="View Live Demo"
                                    >
                                        <Link className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
