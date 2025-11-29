import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  MessageSquare, 
  Users, 
  BookOpen, 
  Heart,
  Brain,
  Shield,
  Sparkles,
  Activity,
  ChevronRight
} from "lucide-react";
import Layout from "@/components/Layout";

const Index = () => {
  const featureCards = [
    {
      title: "Track Behavior",
      description: "Monitor moods & patterns",
      icon: TrendingUp,
      link: "/tracking",
      iconColor: "text-aqua-vibrant",
    },
    {
      title: "AI Coach",
      description: "Get parenting guidance",
      icon: MessageSquare,
      link: "/parenting-chat",
      iconColor: "text-aqua-soft",
    },
    {
      title: "My Children",
      description: "Manage profiles",
      icon: Users,
      link: "/children",
      iconColor: "text-teal-light",
    },
    {
      title: "Learn",
      description: "Expert resources",
      icon: BookOpen,
      link: "/learn",
      iconColor: "text-aqua-vibrant",
    },
    {
      title: "Understand",
      description: "Decode behaviors",
      icon: Brain,
      link: "/understanding-behaviour",
      iconColor: "text-aqua-soft",
    },
    {
      title: "Boundaries",
      description: "Build healthy limits",
      icon: Shield,
      link: "/boundary-barriers",
      iconColor: "text-teal-deep",
    },
  ];

  const quickStats = [
    { label: "Entries This Week", value: "12", icon: Activity, isActive: true },
    { label: "Children Profiles", value: "3", icon: Users, isActive: false },
    { label: "Insights Gained", value: "8", icon: Sparkles, isActive: false },
  ];

  return (
    <Layout currentPageName="Home">
      <div className="min-h-screen bg-airy p-4 md:p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Welcome Header */}
          <div className="dark-card p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="icon-container">
                <Heart className="w-6 h-6 text-aqua-vibrant" strokeWidth={1.5} />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-card-foreground">
                Welcome Back
              </h1>
              <div className="icon-container">
                <Sparkles className="w-6 h-6 text-aqua-soft" strokeWidth={1.5} />
              </div>
            </div>
            <p className="text-base text-card-foreground/60">
              Your parenting journey, simplified
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featureCards.map((card, index) => (
              <Link key={index} to={card.link} className="group">
                <div className="dark-card-glow p-6 h-full">
                  <div className="flex items-start gap-4">
                    <div className="icon-container flex-shrink-0">
                      <card.icon className={`w-6 h-6 ${card.iconColor}`} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-lg font-semibold text-card-foreground">
                          {card.title}
                        </h3>
                        <ChevronRight className="w-5 h-5 text-card-foreground/40 group-hover:text-aqua-vibrant group-hover:translate-x-1 transition-all" strokeWidth={1.5} />
                      </div>
                      <p className="text-sm text-card-foreground/50">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {quickStats.map((stat, index) => (
              <div key={index} className="stat-card p-5">
                <div className="flex items-center gap-4">
                  <div className={stat.isActive ? "icon-container-warm" : "icon-container"}>
                    <stat.icon 
                      className={`w-5 h-5 ${stat.isActive ? "text-amber-warm" : "text-aqua-vibrant"}`} 
                      strokeWidth={1.5} 
                    />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-card-foreground">{stat.value}</div>
                    <p className="text-xs text-card-foreground/50">{stat.label}</p>
                  </div>
                  {stat.isActive && (
                    <div className="ml-auto">
                      <span className="status-badge status-badge-active">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-warm animate-pulse-soft"></span>
                        Active
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="dark-card p-6">
            <h2 className="text-xl font-semibold text-card-foreground mb-5">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/tracking">
                <button className="btn-primary w-full flex items-center justify-center gap-2">
                  <TrendingUp className="w-5 h-5" strokeWidth={1.5} />
                  Log New Entry
                </button>
              </Link>
              <Link to="/parenting-chat">
                <button className="btn-secondary w-full flex items-center justify-center gap-2">
                  <MessageSquare className="w-5 h-5" strokeWidth={1.5} />
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