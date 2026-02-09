import { Link } from "react-router-dom";
import { Heart, Mail } from "lucide-react";

const footerLinks = {
  features: [
    { label: "Behavior Guides", path: "/behaviour-guides" },
    { label: "AI Parenting Coach", path: "/parenting-chat" },
    { label: "Mood & Behavior Tracking", path: "/tracking" },
    { label: "Chain Analysis", path: "/chain-analysis" },
    { label: "Emotional Blueprint", path: "/emotional-blueprint" },
    { label: "Boundary Barriers", path: "/boundary-barriers" },
  ],
  ageGroups: [
    { label: "Early Years (0-2)", path: "/early-years" },
    { label: "Preschool (3-5)", path: "/preschool" },
    { label: "School Age (6-12)", path: "/school-age" },
    { label: "Teens (13-18)", path: "/teens" },
  ],
  resources: [
    { label: "Understanding Behaviour", path: "/understanding-behaviour" },
    { label: "Being With Exercise", path: "/being-with-exercise" },
    { label: "Learn", path: "/learn" },
    { label: "Quizzes", path: "/quizzes" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: 'hsl(0 0% 100%)', borderTop: '1px solid rgba(31,41,55,0.08)' }}>
      <div className="container-wide mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(145deg, hsl(213 20% 36%), hsl(213 20% 28%))',
                  boxShadow: 'var(--shadow-clay-sm)',
                }}
              >
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-extrabold text-foreground">The Kid Decoder</h2>
                <p className="text-[11px] text-muted-foreground font-medium">by The Big Enough Project</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs leading-relaxed">
              Helping parents understand their child's behavior and build stronger emotional connections.
            </p>
            <a
              href="mailto:hello@thebigenoughproject.com"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contact Us
            </a>
          </div>

          {/* Features Column */}
          <div>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Features</h3>
            <ul className="space-y-3">
              {footerLinks.features.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-muted-foreground hover:text-primary font-medium transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Age Groups Column */}
          <div>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Age Groups</h3>
            <ul className="space-y-3">
              {footerLinks.ageGroups.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-muted-foreground hover:text-primary font-medium transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-muted-foreground hover:text-primary font-medium transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(31,41,55,0.08)' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} The Big Enough Project. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground text-center md:text-right max-w-md">
              <strong>Disclaimer:</strong> This app provides general parenting information and is not a substitute for professional advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
