"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, GraduationCap } from "lucide-react";

import { educationData } from "../data/education";
import { fadeInUp, staggerContainer, hoverScale } from "../utils/animations";

const Qualification = () => {
    return (
        <section id="qualification" className="py-20 bg-background text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="mb-16 text-center"
                >
                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4 border border-accent/20">
                        <GraduationCap size={16} />
                        <span>Academic Journey</span>
                    </motion.div>

                    <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-4">
                        My Qualifications
                    </motion.h2>

                    <motion.p variants={fadeInUp} className="text-secondary max-w-2xl mx-auto">
                        Showcasing my academic achievements and professional certifications.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            variants={fadeInUp}
                            whileHover={hoverScale}
                            className="glass-card rounded-2xl overflow-hidden border border-white/10 group hover:border-accent/30 transition-all duration-300 flex flex-col h-full"
                        >
                            {/* Image Header */}
                            <div className={`h-48 relative overflow-hidden ${edu.image ? '' : 'bg-gradient-to-br from-gray-800 to-gray-900'}`}>
                                {edu.image ? (
                                    <Image
                                        src={edu.image}
                                        alt={edu.institution}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <GraduationCap size={48} className="text-white/10" />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors">{edu.degree.split('(')[0].trim()}</h3>
                                    <p className="text-sm text-cyan-300 font-medium">{edu.grade}</p>
                                </div>
                            </div>

                            {/* Content Body */}
                            <div className="p-6 flex flex-col flex-grow bg-black/20">
                                <h4 className="text-lg font-semibold text-white mb-2">{edu.institution}</h4>

                                <div className="flex items-center gap-2 text-sm text-secondary mb-4">
                                    <Calendar size={14} className="text-accent" />
                                    <span>{edu.duration}</span>
                                </div>

                                <p className="text-sm text-secondary/80 leading-relaxed mt-auto">
                                    {edu.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Qualification;
