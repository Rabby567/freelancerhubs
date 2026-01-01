import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "Twitter", href: "https://twitter.com" },
];

const navLinks = [
  { label: "Work", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background section-padding">
      <div className="container-wide">
        {/* CTA Section */}
        <div className="mb-16 md:mb-24">
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
            Available for freelance work
          </p>
          <h2 className="text-display-sm mb-8">
            Let's work
            <br />
            together
          </h2>
          <a
            href="mailto:hello@yourname.com"
            className="group inline-flex items-center gap-3 text-xl md:text-2xl font-medium link-underline"
          >
            hello@yourname.com
            <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
              Connect
            </h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-background/80">
              <li>Graphics Design</li>
              <li>UX/UI Design</li>
              <li>Web Development</li>
              <li>Brand Identity</li>
            </ul>
          </div>

          <div>
            <h3 className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
              Location
            </h3>
            <p className="text-background/80">
              Based in Your City
              <br />
              Working Worldwide
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {currentYear} YOURNAME. All rights reserved.
          </p>
          <p className="text-background/60 text-sm">
            Crafted with passion
          </p>
        </div>
      </div>
    </footer>
  );
}
