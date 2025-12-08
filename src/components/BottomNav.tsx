import { Link, useLocation } from "react-router-dom";
import { Home, Brain, TrendingUp, Users } from "lucide-react";

export default function BottomNav() {
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/", icon: Home },
    { label: "AI Chat", path: "/parenting-chat", icon: Brain },
    { label: "Track", path: "/tracking", icon: TrendingUp },
    { label: "Children", path: "/children", icon: Users },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pb-safe md:hidden">
      <nav className="glass-card mx-3 mb-3 rounded-2xl border border-white/10">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            const colorClasses = [
              { active: "from-teal to-mint", text: "text-teal" },
              { active: "from-purple to-purple-light", text: "text-purple" },
              { active: "from-teal to-teal-light", text: "text-teal" },
              { active: "from-pink to-pink-light", text: "text-pink" },
            ];
            const colors = colorClasses[index % colorClasses.length];

            return (
              <Link
                key={item.path}
                to={item.path}
                className="group flex flex-col items-center gap-1 min-w-[60px] py-2"
              >
                <div
                  className={`
                    w-12 h-12 rounded-2xl transition-all duration-300
                    ${isActive
                      ? `bg-gradient-to-br ${colors.active} shadow-lg`
                      : "bg-white/5 group-hover:bg-white/10"
                    }
                    flex items-center justify-center
                  `}
                >
                  <Icon
                    className={`w-5 h-5 transition-all ${
                      isActive ? "text-white" : "text-white/50 group-hover:text-white/80"
                    }`}
                    strokeWidth={1.5}
                  />
                </div>
                <span
                  className={`text-[10px] font-medium transition-colors ${
                    isActive ? colors.text : "text-white/40"
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
