import { Link, useLocation } from "react-router-dom";
import { Home, Brain, TrendingUp, Users } from "lucide-react";

export default function BottomNav() {
  const location = useLocation();

  const navItems = [
    {
      label: "Home",
      path: "/",
      icon: Home,
    },
    {
      label: "AI Chat",
      path: "/parenting-chat",
      icon: Brain,
    },
    {
      label: "Track",
      path: "/tracking",
      icon: TrendingUp,
    },
    {
      label: "Children",
      path: "/children",
      icon: Users,
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pb-safe">
      <nav className="bg-slate-800/95 backdrop-blur-xl border-t border-white/10 shadow-elevated">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex items-center justify-around py-3">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              
              // Cycle through brand colors
              const colors = [
                { active: "from-teal to-mint", glow: "shadow-glow-teal", text: "text-teal" },
                { active: "from-purple to-purple-light", glow: "shadow-glow-purple", text: "text-purple" },
                { active: "from-teal to-teal-light", glow: "shadow-glow-teal", text: "text-teal" },
                { active: "from-pink to-pink-light", glow: "shadow-glow-pink", text: "text-pink" },
              ];
              const colorScheme = colors[index % colors.length];

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="group flex flex-col items-center gap-1.5 min-w-[70px]"
                >
                  <div
                    className={`
                      relative w-14 h-14 rounded-2xl transition-all duration-300
                      ${
                        isActive
                          ? `bg-gradient-to-br ${colorScheme.active} ${colorScheme.glow}`
                          : "bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20"
                      }
                      flex items-center justify-center
                      transform group-hover:scale-105 group-active:scale-95
                    `}
                  >
                    <Icon
                      className={`w-6 h-6 transition-all duration-300 ${
                        isActive
                          ? "text-white"
                          : `text-white/60 group-hover:${colorScheme.text}`
                      }`}
                      strokeWidth={1.5}
                    />
                  </div>
                  <span
                    className={`text-xs font-medium transition-colors duration-300 ${
                      isActive ? colorScheme.text : "text-white/50 group-hover:text-white/80"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}