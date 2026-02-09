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
  ArrowRight,
  Star,
  Smile
} from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { createPageUrl } from "@/utils";
import { BehaviorEntry, MoodEntry } from "@/entities/all";

const coreBehaviors = [
  { label: 'Tantrums', slug: 'tantrums', description: 'Understanding and managing emotional outbursts', icon: Zap, bg: 'card-soft-peach' },
  { label: 'Aggression', slug: 'aggression', description: 'Helping children express anger safely', icon: Shield, bg: 'card-soft-teal' },
  { label: 'Defiance', slug: 'defiance', description: 'Building cooperation and connection', icon: Target, bg: 'card-soft-purple' },
  { label: 'Anxiety', slug: 'anxiety', description: 'Supporting worried and fearful children', icon: Heart, bg: 'card-soft-teal' },
];

const features = [
  {
    title: "AI Parenting Coach",
    description: "Get personalized guidance and support for your parenting challenges, available 24/7.",
    icon: Brain,
    path: "/parenting-chat",
    variant: "purple" as const,
  },
  {
    title: "Track Behavior",
    description: "Monitor moods and behaviors to identify patterns and triggers over time.",
    icon: TrendingUp,
    path: "/tracking",
    variant: "teal" as const,
  },
  {
    title: "Emotional Blueprint",
    description: "Discover how your own childhood shapes your parenting triggers today.",
    icon: Sparkles,
    path: "/emotional-blueprint",
    variant: "peach" as const,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

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
      <section className="hero-gradient section-padding relative">
        {/* Decorative blobs */}
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-56 h-56 rounded-full bg-secondary/5 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="container-wide mx-auto relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 badge-teal mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Understanding Your Child</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight">
              Decode Your Child's{" "}
              <span className="text-gradient">Behavior</span>
              <span className="inline-block ml-2 animate-wiggle">✨</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Evidence-based tools and guides to help you understand what's really going on, 
              respond with confidence, and build a stronger connection with your child.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/emotional-blueprint" className="btn-primary text-base">
                <Star className="w-5 h-5" />
                Start Your Assessment
              </Link>
              <Link to="/behaviour-guides" className="btn-outline text-base">
                <Smile className="w-5 h-5" />
                Explore Guides
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Behavior Guides Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-2">
                Behavior Guides 📚
              </h2>
              <p className="text-muted-foreground">
                Quick access to our most popular guides
              </p>
            </div>
            <Link 
              to="/behaviour-guides" 
              className="hidden sm:flex items-center gap-2 text-primary hover:text-primary/80 font-bold transition-colors"
            >
              View all
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {coreBehaviors.map((behavior) => (
              <motion.div key={behavior.slug} variants={itemVariants}>
                <Link to={createPageUrl(`BehaviourDetail?slug=${behavior.slug}`)} className="group block h-full">
                  <div className={`${behavior.bg} h-full`}>
                    <div className="icon-bubble mb-4 group-hover:scale-110 transition-transform">
                      <behavior.icon className="w-6 h-6 text-primary" strokeWidth={2} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{behavior.label}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{behavior.description}</p>
                    <div className="flex items-center gap-1 text-primary text-sm font-bold">
                      Learn more
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <Link 
            to="/behaviour-guides" 
            className="sm:hidden flex items-center justify-center gap-2 text-primary font-bold mt-6"
          >
            View all guides
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding" style={{ background: 'linear-gradient(180deg, hsl(240 20% 98%) 0%, hsl(270 40% 97%) 100%)' }}>
        <div className="container-wide mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
              Tools to Support Your Journey 🛠️
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From AI-powered coaching to behavior tracking, we've got everything you need 
              to navigate parenting challenges with confidence.
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {features.map((feature) => (
              <motion.div key={feature.path} variants={itemVariants}>
                <Link to={feature.path} className="group block h-full">
                  <div className={`${
                    feature.variant === 'purple' ? 'card-soft-purple' : 
                    feature.variant === 'peach' ? 'card-soft-peach' : 'card-soft-teal'
                  } h-full`}>
                    <div className={`${
                      feature.variant === 'purple' ? 'icon-bubble-purple' : 
                      feature.variant === 'peach' ? 'icon-bubble-peach' : 'icon-bubble'
                    } mb-5 group-hover:scale-110 transition-transform`}>
                      <feature.icon className={`w-6 h-6 ${feature.variant === 'purple' ? 'text-secondary' : 'text-primary'}`} strokeWidth={2} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="hero-gradient rounded-[2rem] p-8 md:p-14 text-center relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-secondary/10 blur-2xl" />
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3">
                Ready to get started? 🌟
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Take our Emotional Blueprint assessment to discover your parenting triggers and build stronger connections.
              </p>
              <Link to="/emotional-blueprint" className="btn-primary text-base">
                Start Assessment
                <ArrowRight className="w-5 h-5" />
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
                <p className="text-3xl font-extrabold text-primary">{trackingCount}</p>
                <p className="text-sm text-muted-foreground font-medium">Tracking Entries</p>
              </div>
            </div>
          </div>
        </section>
      )}

      <div className="h-24 md:hidden" />
    </Layout>
  );
};

export default Index;
