import { Link, useLocation } from "react-router-dom";
import { Home, Brain, TrendingUp, Users } from "lucide-react";

export default function BottomNav() {
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/", icon: Home },
    { label: "AI Coach", path: "/parenting-chat", icon: Brain },
    { label: "Track", path: "/tracking", icon: TrendingUp },
    { label: "Children", path: "/children", icon: Users },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pb-safe md:hidden">
      <nav className="bg-white/95 backdrop-blur-sm mx-3 mb-3 rounded-2xl border border-border shadow-lg">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            return (
              <Link
                key={item.path}
                to={item.path}
                className="group flex flex-col items-center gap-1 min-w-[60px] py-2"
              >
                <div
                  className={`
                    w-11 h-11 rounded-xl transition-all duration-200
                    ${isActive
                      ? "bg-gradient-to-br from-primary to-secondary shadow-md"
                      : "bg-muted group-hover:bg-accent"
                    }
                    flex items-center justify-center
                  `}
                >
                  <Icon
                    className={`w-5 h-5 transition-colors ${
                      isActive ? "text-white" : "text-muted-foreground group-hover:text-primary"
                    }`}
                    strokeWidth={1.5}
                  />
                </div>
                <span
                  className={`text-[10px] font-medium transition-colors ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
