"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

import { experiences } from "../data/experience";
import { fadeInUp, staggerContainer } from "../utils/animations";

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-background text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Experience</h2>

                    <div className="relative">
                        {/* Center Line for Desktop, Left Line for Mobile */}
                        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-accent to-purple-600 opacity-30 rounded-full"></div>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            {experiences.map((exp, index) => (
                                <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                    {/* Mobile: Dot on left line. Desktop: Dot on center line */}
                                    <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-background border-4 border-accent rounded-full z-10 mt-6 md:mt-0"></div>

                                    {/* Spacer for desktop layout balance */}
                                    <div className="hidden md:block w-1/2" />

                                    {/* Card Content */}
                                    <motion.div
                                        variants={fadeInUp}
                                        className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}
                                    >
                                        <div className="glass-card p-6 rounded-2xl relative hover:-translate-y-2 transition-transform duration-300 group hover:shadow-lg hover:shadow-accent/10 border border-white/5">
                                            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-accent border border-accent/20 rounded-full bg-accent/5">
                                                {exp.type}
                                            </span>
                                            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-accent transition-colors">{exp.role}</h3>
                                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-secondary mb-4 text-sm">
                                                <span className="font-medium text-white/80">{exp.company}</span>
                                                <span className="hidden md:inline">•</span>
                                                <span className="flex items-center gap-1"><Calendar size={14} /> {exp.duration}</span>
                                            </div>

                                            <ul className="space-y-2">
                                                {exp.description.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-secondary/80">
                                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                                                        <span className="leading-relaxed">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
