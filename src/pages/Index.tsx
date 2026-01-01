import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { 
  TrendingUp, 
  MessageSquare, 
  Users, 
  BookOpen, 
  Heart,
  Brain,
  Shield,
  Sparkles,
  ChevronRight,
  Zap,
  Calendar,
  Target
} from "lucide-react";
import Layout from "@/components/Layout";
import { createPageUrl } from "@/utils";
import { BehaviorEntry, MoodEntry, Child } from "@/entities/all";

// Core behavior guides - the main feature
const coreBehaviors = [
  { label: 'Tantrums', slug: 'tantrums', color: 'from-pink to-pink-light', icon: Zap },
  { label: 'Aggression', slug: 'aggression', color: 'from-purple to-purple-light', icon: Shield },
  { label: 'Defiance', slug: 'defiance', color: 'from-teal to-mint', icon: Target },
  { label: 'Anxiety', slug: 'anxiety', color: 'from-purple to-pink', icon: Heart },
  { label: 'Withdrawal', slug: 'withdrawal', color: 'from-teal to-teal-light', icon: Brain },
  { label: 'Meltdowns (ND)', slug: 'meltdowns-nd', color: 'from-pink to-purple', icon: Sparkles },
];

const Index = () => {
  const [stats, setStats] = useState({
    moodEntries: 0,
    behaviorEntries: 0,
    childrenCount: 0,
    recentActivity: [] as Array<{ text: string; time: string; type: string }>
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const [moods, behaviors, children] = await Promise.all([
        MoodEntry.list('-date'),
        BehaviorEntry.list('-date'),
        Child.list('-created_date')
      ]);

      // Build recent activity from actual data
      const recentActivity: Array<{ text: string; time: string; type: string }> = [];
      
      if (behaviors.length > 0) {
        const latest = behaviors[0];
        recentActivity.push({
          text: `Logged ${latest.behavior_type} behavior`,
          time: latest.date,
          type: 'behavior'
        });
      }
      
      if (moods.length > 0) {
        const latest = moods[0];
        recentActivity.push({
          text: `Tracked mood: ${latest.morning_mood}`,
          time: latest.date,
          type: 'mood'
        });
      }

      setStats({
        moodEntries: moods.length,
        behaviorEntries: behaviors.length,
        childrenCount: children.length,
        recentActivity: recentActivity.slice(0, 3)
      });
    } catch (error) {
      console.error('Error loading stats:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout currentPageName="Home">
      <div className="min-h-screen bg-airy p-4 md:p-8 pb-24">
        <div className="max-w-7xl mx-auto space-y-6">
          
          {/* Hero Card */}
          <div className="glass-card p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex flex-col items-start gap-4">
                <div className="flex items-center gap-3">
                  <div className="icon-box icon-box-pink w-14 h-14">
                    <Heart className="w-7 h-7 text-pink" strokeWidth={1.5} />
                  </div>
                  <div className="icon-box icon-box-teal w-14 h-14">
                    <Sparkles className="w-7 h-7 text-teal" strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    THE KID<br/>DECODER
                  </h1>
                  <p className="text-base text-white/50 mt-3 uppercase tracking-wide">
                    Understand behavior. Support growth.
                  </p>
                </div>
              </div>
              
              {/* Quick Stats Dashboard */}
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                <div className="stat-card p-4 text-center rounded-2xl">
                  <div className="text-2xl md:text-3xl font-bold text-teal">{stats.moodEntries}</div>
                  <div className="text-xs text-white/50 mt-1">Moods</div>
                </div>
                <div className="stat-card p-4 text-center rounded-2xl">
                  <div className="text-2xl md:text-3xl font-bold text-purple">{stats.behaviorEntries}</div>
                  <div className="text-xs text-white/50 mt-1">Behaviors</div>
                </div>
                <div className="stat-card p-4 text-center rounded-2xl">
                  <div className="text-2xl md:text-3xl font-bold text-pink">{stats.childrenCount}</div>
                  <div className="text-xs text-white/50 mt-1">Children</div>
                </div>
              </div>
            </div>
          </div>

          {/* BEHAVIOR GUIDES - Central Feature */}
          <div className="glass-card p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white">Behavior Guides</h2>
                <p className="text-sm text-white/50 mt-1">Evidence-based strategies for common challenges</p>
              </div>
              <Link to="/behaviour-guides" className="btn-pill text-sm">
                View All
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {coreBehaviors.map((behavior) => (
                <Link 
                  key={behavior.slug} 
                  to={createPageUrl(`BehaviourDetail?slug=${behavior.slug}`)}
                  className="group"
                >
                  <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${behavior.color} p-4 md:p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <behavior.icon className="w-6 h-6 text-white/80 mb-3" strokeWidth={1.5} />
                    <h3 className="text-white font-semibold text-sm md:text-base">{behavior.label}</h3>
                    <ChevronRight className="w-4 h-4 text-white/50 absolute bottom-4 right-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Dashboard Grid - Tracking & Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            
            {/* Tracking Summary */}
            <div className="glass-card-teal p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">Tracking Summary</h3>
                <Link to="/tracking">
                  <div className="icon-box icon-box-teal w-10 h-10">
                    <TrendingUp className="w-5 h-5 text-teal" strokeWidth={1.5} />
                  </div>
                </Link>
              </div>
              
              {stats.recentActivity.length > 0 ? (
                <div className="space-y-3">
                  {stats.recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center gap-3 stat-card p-3 rounded-xl">
                      <div className={`w-2 h-2 rounded-full ${activity.type === 'mood' ? 'bg-teal' : 'bg-purple'}`} />
                      <div className="flex-1">
                        <p className="text-sm text-white/80">{activity.text}</p>
                        <p className="text-xs text-white/40">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="stat-card p-4 rounded-xl text-center">
                  <p className="text-white/50 text-sm">No tracking data yet</p>
                  <Link to="/tracking" className="text-teal text-sm font-medium mt-2 inline-block hover:underline">
                    Start tracking →
                  </Link>
                </div>
              )}
              
              <Link to="/tracking" className="mt-4 btn-pill-teal w-full text-center block">
                Track Now
              </Link>
            </div>

            {/* Quick Tools */}
            <div className="glass-card-purple p-6">
              <h3 className="text-lg font-bold text-white mb-4">Quick Tools</h3>
              <div className="space-y-3">
                <Link to="/parenting-chat" className="flex items-center gap-4 stat-card p-4 rounded-xl group hover:bg-white/10 transition-all">
                  <div className="icon-box icon-box-purple w-12 h-12">
                    <MessageSquare className="w-6 h-6 text-purple" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold">AI Coach</h4>
                    <p className="text-xs text-white/50">Get personalized guidance</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-purple transition-colors" />
                </Link>
                
                <Link to="/chain-analysis" className="flex items-center gap-4 stat-card p-4 rounded-xl group hover:bg-white/10 transition-all">
                  <div className="icon-box icon-box-teal w-12 h-12">
                    <Brain className="w-6 h-6 text-teal" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold">Chain Analysis</h4>
                    <p className="text-xs text-white/50">Understand behavior triggers</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-teal transition-colors" />
                </Link>
                
                <Link to="/boundary-barriers" className="flex items-center gap-4 stat-card p-4 rounded-xl group hover:bg-white/10 transition-all">
                  <div className="icon-box icon-box-pink w-12 h-12">
                    <Shield className="w-6 h-6 text-pink" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold">Boundary Barriers</h4>
                    <p className="text-xs text-white/50">Build healthy limits</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-pink transition-colors" />
                </Link>
              </div>
            </div>
          </div>

          {/* Secondary Features */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/learn" className="glass-card-teal p-5 group">
              <div className="icon-box icon-box-mint w-12 h-12 mb-3">
                <BookOpen className="w-6 h-6 text-mint" strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-semibold text-sm">Learn</h3>
              <p className="text-xs text-white/40 mt-1">Expert resources</p>
            </Link>
            
            <Link to="/children" className="glass-card-pink p-5 group">
              <div className="icon-box icon-box-pink w-12 h-12 mb-3">
                <Users className="w-6 h-6 text-pink" strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-semibold text-sm">Children</h3>
              <p className="text-xs text-white/40 mt-1">Manage profiles</p>
            </Link>
            
            <Link to="/understanding-behaviour" className="glass-card-purple p-5 group">
              <div className="icon-box icon-box-purple w-12 h-12 mb-3">
                <Brain className="w-6 h-6 text-purple" strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-semibold text-sm">Understand</h3>
              <p className="text-xs text-white/40 mt-1">Decode behaviors</p>
            </Link>
            
            <Link to="/quizzes" className="glass-card-teal p-5 group">
              <div className="icon-box icon-box-teal w-12 h-12 mb-3">
                <Calendar className="w-6 h-6 text-teal" strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-semibold text-sm">Quizzes</h3>
              <p className="text-xs text-white/40 mt-1">ND assessments</p>
            </Link>
          </div>

          {/* Footer */}
          <div className="text-center pt-4">
            <p className="text-teal text-xs font-semibold tracking-widest uppercase">The Kid Decoder</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
