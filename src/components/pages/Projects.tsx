import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { SiReact, SiTailwindcss, SiMongodb, SiNodedotjs, SiTypescript, SiRedux } from "react-icons/si";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface Project {
    title: string;
    description: string;
    image?: string; // optional
    techStack: React.ReactNode[];
    liveLink?: string;
    githubLink?: string;
}

const projects: Project[] = [
    {
        title: "Splitimmo ",
        description: "This is Realstate Website built with React, TypeScript, TailwindCSS, and Shadcn UI.",
        image: "./images/Screenshot_1.png",
        techStack: [<SiReact key="react" />, <SiTypescript key="ts" />, <SiTailwindcss key="tailwind" />],
        liveLink: "https://splitimmo.vercel.app/",
        githubLink: "https://github.com/aabdullahtamim/Splitimmo",
    },
    {
        title: "Madrasa Website",
        image: "./images/Screenshot_2.png",
        description: "Full-stack MERN application with product management, authentication, and payment integration.",
        techStack: [<SiReact key="react" />, <SiNodedotjs key="node" />, <SiMongodb key="mongo" />, <SiRedux key="redux" />],
        liveLink: "https://al-jami-at-uloomil-madarisil-qawmiy.vercel.app/",
        githubLink: "https://github.com/username/ecommerce-app",
    },
    {
        title: "Task Manager App",
        image: "./images/splitimmo.png",
        description: "A task manager to track todos, using React, Tailwind, and localStorage for persistence.",
        techStack: [<SiReact key="react" />, <SiTailwindcss key="tailwind" />],
        liveLink: "https://taskmanager-demo.com",
        githubLink: "https://github.com/username/task-manager",
    },
    {
        title: "Portfolio Website",
        image: "./images/Screenshot_3.png",
        description: "My personal portfolio built with React, TypeScript, TailwindCSS, and Shadcn UI.",
        techStack: [<SiReact key="react" />, <SiTypescript key="ts" />, <SiTailwindcss key="tailwind" />],
        liveLink: "https://your-portfolio-live.com",
        githubLink: "https://github.com/username/portfolio",
    },
    {
        title: "E-commerce App",
        image: "./images/splitimmo.png",
        description: "Full-stack MERN application with product management, authentication, and payment integration.",
        techStack: [<SiReact key="react" />, <SiNodedotjs key="node" />, <SiMongodb key="mongo" />, <SiRedux key="redux" />],
        liveLink: "https://ecommerce-demo.com",
        githubLink: "https://github.com/username/ecommerce-app",
    },
    {
        title: "Task Manager App",
        image: "./images/splitimmo.png",
        description: "A task manager to track todos, using React, Tailwind, and localStorage for persistence.",
        techStack: [<SiReact key="react" />, <SiTailwindcss key="tailwind" />],
        liveLink: "https://taskmanager-demo.com",
        githubLink: "https://github.com/username/task-manager",
    },
];

const Projects: React.FC = () => {
    return (
        <section
            id="projects"
            className="w-full flex items-center justify-center bg-gradient-to-b from-background via-[#A2F4FD]/10 to-background py-20"
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
                        My <span className="text-[#A2F4FD]">Projects</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Some of the projects I’ve worked on — from personal experiments to full-stack applications.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                        >
                            <Card className="bg-card/60 backdrop-blur-md border border-border/40 hover:border-[#A2F4FD]/60 hover:shadow-[0_0_20px_#A2F4FD40] transition-all duration-300">
                                <CardContent className="flex flex-col justify-between p-6">
                                    {/* Project Image (optional) */}
                                    {project.image && (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="rounded-md mb-4 object-cover h-60 w-full"
                                        />
                                    )}

                                    {/* Project Info */}
                                    <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.techStack.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="text-lg flex items-center gap-1 text-[#A2F4FD]"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-12 mt-auto">
                                        {project.liveLink && (
                                            <a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-[#A2F4FD] hover:underline font-medium"
                                            >
                                                Live <FaExternalLinkAlt />
                                            </a>
                                        )}
                                        {project.githubLink && (
                                            <a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-[#A2F4FD] hover:underline font-medium"
                                            >
                                                GitHub <FaGithub />
                                            </a>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
