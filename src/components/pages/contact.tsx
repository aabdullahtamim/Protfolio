import { motion } from "framer-motion";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact: React.FC = () => {
    return (
        <section
            id="contact"
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
                        Get <span className="text-[#A2F4FD]">In Touch</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Have a project in mind or just want to say hi? Fill out the form or reach me directly.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Contact Form */}
                    <motion.form
                        className="flex flex-col gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        onSubmit={(e) => {
                            e.preventDefault();
                            alert("Thanks for reaching out! I will contact you soon.");
                        }}
                    >
                        <Input type="text" placeholder="Your Name" required className="bg-card/50 text-foreground" />
                        <Input type="email" placeholder="Your Email" required className="bg-card/50 text-foreground" />
                        <Textarea placeholder="Your Message" required className="bg-card/50 text-foreground" rows={5} />
                        <Button className="bg-[#A2F4FD] hover:bg-[#7edcf5] text-black mt-2">Send Message</Button>
                    </motion.form>

                    {/* Contact Info */}
                    <motion.div
                        className="flex flex-col gap-6 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-4">
                            <FaEnvelope className="text-[#A2F4FD] text-2xl" />
                            <span className="text-foreground">youremail@example.com</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaPhone className="text-[#A2F4FD] text-2xl" />
                            <span className="text-foreground">+880 123 456 789</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaLinkedin className="text-[#A2F4FD] text-2xl hover:text-sky-400 transition-colors" />
                            <span className="text-foreground">linkedin.com/in/yourprofile</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaGithub className="text-[#A2F4FD] text-2xl hover:text-gray-400 transition-colors" />
                            <span className="text-foreground">github.com/yourusername</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
