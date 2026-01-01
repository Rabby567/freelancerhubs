import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout";

const posts = [
  { id: 1, title: "The Future of Web Design", excerpt: "Exploring emerging trends...", category: "Design", date: "Jan 2024", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop" },
  { id: 2, title: "Building Scalable React Apps", excerpt: "Best practices for...", category: "Development", date: "Dec 2023", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop" },
  { id: 3, title: "UX Research Methods", excerpt: "A deep dive into user research...", category: "UX", date: "Nov 2023", image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop" },
];

export default function Blog() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide">
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">Blog</p>
          <h1 className="text-display-sm mb-12">Thoughts & Insights</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="group">
                <div className="aspect-[3/2] bg-muted overflow-hidden mb-4">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="text-muted-foreground text-sm mb-2">{post.category} • {post.date}</p>
                <h2 className="text-xl font-display font-bold group-hover:text-accent transition-colors">{post.title}</h2>
                <p className="text-muted-foreground mt-2">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
