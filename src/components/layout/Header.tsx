import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Work", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      )}
    >
      <div className="container-wide">
        <nav className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link
            to="/"
            className="font-display text-xl md:text-2xl font-bold tracking-tight hover:text-accent transition-colors"
          >
            YOURNAME
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "link-underline text-sm font-medium uppercase tracking-wider transition-colors",
                  location.pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="mailto:hello@yourname.com"
              className="btn-magnetic bg-foreground text-background px-5 py-2.5 text-sm font-medium uppercase tracking-wider hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-20 bg-background z-40 md:hidden transition-all duration-300",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <nav className="container-wide py-8 flex flex-col gap-6">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "text-4xl font-display font-bold transition-all duration-300",
                location.pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
                isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              )}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="mailto:hello@yourname.com"
            className={cn(
              "mt-4 inline-block bg-foreground text-background px-6 py-3 text-lg font-medium uppercase tracking-wider w-fit transition-all duration-300",
              isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            Let's Talk
          </a>
        </nav>
      </div>
    </header>
  );
}
