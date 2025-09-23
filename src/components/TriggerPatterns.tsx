import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { TriggerPattern } from '@/entities/TriggerPattern';
import { BarChart3, TrendingUp, Calendar, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface TriggerPatternsProps {
  childId: string;
  childName?: string;
}

export default function TriggerPatterns({ childId, childName }: TriggerPatternsProps) {
  const [patterns, setPatterns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDetails, setShowDetails] = useState<string | null>(null);

  useEffect(() => {
    loadTriggerPatterns();
  }, [childId]);

  const loadTriggerPatterns = async () => {
    setLoading(true);
    try {
      const data = await TriggerPattern.getTriggerPatterns(childId);
      // Sort by frequency (count) descending
      const sortedData = data.sort((a, b) => b.count - a.count);
      setPatterns(sortedData);
    } catch (error) {
      console.error('Error loading trigger patterns:', error);
      setPatterns([]);
    }
    setLoading(false);
  };

  const getIntensityColor = (count: number) => {
    if (count >= 7) return 'bg-red-500';
    if (count >= 4) return 'bg-orange-500';
    if (count >= 2) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getIntensityLabel = (count: number) => {
    if (count >= 7) return 'High frequency';
    if (count >= 4) return 'Moderate frequency';
    if (count >= 2) return 'Low frequency';
    return 'Occasional';
  };

  const maxCount = Math.max(...patterns.map(p => p.count), 1);

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-purple-600" />
            Loading Trigger Patterns...
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-16 bg-gray-200 rounded"></div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-purple-600" />
          {childName ? `${childName}'s` : 'Child'} Trigger Patterns
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Common triggers identified from your chain analyses, ranked by frequency
        </p>
      </CardHeader>
      <CardContent>
        {patterns.length === 0 ? (
          <div className="text-center py-8">
            <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No trigger patterns identified yet.</p>
            <p className="text-sm text-muted-foreground mt-1">
              Complete more chain analyses to see patterns emerge.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {patterns.map((pattern, index) => (
              <div key={pattern.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="text-xs font-medium">
                      #{index + 1}
                    </Badge>
                    <h3 className="font-semibold text-gray-900">{pattern.trigger}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge 
                      className={`${getIntensityColor(pattern.count)} text-white text-xs`}
                    >
                      {pattern.count} times
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {getIntensityLabel(pattern.count)}
                    </span>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-muted-foreground">Frequency</span>
                    <span className="text-xs text-muted-foreground">
                      {Math.round((pattern.count / maxCount) * 100)}% of most common
                    </span>
                  </div>
                  <Progress 
                    value={(pattern.count / maxCount) * 100} 
                    className="h-2"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    Last seen: {new Date(pattern.last_occurrence).toLocaleDateString()}
                  </div>
                  
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-xs"
                        onClick={() => setShowDetails(showDetails === pattern.id ? null : pattern.id)}
                      >
                        <Eye className="w-3 h-3 mr-1" />
                        {showDetails === pattern.id ? 'Hide' : 'Show'} examples
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2">
                      <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-200">
                        <p className="text-xs font-medium text-blue-800 mb-2">Recent examples:</p>
                        <ul className="text-xs text-blue-700 space-y-1">
                          {pattern.examples.map((example, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
            ))}

            {/* Summary insight */}
            <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-purple-800 mb-1">Pattern Insights</h4>
                  <p className="text-sm text-purple-700">
                    Your child's most common trigger is <strong>{patterns[0]?.trigger}</strong>, 
                    appearing in {patterns[0]?.count} situations. Focus prevention strategies on this area 
                    for maximum impact.
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