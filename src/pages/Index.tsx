import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, User, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="dreamy-app">
      <div className="dreamy-container">
        {/* Hero Card - "Good afternoon" equivalent */}
        <div className="dreamy-card dreamy-card-hero">
          <div className="dreamy-sun"></div>
          <div className="dreamy-mountains"></div>
          <h1 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-2 relative z-10">
            🧰 Emotional Wellness
          </h1>
          <p className="text-lg text-[hsl(var(--foreground))] opacity-80 relative z-10">
            Toolkit
          </p>
          <p className="text-sm text-[hsl(var(--foreground))] opacity-70 mt-4 relative z-10">
            Start your day with a smile
          </p>
        </div>

        {/* Two button row - "Overview" and "Insights" equivalent */}
        <div className="flex gap-3">
          <Link to="/emotional-toolbox" className="flex-1">
            <button className="dreamy-button w-full flex items-center justify-center gap-2">
              🧰 Try Toolbox
            </button>
          </Link>
          <button className="dreamy-button flex-1 flex items-center justify-center gap-2">
            📚 Learn More
          </button>
        </div>

        {/* Activity Card - "Today's Activity" equivalent */}
        <div className="dreamy-card">
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))] mb-2">
            🌟 Key Features
          </h2>
          <div className="text-3xl font-bold text-[hsl(var(--foreground))] opacity-90">
            Interactive & Research-Based
          </div>
          <div className="flex gap-2 mt-4">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-medium text-[hsl(var(--foreground))]">
              Interactive
            </span>
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-medium text-[hsl(var(--foreground))]">
              Evidence-Based
            </span>
          </div>
        </div>

        {/* Reminders Card equivalent */}
        <div className="dreamy-card">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-[hsl(var(--foreground))] mb-1">
                ✨ Quick Actions
              </h3>
              <p className="text-sm text-[hsl(var(--foreground))] opacity-70">
                Stay on track with your emotional wellness
              </p>
            </div>
            <div className="dreamy-toggle"></div>
          </div>
          
          <div className="mt-4 space-y-3">
            <div className="flex items-center text-sm text-[hsl(var(--foreground))] opacity-80">
              <span className="w-2 h-2 rounded-full bg-[hsl(var(--dreamy-teal))] mr-3"></span>
              Emotional Safety Assessment
            </div>
            <div className="flex items-center text-sm text-[hsl(var(--foreground))] opacity-80">
              <span className="w-2 h-2 rounded-full bg-[hsl(var(--dreamy-coral))] mr-3"></span>
              Family Wellness Tools
            </div>
            <div className="flex items-center text-sm text-[hsl(var(--foreground))] opacity-80">
              <span className="w-2 h-2 rounded-full bg-[hsl(var(--dreamy-peach))] mr-3"></span>
              Growth Tracking
            </div>
          </div>
        </div>

        {/* Bottom three icon cards - Navigation to different sections */}
        <div className="flex gap-3">
          <Link to="/" className="flex-1">
            <div className="dreamy-card dreamy-card-tiny cursor-pointer hover:transform hover:scale-105 transition-all">
              <Home className="w-6 h-6 text-[hsl(var(--dreamy-blue))]" />
            </div>
          </Link>
          <Link to="/emotional-toolbox" className="flex-1">
            <div className="dreamy-card dreamy-card-tiny cursor-pointer hover:transform hover:scale-105 transition-all">
              <Zap className="w-6 h-6 text-[hsl(var(--dreamy-coral))]" />
            </div>
          </Link>
          <div className="dreamy-card dreamy-card-tiny cursor-pointer hover:transform hover:scale-105 transition-all">
            <User className="w-6 h-6 text-[hsl(var(--dreamy-purple))]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;