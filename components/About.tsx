"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import GitHubStats from "./GitHubStats";

const About = () => {
    return (
        <section id="about" className="py-20 bg-background text-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Image Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="relative aspect-[4/5] max-w-sm mx-auto md:mr-auto rounded-3xl overflow-hidden glass-card group border border-white/5">
                                <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                <Image
                                    src="/assets/profile/about-new.jpg"
                                    alt="Dipak Dhangar"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </motion.div>

                        {/* Content Column */}
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="h-[2px] w-12 bg-accent rounded-full" />
                                    <span className="text-accent font-semibold tracking-widest text-sm uppercase">Who I Am</span>
                                </div>
                                <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                    I work on <br className="hidden md:block" />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                                        backend, AI/ML, and Web3-based systems.
                                    </span>
                                </h3>
                            </motion.div>

                            <div className="space-y-6 text-secondary text-lg leading-relaxed">
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    viewport={{ once: true }}
                                >
                                    I’m an engineering student and founder focused on building real-world software systems across backend, full-stack, and applied AI/ML. My work emphasizes clean architecture, scalability, and execution.
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    viewport={{ once: true }}
                                >
                                    I’ve led and built platforms from scratch, taking products from idea to implementation while managing both technical decisions and team execution. I value ownership, clarity, and shipping software that works reliably in production.
                                </motion.p>
                            </div>

                            {/* Key Focus Areas */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                viewport={{ once: true }}
                                className="pt-4"
                            >
                                <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">Key Focus</h4>
                                <div className="flex flex-wrap gap-3">
                                    {["Backend Engineering", "System Design", "Applied AI/ML", "Web3 & Blockchain"].map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-secondary hover:text-accent hover:border-accent/30 transition-colors cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* GitHub Statistics Section */}
                    <GitHubStats />

                </motion.div>
            </div>
        </section>
    );
};

export default About;
