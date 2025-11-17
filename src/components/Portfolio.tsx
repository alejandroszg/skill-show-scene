import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";
import portfolioWeb1 from "@/assets/portfolio-web1.jpg";
import portfolioWeb2 from "@/assets/portfolio-web2.jpg";
import portfolioBrand1 from "@/assets/portfolio-brand1.jpg";
import portfolioBrand2 from "@/assets/portfolio-brand2.jpg";
import portfolioPhoto1 from "@/assets/portfolio-photo1.jpg";
import portfolioSocial1 from "@/assets/portfolio-social1.jpg";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  details: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Modern E-commerce Platform",
    category: "web development",
    image: portfolioWeb1,
    description: "A fully responsive e-commerce website with advanced filtering",
    details:
      "Built a comprehensive e-commerce platform with real-time inventory management, advanced search and filtering capabilities, secure payment integration, and a seamless checkout experience. The site achieved a 98/100 PageSpeed score and increased conversion rates by 45%.",
    technologies: ["React", "Node.js", "Stripe", "MongoDB"],
  },
  {
    id: 2,
    title: "Luxury Brand Identity",
    category: "branding",
    image: portfolioBrand1,
    description: "Complete brand redesign for premium cosmetics company",
    details:
      "Developed a sophisticated brand identity system including logo design, color palette, typography guidelines, and packaging design. Created a cohesive visual language that elevated the brand's premium positioning and increased brand recognition by 65%.",
    technologies: ["Illustrator", "Photoshop", "InDesign"],
  },
  {
    id: 3,
    title: "Professional Studio Photography",
    category: "photo shoot",
    image: portfolioPhoto1,
    description: "High-end product photography for leading fashion brand",
    details:
      "Executed a comprehensive photography campaign featuring studio portraits, product shots, and lifestyle imagery. Delivered over 500 professionally edited photos that enhanced the brand's visual storytelling and increased social media engagement by 120%.",
    technologies: ["Canon 5D Mark IV", "Profoto", "Lightroom"],
  },
  {
    id: 4,
    title: "Responsive Corporate Website",
    category: "web development",
    image: portfolioWeb2,
    description: "Multi-device corporate site with CMS integration",
    details:
      "Designed and developed a fully responsive corporate website with custom CMS, multi-language support, and advanced SEO optimization. Implemented seamless animations and intuitive navigation that reduced bounce rate by 35% and improved user engagement.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS"],
  },
  {
    id: 5,
    title: "Social Media Campaign",
    category: "social media",
    image: portfolioSocial1,
    description: "Viral social media strategy for lifestyle brand",
    details:
      "Created and managed a comprehensive social media campaign across Instagram, Facebook, and TikTok. Developed engaging content calendars, interactive stories, and influencer partnerships that grew the follower base by 250% and generated 2M+ impressions monthly.",
    technologies: ["Instagram", "Facebook", "TikTok", "Canva"],
  },
  {
    id: 6,
    title: "Fashion Brand Redesign",
    category: "branding",
    image: portfolioBrand2,
    description: "Modern rebrand for sustainable fashion label",
    details:
      "Reimagined a fashion brand's entire visual identity with a focus on sustainability and modern aesthetics. Developed new logo, brand guidelines, packaging design, and marketing collateral that helped the brand achieve a 40% increase in market share.",
    technologies: ["Adobe Creative Suite", "Figma", "Blender"],
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    "all",
    "web development",
    "branding",
    "photo shoot",
    "social media",
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our latest projects and see how we've helped businesses
            achieve their goals.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <Badge className="mb-3 bg-secondary text-foreground">
                      {project.category}
                    </Badge>
                    <h3 className="text-xl font-bold text-primary-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-primary-foreground/90 text-sm">
                      {project.description}
                    </p>
                    <ExternalLink className="absolute top-6 right-6 text-primary-foreground" size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold mb-2">
                  {selectedProject.title}
                </DialogTitle>
                <Badge className="w-fit bg-secondary text-foreground">
                  {selectedProject.category}
                </Badge>
              </DialogHeader>
              <div className="mt-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {selectedProject.details}
                </p>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
