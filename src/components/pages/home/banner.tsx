import { ArrowUpRight, CirclePlay } from "lucide-react";
import { Button } from "../../ui/button";
import { AnimatedSpan, Terminal, TypingAnimation } from "../../ui/terminal";

// Floating shape component
const FloatingShape = ({ className }: { className?: string }) => (
    <div className={`absolute rounded-full opacity-30 blur-3xl ${className}`} />
);

const Banner = () => {
    return (
        <div className="min-h-[800px] flex items-center justify-center overflow-hidden relative">

            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-500 animate-gradient-x opacity-40 -z-10" />

            {/* Subtle floating shapes */}
            <FloatingShape className="w-32 h-32 top-10 left-10 bg-white animate-pulse-slow" />
            <FloatingShape className="w-24 h-24 bottom-20 right-20 bg-pink-300 animate-pulse-slower" />
            <FloatingShape className="w-40 h-40 top-1/2 -left-20 bg-yellow-300 animate-pulse-slow" />

            <div className="max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-[43%_57%] gap-12 px-6 py-12 lg:py-0">

                {/* Left Column */}
                <div className=" mt-12 h-full flex flex-col gap-3 relative z-10">
                    {/* Pre-heading */}
                    <span className="text-lg md:text-2xl font-medium text-cyan-50 tracking-tight">
                        Full Stack Developer & MERN Specialist
                    </span>

                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-[3rem] xl:text-[3.5rem] font-extrabold leading-tight tracking-tighter bg-gradient-to-r from-white to-cyan-200 text-transparent bg-clip-text">
                        I'm Abdullah Tamim
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-white/90 max-w-[600px]">
                        I build modern, responsive web applications with <strong>React.js, Node.js, MongoDB, and TypeScript</strong>. Passionate about UI/UX, clean code, and scalable architecture.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <Button size="lg" className="rounded-full relative overflow-hidden flex items-center gap-2 hover:scale-105 transition-transform">
                            <BorderBeam duration={8} size={120} />
                            Hire Me <ArrowUpRight className="h-5 w-5" />
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-full relative overflow-hidden flex items-center gap-2 hover:scale-105 transition-transform border-white text-black dark:text-white"
                        >
                            <BorderBeam duration={8} size={120} />
                            <CirclePlay className="h-5 w-5" /> Download CV
                        </Button>
                    </div>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-2 mt-4">
                        {["React.js", "Node.js", "MongoDB", "TypeScript", "TailwindCSS", "Shadcn UI"].map((skill) => (
                            <span
                                key={skill}
                                className="px-3 py-1 border rounded-full bg-white/20 text-green-500 font-medium text-sm backdrop-blur-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Right Column - Terminal */}
                <div className="w-full h-full bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 relative z-10 border border-white/20">
                    <Terminal>
                        <TypingAnimation>&gt; npm new portfolio@latest init</TypingAnimation>
                        <AnimatedSpan className="text-green-400">
                            ✔ Checking system environment...
                        </AnimatedSpan>
                        <AnimatedSpan className="text-green-400">
                            ✔ Verifying MERN Stack setup (MongoDB,
                        </AnimatedSpan>
                        <AnimatedSpan className="text-green-400">
                            Express.js, React.js, Node.js)
                        </AnimatedSpan>
                        <AnimatedSpan className="text-green-400">
                            ✔ Validating Tailwind CSS and Shadcn UI
                        </AnimatedSpan>
                        <AnimatedSpan className="text-green-400">
                            ✔ Configuring TypeScript & Zod validation
                        </AnimatedSpan>
                        <AnimatedSpan className="text-green-400">
                            ✔ Connecting API routes with RTK Query
                        </AnimatedSpan>
                        <AnimatedSpan className="text-green-400">
                            ✔ Integrating n8n Automation Workflows
                        </AnimatedSpan>
                        <AnimatedSpan className="text-green-400">
                            ✔ Optimizing project performance
                        </AnimatedSpan>
                        <AnimatedSpan className="text-green-400">
                            ✔ Installing all dependencies
                        </AnimatedSpan>
                        <AnimatedSpan className="text-blue-400">
                            <span>ℹ Updated 3 files:</span>
                            <span className="pl-2">- src/App.tsx</span>
                            <span className="pl-2">- src/lib/skills.ts</span>
                            <span className="pl-2">- src/workflows/n8n.ts</span>
                        </AnimatedSpan>
                        <TypingAnimation className="text-black/90 dark:text-white ">
                            Success! Full Stack Developer initialized.
                        </TypingAnimation>
                        <TypingAnimation className="text-black/90 dark:text-white">
                            You may now hire Abdullah Tamim 🚀
                        </TypingAnimation>
                    </Terminal>
                </div>
            </div>
        </div>
    );
};

export default Banner;
