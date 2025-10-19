import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Child, BehaviorEntry, MoodEntry } from "@/entities/all";
import { TrendingUp, MessageCircle, Users, Calendar, Edit } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Dashboard() {
  const [children, setChildren] = useState([]);
  const [behaviors, setBehaviors] = useState([]);
  const [moods, setMoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [childrenData, behaviorsData, moodsData] = await Promise.all([
        Child.list('-created_date'),
        BehaviorEntry.list('-date'),
        MoodEntry.list('-date')
      ]);
      
      setChildren(childrenData);
      setBehaviors(behaviorsData.slice(0, 5));
      setMoods(moodsData);
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const featureCards = [
    {
      title: "Mood & Behaviour",
      subtitle: "Track recent entries",
      icon: <TrendingUp className="w-10 h-10" strokeWidth={1.5} />,
      href: createPageUrl("Tracking"),
      className: "dashboard-card-teal"
    },
    {
      title: "Parenting Chat",
      subtitle: "Ask the AI coach",
      icon: <MessageCircle className="w-10 h-10" strokeWidth={1.5} />,
      href: createPageUrl("ParentingChat"),
      className: "dashboard-card-purple"
    },
    {
      title: "Your Children",
      subtitle: "Manage profiles",
      icon: <Users className="w-10 h-10" strokeWidth={1.5} />,
      href: createPageUrl("Children"),
      className: "dashboard-card-pink"
    },
  ];

  const quickActions = [
    { label: "Track Mood", icon: <TrendingUp className="w-5 h-5" />, href: createPageUrl("Tracking") },
    { label: "Add Behaviour", icon: <Calendar className="w-5 h-5" />, href: createPageUrl("Tracking") },
    { label: "Update Profile", icon: <Edit className="w-5 h-5" />, href: createPageUrl("Children") },
  ];

  const recentActivities = [
    { text: "You logged a mood entry for Alice", time: "2 hours ago", color: "bg-cyan-400" },
    { text: "You updated Jane's profile", time: "Yesterday", color: "bg-blue-400" },
    { text: "You logged a behaviour note for Jack", time: "2 days ago", color: "bg-purple-400" },
  ];

  return (
    <Layout currentPageName="Dashboard">
      <div className="dashboard-dark p-6 md:p-8 lg:p-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
              Welcome back 👋
            </h1>
            <p className="text-gray-400 text-lg md:text-xl">Your parenting insights at a glance</p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {featureCards.map((card, index) => (
              <Link key={index} to={card.href}>
                <Card className={`${card.className} dashboard-glass border-0 hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden`}>
                  <CardContent className="p-8">
                    <div className="text-white mb-4">{card.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                    <p className="text-gray-300 text-sm">{card.subtitle}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Activity */}
            <Card className="dashboard-glass border-0">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent mb-6">
                  Recent Activity
                </h2>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className={`w-3 h-3 rounded-full ${activity.color} mt-1.5 flex-shrink-0`}></div>
                      <div className="flex-1">
                        <p className="text-white text-sm mb-1">{activity.text}</p>
                        <p className="text-gray-500 text-xs">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="dashboard-glass border-0">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent mb-6">
                  Quick Actions
                </h2>
                <div className="space-y-3">
                  {quickActions.map((action, index) => (
                    <Link key={index} to={action.href}>
                      <button className="w-full flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 text-left group">
                        <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                          {action.icon}
                        </div>
                        <span className="text-white font-medium">{action.label}</span>
                      </button>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <div className="mt-16 text-center">
            <p className="text-cyan-500 text-sm font-semibold tracking-widest">THE KID DECODER</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
