"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ExternalLink, Code2, Terminal, Instagram } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { fadeInUp, hoverScale, tapScale } from "../utils/animations";
import { TypeAnimation } from 'react-type-animation';
import AnimatedBackground from "./ui/AnimatedBackground";
import ParticleBackground from "./ui/ParticleBackground";

const Hero = () => {
    const socialLinks = [
        { icon: <Github size={24} />, href: "https://github.com/dipak0000812", label: "Github" },
        { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/dipak-dhangar/", label: "LinkedIn" },
        { icon: <Instagram size={24} />, href: "https://www.instagram.com/__dipak__o_9/", label: "Instagram" },
        { icon: <Twitter size={24} />, href: "https://x.com/DipakDhangar09", label: "Twitter" },
        { icon: <Mail size={24} />, href: "mailto:dhangardip09@gmail.com", label: "Email" },
    ];

    const [isBooting, setIsBooting] = useState(true);
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
                    await wait(30);
                }
                setBootText(prev => prev + "\n");
                if (postDelay) await wait(postDelay);
            };

            const print = async (text: string, postDelay = 0) => {
                if (!isMounted) return;
                setBootText(prev => prev + text + "\n");
                if (postDelay) await wait(postDelay);
            };

            const clear = async () => {
                if (!isMounted) return;
                setBootText("");
            };

            // Boot Sequence
            await type("$ npm run intro", 500);
            await print("> dipak@1.0.0", 50);
            await print("> Engineering student • Founder • Open Source Contributor", 1000);
            await clear();

            await type("$ go env FOCUS", 400);
            await print("BACKEND SYSTEMS", 50);
            await print("AI / MACHINE LEARNING", 50);
            await print("WEB3 & BLOCKCHAIN", 1000);
            await clear();

            await type("$ kubectl describe mindset", 400);
            await print("ownership", 50);
            await print("clarity", 50);
            await print("production-first", 1000);
            await clear();

            await type("$ make start", 600);

            if (isMounted) setIsBooting(false);
        };

        runBootSequence();
        return () => { isMounted = false; };
    }, []);

    return (
        <section id="hero" className="min-h-screen relative flex items-center bg-background overflow-hidden">
            <AnimatedBackground />

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

            <ParticleBackground />

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
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="h-[2px] w-12 bg-accent rounded-full" />
                                <span className="text-accent font-semibold tracking-widest text-sm uppercase">Welcome to my world</span>
                            </div>

                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                                Hi, I am{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 pb-2 inline-block">
                                    Dipak
                                </span>
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="bg-[#1e1e1e] border border-white/10 rounded-xl font-mono shadow-2xl relative overflow-hidden group max-w-lg w-full"
                        >
                            <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-white/5">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                                </div>
                            </div>

                            <div className="p-4 md:p-5 text-sm md:text-base text-gray-200 min-h-[140px] flex flex-col justify-center">
                                {isBooting ? (
                                    <div className="whitespace-pre-wrap leading-relaxed">
                                        {bootText}
                                        <span className="animate-pulse inline-block w-2.5 h-4 bg-gray-500 ml-1 align-middle"></span>
                                    </div>
                                ) : (
                                    <div className="flex items-center">
                                        <span className="text-accent mr-3 select-none">$</span>
                                        <TypeAnimation
                                            sequence={[
                                                'Backend Developer',
                                                1000,
                                                'Aspiring Software Engineer',
                                                1000,
                                                'Open Source Enthusiast',
                                                1000,
                                                'AI & Blockchain Explorer',
                                                1000
                                            ]}
                                            wrapper="span"
                                            speed={50}
                                            style={{ display: 'inline-block', fontWeight: 'bold' }}
                                            repeat={Infinity}
                                        />
                                    </div>
                                )}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap items-center gap-4 md:gap-6 pt-2"
                        >
                            <motion.a
                                href="mailto:dhangardip09@gmail.com"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-accent/50 transition-all text-white group font-medium overflow-hidden"
                            >
                                <Mail size={20} className="text-accent group-hover:rotate-12 transition-transform" />
                                <span className="relative z-10">Let's Talk</span>
                            </motion.a>
                            <motion.a
                                href="https://drive.google.com/file/d/1MZr_jOzomOmw6zHMxryshImA08L1v7P_/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-accent/50 transition-all text-white group font-medium overflow-hidden"
                            >
                                <ExternalLink size={20} className="text-accent group-hover:rotate-45 transition-transform" />
                                <span className="relative z-10">Resume</span>
                            </motion.a>
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 212, 255, 0.5)" }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-accent text-background rounded-full font-bold hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(0,212,255,0.3)] relative group"
                            >
                                <span>View Work</span>
                                <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center lg:justify-end items-center h-full min-h-[400px] lg:min-h-[600px] perspective-1000 mt-12 lg:mt-0"
                    >
                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            whileHover={{ scale: 1.02, rotateY: 5 }}
                            className="relative w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[420px] h-[380px] sm:h-[480px] lg:h-[520px] z-10"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent to-purple-600 rounded-3xl blur-[2px] opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="absolute inset-[2px] bg-background rounded-[22px] overflow-hidden z-20">
                                <Image
                                    src="/assets/profile/hero-new.jpg"
                                    alt="Dipak Dhangar"
                                    fill
                                    className="object-cover object-center transform hover:scale-110 transition-transform duration-700"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                            </div>

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/20 rounded-full blur-[100px] -z-10 animate-pulse" />
                        </motion.div>
                    </motion.div>

                </div>
            </div>

        </section>
    );
};

export default Hero;
