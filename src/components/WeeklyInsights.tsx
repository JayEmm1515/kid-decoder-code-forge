import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Heart, Brain, Target } from "lucide-react";

export default function WeeklyInsights({ moods, behaviors, children }) {
  const calculateMoodAverage = () => {
    if (moods.length === 0) return 0;
   
    const moodValues = {
      very_sad: 1,
      sad: 2,
      neutral: 3,
      happy: 4,
      very_happy: 5
    };

    let totalMoodPoints = 0;
    let moodCount = 0;

    moods.forEach(mood => {
      [mood.morning_mood, mood.afternoon_mood, mood.evening_mood].forEach(moodVal => {
        if (moodVal && moodValues[moodVal]) {
          totalMoodPoints += moodValues[moodVal];
          moodCount++;
        }
      });
    });

    return moodCount > 0 ? (totalMoodPoints / moodCount) : 0;
  };

  const calculateBehaviorTrends = () => {
    const totalBehaviors = behaviors.length;
    const positiveBehaviors = behaviors.filter(b => b.behavior_type === 'positive').length;
    const highIntensity = behaviors.filter(b => b.intensity >= 7).length;
   
    return {
      total: totalBehaviors,
      positive: positiveBehaviors,
      positivePercentage: totalBehaviors > 0 ? (positiveBehaviors / totalBehaviors) * 100 : 0,
      highIntensityPercentage: totalBehaviors > 0 ? (highIntensity / totalBehaviors) * 100 : 0
    };
  };

  const moodAverage = calculateMoodAverage();
  const behaviorTrends = calculateBehaviorTrends();

  const insights = [
    {
      title: "Weekly Mood",
      value: `${(moodAverage * 20).toFixed(0)}%`,
      description: "Average mood rating",
      progress: (moodAverage / 5) * 100,
      icon: Heart,
      color: "text-violet",
      bgColor: "bg-violet/20"
    },
    {
      title: "Positive Behaviors",
      value: `${behaviorTrends.positivePercentage.toFixed(0)}%`,
      description: "Of total behavior entries",
      progress: behaviorTrends.positivePercentage,
      icon: TrendingUp,
      color: "text-mint",
      bgColor: "bg-mint/20"
    },
    {
      title: "High Intensity Events",
      value: `${behaviorTrends.highIntensityPercentage.toFixed(0)}%`,
      description: "Intensity 7+ behaviors",
      progress: 100 - behaviorTrends.highIntensityPercentage, // Inverse because lower is better
      icon: Target,
      color: "text-rose",
      bgColor: "bg-rose/20"
    }
  ];

  return (
    <Card className="bg-white/10 backdrop-blur-sm border-white/20">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-white flex items-center gap-2">
          <Brain className="w-5 h-5 text-violet" />
          Weekly Insights
        </CardTitle>
      </CardHeader>
      <CardContent>
        {behaviors.length === 0 && moods.length === 0 ? (
          <div className="text-center py-8">
            <Brain className="w-12 h-12 text-white/30 mx-auto mb-3" />
            <p className="text-white/80">Start tracking to see insights</p>
            <p className="text-sm text-white/60 mt-1">Add mood and behavior entries to generate meaningful insights</p>
          </div>
        ) : (
          <div className="space-y-6">
            {insights.map((insight, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-lg ${insight.bgColor} flex items-center justify-center`}>
                      <insight.icon className={`w-4 h-4 ${insight.color}`} />
                    </div>
                    <div>
                      <p className="font-medium text-white">{insight.title}</p>
                      <p className="text-xs text-white/70">{insight.description}</p>
                    </div>
                  </div>
                  <div className={`text-xl font-bold ${insight.color}`}>
                    {insight.value}
                  </div>
                </div>
                <Progress
                  value={insight.progress}
                  className="h-2 bg-white/20 [&>div]:bg-gradient-to-r [&>div]:from-mint [&>div]:to-violet"
                />
              </div>
            ))}
           
            <div className="mt-6 p-4 bg-white/10 rounded-xl border border-white/20">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-mint to-violet rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white mb-1">AI Insight</p>
                  <p className="text-sm text-white/80">
                    {behaviorTrends.total > 0
                      ? `Based on ${behaviorTrends.total} behavior entries, you're building great tracking habits! Consider using chain analysis for challenging behaviors.`
                      : "Start tracking behaviors and moods to get personalized AI insights about your child's patterns."
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}