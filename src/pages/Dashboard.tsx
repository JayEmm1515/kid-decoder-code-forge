import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import QuickActions from "@/components/QuickActions";
import RecentActivity from "@/components/RecentActivity";
import WeeklyInsights from "@/components/WeeklyInsights";
import { Child, BehaviorEntry, MoodEntry } from "@/entities/all";
import { Users, TrendingUp, Activity, Calendar } from "lucide-react";

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

  return (
    <Layout currentPageName="Dashboard">
      <div className="bg-[#153b3e] p-6 space-y-6 min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/dashboard-bg.png)' }}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Welcome to The Kid Decoder</h1>
            <p className="text-white/80 text-lg">Your child's emotional wellness dashboard</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Children</p>
                    <p className="text-2xl font-bold text-white">{stats.totalChildren}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Recent Behaviors</p>
                    <p className="text-2xl font-bold text-white">{stats.totalBehaviors}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Weekly Moods</p>
                    <p className="text-2xl font-bold text-white">{stats.weeklyMoods}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 space-y-6">
              <QuickActions />
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