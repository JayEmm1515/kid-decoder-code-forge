import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { 
  Heart,
  Brain,
  Shield,
  Sparkles,
  ChevronRight,
  Zap,
  Target,
  TrendingUp,
  MessageSquare,
  BookOpen,
  Users,
  ArrowRight
} from "lucide-react";
import Layout from "@/components/Layout";
import { createPageUrl } from "@/utils";
import { BehaviorEntry, MoodEntry } from "@/entities/all";

// Core behavior guides - the main feature
const coreBehaviors = [
  { label: 'Tantrums', slug: 'tantrums', description: 'Understanding and managing emotional outbursts', icon: Zap },
  { label: 'Aggression', slug: 'aggression', description: 'Helping children express anger safely', icon: Shield },
  { label: 'Defiance', slug: 'defiance', description: 'Building cooperation and connection', icon: Target },
  { label: 'Anxiety', slug: 'anxiety', description: 'Supporting worried and fearful children', icon: Heart },
];

const features = [
  {
    title: "AI Parenting Coach",
    description: "Get personalized guidance and support for your parenting challenges, available 24/7.",
    icon: Brain,
    path: "/parenting-chat",
    color: "purple",
  },
  {
    title: "Track Behavior",
    description: "Monitor moods and behaviors to identify patterns and triggers over time.",
    icon: TrendingUp,
    path: "/tracking",
    color: "teal",
  },
  {
    title: "Emotional Blueprint",
    description: "Discover how your own childhood shapes your parenting triggers today.",
    icon: Sparkles,
    path: "/emotional-blueprint",
    color: "purple",
  },
];

const Index = () => {
  const [trackingCount, setTrackingCount] = useState(0);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const [moods, behaviors] = await Promise.all([
        MoodEntry.list('-date'),
        BehaviorEntry.list('-date')
      ]);
      setTrackingCount(moods.length + behaviors.length);
    } catch (error) {
      console.error('Error loading stats:', error);
    }
  };

  return (
    <Layout currentPageName="Home">
      {/* Hero Section */}
      <section className="hero-gradient section-padding">
        <div className="container-wide mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 badge-teal mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Understanding Your Child</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Decode Your Child's{" "}
              <span className="text-gradient">Behavior</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Evidence-based tools and guides to help you understand what's really going on, 
              respond with confidence, and build a stronger connection with your child.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/emotional-blueprint" className="btn-primary">
                Start Your Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/behaviour-guides" className="btn-outline">
                Explore Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Behavior Guides Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Behavior Guides
              </h2>
              <p className="text-muted-foreground">
                Quick access to our most popular guides
              </p>
            </div>
            <Link 
              to="/behaviour-guides" 
              className="hidden sm:flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              View all guides
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {coreBehaviors.map((behavior) => (
              <Link 
                key={behavior.slug} 
                to={createPageUrl(`BehaviourDetail?slug=${behavior.slug}`)}
                className="group"
              >
                <div className="card-feature h-full">
                  <div className="icon-circle mb-4 group-hover:scale-110 transition-transform">
                    <behavior.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{behavior.label}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{behavior.description}</p>
                  <div className="flex items-center gap-1 text-primary text-sm font-medium">
                    Learn more
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <Link 
            to="/behaviour-guides" 
            className="sm:hidden flex items-center justify-center gap-2 text-primary font-medium mt-6"
          >
            View all guides
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Tools to Support Your Journey
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From AI-powered coaching to behavior tracking, we've got everything you need 
              to navigate parenting challenges with confidence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Link 
                key={feature.path} 
                to={feature.path}
                className="group"
              >
                <div className={`card-feature h-full ${feature.color === 'purple' ? 'card-feature-purple' : 'card-feature-teal'}`}>
                  <div className={`icon-circle ${feature.color === 'purple' ? 'icon-circle-purple' : ''} mb-4`}>
                    <feature.icon className={`w-6 h-6 ${feature.color === 'purple' ? 'text-secondary' : 'text-primary'}`} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Ready to get started?
                </h2>
                <p className="text-muted-foreground">
                  Take our Emotional Blueprint assessment to discover your parenting triggers.
                </p>
              </div>
              <Link to="/emotional-blueprint" className="btn-primary whitespace-nowrap">
                Start Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      {trackingCount > 0 && (
        <section className="py-8 border-t border-border">
          <div className="container-wide mx-auto px-4">
            <div className="flex items-center justify-center gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-primary">{trackingCount}</p>
                <p className="text-sm text-muted-foreground">Tracking Entries</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Spacer for mobile bottom nav */}
      <div className="h-24 md:hidden" />
    </Layout>
  );
};

export default Index;
