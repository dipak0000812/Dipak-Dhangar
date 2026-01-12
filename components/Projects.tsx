"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, Github, ExternalLink, Filter, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { projectsData, projectCategories } from "../data/projects";
import { fadeInUp, staggerContainer, hoverScale, tapScale } from "../utils/animations";
import { triggerHaptic } from "../utils/haptics";
import ProjectCard from "./ui/ProjectCard";
import HorizontalProjectCard from "./ui/HorizontalProjectCard";

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All Projects');
    const [searchQuery, setSearchQuery] = useState('');
    const [showMobileFilters, setShowMobileFilters] = useState(false);

    // Filter Logic
    const filteredProjects = projectsData.filter(project => {
        const matchesCategory = activeCategory === 'All Projects'
            ? !project.featured
            : project.category.includes(activeCategory);

        const matchesSearch =
            project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

        if (activeCategory === 'All Projects') {
            return matchesCategory && matchesSearch;
        }
        return project.category.includes(activeCategory) && matchesSearch;
    });

    const flagshipProjects = projectsData.filter(p => p.featured);

    return (
        <section id="projects" className="py-20 bg-background text-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">Projects</h2>
                    <p className="text-secondary text-center max-w-2xl mx-auto mb-10">
                        A showcase of my technical journey, featuring complex systems, experimental tools, and production-ready applications.
                    </p>

                    {/* Search & Filter Container */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 relative z-20">
                        {/* Mobile: Search + Filter Button */}
                        <div className="flex md:hidden w-full gap-4">
                            <div className="relative flex-grow group">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary group-focus-within:text-accent transition-colors" size={18} />
                                <input
                                    type="text"
                                    placeholder="Search projects..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all placeholder:text-gray-500"
                                />
                            </div>
                            <button
                                onClick={() => {
                                    setShowMobileFilters(true);
                                    triggerHaptic('medium');
                                }}
                                className="px-4 py-3 bg-white/5 border border-white/10 rounded-full text-white flex items-center gap-2 active:scale-95 transition-transform"
                            >
                                <Filter size={18} />
                                <span>Filter</span>
                            </button>
                        </div>

                        {/* Desktop: Filter Tabs */}
                        <div className="hidden md:flex flex-wrap justify-center gap-2">
                            {projectCategories.map((cat) => (
                                <motion.button
                                    key={cat.id}
                                    onClick={() => {
                                        setActiveCategory(cat.id);
                                        triggerHaptic('light');
                                    }}
                                    whileHover={hoverScale}
                                    whileTap={tapScale}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat.id
                                        ? "bg-accent text-background shadow-lg shadow-accent/25"
                                        : "bg-white/5 text-secondary hover:bg-white/10"
                                        }`}
                                >
                                    {cat.label}
                                </motion.button>
                            ))}
                        </div>

                        {/* Desktop Search Bar */}
                        <div className="hidden md:block relative w-64 group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary group-focus-within:text-accent transition-colors" size={18} />
                            <input
                                type="text"
                                placeholder="Search projects..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all placeholder:text-gray-500"
                            />
                        </div>
                    </div>

                    {/* Mobile Filter Bottom Sheet */}
                    <AnimatePresence>
                        {showMobileFilters && (
                            <>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 md:hidden"
                                    onClick={() => setShowMobileFilters(false)}
                                />
                                <motion.div
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    exit={{ y: "100%" }}
                                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                    className="fixed bottom-0 left-0 right-0 bg-[#0a0a0a] border-t border-white/10 rounded-t-3xl p-6 z-50 md:hidden shadow-2xl"
                                >
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="text-xl font-bold text-white">Filter Projects</h3>
                                        <button
                                            onClick={() => setShowMobileFilters(false)}
                                            className="p-2 bg-white/5 rounded-full text-secondary"
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        {projectCategories.map((cat) => (
                                            <button
                                                key={cat.id}
                                                onClick={() => {
                                                    setActiveCategory(cat.id);
                                                    setShowMobileFilters(false);
                                                    triggerHaptic('medium');
                                                }}
                                                className={`px-4 py-3 rounded-xl text-sm font-medium flex-grow text-center transition-all ${activeCategory === cat.id
                                                    ? "bg-accent text-background shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                                                    : "bg-white/5 text-gray-300 border border-white/5"
                                                    }`}
                                            >
                                                {cat.label}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="mt-8 pt-6 border-t border-white/5 text-center">
                                        <button
                                            onClick={() => setShowMobileFilters(false)}
                                            className="w-full py-3 bg-white text-black font-bold rounded-xl"
                                        >
                                            Show Results
                                        </button>
                                    </div>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>

                    {/* Flagship Section - Mobile Swipeable Gallery */}
                    {activeCategory === 'All Projects' && searchQuery === '' && (
                        <div className="space-y-8 mb-20 md:space-y-12">
                            <h3 className="text-2xl font-bold text-accent border-l-4 border-accent pl-4 mb-4 md:mb-8 flex items-center gap-2">
                                Flagship Projects
                            </h3>

                            {/* Mobile Swipe View */}
                            <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 -mx-4 px-4 scrollbar-hide">
                                {flagshipProjects.map((project, index) => (
                                    <div key={project.id} className="min-w-[85vw] snap-center">
                                        <HorizontalProjectCard project={project} index={index} />
                                    </div>
                                ))}
                            </div>

                            {/* Desktop Stack View */}
                            <div className="hidden md:block space-y-12">
                                {flagshipProjects.map((project, index) => (
                                    <HorizontalProjectCard key={project.id} project={project} index={index} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Filtered Projects View */}
                    {activeCategory !== 'All Projects' && (
                        <div className="space-y-12">
                            {filteredProjects.length > 0 ? (
                                filteredProjects.map((project, index) => (
                                    <HorizontalProjectCard key={project.id} project={project} index={index} />
                                ))
                            ) : (
                                <div className="col-span-full text-center py-20">
                                    <p className="text-secondary text-lg">No projects found matching your criteria.</p>
                                    <button
                                        onClick={() => {
                                            setSearchQuery('');
                                            setActiveCategory('All Projects');
                                            triggerHaptic('medium');
                                        }}
                                        className="mt-4 text-accent hover:underline"
                                    >
                                        Reset Filters
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Grid Projects (Only when 'All Projects') */}
                    {activeCategory === 'All Projects' && (
                        <motion.div
                            layout
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            <AnimatePresence mode='popLayout'>
                                {filteredProjects.length > 0 ? (
                                    filteredProjects.map((project, index) => (
                                        <ProjectCard
                                            key={project.id}
                                            project={{
                                                ...project,
                                                links: {
                                                    demo: project.links.find(l => ['demo', 'live', 'website', 'web'].includes(l.type))?.url || '',
                                                    github: project.links.find(l => l.type === 'github')?.url || ''
                                                },
                                                image: project.image.startsWith('/') ? project.image : '/assets/projects/placeholder.jpg'
                                            }}
                                            index={index}
                                        />
                                    ))
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="col-span-full text-center py-20"
                                    >
                                        <p className="text-secondary text-lg">No projects found matching your criteria.</p>
                                        <button
                                            onClick={() => { setSearchQuery(''); setActiveCategory('All Projects'); }}
                                            className="mt-4 text-accent hover:underline"
                                        >
                                            Reset Filters
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    )}

                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
