import { MdContacts } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { Button } from "../ui/button"
import Logo from "../logo"

import { cn } from "../../lib/utils"
import {
    FileTextIcon,
    HomeIcon,
    LayersIcon,
    UsersIcon,
} from "lucide-react"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import ThemeToggle from "../theme-toggle"

// Social icons
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Link } from "react-router";
// Navigation links
type NavLink = {
    to: string;
    label: string;
    icon: React.ElementType;
    active?: boolean;
};

const navigationLinks: NavLink[] = [
    { to: "#about", label: "About", icon: HomeIcon },
    { to: "#skills", label: "Skills", icon: LayersIcon },
    { to: "#projects", label: "Projects", icon: FileTextIcon },
    { to: "#services", label: "Services", icon: UsersIcon },
    { to: "#testimonials", label: "Testimonials", icon: UsersIcon },
    { to: "#contact", label: "Contact", icon: MdOutlineMessage },
]



export default function Navbar() {

    return (
        <div className="bg-muted relative z-20">
            <header className="fixed top-2 inset-x-4 h-16 bg-gradient-to-bl from-cyan-100 via-cyan-200 to-cyan-300 border  max-w-(--breakpoint-xl) mx-auto rounded-full">
                <div className="flex h-16 items-center justify-between px-4 gap-4">
                    {/* Left side */}
                    <div className="flex flex-1 items-center gap-2">
                        {/* Mobile menu trigger */}
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button className="group size-8 md:hidden" variant="ghost" size="icon">
                                    <svg
                                        className="pointer-events-none"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M4 12L20 12" className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]" />
                                        <path d="M4 12H20" className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45" />
                                        <path d="M4 12H20" className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]" />
                                    </svg>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent align="start" className="w-36 p-1 md:hidden">
                                <NavigationMenu className="max-w-none *:w-full">
                                    <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                                        {navigationLinks.map((link, index) => {
                                            const Icon = link.icon
                                            return (
                                                <NavigationMenuItem key={index} className="w-full">
                                                    <NavigationMenuLink
                                                        href={link.to}
                                                        className={cn(
                                                            "flex-row items-center gap-2 py-1.5",
                                                            link.active && "text-primary font-medium"
                                                        )}
                                                    >
                                                        <Icon size={16} className="text-muted-foreground" aria-hidden="true" />
                                                        <span>{link.label}</span>
                                                    </NavigationMenuLink>
                                                </NavigationMenuItem>
                                            )
                                        })}
                                    </NavigationMenuList>
                                </NavigationMenu>
                            </PopoverContent>
                        </Popover>

                        <div className="flex items-center gap-6">
                            {/* Logo */}
                            <Link to="#" className="text-primary hover:text-primary/90">
                                <Logo />
                            </Link>
                            {/* Desktop navigation - icon only */}
                            <NavigationMenu className="hidden md:flex">
                                <NavigationMenuList className="gap-2">
                                    <TooltipProvider>
                                        {navigationLinks.map((link) => (
                                            <NavigationMenuItem key={link.label}>
                                                <Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <NavigationMenuLink href={link.to} className="flex size-8 items-center justify-center p-1.5">
                                                            <link.icon size={20} aria-hidden="true" />
                                                            <span className="sr-only">{link.label}</span>
                                                        </NavigationMenuLink>
                                                    </TooltipTrigger>
                                                    <TooltipContent side="bottom" className="px-2 py-1 text-xs">
                                                        <p>{link.label}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </NavigationMenuItem>
                                        ))}
                                    </TooltipProvider>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-5.5">


                        {/* Social icons */}
                        <div className="hidden md:flex gap-2 ml-2 ">
                            <Link to="https://github.com/aabdullahtamim" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#A2F4FD] hover:bg-[#0e0f0f] p-2 rounded-full transition-colors">
                                <FaGithub size={20} />
                            </Link>
                            <Link to="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#A2F4FD] hover:bg-[#0e0f0f] p-2 rounded-full transition-colors">
                                <FaLinkedin size={20} />
                            </Link>
                            <Link to="/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#A2F4FD] hover:bg-[#0e0f0f] p-2 rounded-full transition-colors">
                                <MdContacts size={20} />
                            </Link>
                        </div>

                        {/* Theme toggle */}
                        <ThemeToggle />
                    </div>
                </div>
            </header>
        </div>
    )
}
