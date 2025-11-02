import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";

const About: React.FC = () => {
    return (
        <section
            id="about"
            className="w-full  flex items-center justify-center bg-gradient-to-b from-background via-[#A2F4FD]/20 to-background py-20"
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
                    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {[
                        { title: "Experience", desc: "1+ year building full-stack apps" },
                        { title: "Experience", desc: "1+ year building full-stack apps" },
                        { title: "Focus", desc: "MERN Stack, REST APIs, UI/UX" },
                        { title: "Focus", desc: "MERN Stack, REST APIs, UI/UX" },
                        { title: "Goal", desc: "Create products people love to use" },
                        { title: "Goal", desc: "Create products people love to use" },
                    ].map((item, i) => (
                        <Card
                            key={i}
                            className="bg-card/60 backdrop-blur-md border border-border/40 hover:border-[#A2F4FD]/60 hover:shadow-[0_0_20px_#A2F4FD40] transition-all duration-300"
                        >
                            <CardContent className="text-center py-8 px-6">
                                <h3 className="text-xl font-semibold mb-3 text-foreground">
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground">{item.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;
