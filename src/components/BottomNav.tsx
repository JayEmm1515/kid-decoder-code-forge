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
      <nav className="bg-gradient-to-t from-background via-secondary/30 to-background/95 backdrop-blur-xl border-t border-border/40 shadow-clay-heavy">
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
                      relative w-16 h-16 rounded-full transition-all duration-300
                      ${
                        isActive
                          ? "bg-gradient-to-br from-[hsl(250,50%,45%)] via-[hsl(280,60%,50%)] to-[hsl(330,70%,55%)] shadow-[0_12px_24px_-4px_rgba(139,92,246,0.6),0_8px_16px_-2px_rgba(236,72,153,0.4),inset_0_-4px_12px_rgba(0,0,0,0.5),inset_0_2px_8px_rgba(255,255,255,0.3)]"
                          : "bg-gradient-to-br from-[hsl(250,40%,50%)] to-[hsl(280,50%,55%)] shadow-[0_8px_16px_-2px_rgba(139,92,246,0.4),inset_0_-3px_10px_rgba(0,0,0,0.4),inset_0_1px_4px_rgba(255,255,255,0.2)] group-hover:from-[hsl(250,50%,45%)] group-hover:via-[hsl(280,60%,50%)] group-hover:to-[hsl(330,70%,55%)] group-hover:shadow-[0_12px_24px_-4px_rgba(139,92,246,0.6),0_8px_16px_-2px_rgba(236,72,153,0.4)]"
                      }
                      flex items-center justify-center
                      transform group-hover:scale-110 group-active:scale-95
                      before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-60
                    `}
                  >
                    <Icon
                      className={`w-8 h-8 transition-all duration-300 relative z-10 ${
                        isActive
                          ? "text-[hsl(340,100%,85%)] drop-shadow-[0_0_12px_rgba(236,72,153,0.9)] filter brightness-125"
                          : "text-[hsl(280,70%,80%)] group-hover:text-[hsl(340,100%,85%)] group-hover:drop-shadow-[0_0_12px_rgba(236,72,153,0.9)] group-hover:brightness-125"
                      }`}
                      strokeWidth={2.8}
                    />
                  </div>
                  <span
                    className={`text-xs font-bold transition-colors duration-300 ${
                      isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
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
