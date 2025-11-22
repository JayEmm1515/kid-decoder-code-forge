import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  MessageSquare, 
  Users, 
  BookOpen, 
  Heart,
  Brain,
  Shield,
  Sparkles
} from "lucide-react";
import Layout from "@/components/Layout";

const Index = () => {
  const featureCards = [
    {
      title: "Track Behavior",
      description: "Monitor moods & patterns",
      icon: TrendingUp,
      link: "/tracking",
      gradient: "from-clay-teal to-clay-mint",
    },
    {
      title: "AI Coach",
      description: "Get parenting guidance",
      icon: MessageSquare,
      link: "/parenting-chat",
      gradient: "from-clay-mint to-clay-light-mint",
    },
    {
      title: "My Children",
      description: "Manage profiles",
      icon: Users,
      link: "/children",
      gradient: "from-clay-light-mint to-clay-pale-mint",
    },
    {
      title: "Learn",
      description: "Expert resources",
      icon: BookOpen,
      link: "/learn",
      gradient: "from-clay-sage to-clay-mint",
    },
    {
      title: "Understand",
      description: "Decode behaviors",
      icon: Brain,
      link: "/understanding-behaviour",
      gradient: "from-clay-teal to-clay-sage",
    },
    {
      title: "Boundaries",
      description: "Build healthy limits",
      icon: Shield,
      link: "/boundary-barriers",
      gradient: "from-clay-dark-teal to-clay-teal",
    },
  ];

  return (
    <Layout currentPageName="Home">
      <div className="min-h-screen bg-pastel-gradient p-4 md:p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Welcome Header */}
          <div className="clay-card p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart className="w-10 h-10 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Welcome Back
              </h1>
              <Sparkles className="w-10 h-10 text-secondary" />
            </div>
            <p className="text-lg text-muted-foreground">
              Your parenting journey, simplified
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCards.map((card, index) => (
              <Link key={index} to={card.link} className="group">
                <Card className={`clay-card p-6 bg-gradient-to-br ${card.gradient} border-0 h-full`}>
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="clay-card p-4 bg-white/50">
                      <card.icon className="w-8 h-8 text-foreground" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {card.title}
                      </h3>
                      <p className="text-sm text-foreground/70">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="clay-card p-6 bg-gradient-to-br from-clay-teal to-clay-mint">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">12</div>
                <p className="text-sm text-white/80">Entries This Week</p>
              </div>
            </div>
            <div className="clay-card p-6 bg-gradient-to-br from-clay-mint to-clay-light-mint">
              <div className="text-center">
                <div className="text-4xl font-bold text-foreground mb-2">3</div>
                <p className="text-sm text-foreground/70">Children Profiles</p>
              </div>
            </div>
            <div className="clay-card p-6 bg-gradient-to-br from-clay-sage to-clay-pale-mint">
              <div className="text-center">
                <div className="text-4xl font-bold text-foreground mb-2">8</div>
                <p className="text-sm text-foreground/70">Insights Gained</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="clay-card p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/tracking">
                <button className="clay-button w-full">
                  <TrendingUp className="w-5 h-5 inline mr-2" />
                  Log New Entry
                </button>
              </Link>
              <Link to="/parenting-chat">
                <button className="clay-button w-full">
                  <MessageSquare className="w-5 h-5 inline mr-2" />
                  Ask AI Coach
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
