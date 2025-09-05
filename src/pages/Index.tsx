import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, User, Zap, Users, BookOpen, ArrowRight } from "lucide-react";

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

          <div className="text-center mt-4">
            <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center justify-center gap-3">
              <Users className="w-8 h-8 text-primary" />
              Understanding Your Child
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
              Evidence-based insights for understanding children's complex behaviour patterns 
              and developmental needs at every stage
            </p>
            <Link to="/understanding-behaviour">
              <Button size="lg" className="gap-2 mb-8">
                <BookOpen className="w-5 h-5" />
                Explore Behaviour Guides by Age
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
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
          <Link to="/children" className="flex-1">
            <div className="dreamy-card dreamy-card-tiny cursor-pointer hover:transform hover:scale-105 transition-all">
              <Users className="w-6 h-6 text-[hsl(var(--dreamy-purple))]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;