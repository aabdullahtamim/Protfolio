import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { FaAward, FaCertificate, FaTrophy } from "react-icons/fa";

interface Achievement {
    title: string;
    description: string;
    date: string;
    icon: React.ReactNode;
    link?: string; // Optional certificate link
}

const achievements: Achievement[] = [
    {
        title: "MERN Stack Certificate",
        description: "Completed a comprehensive MERN Stack development course covering full-stack web applications.",
        date: "June 2023",
        icon: <FaCertificate className="text-[#A2F4FD]" />,
        link: "https://example.com/certificate/mern",
    },
    {
        title: "Top Performer Award",
        description: "Recognized as a top performer in freelance web development projects with excellent client feedback.",
        date: "December 2023",
        icon: <FaAward className="text-[#A2F4FD]" />,
    },
    {
        title: "Project Showcase Winner",
        description: "Won first place in an online web development competition for innovative full-stack projects.",
        date: "March 2024",
        icon: <FaTrophy className="text-[#A2F4FD]" />,
    },
];

const Achievements: React.FC = () => {
    return (
        <section
            id="achievements"
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
                        My <span className="text-[#A2F4FD]">Achievements</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Milestones, awards, and certifications that highlight my journey and skills in web development.
                    </p>
                </motion.div>

                {/* Achievements Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {achievements.map((ach, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Card className="bg-card/60 backdrop-blur-md border border-border/40 hover:border-[#A2F4FD]/60 hover:shadow-[0_0_20px_#A2F4FD40] transition-all duration-300">
                                <CardContent className="flex flex-col items-center text-center p-6">
                                    <div className="text-5xl mb-4">{ach.icon}</div>
                                    <h3 className="text-xl font-semibold text-foreground mb-2">{ach.title}</h3>
                                    <span className="text-sm text-[#A2F4FD] mb-2">{ach.date}</span>
                                    <p className="text-muted-foreground text-sm mb-4">{ach.description}</p>
                                    {ach.link && (
                                        <a
                                            href={ach.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#A2F4FD] hover:underline font-medium"
                                        >
                                            View Certificate
                                        </a>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Achievements;
