import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/layout";
import { cn } from "@/lib/utils";

const categories = ["All", "Graphics", "UX/UI", "Web Development"];

const projects = [
  {
    id: 1,
    title: "Brand Identity Redesign",
    category: "Graphics",
    description: "Complete visual identity overhaul for a tech startup",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    year: "2024",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    category: "Web Development",
    description: "Full-stack e-commerce solution with custom CMS",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    year: "2024",
  },
  {
    id: 3,
    title: "Mobile App Design",
    category: "UX/UI",
    description: "iOS and Android app for a fitness platform",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    year: "2024",
  },
  {
    id: 4,
    title: "Marketing Website",
    category: "Web Development",
    description: "High-converting landing page with animations",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    year: "2023",
  },
  {
    id: 5,
    title: "Product Packaging",
    category: "Graphics",
    description: "Sustainable packaging design for organic products",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&h=600&fit=crop",
    year: "2023",
  },
  {
    id: 6,
    title: "Dashboard UI",
    category: "UX/UI",
    description: "Analytics dashboard for SaaS platform",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    year: "2023",
  },
  {
    id: 7,
    title: "Event Branding",
    category: "Graphics",
    description: "Complete branding for annual tech conference",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
    year: "2023",
  },
  {
    id: 8,
    title: "Booking Platform",
    category: "Web Development",
    description: "Real-time booking system with payment integration",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
    year: "2022",
  },
  {
    id: 9,
    title: "Banking App Redesign",
    category: "UX/UI",
    description: "Complete UX overhaul for mobile banking",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    year: "2022",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding pb-12">
        <div className="container-wide">
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4 fade-up">
            My Work
          </p>
          <h1 className="text-display mb-6 fade-up fade-up-delay-1">
            Selected
            <br />
            Projects
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl fade-up fade-up-delay-2">
            A collection of projects I've worked on, ranging from brand identities 
            and digital products to full-scale web applications.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-20 md:top-24 z-30 bg-background/95 backdrop-blur-sm border-y border-border">
        <div className="container-wide">
          <div className="flex gap-1 py-4 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors whitespace-nowrap",
                  activeCategory === category
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <Link
                key={project.id}
                to={`/portfolio/${project.id}`}
                className="project-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="project-card-overlay flex-col justify-end">
                  <div className="text-background w-full">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm uppercase tracking-wider text-background/60">
                        {project.category}
                      </p>
                      <span className="text-sm text-background/60">{project.year}</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-background/70 text-sm">
                      {project.description}
                    </p>
                  </div>
                  <ArrowUpRight className="absolute top-6 right-6 w-6 h-6 text-background transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide text-center">
          <h2 className="text-display-sm mb-6">
            Interested in working together?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            I'm always open to discussing new projects and creative opportunities.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-lg font-medium uppercase tracking-wider hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Start a Project
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
