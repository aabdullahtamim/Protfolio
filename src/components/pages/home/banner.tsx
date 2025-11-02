import { ArrowUpRight, CirclePlay } from "lucide-react";
import { Button } from "../../ui/button";
import { AnimatedSpan, Terminal, TypingAnimation } from "../../ui/terminal";
import { BorderBeam } from "../../ui/border-beam";

// Floating shape component
const FloatingShape = ({ className }: { className?: string }) => (
    <div className={`absolute rounded-full opacity-30 blur-3xl ${className}`} />
);

const Banner = () => {
    return (
        <div className="min-h-[750px] flex items-center justify-center overflow-hidden relative">

            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-500 animate-gradient-x opacity-40 -z-10" />

            {/* Subtle floating shapes */}
            <FloatingShape className="w-32 h-32 top-10 left-10 bg-white animate-pulse-slow" />
            <FloatingShape className="w-24 h-24 bottom-20 right-20 bg-pink-300 animate-pulse-slower" />
            <FloatingShape className="w-40 h-40 top-1/2 -left-20 bg-yellow-300 animate-pulse-slow" />

            <div className="max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-[43%_57%] gap-12 px-6 py-12 lg:py-0">

                {/* Left Column */}
                <div className=" mt-10 h-full flex flex-col gap-3 relative z-10">
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
                    <div className="mt-8 flex flex-wrap gap-5">
                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-full text-base relative overflow-hidden border-white/80 bg-cyan-400 text-black hover:bg-purple-300  transition-all cursor-pointer"
                        >
                            <BorderBeam duration={8} size={100} />
                            Hire Me <ArrowUpRight className="ml-2 h-5 w-5" />
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-full text-base shadow-none relative overflow-hidden border-cyan-400 hover:bg-cyan-100 dark:hover:bg-cyan-900/30 cursor-pointer"
                        >
                            <BorderBeam duration={8} size={100} />
                            <CirclePlay className="mr-2 h-5 w-5" /> Download CV
                        </Button>
                    </div>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-2 mt-4">
                        {["React.js", "Node.js", "MongoDB", "Express.js", "TypeScript", "TailwindCSS", "Shadcn UI"].map((skill) => (
                            <span
                                key={skill}
                                className="px-3 py-1 border dark:border-cyan-400 rounded-full bg-white/20 text-green-500 font-medium text-sm backdrop-blur-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Right Column - Terminal */}
                <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-xl p-5 relative z-10 border border-white/20  
                 dark:bg-accent/10 shadow-lg  overflow-hidden
                ">
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







(
    <section className="relative mt-32 flex items-center justify-center overflow-hidden px-6 py-16 md:py-24 lg:py-32">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-300 bg-[length:200%_200%] animate-gradient-x opacity-60 -z-10" />

        {/* Floating Accent Shapes */}
        <div className="absolute w-32 h-32 top-10 left-10 bg-white/20 rounded-full blur-2xl animate-pulse-slow" />
        <div className="absolute w-24 h-24 bottom-20 right-20 bg-cyan-300/20 rounded-full blur-2xl animate-pulse-slower" />

        <div className="relative max-w-(--breakpoint-xl) w-full grid lg:grid-cols-[45%_55%] gap-10 md:gap-16 items-center">
            {/* === LEFT CONTENT === */}
            <div className="z-10">
                <span className="block text-base md:text-lg font-semibold text-cyan-800 dark:text-cyan-200">
                    Welcome to my website 👋
                </span>

                <h1 className="mt-4 text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
                    Hi, I’m <span className="text-cyan-600 dark:text-cyan-300">Abdullah Tamim</span>
                </h1>

                <p className="mt-4 max-w-[50ch] text-base md:text-lg text-muted-foreground leading-relaxed">
                    A passionate <strong>Full Stack MERN Developer</strong> dedicated to building interactive,
                    dynamic, and scalable web applications using modern technologies.
                </p>

                <p className="mt-2 text-sm md:text-base text-muted-foreground">
                    I focus on clean code, beautiful UI/UX, and seamless performance for real-world projects.
                </p>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-wrap gap-4">
                    <Button
                        size="lg"
                        className="rounded-full text-base relative overflow-hidden bg-white text-black hover:bg-cyan-100 transition-all"
                    >
                        <BorderBeam duration={8} size={100} />
                        Hire Me <ArrowUpRight className="ml-2 h-5 w-5" />
                    </Button>

                    <Button
                        variant="outline"
                        size="lg"
                        className="rounded-full text-base shadow-none relative overflow-hidden border-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/30"
                    >
                        <BorderBeam duration={8} size={100} />
                        <CirclePlay className="mr-2 h-5 w-5" /> Download CV
                    </Button>
                </div>
            </div>

            {/* === RIGHT SIDE TERMINAL === */}
            <div className="relative w-full h-full bg-accent/30 dark:bg-accent/10 rounded-xl backdrop-blur-sm shadow-lg p-4 sm:p-6 lg:p-8 overflow-hidden">
                <Terminal>
                    <TypingAnimation>&gt; npm create protfolio@latest init</TypingAnimation>
                    <AnimatedSpan className="text-green-500">
                        ✔ Checking environment and dependencies...
                    </AnimatedSpan>
                    <AnimatedSpan className="text-green-500">
                        ✔ Setting up MERN Stack (MongoDB, Express, React, Node).
                    </AnimatedSpan>
                    <AnimatedSpan className="text-green-500">
                        ✔ Integrating Tailwind CSS, Shadcn UI, and TypeScript.
                    </AnimatedSpan>
                    <AnimatedSpan className="text-green-500">
                        ✔ Validating routes and API connections with RTK Query.
                    </AnimatedSpan>
                    <AnimatedSpan className="text-blue-500">
                        ℹ Updated Files: src/App.tsx, src/components/ui, src/workflows.ts
                    </AnimatedSpan>
                    <TypingAnimation className="text-muted-foreground">
                        🚀 Successfully deployed Abdullah Tamim’s Portfolio!
                    </TypingAnimation>
                    <TypingAnimation className="text-muted-foreground">
                        Ready to explore your next project?
                    </TypingAnimation>
                </Terminal>
            </div>
        </div>
    </section>
);

