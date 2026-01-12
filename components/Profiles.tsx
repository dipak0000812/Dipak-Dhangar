"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Profile {
    name: string;
    url: string;
    icon: string; // URL to simple-icons or similar
    color: string; // Hover border color
}

// Using simple-icons via CDN for brand logos
const profiles: Profile[] = [
    {
        name: "LeetCode",
        url: "https://leetcode.com/u/Dipak1106/",
        icon: "https://cdn.simpleicons.org/leetcode/white",
        color: "group-hover:border-yellow-500"
    },
    {
        name: "CodeChef",
        url: "https://www.codechef.com/users/dipak_09",
        icon: "https://cdn.simpleicons.org/codechef/white",
        color: "group-hover:border-amber-700"
    },
    {
        name: "Codeforces",
        url: "https://codeforces.com/profile/Dipak_45",
        icon: "https://cdn.simpleicons.org/codeforces/white",
        color: "group-hover:border-red-500"
    },
    {
        name: "HackerRank",
        url: "https://www.hackerrank.com/profile/dhangardip09",
        icon: "https://cdn.simpleicons.org/hackerrank/white",
        color: "group-hover:border-green-500"
    },
    {
        name: "GitHub",
        url: "https://github.com/dipak0000812",
        icon: "https://cdn.simpleicons.org/github/white",
        color: "group-hover:border-gray-400"
    }
];

const Profiles = () => {
    return (
        <section id="profiles" className="py-20 bg-background text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Coding Profiles</h2>
                    <p className="text-secondary max-w-2xl mx-auto">
                        Connect with me on various coding platforms where I actively solve problems and participate in contests.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {profiles.map((profile, index) => (
                        <motion.a
                            key={index}
                            href={profile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`glass-card p-6 rounded-xl flex items-center gap-4 border border-white/5 transition-all duration-300 group ${profile.color}`}
                        >
                            <div className="w-10 h-10 relative flex-shrink-0">
                                <img
                                    src={profile.icon}
                                    alt={profile.name}
                                    className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                            <div className="flex-grow">
                                <h3 className="font-bold text-lg group-hover:text-white transition-colors">{profile.name}</h3>
                                <span className="text-xs text-secondary flex items-center gap-1 group-hover:text-accent">
                                    View Profile <ExternalLink size={10} />
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Profiles;
