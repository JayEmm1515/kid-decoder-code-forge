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
      variant: "poly-coral" as const
    },
    {
      title: "Chain Analysis",
      icon: Brain,
      url: createPageUrl("ChainAnalysis"),
      variant: "poly-purple" as const
    },
    {
      title: "Being With Exercise",
      icon: Calendar,
      url: createPageUrl("BeingWithExercise"),
      variant: "poly-mint" as const
    },
    {
      title: "Ask AI",
      icon: MessageCircle,
      url: createPageUrl("ParentingChat"),
      variant: "poly-teal" as const
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
        <div className="grid grid-cols-2 gap-4 p-2">
          {actions.map((action) => (
            <Link key={action.title} to={action.url}>
              <Button
                variant={action.variant}
                className="w-full h-28 p-4 flex flex-col items-center justify-center text-center gap-3 group [&_svg]:relative [&_svg]:z-10 [&_span]:relative [&_span]:z-10"
              >
                <action.icon className="w-7 h-7 drop-shadow-sm" />
                <span className="font-semibold text-xs drop-shadow-sm leading-tight">{action.title}</span>
              </Button>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}