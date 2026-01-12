"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowUp, Heart } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white py-12 relative border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

                    {/* Left Side: Copyright */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                            Dipak
                        </h3>
                        <p className="text-secondary text-sm">
                            © {currentYear} Dipak. All rights reserved.
                        </p>
                    </div>

                    {/* Center: Social Links */}
                    <div className="flex gap-6">
                        <a href="https://github.com/dipak0000812" target="_blank" className="text-secondary hover:text-white transition-colors"><Github size={20} /></a>
                        <a href="https://www.linkedin.com/in/dipak-dhangar/" target="_blank" className="text-secondary hover:text-white transition-colors"><Linkedin size={20} /></a>
                        <a href="https://x.com/DipakDhangar09" target="_blank" className="text-secondary hover:text-white transition-colors"><Twitter size={20} /></a>
                        <a href="mailto:dhangardip09@gmail.com" className="text-secondary hover:text-white transition-colors"><Mail size={20} /></a>
                    </div>

                    {/* Right Side: Scroll to Top */}
                    <button
                        onClick={scrollToTop}
                        className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-accent hover:text-background transition-all group"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 text-center text-sm text-secondary">
                    <p className="flex items-center justify-center gap-1">
                        &nbsp;
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
