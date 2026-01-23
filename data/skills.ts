import { Code2, Database, Layout, Server, Settings, Terminal, Cpu, Globe } from "lucide-react";

export interface SkillCategory {
    title: string;
    icon: any;
    skills: {
        name: string;
        level: number; // 1-100 (Used for visual bar only)
        image: string;
    }[];
}

export const skillsData: SkillCategory[] = [
    {
        title: "Languages",
        icon: Code2,
        skills: [
            { name: "Python", level: 90, image: "https://cdn.simpleicons.org/python" },
            { name: "Go", level: 88, image: "https://cdn.simpleicons.org/go" },
            { name: "JavaScript", level: 90, image: "https://cdn.simpleicons.org/javascript" },
            { name: "TypeScript", level: 85, image: "https://cdn.simpleicons.org/typescript" },
            { name: "Rust", level: 60, image: "https://cdn.simpleicons.org/rust" },
        ]
    },
    {
        title: "Frontend",
        icon: Layout,
        skills: [
            { name: "React.js", level: 90, image: "https://cdn.simpleicons.org/react" },
            { name: "Next.js 14", level: 85, image: "https://cdn.simpleicons.org/nextdotjs/white" },
            { name: "Tailwind CSS", level: 95, image: "https://cdn.simpleicons.org/tailwindcss" },
            { name: "Framer Motion", level: 80, image: "https://cdn.simpleicons.org/framer" },
            { name: "HTML5/CSS3", level: 95, image: "https://cdn.simpleicons.org/html5" }
        ]
    },
    {
        title: "Backend & Systems",
        icon: Server,
        skills: [
            { name: "Node.js", level: 70, image: "https://cdn.simpleicons.org/nodedotjs" },
            { name: "Express.js", level: 70, image: "https://cdn.simpleicons.org/express/white" },
            { name: "Go", level: 90, image: "https://cdn.simpleicons.org/go" },
            { name: "Docker", level: 70, image: "https://cdn.simpleicons.org/docker" },
            { name: "MongoDB", level: 80, image: "https://cdn.simpleicons.org/mongodb" },
            { name: "PostgreSQL", level: 85, image: "https://cdn.simpleicons.org/PostgreSQL" }
        ]
    },
    {
        title: "AI & Machine Learning",
        icon: Cpu,
        skills: [
            { name: "Scikit-learn", level: 80, image: "https://cdn.simpleicons.org/scikitlearn" },
            { name: "Numpy", level: 85, image: "https://cdn.simpleicons.org/Numpy" },
            { name: "Pandas", level: 90, image: "https://cdn.simpleicons.org/Pandas" },
            { name: "Hugging Face", level: 50, image: "https://cdn.simpleicons.org/huggingface" },
            { name: "OpenCV", level: 40, image: "https://cdn.simpleicons.org/opencv" },
            { name: "Google Earth Engine", level: 50, image: "https://cdn.simpleicons.org/googleearth" }
        ]
    },
    {
        title: "Tools & Platforms",
        icon: Settings,
        skills: [
            { name: "Git & GitHub", level: 90, image: "https://cdn.simpleicons.org/git" },
            { name: "Vercel", level: 90, image: "https://cdn.simpleicons.org/vercel/white" },
            { name: "Postman", level: 85, image: "https://cdn.simpleicons.org/postman" },
            { name: "VS Code", level: 95, image: "https://cdn.simpleicons.org/visualstudiocode" },
            { name: "Figma", level: 70, image: "https://cdn.simpleicons.org/figma" }
        ]
    }
];
