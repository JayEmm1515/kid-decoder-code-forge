import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import NeumoGemButton from "@/components/NeumoGemButton";
import RecentActivity from "@/components/RecentActivity";
import WeeklyInsights from "@/components/WeeklyInsights";
import { Child, BehaviorEntry, MoodEntry } from "@/entities/all";
import { Users, TrendingUp, Activity, Brain, MessageCircle, Zap, Calendar, Lightbulb } from "lucide-react";
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
      setBehaviors(behaviorsData.slice(0, 5)); // Recent 5
      setMoods(moodsData);
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const stats = {
    totalChildren: children.length,
    totalBehaviors: behaviors.length,
    weeklyMoods: moods.filter(m => {
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return new Date(m.date) >= weekAgo;
    }).length
  };

  const quickActions = [
    {
      key: "log-event",
      label: "Log Event",
      icon: <Zap className="w-9 h-9 text-white" strokeWidth={1.75} />,
      from: "#FF9A8B",
      to: "#FF6A88",
      href: createPageUrl("Tracking"),
    },
    {
      key: "chain-analysis",
      label: "Chain Analysis",
      icon: <Brain className="w-9 h-9 text-white" strokeWidth={1.75} />,
      from: "#A364D8",
      to: "#D988F3",
      href: createPageUrl("ChainAnalysis"),
    },
    {
      key: "being-with",
      label: "Being With",
      icon: <Calendar className="w-9 h-9 text-white" strokeWidth={1.75} />,
      from: "#84E1C7",
      to: "#7C8CF7",
      href: createPageUrl("BeingWithExercise"),
    },
    {
      key: "ask-ai",
      label: "Ask AI",
      icon: <MessageCircle className="w-9 h-9 text-white" strokeWidth={1.75} />,
      from: "#7ADCE3",
      to: "#8A6BFF",
      href: createPageUrl("ParentingChat"),
    },
  ];

  return (
    <Layout currentPageName="Dashboard">
      <div className="bg-orb p-6 space-y-6 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#002962] mb-2">Welcome to The Kid Decoder</h1>
            <p className="text-[#64748B] text-lg">Your child's emotional wellness dashboard</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="glass border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#6EDCD7] to-[#A364D8]">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[#64748B] text-sm font-medium">Children</p>
                    <p className="text-3xl font-bold text-[#002962]">{stats.totalChildren}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#84E1C7] to-[#7C8CF7]">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[#64748B] text-sm font-medium">Recent Behaviors</p>
                    <p className="text-3xl font-bold text-[#002962]">{stats.totalBehaviors}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#7ADCE3] to-[#8A6BFF]">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[#64748B] text-sm font-medium">Weekly Moods</p>
                    <p className="text-3xl font-bold text-[#002962]">{stats.weeklyMoods}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card className="glass border-0 mb-8">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#002962] flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-[#FFDA6C]" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 p-2">
                {quickActions.map((action) => (
                  <Link key={action.key} to={action.href} className="block">
                    <NeumoGemButton
                      label={action.label}
                      icon={action.icon}
                      from={action.from}
                      to={action.to}
                      size="lg"
                    />
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 space-y-6">
              <RecentActivity 
                behaviors={behaviors} 
                children={children} 
                isLoading={isLoading} 
              />
            </div>
            
            <div className="lg:col-span-2">
              <WeeklyInsights 
                moods={moods} 
                behaviors={behaviors} 
                children={children} 
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}