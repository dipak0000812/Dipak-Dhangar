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
            { name: "C++", level: 80, image: "https://cdn.simpleicons.org/cplusplus" },
            { name: "Solidity", level: 65, image: "https://cdn.simpleicons.org/solidity" }
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
            { name: "Node.js", level: 85, image: "https://cdn.simpleicons.org/nodedotjs" },
            { name: "Express.js", level: 85, image: "https://cdn.simpleicons.org/express/white" },
            { name: "FastAPI", level: 75, image: "https://cdn.simpleicons.org/fastapi" },
            { name: "Flask", level: 80, image: "https://cdn.simpleicons.org/flask/white" },
            { name: "Docker", level: 70, image: "https://cdn.simpleicons.org/docker" },
            { name: "MongoDB", level: 85, image: "https://cdn.simpleicons.org/mongodb" }
        ]
    },
    {
        title: "AI & Machine Learning",
        icon: Cpu,
        skills: [
            { name: "Scikit-learn", level: 90, image: "https://cdn.simpleicons.org/scikitlearn" },
            { name: "TensorFlow", level: 75, image: "https://cdn.simpleicons.org/tensorflow" },
            { name: "PyTorch", level: 70, image: "https://cdn.simpleicons.org/pytorch" },
            { name: "Hugging Face", level: 75, image: "https://cdn.simpleicons.org/huggingface" },
            { name: "OpenCV", level: 70, image: "https://cdn.simpleicons.org/opencv" },
            { name: "Google Earth Engine", level: 65, image: "https://cdn.simpleicons.org/googleearth" }
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
