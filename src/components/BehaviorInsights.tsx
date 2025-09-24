import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { BehaviorEntry } from '@/entities/all';
import { TrendingUp, AlertTriangle, CheckCircle, Info, Lightbulb } from 'lucide-react';

interface BehaviorInsightsProps {
  childId?: string;
}

export default function BehaviorInsights({ childId }: BehaviorInsightsProps) {
  const [insights, setInsights] = useState<any[]>([]);
  const [behaviorData, setBehaviorData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadBehaviorData();
  }, [childId]);

  const loadBehaviorData = async () => {
    try {
      setIsLoading(true);
      const data = await BehaviorEntry.list('-date');
      
      // Filter by child if specified
      const filteredData = childId 
        ? data.filter((entry: any) => entry.child_id === childId)
        : data;
      
      setBehaviorData(filteredData);
      
      // Generate insights
      const generatedInsights = BehaviorEntry.generateInsights(filteredData);
      setInsights(generatedInsights);
    } catch (error) {
      console.error('Error loading behavior data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-amber-500" />;
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'info':
      default:
        return <Info className="w-4 h-4 text-blue-500" />;
    }
  };

  const getInsightVariant = (type: string) => {
    switch (type) {
      case 'warning':
        return 'default' as const;
      case 'success':
        return 'default' as const;
      case 'info':
      default:
        return 'default' as const;
    }
  };

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-center">
            <div className="text-muted-foreground">Loading insights...</div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (behaviorData.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Behavior Insights
          </CardTitle>
          <CardDescription>
            AI-powered pattern recognition to help understand your child's behavior
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-6">
            <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground mb-2">No behavior entries yet</p>
            <p className="text-sm text-muted-foreground">
              Start logging behaviors to see personalized insights and patterns
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Behavior Insights
          </CardTitle>
          <CardDescription>
            Based on {behaviorData.length} behavior entries with neurodivergent context
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {insights.map((insight, index) => (
            <Alert key={index} className="border-l-4" style={{
              borderLeftColor: insight.type === 'warning' ? '#f59e0b' : 
                              insight.type === 'success' ? '#10b981' : '#3b82f6'
            }}>
              <div className="flex items-start space-x-3">
                {getInsightIcon(insight.type)}
                <div className="flex-1">
                  <AlertDescription className="mb-2">
                    <strong>{insight.message}</strong>
                  </AlertDescription>
                  {insight.suggestion && (
                    <div className="flex items-start space-x-2 mt-2 p-3 bg-muted/50 rounded-lg">
                      <Lightbulb className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        <strong>Suggestion:</strong> {insight.suggestion}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </Alert>
          ))}
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                {behaviorData.length}
              </div>
              <div className="text-sm text-muted-foreground">Total Entries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {behaviorData.filter(entry => entry.behavior_type === 'positive').length}
              </div>
              <div className="text-sm text-muted-foreground">Positive</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">
                {behaviorData.filter(entry => 
                  ['tantrum', 'aggression', 'anxiety'].includes(entry.behavior_type) && 
                  entry.intensity >= 6
                ).length}
              </div>
              <div className="text-sm text-muted-foreground">High Intensity</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {Math.round(
                  behaviorData.reduce((sum, entry) => sum + entry.intensity, 0) / behaviorData.length * 10
                ) / 10}
              </div>
              <div className="text-sm text-muted-foreground">Avg Intensity</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Patterns */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recent Environmental Patterns</CardTitle>
          <CardDescription>
            Common factors in your recent behavior logs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {/* Most common noise levels */}
            {(() => {
              const noiseLevels = behaviorData
                .map(entry => entry.sensory_environment?.noise_level)
                .filter(Boolean);
              const mostCommonNoise = noiseLevels.length > 0 
                ? noiseLevels.reduce((a, b, i, arr) => 
                    arr.filter(v => v === a).length >= arr.filter(v => v === b).length ? a : b
                  )
                : null;
              
              return mostCommonNoise && (
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <span className="text-sm">Most common noise level:</span>
                  <Badge variant="secondary">
                    {mostCommonNoise.replace('_', ' ').toUpperCase()}
                  </Badge>
                </div>
              );
            })()}

            {/* Routine disruption frequency */}
            {(() => {
              const routineDisruptions = behaviorData
                .filter(entry => entry.routine_changes?.schedule_disruption !== 'none')
                .length;
              const percentage = behaviorData.length > 0 
                ? Math.round((routineDisruptions / behaviorData.length) * 100) 
                : 0;
              
              return behaviorData.length > 0 && (
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <span className="text-sm">Entries with routine changes:</span>
                  <Badge variant={percentage > 50 ? "destructive" : "secondary"}>
                    {percentage}%
                  </Badge>
                </div>
              );
            })()}

            {/* Hunger-related entries */}
            {(() => {
              const hungryEntries = behaviorData
                .filter(entry => ['hungry', 'very_hungry'].includes(entry.diet_timing?.meal_status))
                .length;
              const percentage = behaviorData.length > 0 
                ? Math.round((hungryEntries / behaviorData.length) * 100) 
                : 0;
              
              return behaviorData.length > 0 && (
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <span className="text-sm">Entries when hungry:</span>
                  <Badge variant={percentage > 30 ? "destructive" : "secondary"}>
                    {percentage}%
                  </Badge>
                </div>
              );
            })()}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}