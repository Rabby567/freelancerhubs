import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { Layout } from "@/components/layout";

const projects = [
  {
    id: 1,
    title: "Brand Identity Redesign",
    category: "Graphics",
    client: "TechStart Inc.",
    year: "2024",
    description: "Complete visual identity overhaul for a tech startup looking to establish a more mature and professional brand presence.",
    challenge: "The client needed to transition from a playful startup aesthetic to a more sophisticated brand that would appeal to enterprise clients while maintaining their innovative spirit.",
    solution: "We developed a comprehensive brand system including a refined logo, custom typography, and a carefully curated color palette that balances professionalism with creativity.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
    ],
    services: ["Brand Strategy", "Logo Design", "Visual Identity", "Brand Guidelines"],
    link: "https://example.com",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    category: "Web Development",
    client: "Fashion Forward",
    year: "2024",
    description: "Full-stack e-commerce solution with custom CMS and advanced inventory management for a growing fashion brand.",
    challenge: "Building a scalable platform that could handle high traffic during sales while providing a seamless shopping experience across all devices.",
    solution: "Developed a headless e-commerce architecture with React frontend and custom backend, featuring real-time inventory sync and AI-powered product recommendations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop",
    ],
    services: ["Web Development", "E-commerce", "CMS Development", "API Integration"],
    link: "https://example.com",
  },
  {
    id: 3,
    title: "Mobile App Design",
    category: "UX/UI",
    client: "FitLife",
    year: "2024",
    description: "iOS and Android app design for a fitness platform focused on personalized workout plans and nutrition tracking.",
    challenge: "Creating an engaging interface that motivates users to maintain their fitness routines while providing complex data in an accessible way.",
    solution: "Designed a gamified experience with achievement systems, social features, and intuitive data visualization that makes tracking progress enjoyable.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
    ],
    services: ["UX Research", "UI Design", "Prototyping", "Design System"],
    link: "https://example.com",
  },
];

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <Layout>
        <div className="section-padding container-wide text-center">
          <h1 className="text-display-sm mb-6">Project Not Found</h1>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </Layout>
    );
  }

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pb-12">
        <div className="container-wide">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">
                {project.category}
              </p>
              <h1 className="text-display-sm mb-6">{project.title}</h1>
              <p className="text-lg text-muted-foreground">
                {project.description}
              </p>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">
                    Client
                  </p>
                  <p className="font-medium">{project.client}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">
                    Year
                  </p>
                  <p className="font-medium">{project.year}</p>
                </div>
              </div>
              <div>
                <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">
                  Services
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="px-3 py-1 bg-secondary text-sm"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground font-medium hover:text-accent transition-colors"
                >
                  View Live Project
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="container-wide mb-16">
        <div className="aspect-video bg-muted overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">
                The Challenge
              </p>
              <p className="text-lg">{project.challenge}</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">
                The Solution
              </p>
              <p className="text-lg">{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Images */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <div key={index} className="aspect-[4/3] bg-muted overflow-hidden">
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-wide text-center">
          <p className="text-background/60 text-sm uppercase tracking-widest mb-4">
            Next Project
          </p>
          <Link
            to={`/portfolio/${nextProject.id}`}
            className="group inline-block"
          >
            <h2 className="text-display-sm mb-4 group-hover:text-accent transition-colors">
              {nextProject.title}
            </h2>
            <span className="inline-flex items-center gap-2 text-background/60 group-hover:text-background transition-colors">
              View Project
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
