import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Child, BehaviorEntry, MoodEntry } from "@/entities/all";
import { TrendingUp, MessageCircle, Users, Calendar, Edit, ChevronRight } from "lucide-react";
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
      icon: TrendingUp,
      href: createPageUrl("Tracking"),
      cardStyle: "glass-card-teal",
      iconStyle: "icon-box-teal"
    },
    {
      title: "Parenting Chat",
      subtitle: "Ask the AI coach",
      icon: MessageCircle,
      href: createPageUrl("ParentingChat"),
      cardStyle: "glass-card-purple",
      iconStyle: "icon-box-purple"
    },
    {
      title: "Your Children",
      subtitle: "Manage profiles",
      icon: Users,
      href: createPageUrl("Children"),
      cardStyle: "glass-card-pink",
      iconStyle: "icon-box-pink"
    },
  ];

  const quickActions = [
    { label: "Track Mood", icon: TrendingUp, href: createPageUrl("Tracking") },
    { label: "Add Behaviour", icon: Calendar, href: createPageUrl("Tracking") },
    { label: "Update Profile", icon: Edit, href: createPageUrl("Children") },
  ];

  const recentActivities = [
    { text: "You logged a mood entry for Alice", time: "2 hours ago", color: "bg-teal" },
    { text: "You updated Jane's profile", time: "Yesterday", color: "bg-purple" },
    { text: "You logged a behaviour note for Jack", time: "2 days ago", color: "bg-pink" },
  ];

  return (
    <Layout currentPageName="Dashboard">
      <div className="min-h-screen bg-airy p-4 md:p-8 pb-24">
        <div className="max-w-7xl mx-auto space-y-6">
          
          <PageHeader 
            title="Welcome back 👋" 
            subtitle="Your parenting insights at a glance"
            showBack={false}
          />

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featureCards.map((card, index) => (
              <Link key={index} to={card.href} className="group">
                <div className={`${card.cardStyle} p-6`}>
                  <div className="flex items-start gap-4">
                    <div className={`icon-box ${card.iconStyle}`}>
                      <card.icon className="w-6 h-6 text-teal" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                        <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-teal transition-all" strokeWidth={1.5} />
                      </div>
                      <p className="text-sm text-white/50 mt-1">{card.subtitle}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Recent Activity */}
            <div className="glass-card p-6">
              <h2 className="text-lg font-bold text-white mb-4">Recent Activity</h2>
              <div className="space-y-3">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`w-2.5 h-2.5 rounded-full ${activity.color} mt-1.5 flex-shrink-0`}></div>
                    <div className="flex-1 flex justify-between items-start">
                      <p className="text-white/80 text-sm">{activity.text}</p>
                      <p className="text-white/40 text-xs whitespace-nowrap ml-3">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass-card p-6">
              <h2 className="text-lg font-bold text-white mb-4">Quick Actions</h2>
              <div className="space-y-2">
                {quickActions.map((action, index) => (
                  <Link key={index} to={action.href}>
                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl stat-card hover:bg-white/10 transition-all text-left group">
                      <div className="icon-box icon-box-teal w-10 h-10">
                        <action.icon className="w-5 h-5 text-teal" strokeWidth={1.5} />
                      </div>
                      <span className="text-white/80 font-medium text-sm">{action.label}</span>
                      <ChevronRight className="w-4 h-4 text-white/30 ml-auto group-hover:text-teal transition-all" strokeWidth={1.5} />
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Branding */}
          <div className="text-center pt-4">
            <p className="text-teal text-xs font-semibold tracking-widest uppercase">The Kid Decoder</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
