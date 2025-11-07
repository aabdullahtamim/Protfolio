import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { FaStar } from "react-icons/fa";


// ✅ Define TypeScript interface
interface Testimonial {
  name: string;
  role: string;
  photo: string;
  text: string;
  rating?: number; // optional rating (1–5)
}

// ✅ Typed testimonials array
const testimonials: Testimonial[] = [
  {
    name: "Nabil Khan",
    role: "UI/UX Designer",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Collaborating with Tamim was an incredible experience. His ability to turn design concepts into pixel-perfect, responsive layouts truly stands out.",
    rating: 5,
  },
  {
    name: "Rafiq Hossain",
    role: "Senior Project Manager",
    photo: "https://randomuser.me/api/portraits/men/12.jpg",
    text: "Tamim’s professionalism and problem-solving mindset made a huge difference to our project. He’s efficient, creative, and always delivers high-quality results on time.",
    rating: 5,
  },
  {
    name: "Amina Chowdhury",
    role: "Startup Founder",
    photo: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "Tamim exceeded our expectations. His frontend expertise, clean coding style, and modern design sense brought our vision to life flawlessly.",
    rating: 5,
  },
  {
    name: "Sarah Ahmed",
    role: "Backend Engineer",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Tamim’s attention to detail and seamless integration with backend systems made collaboration effortless. A true professional who knows his craft well.",
    rating: 5,
  },
  {
    name: "Hamid Hossain",
    role: "Technical Lead",
    photo: "https://randomuser.me/api/portraits/men/52.jpg",
    text: "From performance optimization to design refinement, Tamim handled every challenge with confidence and skill. Highly reliable and skilled developer.",
    rating: 4,
  },
  {
    name: "Arman Chowdhury",
    role: "Entrepreneur",
    photo: "https://randomuser.me/api/portraits/men/7.jpg",
    text: "Working with Tamim was a game-changer. His eye for design and quick execution made our product look and perform exceptionally well.",
    rating: 5,
  },

];

// ✅ Main Component
const Reviews: React.FC = () => {
  return (
    <section
      id="testimonials"
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
            What <span className="text-[#A2F4FD]">People Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Feedback from clients, colleagues, and collaborators on my work and approach.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {testimonials.map((testi, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-card/60 backdrop-blur-md border border-border/40 hover:border-[#A2F4FD]/60 hover:shadow-[0_0_20px_#A2F4FD40] transition-all duration-300">
                <CardContent className="flex flex-col items-center p-6">
                  {/* User Photo */}
                  <img
                    src={testi.photo}
                    alt={testi.name}
                    className="w-20 h-20 rounded-full mb-4 object-cover border-2 border-[#A2F4FD]"
                  />

                  {/* Stars */}
                  {testi.rating && (
                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: testi.rating }).map((_, idx) => (
                        <FaStar key={idx} className="text-[#A2F4FD]" />
                      ))}
                    </div>
                  )}

                  {/* Testimonial Text */}
                  <p className="text-center text-muted-foreground mb-4">{testi.text}</p>

                  {/* Name & Role */}
                  <h3 className="text-lg font-semibold text-foreground">{testi.name}</h3>
                  <span className="text-sm text-[#A2F4FD]">{testi.role}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
