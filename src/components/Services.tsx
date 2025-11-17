import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Palette,
  TrendingUp,
  Share2,
  Megaphone,
  Camera,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Custom websites and web applications built with cutting-edge technologies. Responsive, fast, and optimized for all devices.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "Stunning visual designs that capture attention and communicate your message effectively across all platforms.",
  },
  {
    icon: TrendingUp,
    title: "Brand Management",
    description:
      "Strategic brand development and management to build a strong, consistent identity that resonates with your audience.",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "Engaging social media strategies that grow your community and build meaningful connections with your followers.",
  },
  {
    icon: Megaphone,
    title: "Ads Management",
    description:
      "Data-driven advertising campaigns across multiple platforms to maximize ROI and reach your target audience.",
  },
  {
    icon: Camera,
    title: "Photography",
    description:
      "Professional photography services for products, events, and branding. High-quality images that tell your story.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive creative solutions tailored to elevate your brand and
            drive meaningful results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border-border">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                      <ServiceIcon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
