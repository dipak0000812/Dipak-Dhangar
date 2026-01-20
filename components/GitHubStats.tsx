"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { GitPullRequest, GitMerge, Star, Code, History, Layers } from "lucide-react";

export const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const GitHubStats = () => {
    const [stats, setStats] = useState({
        repos: 25,
        followers: 10,
        following: 5
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 5000);

                const response = await fetch("https://api.github.com/users/dipak0000812", {
                    signal: controller.signal
                });
                clearTimeout(timeoutId);

                if (response.ok) {
                    const data = await response.json();
                    setStats({
                        repos: data.public_repos || 25,
                        followers: data.followers || 10,
                        following: data.following || 5
                    });
                }
            } catch {
                // Silently fail and use default stats - no console error
            }
        };
        fetchStats();
    }, []);

    // Native data for visual consistency (approximate values for non-API fields)
    const topLanguages = [
        { name: "Python", color: "#3572A5", percentage: 90 },
        { name: "Go", color: "#00ADD8", percentage: 88 },
        { name: "JavaScript", color: "#f1e05a", percentage: 85 },
        { name: "TypeScript", color: "#2b7489", percentage: 80 },
        { name: "Rust", color: "#dea584", percentage: 60 },
    ];

    return (
        <div className="w-full mt-12 space-y-8">
            <motion.h3
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-2xl font-bold text-white flex items-center gap-2"
            >
                <span className="w-8 h-1 bg-accent rounded-full"></span>
                Contributions
            </motion.h3>

            {/* 1. RESTORED: GitHub Heatmap (Using reliable ghchart service) */}
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-full glass-card p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-colors overflow-hidden"
            >
                <h4 className="text-lg font-semibold text-secondary mb-4 flex items-center gap-2">
                    <History size={18} /> Contribution Heatmap
                </h4>
                <div className="w-full flex justify-center">
                    <img
                        src="https://ghchart.rshah.org/00d4ff/dipak0000812"
                        alt="Dipak's GitHub Contribution Graph"
                        className="w-full h-auto max-w-4xl"
                    />
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* 2. Open Source Achievements (Fixed Native Card) */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="glass-card p-6 rounded-2xl border border-white/5 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 flex flex-col justify-center items-center text-center gap-4 hover:border-accent/50 transition-all hover:shadow-[0_0_30px_rgba(0,212,255,0.1)] lg:col-span-1"
                >
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center animate-pulse mb-2">
                        <GitPullRequest size={32} className="text-blue-400" />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-white mb-2">Open Source Contributor</h4>
                        <div className="flex flex-col gap-2 text-sm">
                            <p className="text-cyan-200 bg-cyan-900/30 px-3 py-1 rounded-full border border-cyan-500/30 inline-flex items-center justify-center gap-1">
                                <GitMerge size={12} />
                                3 Merged PRs
                            </p>
                            <div className="flex gap-2 justify-center opacity-80">
                                <span>Scikit-learn</span>
                                <span>•</span>
                                <span>OpenVINO</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 3. Top Languages (Native Progress Bars) */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="glass-card p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-all lg:col-span-1"
                >
                    <h4 className="text-lg font-semibold text-secondary mb-6 flex items-center gap-2">
                        <Code size={18} /> Top Languages
                    </h4>
                    <div className="space-y-4">
                        {topLanguages.map((lang, index) => (
                            <div key={index}>
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="text-white font-medium">{lang.name}</span>
                                    <span className="text-secondary">{lang.percentage}%</span>
                                </div>
                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${lang.percentage}%` }}
                                        transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                                        className="h-full rounded-full"
                                        style={{ backgroundColor: lang.color }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* 4. Real GitHub Stats (Fetched from API) */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="glass-card p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-colors lg:col-span-1"
                >
                    <h4 className="text-lg font-semibold text-secondary mb-6 flex items-center gap-2">
                        <Layers size={18} /> GitHub Activity
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-center">
                            <div className="flex justify-center mb-2"><Layers size={18} className="text-blue-400" /></div>
                            <div className="text-xl font-bold text-white mb-1">{stats.repos}</div>
                            <div className="text-[10px] uppercase tracking-wider text-secondary">Repositories</div>
                        </div>
                        <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-center">
                            <div className="flex justify-center mb-2"><GitPullRequest size={18} className="text-purple-400" /></div>
                            <div className="text-xl font-bold text-white mb-1">10+</div>
                            <div className="text-[10px] uppercase tracking-wider text-secondary">PRs Created</div>
                        </div>
                        <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-center">
                            <div className="flex justify-center mb-2"><Star size={18} className="text-yellow-400" /></div>
                            <div className="text-xl font-bold text-white mb-1">{stats.followers}</div>
                            <div className="text-[10px] uppercase tracking-wider text-secondary">Followers</div>
                        </div>
                        <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-center">
                            <div className="flex justify-center mb-2"><History size={18} className="text-green-400" /></div>
                            <div className="text-xl font-bold text-white mb-1">2024</div>
                            <div className="text-[10px] uppercase tracking-wider text-secondary">Joined</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default GitHubStats;
