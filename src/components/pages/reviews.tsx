import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { FaStar } from "react-icons/fa";

interface Testimonial {
  name: string;
  role: string;
  photo: string;
  text: string;
  rating?: number; // Optional star rating 1-5
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Ahmed",
    role: "Frontend Developer",
    photo: "/assets/images/sarah.jpg",
    text: "Tamim's work is always top-notch. His attention to detail and modern design skills helped our project shine.",
    rating: 5,
  },
  {
    name: "Rafiq Hossain",
    role: "Project Manager",
    photo: "/assets/images/rafiq.jpg",
    text: "Professional, efficient, and creative. Tamim delivered exactly what we needed on time.",
    rating: 4,
  },
  {
    name: "Amina Chowdhury",
    role: "Client",
    photo: "/assets/images/amina.jpg",
    text: "Amazing collaboration and coding skills! I highly recommend Tamim for any MERN stack project.",
    rating: 5,
  },
  {
    name: "Sarah Ahmed",
    role: "Frontend Developer",
    photo: "/assets/images/sarah.jpg",
    text: "Tamim's work is always top-notch. His attention to detail and modern design skills helped our project shine.",
    rating: 5,
  },
  {
    name: "Rafiq Hossain",
    role: "Project Manager",
    photo: "/assets/images/rafiq.jpg",
    text: "Professional, efficient, and creative. Tamim delivered exactly what we needed on time.",
    rating: 4,
  },
  {
    name: "Amina Chowdhury",
    role: "Client",
    photo: "/assets/images/amina.jpg",
    text: "Amazing collaboration and coding skills! I highly recommend Tamim for any MERN stack project.",
    rating: 5,
  },
];

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

        {/* Testimonials Grid / Carousel */}
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
