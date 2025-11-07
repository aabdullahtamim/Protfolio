import { motion } from "framer-motion";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { FaEnvelope, FaPhone, FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact: React.FC = () => {
    const formRef = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formRef.current) return;

        emailjs
            .sendForm(
                "service_1lly42i", // 🔹 তোমার EmailJS service ID
                "template_5i74wxd", // 🔹 তোমার Template ID
                formRef.current,
                "jPRYeYchx0-RAOepy" // 🔹 তোমার Public Key
            )
            .then(
                () => {
                    alert("✅ Message Sent Successfully! I’ll contact with You as soon as possible.");
                    formRef.current?.reset();
                },
                (error) => {
                    console.error(error.text);
                    alert("❌ Failed to send. Try again later.");
                }
            );
    };

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
                        Have a <span className="text-[#A2F4FD]">Question?</span>
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-semibold text-[#7edcf5] mb-4">
                        Just Send a Message
                    </h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Have a project in mind or just want to say hi? Fill out the form or reach me directly.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Left side form (2/3 width) */}
                    <motion.form
                        ref={formRef}
                        onSubmit={sendEmail}
                        className="md:col-span-2 flex flex-col gap-4 bg-card/40 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-lg border border-border"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input name="first_name" type="text" placeholder="First Name*" required />
                            <Input name="last_name" type="text" placeholder="Last Name*" required />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input name="email" type="email" placeholder="Email*" required />
                            <Input name="phone" type="text" placeholder="Phone*" />
                        </div>
                        <Textarea name="message" placeholder="Write your message here*" required rows={5} />
                        <Button type="submit" className="bg-[#A2F4FD] hover:bg-[#7edcf5] text-black mt-2 w-fit">
                            SEND MESSAGE →
                        </Button>
                    </motion.form>

                    {/* Right side info (same as before) */}
                    <motion.div
                        className="bg-gradient-to-bl from-cyan-200 via-blue-200 to-blue-200 animate-gradient-x text-black rounded-2xl p-8 flex flex-col justify-center shadow-xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h4 className="text-2xl font-semibold mb-2">Get In Touch</h4>
                        <p className="text-sm opacity-80 mb-6">
                            Have a project in mind or just want to say hi? Fill out the form or reach me directly.
                        </p>
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-4 hover:text-white">
                                <FaEnvelope className="text-[#A2F4FD] text-2xl" />
                                <span>aabdullahtamim01@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-4 hover:text-white">
                                <FaPhone className="text-[#A2F4FD] text-2xl" />
                                <span>+880 1604-515250</span>
                            </div>
                            <div className="flex items-center gap-4 hover:text-white">
                                <FaFacebook className="text-[#A2F4FD] text-2xl" />
                                <Link to="https://www.facebook.com/profile.php?id=61572713171754" target="_blank">
                                    Abdullah Tamim
                                </Link>
                            </div>
                            <div className="flex items-center gap-4 hover:text-white">
                                <FaGithub className="text-[#A2F4FD] text-2xl" />
                                <Link to="https://github.com/aabdullahtamim" target="_blank">
                                    GitHub Profile
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
