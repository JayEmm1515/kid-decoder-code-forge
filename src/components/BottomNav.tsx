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
      <nav
        className="mx-3 mb-3 rounded-[20px] backdrop-blur-md"
        style={{
          background: 'hsl(0 0% 100% / 0.95)',
          border: '1px solid rgba(31,41,55,0.08)',
          boxShadow: 'var(--shadow-clay)',
        }}
      >
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
                  className={`w-11 h-11 rounded-2xl transition-all duration-200 flex items-center justify-center ${
                    isActive ? "scale-105" : "group-hover:bg-accent"
                  }`}
                  style={isActive ? {
                    background: 'linear-gradient(145deg, hsl(213 20% 36%), hsl(213 20% 28%))',
                    boxShadow: 'var(--shadow-clay-sm)',
                  } : {
                    background: 'hsl(var(--muted))',
                  }}
                >
                  <Icon
                    className={`w-5 h-5 transition-colors ${
                      isActive ? "text-white" : "text-muted-foreground group-hover:text-primary"
                    }`}
                    strokeWidth={isActive ? 2.5 : 1.5}
                  />
                </div>
                <span
                  className={`text-[10px] transition-colors ${
                    isActive ? "text-primary font-bold" : "text-muted-foreground font-medium"
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
