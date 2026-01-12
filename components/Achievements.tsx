"use client";

import { motion } from "framer-motion";
import { ExternalLink, Award, Trophy, Code, Medal, Shield, Terminal } from "lucide-react";
import { useState } from "react";
import Image from "next/image";


import { achievementsData } from "../data/achievements";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    }
};

const Achievements = () => {
    const [activeTab, setActiveTab] = useState<'opensource' | 'certification' | 'hackathon'>('opensource');

    const filteredAchievements = achievementsData.filter(item => item.category === activeTab);

    const getIcon = (category: string) => {
        switch (category) {
            case 'opensource': return <Terminal size={64} className="text-white/30 group-hover:text-white/50 transition-colors" />;
            case 'hackathon': return <Trophy size={64} className="text-white/30 group-hover:text-white/50 transition-colors" />;
            case 'certification': return <Shield size={64} className="text-white/30 group-hover:text-white/50 transition-colors" />;
            default: return <Award size={64} className="text-white/30 group-hover:text-white/50 transition-colors" />;
        }
    };

    return (
        <section id="achievements" className="py-20 bg-background text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">Achievements & Certifications</h2>

                    {/* Tabs */}
                    <div className="flex justify-center gap-4 mb-12 flex-wrap">
                        {[
                            { id: 'opensource', label: 'Open Source', icon: <Code size={18} /> },
                            { id: 'certification', label: 'Certifications', icon: <Award size={18} /> },
                            { id: 'hackathon', label: 'Hackathons', icon: <Trophy size={18} /> }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-medium transition-all ${activeTab === tab.id
                                    ? "bg-accent text-background shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                                    : "bg-white/5 border border-white/10 text-secondary hover:bg-white/10"
                                    }`}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        key={activeTab} // Re-trigger animation on tab change
                        className="grid md:grid-cols-2 gap-8"
                    >
                        {filteredAchievements.map((item) => (
                            <motion.div
                                key={item.id}
                                variants={itemVariants}
                                className="glass-card rounded-2xl overflow-hidden group hover:shadow-[0_0_30px_rgba(0,212,255,0.1)] transition-shadow border border-white/5 flex flex-col h-full"
                            >
                                {/* Image Area */}
                                <div className={`h-48 relative overflow-hidden bg-gray-900 border-b border-white/5 group-hover:border-accent/20 transition-colors ${item.category === 'opensource' ? 'flex items-center justify-center bg-gradient-to-br from-purple-500/10 to-blue-500/10 group-hover:from-purple-500/20 group-hover:to-blue-500/20' : ''}`}>
                                    {item.category === 'opensource' ? (
                                        <div className="bg-white/5 p-4 rounded-full border border-white/10 shadow-xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                                            {getIcon(item.category)}
                                        </div>
                                    ) : (
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-20" />
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <span className="text-accent text-sm font-bold mb-1 block uppercase tracking-wider">{item.date}</span>
                                            <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{item.title}</h3>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {item.tags.map((tag, i) => (
                                            <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-secondary border border-white/10">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <ul className="space-y-3 mb-8 flex-grow">
                                        {item.description.map((desc, i) => (
                                            <li key={i} className="flex items-start gap-3 text-secondary text-sm">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                                <span className="leading-relaxed">{desc}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-auto pt-6 border-t border-white/5">
                                        <a
                                            href={item.credentialLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 text-white hover:text-accent font-semibold group-hover:translate-x-1 transition-transform"
                                        >
                                            Show Credentials
                                            <ExternalLink size={16} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Achievements;
