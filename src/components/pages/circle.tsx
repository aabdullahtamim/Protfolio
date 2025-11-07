import { SiCss3, SiExpress, SiHtml5, SiJavascript, SiMongodb, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import { OrbitingCircles } from "../ui/orbiting-circles"


export function Circle() {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
            <OrbitingCircles iconSize={40}>
                <SiHtml5 className="text-orange-500 text-5xl" />
                <SiCss3 className="text-blue-500 text-5xl" />
                <SiJavascript className="text-yellow-500 text-5xl" />
                <SiTailwindcss className="text-cyan-400 text-5xl" />
                <SiTypescript className="text-blue-500 text-5xl" />
            </OrbitingCircles>
            <OrbitingCircles iconSize={35} radius={100} reverse speed={2}>
                <SiMongodb className="text-green-600 text-5xl" />
                <SiExpress className="text-gray-400 text-5xl" />
                <SiReact className="text-sky-400 text-5xl" />
                <SiNodedotjs className="text-green-500 text-5xl" />
            </OrbitingCircles>
        </div>
    )
}











