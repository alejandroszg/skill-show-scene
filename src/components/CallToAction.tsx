import { motion } from "framer-motion";
import { MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  const benefits = [
    "Fast turnaround time on all projects",
    "Personalized attention to your brand",
    "Expert team with years of experience",
    "Competitive pricing and flexible packages",
  ];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890", "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Ready to elevate your brand? Let's create something amazing together.
            Get in touch now and start your journey to success.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 text-left"
              >
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-foreground">{benefit}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              Contact via WhatsApp
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
