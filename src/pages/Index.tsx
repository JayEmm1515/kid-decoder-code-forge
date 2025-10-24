import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { TrendingUp, MessageSquare, Users, User, MessageCircle, Plus } from "lucide-react";
import Layout from "@/components/Layout";

const Index = () => {
  const featureCards = [
    {
      title: "Mood & Behaviour",
      description: "Track recent entries",
      icon: TrendingUp,
      link: "/tracking",
      bgColor: "from-cyan-500/20 to-teal-500/20",
      borderColor: "border-cyan-400/30",
      iconColor: "text-cyan-400",
    },
    {
      title: "Parenting Chat",
      description: "Ask the AI coach",
      icon: MessageSquare,
      link: "/parenting-chat",
      bgColor: "from-purple-500/20 to-violet-500/20",
      borderColor: "border-purple-400/30",
      iconColor: "text-purple-400",
    },
    {
      title: "Your Children",
      description: "Manage profiles",
      icon: Users,
      link: "/children",
      bgColor: "from-pink-500/20 to-rose-500/20",
      borderColor: "border-pink-400/30",
      iconColor: "text-pink-400",
    },
  ];

  const recentActivities = [
    { text: "You logged a mood entry for", name: "Alice", time: "2 hours ago", color: "bg-cyan-500" },
    { text: "You updated", name: "Jane's", time: "Yesterday", color: "bg-blue-500" },
    { text: "You logged a behaviour note for", name: "Jack", time: "2 days ago", color: "bg-purple-500" },
  ];

  return (
    <Layout currentPageName="Home">
      <div className="min-h-screen bg-cover bg-center bg-no-repeat p-6" style={{ backgroundImage: 'url(/home-background.jpeg)' }}>
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-slate-800/40 to-purple-900/40 backdrop-blur-xl rounded-[3rem] border border-purple-500/20 p-8 shadow-2xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-cyan-400 mb-2">Welcome back 👋</h1>
            <p className="text-gray-300 text-lg">Your parenting insights at a glance</p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {featureCards.map((card, index) => (
              <Link key={index} to={card.link}>
                <Card className={`bg-gradient-to-br ${card.bgColor} backdrop-blur-sm border ${card.borderColor} p-6 rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-300 h-full`}>
                  <div className="flex items-start gap-4">
                    <card.icon className={`w-12 h-12 ${card.iconColor}`} strokeWidth={2} />
                    <div>
                      <h3 className={`text-2xl font-bold ${card.iconColor} mb-1`}>{card.title}</h3>
                      <p className="text-cyan-300/80">{card.description}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* Recent Activity & Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Recent Activity */}
            <Card className="bg-gradient-to-br from-slate-800/60 to-purple-900/40 backdrop-blur-sm border border-cyan-400/20 p-6 rounded-3xl shadow-xl">
              <h2 className="text-3xl font-bold text-cyan-400 mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-200">
                    <div className={`w-2 h-2 rounded-full ${activity.color}`} />
                    <p className="flex-1">
                      {activity.text} <span className="text-cyan-300">{activity.name}</span> {activity.text === "You updated" ? "profile" : ""}
                    </p>
                    <span className="text-gray-400 text-sm">{activity.time}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-to-br from-slate-800/60 to-purple-900/40 backdrop-blur-sm border border-cyan-400/20 p-6 rounded-3xl shadow-xl">
              <h2 className="text-3xl font-bold text-cyan-400 mb-6">Quick Actions</h2>
              <div className="space-y-4">
                <Link to="/tracking">
                  <button className="w-full flex items-center gap-3 bg-slate-700/50 hover:bg-slate-700/70 border border-cyan-400/30 text-cyan-400 px-6 py-4 rounded-2xl transition-all">
                    <TrendingUp className="w-5 h-5" />
                    Track Mood
                  </button>
                </Link>
                <Link to="/tracking">
                  <button className="w-full flex items-center gap-3 bg-slate-700/50 hover:bg-slate-700/70 border border-cyan-400/30 text-cyan-400 px-6 py-4 rounded-2xl transition-all">
                    <MessageCircle className="w-5 h-5" />
                    Add Behaviour
                  </button>
                </Link>
                <Link to="/children">
                  <button className="w-full flex items-center gap-3 bg-slate-700/50 hover:bg-slate-700/70 border border-cyan-400/30 text-cyan-400 px-6 py-4 rounded-2xl transition-all">
                    <User className="w-5 h-5" />
                    Update Profile
                  </button>
                </Link>
              </div>
            </Card>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-cyan-400/60 text-sm uppercase tracking-wider">THE KID DECODER</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
