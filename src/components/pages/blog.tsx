import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";

interface BlogPost {
    title: string;
    summary: string;
    date: string;
    link: string;
}

const blogPosts: BlogPost[] = [
    {
        title: "Modern MERN Stack Apps",
        summary: "Tips and tricks to build modern, scalable MERN stack web applications.",
        date: "Oct 2025",
        link: "#",
    },
    {
        title: "React + TailwindUI Best Practices",
        summary: "Learn how to write clean, maintainable, and responsive UI code with React and Tailwind.",
        date: "Sep 2025",
        link: "#",
    },
    {
        title: "Animating Websites with Framer Motion",
        summary: "Step-by-step guide to add modern, smooth animations to your web projects.",
        date: "Aug 2025",
        link: "#",
    },
];

const Blog: React.FC = () => {
    return (
        <section id="blog" className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-[#A2F4FD]/10 to-background py-20">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                {/* Section Title */}
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="text-[#A2F4FD]">Blog</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Insights, tutorials, and tips from my web development journey.
                    </p>
                </motion.div>

                {/* Blog Grid */}
                <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                    {blogPosts.map((post, i) => (
                        <motion.div key={i} whileHover={{ scale: 1.03, y: -3 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Card className="bg-card/60 backdrop-blur-md border border-border/40 hover:border-[#A2F4FD]/60 hover:shadow-[0_0_15px_#A2F4FD40] transition-all duration-300">
                                <CardContent className="p-6">
                                    <span className="text-sm text-[#A2F4FD] mb-2 block">{post.date}</span>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">{post.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-4">{post.summary}</p>
                                    <a href={post.link} className="text-[#A2F4FD] font-medium hover:underline">
                                        Read More
                                    </a>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Blog;
