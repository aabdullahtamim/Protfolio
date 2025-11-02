import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { FaCode, FaLaptopCode, FaServer, FaMobileAlt, FaDatabase, FaPaintBrush } from "react-icons/fa";

interface Service {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const services: Service[] = [
    {
        title: "Frontend Development",
        description:
            "Creating responsive, modern, and interactive user interfaces with React, TypeScript, TailwindCSS, and Shadcn UI.",
        icon: <FaLaptopCode className="text-[#A2F4FD]" />,
    },
    {
        title: "Backend Development",
        description:
            "Designing and building REST APIs, authentication systems, and database integrations with Node.js, Express, and MongoDB.",
        icon: <FaServer className="text-[#A2F4FD]" />,
    },
    {
        title: "Full Stack Applications",
        description:
            "Developing complete web applications using the MERN stack with attention to scalability, performance, and security.",
        icon: <FaCode className="text-[#A2F4FD]" />,
    },
    {
        title: "UI/UX Design",
        description:
            "Crafting modern and user-friendly designs with Figma, Shadcn UI components, TailwindCSS, and smooth animations.",
        icon: <FaPaintBrush className="text-[#A2F4FD]" />,
    },
    {
        title: "Database Management",
        description:
            "Efficient data modeling and database design using MongoDB, ensuring data integrity and performance.",
        icon: <FaDatabase className="text-[#A2F4FD]" />,
    },
    {
        title: "Responsive Web Apps",
        description:
            "Ensuring websites are fully responsive and work seamlessly across all devices and screen sizes.",
        icon: <FaMobileAlt className="text-[#A2F4FD]" />,
    },
];

const Services: React.FC = () => {
    return (
        <section
            id="services"
            className="w-full mt-8 flex items-center justify-center bg-gradient-to-b from-background via-[#A2F4FD]/10 to-background py-20"
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
                        What <span className="text-[#A2F4FD]">I Do</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Explore the wide range of services and expertise I provide to help you build modern, scalable, and user-friendly web applications.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Card className="bg-card/60 backdrop-blur-md border border-border/40 hover:border-[#A2F4FD]/60 hover:shadow-[0_0_20px_#A2F4FD40] transition-all duration-300">
                                <CardContent className="flex flex-col items-center p-6 text-center">
                                    <div className="text-5xl mb-4">{service.icon}</div>
                                    <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
                                    <p className="text-muted-foreground text-sm">{service.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
