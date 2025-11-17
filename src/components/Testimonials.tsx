import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    content:
      "Working with this agency transformed our online presence completely. The website they created exceeded all our expectations and our conversion rates have tripled!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, Urban Boutique",
    content:
      "Their branding expertise helped us stand out in a crowded market. The visual identity they created perfectly captures our essence and resonates with our target audience.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, GreenLife",
    content:
      "The social media strategy they implemented has been phenomenal. Our engagement increased by 400% and we've built a thriving community around our brand.",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Owner, Artisan Coffee Co",
    content:
      "The photography work is absolutely stunning. Every image tells a story and perfectly showcases our products. Our sales have significantly improved since the rebrand.",
    rating: 5,
  },
  {
    name: "Lisa Anderson",
    role: "VP Marketing, FitFusion",
    content:
      "Their ads management expertise delivered incredible ROI. We saw a 300% increase in qualified leads within the first month. Highly recommend their services!",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Creative Director, Nexus Agency",
    content:
      "True professionals who understand both aesthetics and functionality. The web development work is clean, fast, and exactly what we needed to scale our business.",
    rating: 5,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reviews" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about working with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-border">
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-secondary mb-4 opacity-50" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-bold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
