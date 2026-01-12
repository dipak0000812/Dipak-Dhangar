"use client";

import { motion, AnimatePresence, useScroll } from "framer-motion";
import Link from "next/link";
import { Menu, X, Users } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [visitorCount, setVisitorCount] = useState<number | null>(null);

    // Visitor Count
    useEffect(() => {
        let isMounted = true;
        const fetchVisitorCount = async () => {
            try {
                const response = await fetch("https://api.counterapi.dev/v1/dipak-portfolio/visits/up");
                const data = await response.json();
                if (isMounted && data?.count) {
                    setVisitorCount(data.count);
                }
            } catch (error) {
                if (isMounted) setVisitorCount(100);
            }
        };

        fetchVisitorCount();
        return () => { isMounted = false; };
    }, []);

    const { scrollYProgress } = useScroll();

    const navLinks = [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Achievements", href: "#achievements" },
        { name: "Qualification", href: "#qualification" },
        { name: "Contact", href: "#contact" },
        { name: "Resume", href: "https://drive.google.com/file/d/1MZr_jOzomOmw6zHMxryshImA08L1v7P_/view?usp=sharing" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = navLinks.map(link => link.href.substring(1));
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top >= -100 && rect.top <= 300;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-background/90 backdrop-blur-lg border-b border-white/10 shadow-lg"
                : "bg-transparent backdrop-blur-none border-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link
                            href="/"
                            className="text-2xl font-bold bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent tracking-wider hover:opacity-80 transition-opacity"
                        >
                            Dipak.dev
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="flex space-x-1">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.href.substring(1);
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        target={link.href.startsWith("http") ? "_blank" : "_self"}
                                        rel={link.href.startsWith("http") ? "noopener noreferrer" : ""}
                                        onClick={() => !link.href.startsWith("http") && setActiveSection(link.href.substring(1))}
                                        className={`relative px-3 py-2 text-sm font-medium transition-colors ${isActive ? "text-accent" : "text-secondary hover:text-white"
                                            }`}
                                    >
                                        {link.name}
                                        {isActive && !link.href.startsWith("http") && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Visitor Counter */}
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-secondary font-mono">
                            <Users size={14} className="text-accent" />
                            <span>
                                {visitorCount ? `Visitor #${visitorCount.toLocaleString()}` : "Loading..."}
                            </span>
                        </div>
                    </div>

                    {/* Mobile Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="text-gray-300 hover:text-white p-2 transition-colors"
                            aria-label="Open menu"
                            aria-expanded={isOpen}
                        >
                            <Menu size={28} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 h-full w-[280px] bg-background/95 backdrop-blur-xl border-l border-white/10 z-50 md:hidden shadow-2xl"
                        >
                            <div className="flex flex-col h-full p-6">
                                <div className="flex justify-between items-center mb-8">
                                    <span className="text-xl font-bold text-white">Menu</span>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 text-gray-400 hover:text-white transition-colors"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                <div className="flex flex-col space-y-4">
                                    {navLinks.map((link) => {
                                        const isActive = activeSection === link.href.substring(1);
                                        return (
                                            <Link
                                                key={link.name}
                                                href={link.href}
                                                onClick={() => {
                                                    setActiveSection(link.href.substring(1));
                                                    setIsOpen(false);
                                                }}
                                                className={`text-lg font-medium transition-colors ${isActive ? "text-accent" : "text-secondary hover:text-white"
                                                    }`}
                                            >
                                                {link.name}
                                            </Link>
                                        );
                                    })}
                                </div>

                                <div className="mt-auto pt-8 border-t border-white/10">
                                    <div className="flex items-center gap-3 text-sm text-secondary font-mono">
                                        <Users size={16} className="text-accent" />
                                        <span>Visitor Count: {visitorCount ? visitorCount.toLocaleString() : "..."}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Scroll Progress Bar */}
            <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-accent z-50 origin-left"
                style={{ scaleX: scrollYProgress }}
            />
        </motion.nav>
    );
};

export default Navbar;
