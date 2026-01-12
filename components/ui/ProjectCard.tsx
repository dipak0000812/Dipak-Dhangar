"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Layers, Calendar } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ProjectModal from "@/components/ui/ProjectModal";

interface ProjectCardProps {
    project: {
        title: string;
        description: string;
        tags: string[];
        links: {
            demo: string;
            github: string;
        };
        image: string;
        features?: string[];
        techStack?: { name: string; icon: string }[];
        longDescription?: string;
    };
    index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-accent/40 transition-colors cursor-pointer flex flex-col h-full"
                onClick={() => setIsModalOpen(true)}
                whileHover={{ y: -5 }}
            >
                {/* Image Section */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                        <span className="px-6 py-2 bg-accent text-background font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            View Details
                        </span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:text-accent transition-colors">
                            {project.title}
                        </h3>
                        <div className="flex gap-2">
                            <motion.a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-accent transition-colors z-10"
                                onClick={(e) => e.stopPropagation()}
                                whileHover={{ scale: 1.1 }}
                            >
                                <Github size={18} />
                            </motion.a>
                            {project.links.demo && (
                                <motion.a
                                    href={project.links.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-accent transition-colors z-10"
                                    onClick={(e) => e.stopPropagation()}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <ExternalLink size={18} />
                                </motion.a>
                            )}
                        </div>
                    </div>

                    <p className="text-secondary text-sm line-clamp-3 mb-6 flex-grow">
                        {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.slice(0, 3).map((tag, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-xs text-secondary/80 font-mono group-hover:border-accent/20 transition-colors"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Detailed Modal */}
            <ProjectModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                project={project}
            />
        </>
    );
};

export default ProjectCard;
