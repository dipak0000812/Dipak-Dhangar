export interface Education {
    id: string;
    institution: string;
    degree: string;
    duration: string;
    grade: string;
    image: string;
    description?: string;
}

export const educationData: Education[] = [
    {
        id: "btech",
        institution: "R. C. Patel Institute of Technology, Shirpur",
        degree: "B.Tech in Computer Science (AIML)",
        duration: "2024 - 2028",
        grade: "SGPA: 7.68",
        image: "/assets/education/college.png", // Placeholder
        description: "Specialized in Artificial Intelligence and Machine Learning."
    },
    {
        id: "12th",
        institution: "Dr. P.R. Ghogarey Jr. College, Shirpur",
        degree: "Higher Secondary (12th)",
        duration: "2022 - 2024",
        grade: "Percentage: 83%",
        image: "/assets/education/college_12.png", // Placeholder
        description: "Major in Science (Physics, Chemistry, Mathematics)."
    },
    {
        id: "10th",
        institution: "K.V.T.R. Madyamic Vidyalaya, Wadi BK",
        degree: "Secondary School (10th)",
        duration: "Completed 2022",
        grade: "Percentage: 91.60%",
        image: "/assets/education/school.png", // Placeholder
        description: "Foundation in General Sciences and Mathematics."
    }
];
