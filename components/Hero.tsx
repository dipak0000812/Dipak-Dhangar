"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ExternalLink, Instagram } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    const socialLinks = [
        { icon: <Github size={24} />, href: "https://github.com/dipak0000812", label: "Github" },
        { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/dipak-dhangar/", label: "LinkedIn" },
        { icon: <Instagram size={24} />, href: "https://www.instagram.com/__dipak__o_9/", label: "Instagram" },
        { icon: <Twitter size={24} />, href: "https://x.com/DipakDhangar09", label: "Twitter" },
        { icon: <Mail size={24} />, href: "mailto:dhangardip09@gmail.com", label: "Email" },
    ];

    const [bootComplete, setBootComplete] = useState(false);
    const [bootText, setBootText] = useState("");

    useEffect(() => {
        let isMounted = true;
        const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

        const runBootSequence = async () => {
            const type = async (text: string, postDelay = 0) => {
                if (!isMounted) return;
                for (const char of text) {
                    if (!isMounted) return;
                    setBootText(prev => prev + char);
                    await wait(25);
                }
                setBootText(prev => prev + "\n");
                if (postDelay) await wait(postDelay);
            };

            const print = async (text: string, postDelay = 0) => {
                if (!isMounted) return;
                setBootText(prev => prev + text + "\n");
                if (postDelay) await wait(postDelay);
            };

            // Quick boot animation
            await type("$ npm run intro", 300);
            await print("+ dipak@1.0.0", 100);
            await print("Open Source Enthusiast, Blockchain and Backend", 50);
            await print("developer, In love with AI & Machine learning", 500);
            await type("$ go get skills", 300);

            if (isMounted) setBootComplete(true);
        };

        runBootSequence();
        return () => { isMounted = false; };
    }, []);

    return (
        <section id="hero" className="min-h-screen relative flex items-center bg-background overflow-hidden">
            {/* Simple Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

            {/* Social Links - Left Side */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col gap-6 z-20"
            >
                {socialLinks.map((link, i) => (
                    <Link
                        key={i}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary hover:text-accent hover:-translate-y-1 transition-all duration-300"
                        aria-label={link.label}
                    >
                        {link.icon}
                    </Link>
                ))}
                <div className="w-px h-24 bg-gradient-to-b from-secondary to-transparent mx-auto mt-4" />
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 pt-20">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">

                    {/* LEFT SIDE - Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center md:justify-start items-end order-2 md:order-1"
                    >
                        {/* Single Bottom Line */}
                        <div className="absolute bottom-0 left-1/2 md:left-8 -translate-x-1/2 md:translate-x-0 w-[260px] sm:w-[300px] lg:w-[350px] h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent" />

                        {/* Profile Image */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-[280px] sm:w-[320px] lg:w-[380px] h-[350px] sm:h-[400px] lg:h-[480px] z-10"
                        >
                            <Image
                                src="/assets/profile/hero-professional.png"
                                alt="Dipak Dhangar"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                        </motion.div>
                    </motion.div>

                    {/* RIGHT SIDE - Content */}
                    <div className="space-y-6 order-1 md:order-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                                Hi, I am{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
                                    Dipak Dhangar
                                </span>
                            </h1>

                            <Link
                                href="mailto:dhangardip09@gmail.com"
                                className="text-accent hover:text-cyan-300 underline underline-offset-4 text-lg font-medium inline-flex items-center gap-2 transition-colors"
                            >
                                dhangardip09@gmail.com
                                <ExternalLink size={16} />
                            </Link>
                        </motion.div>

                        {/* Terminal - Rohan Style */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-[#1a1a1a] border border-white/10 rounded-xl font-mono shadow-2xl relative overflow-hidden max-w-xl w-full"
                        >
                            {/* Terminal Header */}
                            <div className="bg-[#2d2d2d] px-4 py-2.5 flex items-center justify-between border-b border-white/5">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                                </div>
                                <span className="text-gray-400 text-xs font-medium">bash</span>
                            </div>

                            {/* Terminal Content */}
                            <div className="p-5 text-sm leading-relaxed min-h-[180px]">
                                {!bootComplete ? (
                                    // Boot sequence animation
                                    <div className="whitespace-pre-wrap">
                                        {bootText.split('\n').map((line, i) => {
                                            if (line.startsWith('$')) {
                                                return <div key={i} className="text-cyan-400">{line}</div>;
                                            } else if (line.startsWith('+')) {
                                                return <div key={i} className="text-green-400">{line}</div>;
                                            } else if (line.trim()) {
                                                return <div key={i} className="text-gray-300">{line}</div>;
                                            }
                                            return null;
                                        })}
                                        <span className="animate-pulse inline-block w-2 h-4 bg-gray-500 align-middle" />
                                    </div>
                                ) : (
                                    // Final state with all lines visible + typing animation on last line
                                    <div className="space-y-0">
                                        <div className="text-cyan-400">$ npm run intro</div>
                                        <div className="text-green-400">+ dipak@1.0.0</div>
                                        <div className="text-gray-300">Open Source Enthusiast, Blockchain and Backend</div>
                                        <div className="text-gray-300">developer, In love with AI & Machine learning</div>
                                        <div className="text-cyan-400">$ go get skills</div>
                                        <div className="text-yellow-400">
                                            <TypeAnimation
                                                sequence={[
                                                    'Backend Developer',
                                                    2000,
                                                    'Full Stack Engineer',
                                                    2000,
                                                    'Open Source Contributor',
                                                    2000,
                                                    'AI & Blockchain Explorer',
                                                    2000,
                                                    'Competitive Programmer',
                                                    2000,
                                                ]}
                                                wrapper="span"
                                                speed={50}
                                                repeat={Infinity}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap items-center gap-4 pt-2"
                        >
                            <motion.a
                                href="mailto:dhangardip09@gmail.com"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-accent/50 transition-all text-white font-medium"
                            >
                                <Mail size={18} className="text-accent" />
                                <span>Let's Talk</span>
                            </motion.a>
                            <motion.a
                                href="https://drive.google.com/file/d/1MZr_jOzomOmw6zHMxryshImA08L1v7P_/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-accent/50 transition-all text-white font-medium"
                            >
                                <ExternalLink size={18} className="text-accent" />
                                <span>Resume</span>
                            </motion.a>
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 212, 255, 0.5)" }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-3 px-6 py-3 bg-accent text-background rounded-full font-bold hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(0,212,255,0.3)]"
                            >
                                <span>View Work</span>
                                <ExternalLink size={18} />
                            </motion.a>
                        </motion.div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Hero;
