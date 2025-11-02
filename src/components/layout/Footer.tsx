import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-gradient-to-r from-[#A2F4FD]/20 to-background py-16">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* About / Logo */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-2xl font-bold text-foreground mb-4">Abdullah Tamim</h3>
                    <p className="text-muted-foreground">
                        Full-stack developer specializing in modern web applications with React, Node.js, TailwindCSS & TypeScript.
                    </p>
                </motion.div>

                {/* Quick Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
                    <ul className="flex flex-col gap-2 text-muted-foreground">
                        <li><a href="#about" className="hover:text-[#A2F4FD] transition-colors">About</a></li>
                        <li><a href="#skills" className="hover:text-[#A2F4FD] transition-colors">Skills</a></li>
                        <li><a href="#projects" className="hover:text-[#A2F4FD] transition-colors">Projects</a></li>
                        <li><a href="#services" className="hover:text-[#A2F4FD] transition-colors">Services</a></li>
                        <li><a href="#contact" className="hover:text-[#A2F4FD] transition-colors">Contact</a></li>
                    </ul>
                </motion.div>

                {/* Contact & Social */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <h4 className="text-lg font-semibold text-foreground mb-4">Contact</h4>
                    <div className="flex flex-col gap-2 text-muted-foreground mb-4">
                        <div className="flex items-center gap-2"><FaEnvelope className="text-[#A2F4FD]" /> youremail@example.com</div>
                        <div className="flex items-center gap-2"><FaPhone className="text-[#A2F4FD]" /> +880 123 456 789</div>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Follow Me</h4>
                    <div className="flex gap-4">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-[#A2F4FD] hover:text-gray-400 transition-colors"><FaGithub size={22} /></a>
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-[#A2F4FD] hover:text-sky-400 transition-colors"><FaLinkedin size={22} /></a>
                        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-[#A2F4FD] hover:text-blue-400 transition-colors"><FaTwitter size={22} /></a>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Copyright */}
            <motion.div
                className="mt-12 text-center text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                © {new Date().getFullYear()} Abdullah Tamim. All Rights Reserved.
            </motion.div>
        </footer>
    );
};

export default Footer;
