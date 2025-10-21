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
      <nav className="bg-gradient-to-t from-slate-900 via-purple-900/50 to-slate-800/95 backdrop-blur-xl border-t border-cyan-400/20 shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.8)]">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex items-center justify-around py-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;

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
                          ? "bg-gradient-to-br from-cyan-500 to-teal-500 shadow-[0_8px_20px_-4px_rgba(6,182,212,0.6),inset_0_-3px_10px_rgba(0,0,0,0.4),inset_0_2px_6px_rgba(255,255,255,0.3)] border-2 border-cyan-300/40"
                          : "bg-gradient-to-br from-purple-600/80 to-purple-700/80 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.4),inset_0_-2px_8px_rgba(0,0,0,0.3),inset_0_1px_3px_rgba(255,255,255,0.2)] border border-purple-400/30 group-hover:from-cyan-500/90 group-hover:to-teal-500/90 group-hover:border-cyan-300/40"
                      }
                      flex items-center justify-center
                      transform group-hover:scale-110 group-active:scale-95
                    `}
                  >
                    <Icon
                      className={`w-7 h-7 transition-colors duration-300 ${
                        isActive
                          ? "text-white drop-shadow-[0_2px_6px_rgba(255,255,255,0.8)]"
                          : "text-cyan-200 group-hover:text-white drop-shadow-[0_2px_4px_rgba(103,232,249,0.4)]"
                      }`}
                      strokeWidth={2.5}
                    />
                  </div>
                  <span
                    className={`text-xs font-bold transition-colors duration-300 ${
                      isActive ? "text-cyan-400" : "text-cyan-300/70 group-hover:text-cyan-300"
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
