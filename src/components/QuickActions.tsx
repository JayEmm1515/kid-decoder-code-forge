import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  Plus,
  Brain,
  MessageCircle,
  TrendingUp,
  Calendar,
  Lightbulb,
  Zap
} from "lucide-react";

export default function QuickActions() {
  const actions = [
    {
      title: "Log Event",
      icon: Zap,
      url: createPageUrl("Tracking"),
      color: "text-teal-grey"
    },
    {
      title: "Chain Analysis",
      icon: Brain,
      url: createPageUrl("ChainAnalysis"),
      color: "text-violet"
    },
    {
      title: "Ask AI",
      icon: MessageCircle,
      url: createPageUrl("ParentingChat"),
      color: "text-peach"
    },
    {
      title: "View Insights",
      icon: TrendingUp,
      url: createPageUrl("Tracking"),
      color: "text-rose"
    }
  ];

  return (
    <Card className="bg-white border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-ink flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-peach" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action) => (
            <Link key={action.title} to={action.url}>
              <Button
                variant="outline"
                className="w-full h-24 p-2 flex flex-col items-center justify-center text-center gap-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 group"
              >
                <div className={`p-2 rounded-full bg-slate-100 group-hover:bg-white transition-colors`}>
                    <action.icon className={`w-6 h-6 ${action.color} transition-colors`} />
                </div>
                <span className="font-medium text-sm text-ink">{action.title}</span>
              </Button>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}