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

  return (
    <Layout currentPageName="Home">
      <div className="min-h-screen bg-airy p-4 md:p-8 pb-24">
        <div className="max-w-7xl mx-auto space-y-6">
          
          {/* Hero Card - The Kid Decoder */}
          <div className="glass-card p-8 md:p-10">
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
                  THE<br/>KID<br/>DECODER
                </h1>
                <p className="text-base text-white/50 mt-3 uppercase tracking-wide">
                  Help for parents waiting
                </p>
              </div>
              <Link to="/tracking" className="mt-4">
                <button className="btn-pill">
                  Get Started
                </button>
              </Link>
            </div>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {featureCards.map((card, index) => (
              <Link key={index} to={card.link} className="group">
                <div className={`${card.cardStyle} p-5 h-full`}>
                  <div className="flex flex-col gap-3">
                    <div className={`icon-box ${card.iconStyle} w-12 h-12`}>
                      <card.icon className={`w-6 h-6 ${card.iconColor}`} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-semibold text-white">
                          {card.title}
                        </h3>
                        <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-teal group-hover:translate-x-1 transition-all" strokeWidth={1.5} />
                      </div>
                      <p className="text-xs text-white/40 mt-1">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* My Account Card */}
          <div className="glass-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Manage</p>
                <h2 className="text-xl font-bold text-white">My Account</h2>
              </div>
              <Link to="/children">
                <button className="btn-pill">
                  View Profile
                </button>
              </Link>
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 py-4">
            {[0, 1, 2, 3, 4].map((_, i) => (
              <div 
                key={i} 
                className={`w-2 h-2 rounded-full transition-all ${
                  i === 0 ? "bg-white/80 w-4" : "bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
