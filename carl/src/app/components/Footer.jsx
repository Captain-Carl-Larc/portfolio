import React from 'react';
import {
    Linkedin,
    Twitter,
    Instagram,
    Github,
} from 'lucide-react'; // Import icons

const FooterSection = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-6">
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-2">CHRISTINE.</h3>
                        <p className="text-gray-400">
                            Creating digital experiences that matter
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#" // Replace with actual URL
                                    className="hover:text-indigo-400 transition-colors"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#" // Replace with actual URL
                                    className="hover:text-indigo-400 transition-colors"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#" // Replace with actual URL
                                    className="hover:text-indigo-400 transition-colors"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                 <a
                                    href="#" // Replace with actual URL
                                    className="hover:text-indigo-400 transition-colors"
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#" // Replace with actual URL
                                    className="hover:text-indigo-400 transition-colors"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Get In Touch */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-5 h-5"
                                >
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                                <span className="text-gray-400">
                                    christinenyambwari@gmail.com
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-5 h-5"
                                >
                                    <path d="M22 16.92v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3"></path>
                                    <path d="M10 10h4"></path>
                                    <path d="M10 14h4"></path>
                                    <path d="M10 6h4"></path>
                                </svg>
                                <span className="text-gray-400">+254705912632</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-5 h-5"
                                >
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                <span className="text-gray-400">Nakuru, Kenya</span>
                            </div>
                        </div>
                    </div>

                    {/* Connect With Me */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Connect With Me</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://linkedin.com"  // Replace with actual URL
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-indigo-400 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a
                                href="https://twitter.com"   // Replace with actual URL
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-indigo-400 transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-6 h-6" />
                            </a>
                            <a
                                href="https://instagram.com" // Replace with actual URL
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-indigo-400 transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a
                                href="https://github.com" // Replace with actual URL
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-indigo-400 transition-colors"
                                aria-label="Github"
                            >
                                <Github className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright and Legal */}
                <div className="mt-8 pt-4 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between text-sm">
                    <p className="mb-2 md:mb-0">
                        © {new Date().getFullYear()} Christine Nyambwari. All Rights Reserved.
                    </p>
                    <div className="flex space-x-4">
                        <a
                            href="#" // Replace with actual URL
                            className="hover:text-indigo-400 transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#" // Replace with actual URL
                            className="hover:text-indigo-400 transition-colors"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
