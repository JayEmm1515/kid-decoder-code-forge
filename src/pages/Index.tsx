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
  MessageSquare
} from "lucide-react";
import Layout from "@/components/Layout";
import { createPageUrl } from "@/utils";
import { BehaviorEntry, MoodEntry } from "@/entities/all";

// Core behavior guides - the main feature
const coreBehaviors = [
  { label: 'Tantrums', slug: 'tantrums', color: 'from-pink to-pink-light', icon: Zap },
  { label: 'Aggression', slug: 'aggression', color: 'from-purple to-purple-light', icon: Shield },
  { label: 'Defiance', slug: 'defiance', color: 'from-teal to-mint', icon: Target },
  { label: 'Anxiety', slug: 'anxiety', color: 'from-purple to-pink', icon: Heart },
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
      <div className="min-h-screen bg-airy p-4 md:p-8 pb-24">
        <div className="max-w-2xl mx-auto space-y-6">
          
          {/* Hero - Simple & Focused */}
          <div className="glass-card p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="icon-box icon-box-pink w-12 h-12">
                <Heart className="w-6 h-6 text-pink" strokeWidth={1.5} />
              </div>
              <div className="icon-box icon-box-teal w-12 h-12">
                <Sparkles className="w-6 h-6 text-teal" strokeWidth={1.5} />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              The Kid Decoder
            </h1>
            <p className="text-white/50 mt-2">
              Understand behavior. Support growth.
            </p>
          </div>

          {/* BEHAVIOR GUIDES - Central Feature */}
          <div className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <h2 className="text-lg font-semibold text-white">Behavior Guides</h2>
              <Link to="/behaviour-guides" className="text-sm text-teal hover:underline flex items-center gap-1">
                See all <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {coreBehaviors.map((behavior) => (
                <Link 
                  key={behavior.slug} 
                  to={createPageUrl(`BehaviourDetail?slug=${behavior.slug}`)}
                  className="group"
                >
                  <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${behavior.color} p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}>
                    <behavior.icon className="w-6 h-6 text-white/80 mb-2" strokeWidth={1.5} />
                    <h3 className="text-white font-semibold">{behavior.label}</h3>
                    <ChevronRight className="w-4 h-4 text-white/40 absolute bottom-4 right-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Two Primary Actions */}
          <div className="grid grid-cols-2 gap-3">
            <Link to="/tracking" className="glass-card-teal p-5 group">
              <div className="flex items-center gap-3">
                <div className="icon-box icon-box-teal w-11 h-11">
                  <TrendingUp className="w-5 h-5 text-teal" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-sm">Track</h3>
                  {trackingCount > 0 && (
                    <p className="text-xs text-white/40">{trackingCount} entries</p>
                  )}
                </div>
              </div>
            </Link>
            
            <Link to="/parenting-chat" className="glass-card-purple p-5 group">
              <div className="flex items-center gap-3">
                <div className="icon-box icon-box-purple w-11 h-11">
                  <MessageSquare className="w-5 h-5 text-purple" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-sm">AI Coach</h3>
                  <p className="text-xs text-white/40">Get guidance</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Footer */}
          <div className="text-center pt-6">
            <p className="text-white/30 text-xs">by The Big Enough Project</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
