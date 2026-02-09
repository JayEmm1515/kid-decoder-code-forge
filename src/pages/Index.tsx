import { useState, useEffect } from "react";
import {
  Brain,
  Shield,
  Sparkles,
  Zap,
  Target,
  Heart,
  TrendingUp,
  BookOpen,
  Users,
  BarChart3,
} from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import HeroSplit from "@/components/HeroSplit";
import FeatureCard from "@/components/FeatureCard";
import StatWidget from "@/components/StatWidget";
import GalleryTile from "@/components/GalleryTile";
import { BehaviorEntry, MoodEntry } from "@/entities/all";

const features = [
  {
    title: "AI Parenting Coach",
    description: "Get personalized guidance and support for your parenting challenges, available 24/7.",
    icon: Brain,
    path: "/parenting-chat",
  },
  {
    title: "Track Behavior",
    description: "Monitor moods and behaviors to identify patterns and triggers over time.",
    icon: TrendingUp,
    path: "/tracking",
  },
  {
    title: "Emotional Blueprint",
    description: "Discover how your own childhood shapes your parenting triggers today.",
    icon: Sparkles,
    path: "/emotional-blueprint",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
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
      {/* Hero */}
      <HeroSplit />

      {/* Feature Cards */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3">
              Tools to Support Your Journey
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From AI-powered coaching to behavior tracking, everything you need
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
            {features.map((f) => (
              <FeatureCard key={f.path} {...f} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stat Widgets */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <StatWidget label="Behavior Guides" value="20+" icon={BookOpen} />
            <StatWidget label="Age Groups Covered" value="0–18" icon={Users} variant="peach" />
            <StatWidget
              label="Tracking Entries"
              value={trackingCount > 0 ? String(trackingCount) : "—"}
              icon={BarChart3}
            />
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3">
              Explore Topics
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Browse our resource library by topic area
            </p>
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <GalleryTile label="Tantrums" variant="slate" tall />
            <GalleryTile label="Aggression" variant="peach" />
            <GalleryTile label="Anxiety" variant="white" />
            <GalleryTile label="Defiance" variant="muted" />
            <GalleryTile label="Boundaries" variant="peach" tall />
            <GalleryTile label="Connection" variant="slate" />
          </motion.div>
        </div>
      </section>

      <div className="h-24 md:hidden" />
    </Layout>
  );
};

export default Index;
