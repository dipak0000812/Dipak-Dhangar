"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { hoverScale, tapScale } from "../../utils/animations";

interface HorizontalProjectCardProps {
    project: {
        id: string;
        title: string;
        description: string;
        image: string;
        tags: string[];
        links: {
            type: string;
            label: string;
            url: string;
        }[];
    };
    index: number;
}

const HorizontalProjectCard = ({ project, index }: HorizontalProjectCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl overflow-hidden border border-white/10 group hover:border-accent/30 transition-all duration-500"
        >
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-0">
                {/* Image Side */}
                <div className={`lg:col-span-3 h-48 sm:h-64 md:h-auto min-h-[250px] relative overflow-hidden group hover:brightness-110 transition-all ${project.image.startsWith('/') ? 'bg-black/50 border-r border-white/5' : `bg-gradient-to-br ${project.image}`}`}>
                    {project.image.startsWith('/') ? (
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-contain md:object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    ) : (
                        <>
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-30">
                                <div className="text-white text-9xl font-bold opacity-20">
                                    {project.title.charAt(0)}
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* Content Side */}
                <div className="lg:col-span-2 p-8 flex flex-col justify-between bg-black/40 backdrop-blur-md">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-accent transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-secondary mb-6 leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-cyan-300">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-auto">
                        {project.links.map((link, i) => {
                            const Icon = link.type === 'github' ? Github : ExternalLink;
                            return (
                                <motion.a
                                    key={i}
                                    href={link.url}
                                    whileHover={hoverScale}
                                    whileTap={tapScale}
                                    className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-accent hover:text-background rounded-xl text-sm font-bold transition-all border border-white/10"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon size={18} />
                                    {link.label}
                                </motion.a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default HorizontalProjectCard;
