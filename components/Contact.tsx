"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState("");

    // EmailJS Configuration
    // EmailJS Configuration
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_j0wmq1";
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "dservice_j0wmq1d";
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "o_aqzYdrydc7ULYCh";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setLoading(true);
        setStatus('idle');
        setErrorMessage("");

        try {
            await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                formRef.current,
                PUBLIC_KEY
            );
            setStatus('success');
            formRef.current.reset();
        } catch (error: any) {
            console.error("EmailJS Error:", error);
            setStatus('error');
            setErrorMessage("Failed to send message. Please check the Template ID or try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-black text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-secondary max-w-xl mx-auto">
                        Have a project in mind or want to discuss the latest tech trends? Feel free to reach out!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <motion.div variants={fadeInUp} className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-lg text-accent border border-white/10">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-1">Email</h3>
                                <a href="mailto:dhangardip09@gmail.com" className="text-secondary hover:text-white transition-colors">dhangardip09@gmail.com</a>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-lg text-green-400 border border-white/10">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-1">Phone</h3>
                                <p className="text-secondary">+91 9689517791</p>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-lg text-purple-400 border border-white/10">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-1">Location</h3>
                                <p className="text-secondary">Shirpur, Maharashtra, India</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6 border border-white/5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">Name</label>
                                <input
                                    type="text"
                                    name="user_name" // EmailJS standard name
                                    id="name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/10 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-gray-600"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">Email</label>
                                <input
                                    type="email"
                                    name="user_email" // EmailJS standard name
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/10 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-gray-600"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message" // EmailJS standard name
                                    rows={4}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/10 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-gray-600 resize-none"
                                    placeholder="Write your message here..."
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={loading}
                                className={`w-full py-4 font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg ${status === 'success' ? 'bg-green-500 text-white hover:bg-green-600' :
                                    status === 'error' ? 'bg-red-500 text-white hover:bg-red-600' :
                                        'bg-accent text-background hover:bg-cyan-400 shadow-accent/20 cursor-pointer'
                                    } disabled:opacity-70 disabled:cursor-not-allowed`}
                            >
                                {loading ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" />
                                        Sending...
                                    </>
                                ) : status === 'success' ? (
                                    <>
                                        <CheckCircle2 size={20} />
                                        Message Sent!
                                    </>
                                ) : status === 'error' ? (
                                    <>
                                        <AlertCircle size={20} />
                                        Failed - Try Again
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        Send Message
                                    </>
                                )}
                            </motion.button>

                            {status === 'error' && (
                                <p className="text-red-400 text-sm text-center mt-2">{errorMessage}</p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
