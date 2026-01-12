"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Globe, Github, Layers, Code, Sparkles } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import ReactDOM from "react-dom";

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: any;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    // Close on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    // Use portal to render outside the regular DOM hierarchy
    const modalContent = (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-4 sm:p-6"
                    >
                        {/* Modal Container */}
                        <motion.div
                            initial={{ y: 50, opacity: 0, scale: 0.95 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 50, opacity: 0, scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-4xl max-h-[90vh] bg-[#0a0e27] border border-white/10 rounded-2xl shadow-2xl relative flex flex-col overflow-hidden"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white/70 hover:text-white hover:bg-accent/20 transition-all z-20 backdrop-blur-sm"
                            >
                                <X size={20} />
                            </button>

                            {/* Scrollable Content */}
                            <div className="overflow-y-auto custom-scrollbar flex-1">
                                {/* Banner Image */}
                                <div className="relative w-full h-64 sm:h-80 md:h-96">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-transparent to-transparent opacity-90" />

                                    <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                                        <motion.h2
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.2 }}
                                            className="text-3xl md:text-5xl font-bold text-white mb-2"
                                        >
                                            {project.title}
                                        </motion.h2>
                                        <motion.div
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                            className="flex flex-wrap gap-2"
                                        >
                                            {project.tags.map((tag: string, i: number) => (
                                                <span key={i} className="px-3 py-1 bg-accent/20 border border-accent/20 rounded-full text-xs md:text-sm text-accent backdrop-blur-sm">
                                                    {tag}
                                                </span>
                                            ))}
                                        </motion.div>
                                    </div>
                                </div>

                                <div className="p-6 md:p-8 space-y-8">
                                    {/* Links */}
                                    <div className="flex gap-4">
                                        {project.links.demo && (
                                            <a
                                                href={project.links.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 flex items-center justify-center gap-2 py-3 bg-accent text-background rounded-xl font-bold hover:bg-cyan-400 transition-colors"
                                            >
                                                <Globe size={18} />
                                                Live Demo
                                            </a>
                                        )}
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 rounded-xl font-medium hover:bg-white/10 hover:border-accent/30 transition-all"
                                        >
                                            <Github size={18} />
                                            Source Code
                                        </a>
                                    </div>

                                    <div className="grid md:grid-cols-3 gap-8">
                                        {/* Main Description */}
                                        <div className="md:col-span-2 space-y-6">
                                            <div className="space-y-4">
                                                <h3 className="text-xl font-semibold flex items-center gap-2 text-white">
                                                    <Sparkles size={20} className="text-accent" />
                                                    Overview
                                                </h3>
                                                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                                                    {project.longDescription || project.description}
                                                    {(!project.longDescription && project.description.length < 100) && " This project demonstrates advanced capabilities in modern web development, utilizing state-of-the-art technologies to solve real-world problems. It features a responsive design, robust backend integration, and a seamless user experience."}
                                                </p>
                                            </div>

                                            {project.features && (
                                                <div className="space-y-4">
                                                    <h3 className="text-xl font-semibold flex items-center gap-2 text-white">
                                                        <Layers size={20} className="text-accent" />
                                                        Key Features
                                                    </h3>
                                                    <ul className="space-y-2">
                                                        {project.features.map((feature: string, i: number) => (
                                                            <li key={i} className="flex items-start gap-3 text-gray-300">
                                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                                                                {feature}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>

                                        {/* Sidebar Stats/Tech */}
                                        <div className="space-y-6">
                                            <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-4">
                                                <h3 className="text-lg font-semibold flex items-center gap-2 text-white">
                                                    <Code size={18} className="text-accent" />
                                                    Tech Stack
                                                </h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.techStack ? (
                                                        project.techStack.map((tech: any, i: number) => (
                                                            <span key={i} className="px-3 py-1.5 bg-background rounded-lg text-xs font-mono border border-white/10 flex items-center gap-1.5">
                                                                {tech.icon && <span className="w-1 h-1 rounded-full bg-accent" />}
                                                                {tech.name}
                                                            </span>
                                                        ))
                                                    ) : (
                                                        // Fallback using tags if no explicit tech stack
                                                        project.tags.map((tag: string, i: number) => (
                                                            <span key={i} className="px-3 py-1.5 bg-background rounded-lg text-xs font-mono border border-white/10">
                                                                {tag}
                                                            </span>
                                                        ))
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );

    // Render Portal
    if (typeof window === "undefined") return null;
    return ReactDOM.createPortal(modalContent, document.body);
};

export default ProjectModal;
