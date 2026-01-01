import { useState } from "react";
import { Layout } from "@/components/layout";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">Get in Touch</p>
              <h1 className="text-display-sm mb-6">Let's create something amazing</h1>
              <p className="text-lg text-muted-foreground mb-8">Have a project in mind? I'd love to hear about it.</p>
              <div className="space-y-4">
                <a href="mailto:hello@yourname.com" className="flex items-center gap-3 text-lg hover:text-accent transition-colors">
                  <Mail className="w-5 h-5" /> hello@yourname.com
                </a>
                <p className="flex items-center gap-3 text-lg text-muted-foreground">
                  <MapPin className="w-5 h-5" /> Your City, Country
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full px-4 py-3 bg-secondary border-0 focus:ring-2 focus:ring-accent outline-none" />
              <input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="w-full px-4 py-3 bg-secondary border-0 focus:ring-2 focus:ring-accent outline-none" />
              <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full px-4 py-3 bg-secondary border-0 focus:ring-2 focus:ring-accent outline-none">
                <option value="">Select a service</option>
                <option>Graphics Design</option>
                <option>UX/UI Design</option>
                <option>Web Development</option>
              </select>
              <textarea placeholder="Your Message" rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required className="w-full px-4 py-3 bg-secondary border-0 focus:ring-2 focus:ring-accent outline-none resize-none" />
              <button type="submit" className="group inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 font-medium uppercase tracking-wider hover:bg-accent transition-colors">
                Send Message <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
