"use client";

import { motion } from "framer-motion";

import { skillsData } from "../data/skills";

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-background text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Skills</h2>
                    <p className="text-secondary max-w-2xl mx-auto">
                        Technological stack I work with to build high-performance applications.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {skillsData.map((category, catIndex) => {
                        const Icon = category.icon;

                        return (
                            <motion.div
                                key={catIndex}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: catIndex * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                                        <Icon className="text-accent" size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold">{category.title}</h3>
                                </div>

                                <div className="glass-card p-5 md:p-8 rounded-2xl border-white/5">
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                                        {category.skills.map((skill, index) => (
                                            <motion.div
                                                key={index}
                                                whileHover={{ scale: 1.05 }}
                                                className="flex flex-col items-center gap-4 group cursor-pointer p-4 rounded-xl bg-white/5 border border-white/5 hover:border-accent/30 transition-all hover:bg-white/10"
                                            >
                                                <div className="relative w-10 h-10 grayscale group-hover:grayscale-0 transition-all duration-300">
                                                    {/* Using standard img tag for external SVGs to avoid Next.js optimization issues with simpleicons CDN */}
                                                    <img
                                                        src={skill.image}
                                                        alt={skill.name}
                                                        className="w-full h-full object-contain"
                                                        loading="lazy"
                                                    />
                                                </div>

                                                <div className="w-full space-y-2">
                                                    <span className="block text-center font-medium text-white/90 text-sm group-hover:text-accent transition-colors">
                                                        {skill.name}
                                                    </span>

                                                    {/* Visual-only progress bar */}
                                                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: `${skill.level}%` }}
                                                            transition={{ duration: 1, delay: 0.5 }}
                                                            className="h-full bg-accent/50 group-hover:bg-accent transition-colors rounded-full"
                                                        />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
