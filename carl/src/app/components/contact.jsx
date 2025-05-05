import React from 'react';
import {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Twitter,
    Instagram,
    Github,
} from 'lucide-react'; // Import icons

const ContactSection = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8 text-center">
                    Inquiry Contact Me
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left Side: Get In Touch */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                            Get In Touch
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Have a project in mind or want to discuss potential
                            opportunities? Feel free to reach out!
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <Mail className="w-5 h-5 text-gray-500" />
                                <span className="text-gray-700">
                                    christinenyambwari@gmail.com
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-5 h-5 text-gray-500" />
                                <span className="text-gray-700">+254705912632</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-gray-500" />
                                <span className="text-gray-700">Nakuru, Kenya</span>
                            </div>
                        </div>
                        <div className="flex space-x-4 mt-8">
                            <a
                                href="https://linkedin.com"  // Replace with actual URL
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-indigo-600 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a
                                href="https://twitter.com"   // Replace with actual URL
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-indigo-600 transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-6 h-6" />
                            </a>
                            <a
                                href="https://instagram.com" // Replace with actual URL
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-indigo-600 transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a
                                href="https://github.com" // Replace with actual URL
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-indigo-600 transition-colors"
                                aria-label="Github"
                            >
                                <Github className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="mb-4 w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="mb-4 w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="mb-4 w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                        <textarea
                            placeholder="Your Message"
                            className="mb-6 w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            rows={4}
                        />
                        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
