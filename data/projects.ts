export interface Project {
    id: string;
    title: string;
    description: string;
    category: string[]; // Changed to array of strings
    image: string;
    tags: string[];
    links: {
        type: 'github' | 'live' | 'demo' | 'case-study' | 'doc' | 'web';
        label: string;
        url: string;
    }[];
    featured?: boolean;
}

export const projectsData: Project[] = [
    // --- FLAGSHIP ---
    {
        id: "learnmate-2.0",
        title: "LearnMate 2.0",
        description: "AI-powered personalized education platform representing a complete LMS solution. Generates custom learning roadmaps, features AI tutoring, and gamifies the study experience.",
        category: ["Full Stack", "Machine Learning"],
        image: "/assets/projects/learnmate.png",
        tags: ["Next.js 14", "TypeScript", "Tailwind, OpenAI API", "MongoDB", "Framer Motion", "Shadcn UI"],
        links: [
            { type: "github", label: "GitHub", url: "https://github.com/dipak0000812/learnmate-2.0" },
            { type: "live", label: "Live Demo", url: "https://learnmate-2-0-fg4h.vercel.app/" }
        ],
        featured: true
    },
    {
        id: "home-price-prediction",
        title: "Zeo-Estimate (Home Price)",
        description: "Enterprise-grade real estate valuation system using Random Forest algorithms and geospatial clustering to predict property prices with high accuracy.",
        category: ["Machine Learning"],
        image: "/assets/projects/zeoestimate.png",
        tags: ["Python", "Scikit-learn", "Random Forest", "Pandas", "NumPy", "Flask", "Docker"],
        links: [
            { type: "github", label: "GitHub", url: "https://github.com/dipak0000812/Home-price-prediction" },
            { type: "live", label: "Live Demo", url: "https://home-price-prediction677777.vercel.app/" }
        ],
        featured: true
    },
    {
        id: "solana-streaks",
        title: "SolanaStreaks",
        description: "Decentralized prediction market built on Solana where users bet on streaks. Implements secure smart contracts and a modern web interface.",
        category: ["Web3 & Blockchain", "Full Stack"],
        image: "/assets/projects/solanastreaks.png",
        tags: ["Next.js", "TypeScript", "Rust", "Solana Web3.js", "Anchor", "Tailwind CSS"],
        links: [
            { type: "github", label: "GitHub", url: "https://github.com/dipak0000812/SolanaStreaks" },
            { type: "live", label: "Live Demo", url: "https://solana-streaks-6ynn.vercel.app/" }
        ],
        featured: true
    },
    {
        id: "swift-swap",
        title: "SwiftSwap DEX V3",
        description: "A production-ready Decentralized Exchange (DEX) featuring AMM logic, liquidity pools, and seamless wallet integration. Built with React, Hardhat, and Wagmi.",
        category: ["Web3 & Blockchain", "Full Stack"],
        image: "/assets/projects/swiftswap.png",
        tags: ["React", "Hardhat", "Solidity", "TypeScript", "Wagmi", "Tailwind CSS"],
        links: [
            { type: "github", label: "GitHub", url: "https://github.com/dipak0000812/swift-swap" },
            { type: "live", label: "Live Demo", url: "https://swift-swap-sigma.vercel.app/" }
        ],
        featured: true
    },
    // --- ML PROJECTS ---
    {
        id: "stock-price-prediction",
        title: "Stock Price Prediction",
        description: "Financial analytics dashboard utilizing LSTM deep learning models to forecast stock trends with technical indicator visualization.",
        category: ["Machine Learning"],
        image: "/assets/projects/stock-price-prediction.png",
        tags: ["Python", "TensorFlow", "Keras", "LSTM", "Streamlit", "Plotly", "YFinance"],
        links: [
            { type: "github", label: "GitHub", url: "https://github.com/dipak0000812/Stock-Price_Prediction" }
        ]
    },
    {
        id: "forest-connectivity",
        title: "Forest Connectivity Analysis",
        description: "Spatial analysis tool using Google Earth Engine to map and analyze forest connectivity corridors for conservation planning.",
        category: ["Machine Learning"],
        image: "/assets/projects/forest-connectivity.png",
        tags: ["Python", "Google Earth Engine", "Geospatial Analysis", "Jupyter", "Matplotlib", "Pandas"],
        links: [
            { type: "github", label: "GitHub", url: "https://github.com/dipak0000812/forest-connectivity-analysis" }
        ]
    },
    {
        id: "resume-ai-analyzer",
        title: "Resume AI Analyzer",
        description: "NLP-driven tool for analyzing resumes against job descriptions, providing compatibility scores and keyword optimization.",
        category: ["Machine Learning", "Tools & Utilities"],
        image: "/assets/projects/resume-analyzer.png",
        tags: ["Python", "NLP", "Spacy", "Streamlit", "Scikit-learn", "Pandas"],
        links: [
            { type: "github", label: "GitHub", url: "https://github.com/dipak0000812/resume-ai-analyzer" }
        ]
    },
    // --- WEB3 ---
    {
        id: "zeoverify",
        title: "ZeoVerify",
        description: "Decentralized document verification system utilizing Blockchain for immutable records and OCR for data extraction.",
        category: ["Web3 & Blockchain"],
        image: "/assets/projects/zeoverify.jpg",
        tags: ["Python", "OpenCV", "Tesseract OCR", "Solidity", "Web3.py", "Flask", "React"],
        links: [
            { type: "github", label: "GitHub", url: "https://github.com/dipak0000812/zeoverify" }
        ]
    },
    // --- FULL STACK & OTHERS ---
    {
        id: "zeolike-india",
        title: "ZeoLike",
        description: "A real estate platform built with React, Node.js, and Express.",
        category: ["Full Stack"],
        image: "/assets/projects/zeolike-real-estate.png",
        tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Redux"],
        links: [
            { type: "github", label: "GitHub", url: "https://github.com/dipak0000812/zeolike-india" }
        ]
    },
    {
        id: "portfolio",
        title: "Portfolio Website",
        description: "Modern, responsive portfolio website featuring advanced animations, themes, and project showcases.",
        category: ["Front End"],
        image: "/assets/projects/portfolio-screenshot.png",
        tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
        links: [
            { type: "github", label: "GitHub", url: "https://github.com/dipak0000812/Dipak-Dhangar" },
            { type: "live", label: "Live Demo", url: "https://dipak-dhangar.vercel.app/" }
        ]
    },
    {
        id: "zeoscale-schemes-qa",
        title: "ZeoScale Schemes QA",
        description: "QA dataset and tool interface for government schemes information retrieval.",
        category: ["Tools & Utilities"],
        image: "/assets/projects/zeoscale.png",
        tags: ["Jupyter Notebook", "Python", "Data Analysis", "QA"],
        links: [
            { type: "github", label: "GitHub", url: "https://github.com/dipak0000812/zeoscale-schemes-qa" }
        ]
    }
];

export const projectCategories = [
    { id: 'All Projects', label: 'All Projects' },
    { id: 'Machine Learning', label: 'Machine Learning' },
    { id: 'Full Stack', label: 'Full Stack' },
    { id: 'Front End', label: 'Front End' },
    { id: 'Web3 & Blockchain', label: 'Web3 & Blockchain' },
    { id: 'Tools & Utilities', label: 'Tools & Utilities' }
];
