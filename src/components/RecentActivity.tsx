import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { format, formatDistanceToNow } from "date-fns";
import { Activity, AlertCircle, Smile, Frown, Sparkles } from "lucide-react";

const behaviorTypeColors = {
  tantrum: "bg-red-100 text-red-800 border-red-200",
  aggression: "bg-rose-100 text-rose-800 border-rose-200",
  defiance: "bg-orange-100 text-orange-800 border-orange-200",
  withdrawal: "bg-blue-100 text-blue-800 border-blue-200",
  anxiety: "bg-purple-100 text-purple-800 border-purple-200",
  positive: "bg-teal-100 text-teal-800 border-teal-200",
  other: "bg-slate-100 text-slate-800 border-slate-200"
};

export default function RecentActivity({ behaviors, children, isLoading }) {
  const getChildName = (childId) => {
    const child = children.find(c => c.id === childId);
    return child ? child.name : "Unknown";
  };

  if (isLoading) {
    return (
      <Card className="bg-white border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-ink flex items-center gap-2">
            <Activity className="w-5 h-5 text-teal-grey" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <Skeleton className="w-10 h-10 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-ink flex items-center gap-2">
          <Activity className="w-5 h-5 text-teal-grey" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        {behaviors.length === 0 ? (
          <div className="text-center py-6">
            <Sparkles className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-600 font-medium">No recent behavior entries</p>
            <p className="text-sm text-slate-500 mt-1">Log an event to see it here</p>
          </div>
        ) : (
          <div className="space-y-4">
            {behaviors.map((behavior) => (
              <div key={behavior.id} className="flex items-start gap-3">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-lg text-slate-500">
                    {getChildName(behavior.child_id).charAt(0)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium text-ink text-sm">{getChildName(behavior.child_id)}</p>
                    <Badge className={`text-xs ${behaviorTypeColors[behavior.behavior_type] || behaviorTypeColors.other}`}>
                      {behavior.behavior_type}
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-500">
                    {format(new Date(behavior.date), 'MMM d')} • Intensity: {behavior.intensity}/10
                  </p>
                  {behavior.triggers && (
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                      {behavior.triggers}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}