import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { FaCode, FaLightbulb, FaLayerGroup, FaRocket, FaBullseye, FaEye } from "react-icons/fa";

const About: React.FC = () => {
    const data = [
        {
            title: "Experience",
            desc: "Over a year of real-world experience developing modern, scalable web applications from scratch.",
            icon: <FaCode className="text-[#A2F4FD] text-4xl mb-4 mx-auto" />,
        },
        {
            title: "Expertise",
            desc: "Specialized in the MERN stack with a solid grasp of API integration, performance optimization, and responsive design.",
            icon: <FaLayerGroup className="text-[#A2F4FD] text-4xl mb-4 mx-auto" />,
        },
        {
            title: "Focus",
            desc: "Turning ideas into smooth digital experiences through clean code, smart logic, and intuitive UI.",
            icon: <FaLightbulb className="text-[#A2F4FD] text-4xl mb-4 mx-auto" />,
        },
        {
            title: "Approach",
            desc: "A balance of design thinking and technical precision — creating web apps that look great and perform flawlessly.",
            icon: <FaRocket className="text-[#A2F4FD] text-4xl mb-4 mx-auto" />,
        },
        {
            title: "Goal",
            desc: "To build meaningful products that make an impact and provide real value to users.",
            icon: <FaBullseye className="text-[#A2F4FD] text-4xl mb-4 mx-auto" />,
        },
        {
            title: "Vision",
            desc: "Keep evolving as a developer, exploring new technologies, and contributing to creative, user-focused projects.",
            icon: <FaEye className="text-[#A2F4FD] text-4xl mb-4 mx-auto" />,
        },
    ];

    return (
        <section
            id="about"
            className="w-full flex items-center justify-center bg-gradient-to-b from-background via-[#A2F4FD]/20 to-background py-20"
        >
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        About <span className="text-[#A2F4FD]">Me</span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-muted-foreground text-lg leading-relaxed">
                        Hi, I’m <span className="text-[#A2F4FD] font-semibold">Abdullah Tamim</span> —
                        a passionate <span className="font-semibold">MERN Stack Developer</span> from Bangladesh 🇧🇩.
                        I love building modern, responsive, and user-friendly web applications with clean code and
                        delightful UI interactions. I’m always exploring new technologies and crafting digital experiences
                        that make an impact.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
                >
                    {data.map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
                        >
                            <Card
                                className="bg-card/60 backdrop-blur-md border border-border/40 hover:border-[#A2F4FD]/60 
                           hover:shadow-[0_0_25px_#A2F4FD40] transition-all duration-300 rounded-2xl"
                            >
                                <CardContent className="text-center py-10 px-6">
                                    {item.icon}
                                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted-foreground">{item.desc}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;
