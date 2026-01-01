import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout";

const skills = [
  { category: "Design", items: ["Figma", "Adobe Creative Suite", "Sketch", "Prototyping"] },
  { category: "Development", items: ["React", "TypeScript", "Next.js", "Node.js"] },
  { category: "Other", items: ["Project Management", "Brand Strategy", "Motion Design"] },
];

const testimonials = [
  { quote: "Exceptional work and great communication throughout the project.", author: "Sarah Chen", role: "CEO, TechStart" },
  { quote: "Delivered beyond our expectations. Highly recommended!", author: "Michael Ross", role: "Founder, DesignCo" },
];

export default function About() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide">
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">About Me</p>
          <h1 className="text-display-sm mb-8">Creative professional with a passion for design & code</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>With over 5 years in the digital space, I specialize in creating impactful brand identities, intuitive user experiences, and modern web applications.</p>
              <p>My approach combines strategic thinking with creative execution, ensuring every project delivers real results.</p>
            </div>
            <div className="aspect-square bg-muted overflow-hidden">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop" alt="Portrait" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <h2 className="text-display-sm mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <div key={skill.category}>
                <h3 className="font-display font-bold text-xl mb-4">{skill.category}</h3>
                <ul className="space-y-2 text-muted-foreground">{skill.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <h2 className="text-display-sm mb-12">What Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="p-8 bg-secondary">
                <p className="text-xl mb-6">"{t.quote}"</p>
                <p className="font-bold">{t.author}</p>
                <p className="text-muted-foreground text-sm">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-foreground text-background text-center">
        <div className="container-wide">
          <h2 className="text-display-sm mb-8">Let's work together</h2>
          <Link to="/contact" className="group inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 font-medium uppercase tracking-wider hover:bg-accent transition-colors">
            Get in Touch <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
