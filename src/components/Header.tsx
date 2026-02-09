import { Link, useLocation } from "react-router-dom";
import { Heart, Menu, X, Star } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Behavior Guides", path: "/behaviour-guides" },
  { label: "AI Coach", path: "/parenting-chat" },
  { label: "Track", path: "/tracking" },
  { label: "Learn", path: "/learn" },
];

export default function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/90 backdrop-blur-md border-b border-border/60">
      <div className="container-wide mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-extrabold text-foreground">The Kid Decoder</h1>
              <p className="text-[11px] text-muted-foreground -mt-0.5 font-medium">by The Big Enough Project</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'nav-link-active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/emotional-blueprint" className="btn-primary text-sm py-2.5 px-5">
              <Star className="w-4 h-4" />
              Start Assessment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/60">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl font-semibold transition-colors ${
                    location.pathname === link.path 
                      ? 'bg-accent text-accent-foreground' 
                      : 'hover:bg-muted text-foreground/70'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                to="/emotional-blueprint" 
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary text-sm text-center mt-3"
              >
                <Star className="w-4 h-4" />
                Start Assessment
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
