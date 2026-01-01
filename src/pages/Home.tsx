import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/layout";

const services = [
  {
    number: "01",
    title: "Graphics Design",
    description: "Visual identities, illustrations, and print design that capture your brand essence.",
  },
  {
    number: "02",
    title: "UX/UI Design",
    description: "User-centered digital experiences that are intuitive, beautiful, and functional.",
  },
  {
    number: "03",
    title: "Web Development",
    description: "Modern, performant websites and applications built with cutting-edge technology.",
  },
];

const clients = [
  "ACME Corp",
  "TechStart",
  "DesignCo",
  "Innovate",
  "Creative Labs",
  "Digital First",
];

const featuredProjects = [
  {
    id: 1,
    title: "Brand Identity Redesign",
    category: "Graphics",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Mobile App Design",
    category: "UX/UI",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
  },
];

const roles = ["Designer", "Developer", "Creator"];

export default function Home() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center section-padding">
        <div className="container-wide">
          <div className="max-w-5xl">
            <p className="text-muted-foreground text-sm uppercase tracking-widest mb-6 fade-up">
              Freelance Creative
            </p>
            <h1 className="text-display mb-8">
              <span className="block fade-up">I'm a</span>
              <span className="block text-accent fade-up fade-up-delay-1 overflow-hidden h-[1.1em]">
                <span
                  key={currentRole}
                  className="block animate-slide-up"
                >
                  {roles[currentRole]}
                </span>
              </span>
              <span className="block fade-up fade-up-delay-2">
                crafting digital experiences
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 fade-up fade-up-delay-3">
              I help brands and businesses create impactful visual identities, 
              intuitive user experiences, and modern web solutions.
            </p>
            <div className="flex flex-wrap gap-4 fade-up fade-up-delay-4">
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 font-medium uppercase tracking-wider hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                View My Work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-foreground px-6 py-3 font-medium uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Marquee */}
      <section className="py-12 border-y border-border overflow-hidden">
        <div className="flex">
          <div className="flex animate-marquee">
            {[...clients, ...clients].map((client, index) => (
              <span
                key={index}
                className="mx-8 text-2xl md:text-3xl font-display font-bold text-muted-foreground/30 whitespace-nowrap"
              >
                {client}
              </span>
            ))}
          </div>
          <div className="flex animate-marquee">
            {[...clients, ...clients].map((client, index) => (
              <span
                key={index}
                className="mx-8 text-2xl md:text-3xl font-display font-bold text-muted-foreground/30 whitespace-nowrap"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20">
            <div>
              <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">
                What I Do
              </p>
              <h2 className="text-display-sm">Services</h2>
            </div>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mt-4 md:mt-0"
            >
              Have a project in mind?
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

          <div className="space-y-0">
            {services.map((service, index) => (
              <div
                key={service.number}
                className="group py-8 md:py-12 border-t border-border last:border-b flex flex-col md:flex-row md:items-center gap-4 md:gap-8 cursor-pointer hover:bg-secondary/50 transition-colors -mx-4 px-4 md:-mx-8 md:px-8"
              >
                <span className="text-muted-foreground text-sm font-medium">
                  {service.number}
                </span>
                <h3 className="text-2xl md:text-4xl font-display font-bold flex-1 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground max-w-sm">
                  {service.description}
                </p>
                <ArrowUpRight className="w-6 h-6 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20">
            <div>
              <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">
                Selected Work
              </p>
              <h2 className="text-display-sm">Featured Projects</h2>
            </div>
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mt-4 md:mt-0"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/portfolio/${project.id}`}
                className="project-card group aspect-[4/3]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="project-card-overlay">
                  <div className="text-background">
                    <p className="text-sm uppercase tracking-wider text-background/60 mb-1">
                      {project.category}
                    </p>
                    <h3 className="text-xl font-display font-bold">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">
                About Me
              </p>
              <h2 className="text-display-sm mb-6">
                Creative mind with a passion for pixels
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                With over 5 years of experience in the digital space, I've had the 
                pleasure of working with startups and established brands alike. My 
                approach combines strategic thinking with creative execution.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                I believe great design is about solving problems, not just making 
                things look pretty. Every project is an opportunity to create 
                something meaningful and impactful.
              </p>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-foreground font-medium hover:text-accent transition-colors"
              >
                Learn More About Me
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-muted overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop"
                  alt="Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6">
                <p className="text-4xl font-display font-bold">5+</p>
                <p className="text-sm uppercase tracking-wider">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-wide text-center">
          <p className="text-background/60 text-sm uppercase tracking-widest mb-4">
            Ready to start a project?
          </p>
          <h2 className="text-display-sm mb-8 max-w-3xl mx-auto">
            Let's create something amazing together
          </h2>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 text-lg font-medium uppercase tracking-wider hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
