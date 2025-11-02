
import About from "../about";
import Banner from "./banner"
import { Circle } from "../circle";
import { Scroll } from "../scroll"
import Skills from "../skills";
import Experience from "../Experience";
import Projects from "../Projects";
import Reviews from "../reviews";
import Services from "../Services";
import Achievements from "../Achievements";
import Contact from "../contact";
import Blog from "../blog";


function HomePage() {
    return (
        <>
            <Banner />
            <Scroll />
            <About />
            <Skills />
            <Circle />
            <Experience />
            <Projects />
            <Reviews />
            <Services />
            <Blog />
            <Achievements />
            <Contact />
        </>
    )
}

export default HomePage;