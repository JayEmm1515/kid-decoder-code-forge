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
      cardStyle: "glass-card-teal",
      iconStyle: "icon-box-teal",
      iconColor: "text-teal",
    },
    {
      title: "AI Coach",
      description: "Get parenting guidance",
      icon: MessageSquare,
      link: "/parenting-chat",
      cardStyle: "glass-card-purple",
      iconStyle: "icon-box-purple",
      iconColor: "text-purple",
    },
    {
      title: "My Children",
      description: "Manage profiles",
      icon: Users,
      link: "/children",
      cardStyle: "glass-card-pink",
      iconStyle: "icon-box-pink",
      iconColor: "text-pink",
    },
    {
      title: "Learn",
      description: "Expert resources",
      icon: BookOpen,
      link: "/learn",
      cardStyle: "glass-card-teal",
      iconStyle: "icon-box-mint",
      iconColor: "text-mint",
    },
    {
      title: "Understand",
      description: "Decode behaviors",
      icon: Brain,
      link: "/understanding-behaviour",
      cardStyle: "glass-card-purple",
      iconStyle: "icon-box-purple",
      iconColor: "text-purple-light",
    },
    {
      title: "Boundaries",
      description: "Build healthy limits",
      icon: Shield,
      link: "/boundary-barriers",
      cardStyle: "glass-card-pink",
      iconStyle: "icon-box-teal",
      iconColor: "text-teal-light",
    },
  ];

  const quickStats = [
    { label: "Entries This Week", value: "12", icon: Activity, badgeStyle: "status-badge-teal" },
    { label: "Children Profiles", value: "3", icon: Users, badgeStyle: "status-badge-purple" },
    { label: "Insights Gained", value: "8", icon: Sparkles, badgeStyle: "status-badge-pink" },
  ];

  return (
    <Layout currentPageName="Home">
      <div className="min-h-screen bg-airy p-4 md:p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Welcome Header */}
          <div className="glass-card p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="icon-box icon-box-pink w-12 h-12">
                <Heart className="w-6 h-6 text-pink" strokeWidth={1.5} />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                The Kid Decoder
              </h1>
              <div className="icon-box icon-box-teal w-12 h-12">
                <Sparkles className="w-6 h-6 text-teal" strokeWidth={1.5} />
              </div>
            </div>
            <p className="text-base text-white/60 mb-6">
              Help for parents waiting
            </p>
            <Link to="/tracking">
              <button className="btn-pill">
                Get Started
              </button>
            </Link>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featureCards.map((card, index) => (
              <Link key={index} to={card.link} className="group">
                <div className={`${card.cardStyle} p-6 h-full`}>
                  <div className="flex items-start gap-4">
                    <div className={`icon-box ${card.iconStyle} flex-shrink-0`}>
                      <card.icon className={`w-6 h-6 ${card.iconColor}`} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-lg font-semibold text-white">
                          {card.title}
                        </h3>
                        <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-teal group-hover:translate-x-1 transition-all" strokeWidth={1.5} />
                      </div>
                      <p className="text-sm text-white/50">
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
                  <div className="icon-box icon-box-teal">
                    <stat.icon 
                      className="w-5 h-5 text-teal" 
                      strokeWidth={1.5} 
                    />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <p className="text-xs text-white/50">{stat.label}</p>
                  </div>
                  <div className="ml-auto">
                    <span className={`status-badge ${stat.badgeStyle}`}>
                      Active
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="glass-card p-6">
            <h2 className="text-xl font-semibold text-white mb-5">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/tracking">
                <button className="btn-pill-teal w-full flex items-center justify-center gap-2">
                  <TrendingUp className="w-5 h-5" strokeWidth={1.5} />
                  Log New Entry
                </button>
              </Link>
              <Link to="/parenting-chat">
                <button className="btn-pill-purple w-full flex items-center justify-center gap-2">
                  <MessageSquare className="w-5 h-5" strokeWidth={1.5} />
                  Ask AI Coach
                </button>
              </Link>
            </div>
          </div>

          {/* My Account Link */}
          <div className="text-center">
            <Link to="/children">
              <button className="btn-pill inline-flex items-center gap-2">
                <Users className="w-4 h-4" strokeWidth={1.5} />
                My Account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;