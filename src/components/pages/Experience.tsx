import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";

interface ExperienceItem {
    year: string;
    title: string;
    place: string;
    description: string;
}

const experiences: ExperienceItem[] = [
    {
        year: "2024 - Present",
        title: "MERN Stack Developer",
        place: "Personal & Freelance Projects",
        description:
            "Building full-stack web apps with React, Node.js, Express, and MongoDB. Focused on creating modern UI/UX and scalable backend APIs.",
    },
    {
        year: "2023 - 2024",
        title: "Frontend Developer (React)",
        place: "Self Learning & Projects",
        description:
            "Mastered React.js, Tailwind, and TypeScript by creating interactive UI components and portfolio projects.",
    },
    {
        year: "2022 - 2023",
        title: "Web Development Learner",
        place: "Online Courses & YouTube",
        description:
            "Learned HTML, CSS, JavaScript, and built my first responsive landing pages — started my developer journey.",
    },
    {
        year: "2024 ",
        title: "HSC / Alim-24 ",
        place: "West Chila Aminiya Fazil Madrasah",
        description:
            "",
    },
    {
        year: "2022",
        title: "SSC / Dakhil-22",
        place: "South taktabunia nesaria Dakhil Madrasah",
        description:
            "",
    }
];

const Experience: React.FC = () => {
    return (
        <section
            id="experience"
            className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-[#A2F4FD]/10 to-background py-20"
        >
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="text-[#A2F4FD]">Journey</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        A look into how my skills, experience, and passion have evolved over time.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative border-l border-[#A2F4FD]/40 ml-3 md:ml-10">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: i * 0.2 }}
                            className="mb-12 ml-6"
                        >
                            {/* Dot */}
                            <span className="absolute -left-[9px] mt-3 w-4 h-4 bg-[#A2F4FD] rounded-full shadow-[0_0_10px_#A2F4FD80]" />

                            <Card className="bg-card/60 backdrop-blur-md border border-border/40 hover:border-[#A2F4FD]/60 transition-all duration-300 hover:shadow-[0_0_20px_#A2F4FD40]">
                                <CardContent className="p-6">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                        <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                                        <span className="text-sm text-[#A2F4FD] font-medium">{exp.year}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-2 italic">{exp.place}</p>
                                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
