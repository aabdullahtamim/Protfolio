import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-router";

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-gradient-to-r from-[#A2F4FD]/20 to-background py-16">
            <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4">

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

                {/* Terms & Policies */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <h4 className="text-lg font-semibold text-foreground mb-4"> Terms & Policies </h4>
                    <ul className="flex flex-col gap-2 text-muted-foreground">
                        <li><a href="#terms" className="hover:text-[#A2F4FD] transition-colors">Terms & Conditions </a></li>
                        <li><a href="#privacy" className="hover:text-[#A2F4FD] transition-colors" > Privacy Policy </a> </li>
                        <li>
                            <a href="#cookies"
                                className="hover:text-[#A2F4FD] transition-colors"
                            >
                                Cookie Policy
                            </a>
                        </li>
                        <li>
                            <a href="#refund"
                                className="hover:text-[#A2F4FD] transition-colors"
                            >
                                Refund Policy
                            </a>
                        </li>
                        <li>
                            <a href="#support"
                                className="hover:text-[#A2F4FD] transition-colors"
                            >
                                Support & Help
                            </a>
                        </li>
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
                        <div className="flex items-center gap-2 hover:text-[#A2F4FD]"><FaEnvelope className="text-[#A2F4FD]" />aabdullahtamim01@gmail.com</div>
                        <div className="flex items-center gap-2 hover:text-[#A2F4FD]"><FaPhone className="text-[#A2F4FD]" /> +880 1604-515250</div>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Follow Me</h4>
                    <div className="flex gap-4">
                        <Link to="https://www.facebook.com/profile.php?id=61572713171754" target="_blank" rel="noopener noreferrer" className="text-[#A2F4FD] hover:text-gray-400 transition-colors"><FaFacebook size={22} /></Link>
                        <Link to="https://github.com/aabdullahtamim" target="_blank" rel="noopener noreferrer" className="text-[#A2F4FD] hover:text-gray-400 transition-colors"><FaGithub size={22} /></Link>
                        <Link to="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-[#A2F4FD] hover:text-sky-400 transition-colors"><FaLinkedin size={22} /></Link>
                        <Link to="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-[#A2F4FD] hover:text-blue-400 transition-colors"><FaTwitter size={22} /></Link>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Copyright */}
            <motion.div
                className="mt-12 border-t py-4 text-center text-md text-muted-foreground"
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
