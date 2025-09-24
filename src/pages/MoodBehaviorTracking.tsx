import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import Layout from "@/components/Layout";
import { Child, MoodEntry, BehaviorEntry } from "@/entities/all";
import { Plus, Activity, Heart, Calendar, Clock, Target, AlertCircle, Brain } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import BehaviorInsights from "@/components/BehaviorInsights";

const moodOptions = {
  very_sad: "😢 Very Sad",
  sad: "😞 Sad", 
  neutral: "😐 Neutral",
  happy: "😊 Happy",
  very_happy: "😄 Very Happy"
};

const behaviorTypes = {
  tantrum: "Tantrum",
  aggression: "Aggression", 
  defiance: "Defiance",
  withdrawal: "Withdrawal",
  anxiety: "Anxiety",
  positive: "Positive Behavior",
  other: "Other"
};

export default function MoodBehaviorTrackingPage() {
  const [children, setChildren] = useState([]);
  const [activeTab, setActiveTab] = useState("mood");
  const { toast } = useToast();

  // Mood form state
  const [moodForm, setMoodForm] = useState({
    child_id: "",
    date: new Date().toISOString().split('T')[0],
    morning_mood: "",
    afternoon_mood: "",
    evening_mood: "",
    sleep_quality: "good",
    energy_level: [7],
    notable_events: ""
  });

  // Behavior form state
  const [behaviorForm, setBehaviorForm] = useState({
    child_id: "",
    date: new Date().toISOString().split('T')[0],
    time: new Date().toTimeString().slice(0, 5),
    behavior_type: "",
    intensity: [5],
    triggers: "",
    context: "",
    response: "",
    outcome: "",
    notes: "",
    // Neurodivergent-specific fields
    sensory_environment: {
      noise_level: "",
      lighting: "",
      crowding: "",
      transitions: ""
    },
    diet_timing: {
      meal_status: "",
      time_since_meal: ""
    },
    routine_changes: {
      unexpected_events: "",
      schedule_disruption: "",
      transition_warning: ""
    }
  });

  useEffect(() => {
    loadChildren();
  }, []);

  const loadChildren = async () => {
    try {
      const data = await Child.list();
      setChildren(data);
      if (data.length > 0) {
        setMoodForm(prev => ({ ...prev, child_id: data[0].id }));
        setBehaviorForm(prev => ({ ...prev, child_id: data[0].id }));
      }
    } catch (error) {
      console.error('Error loading children:', error);
    }
  };

  const handleMoodSubmit = async (e) => {
    e.preventDefault();
    try {
      const moodData = {
        ...moodForm,
        energy_level: moodForm.energy_level[0]
      };
      await MoodEntry.create(moodData);
      toast({
        title: "Mood Entry Saved",
        description: "Your child's mood has been tracked successfully.",
      });
      // Reset form
      setMoodForm({
        child_id: children[0]?.id || "",
        date: new Date().toISOString().split('T')[0],
        morning_mood: "",
        afternoon_mood: "",
        evening_mood: "",
        sleep_quality: "good",
        energy_level: [7],
        notable_events: ""
      });
    } catch (error) {
      console.error('Error saving mood:', error);
      toast({
        title: "Error",
        description: "Failed to save mood entry. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleBehaviorSubmit = async (e) => {
    e.preventDefault();
    try {
      const behaviorData = {
        ...behaviorForm,
        intensity: behaviorForm.intensity[0]
      };
      await BehaviorEntry.create(behaviorData);
      toast({
        title: "Behavior Entry Saved", 
        description: "The behavior event has been logged successfully.",
      });
      // Reset form
      setBehaviorForm({
        child_id: children[0]?.id || "",
        date: new Date().toISOString().split('T')[0],
        time: new Date().toTimeString().slice(0, 5),
        behavior_type: "",
        intensity: [5],
        triggers: "",
        context: "",
        response: "",
        outcome: "",
        notes: "",
        sensory_environment: {
          noise_level: "",
          lighting: "",
          crowding: "",
          transitions: ""
        },
        diet_timing: {
          meal_status: "",
          time_since_meal: ""
        },
        routine_changes: {
          unexpected_events: "",
          schedule_disruption: "",
          transition_warning: ""
        }
      });
    } catch (error) {
      console.error('Error saving behavior:', error);
      toast({
        title: "Error",
        description: "Failed to save behavior entry. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <Layout>
      <div className="bg-coral-corner p-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
            <Activity className="w-8 h-8 text-primary" />
            Behavior & Mood Tracking
          </h1>
          <p className="text-muted-foreground">Log your child's daily behaviors and emotional patterns to identify trends and insights.</p>
        </div>

        {children.length === 0 ? (
          <Card className="text-center p-8">
            <CardContent>
              <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Children Added</h3>
              <p className="text-muted-foreground mb-4">You need to add at least one child before you can start tracking.</p>
              <Button asChild>
                <a href="/children">Add Your First Child</a>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="mood" className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Mood Tracking
              </TabsTrigger>
              <TabsTrigger value="behavior" className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                Behavior Logging
              </TabsTrigger>
              <TabsTrigger value="insights" className="flex items-center gap-2">
                <Brain className="w-4 h-4" />
                Insights
              </TabsTrigger>
            </TabsList>

            <TabsContent value="mood">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-rose" />
                    Daily Mood Entry
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleMoodSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Child</Label>
                        <Select value={moodForm.child_id} onValueChange={(value) => setMoodForm({...moodForm, child_id: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select child" />
                          </SelectTrigger>
                          <SelectContent>
                            {children.map(child => (
                              <SelectItem key={child.id} value={child.id}>{child.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Date</Label>
                        <Input 
                          type="date" 
                          value={moodForm.date}
                          onChange={(e) => setMoodForm({...moodForm, date: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label>Morning Mood</Label>
                        <Select value={moodForm.morning_mood} onValueChange={(value) => setMoodForm({...moodForm, morning_mood: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select mood" />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.entries(moodOptions).map(([key, label]) => (
                              <SelectItem key={key} value={key}>{label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Afternoon Mood</Label>
                        <Select value={moodForm.afternoon_mood} onValueChange={(value) => setMoodForm({...moodForm, afternoon_mood: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select mood" />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.entries(moodOptions).map(([key, label]) => (
                              <SelectItem key={key} value={key}>{label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Evening Mood</Label>
                        <Select value={moodForm.evening_mood} onValueChange={(value) => setMoodForm({...moodForm, evening_mood: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select mood" />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.entries(moodOptions).map(([key, label]) => (
                              <SelectItem key={key} value={key}>{label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Sleep Quality</Label>
                        <Select value={moodForm.sleep_quality} onValueChange={(value) => setMoodForm({...moodForm, sleep_quality: value})}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="poor">Poor</SelectItem>
                            <SelectItem value="fair">Fair</SelectItem>
                            <SelectItem value="good">Good</SelectItem>
                            <SelectItem value="excellent">Excellent</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Energy Level: {moodForm.energy_level[0]}/10</Label>
                        <Slider 
                          value={moodForm.energy_level} 
                          onValueChange={(value) => setMoodForm({...moodForm, energy_level: value})}
                          max={10}
                          min={1}
                          step={1}
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Notable Events</Label>
                      <Textarea 
                        value={moodForm.notable_events}
                        onChange={(e) => setMoodForm({...moodForm, notable_events: e.target.value})}
                        placeholder="Anything significant that happened today..."
                        rows={3}
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      <Plus className="w-4 h-4 mr-2" />
                      Save Mood Entry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="behavior">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-orange-500" />
                    Behavior Event Log
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleBehaviorSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label>Child</Label>
                        <Select value={behaviorForm.child_id} onValueChange={(value) => setBehaviorForm({...behaviorForm, child_id: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select child" />
                          </SelectTrigger>
                          <SelectContent>
                            {children.map(child => (
                              <SelectItem key={child.id} value={child.id}>{child.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Date</Label>
                        <Input 
                          type="date" 
                          value={behaviorForm.date}
                          onChange={(e) => setBehaviorForm({...behaviorForm, date: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Time</Label>
                        <Input 
                          type="time" 
                          value={behaviorForm.time}
                          onChange={(e) => setBehaviorForm({...behaviorForm, time: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Behavior Type</Label>
                        <Select value={behaviorForm.behavior_type} onValueChange={(value) => setBehaviorForm({...behaviorForm, behavior_type: value})} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select behavior type" />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.entries(behaviorTypes).map(([key, label]) => (
                              <SelectItem key={key} value={key}>{label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Intensity: {behaviorForm.intensity[0]}/10</Label>
                        <Slider 
                          value={behaviorForm.intensity} 
                          onValueChange={(value) => setBehaviorForm({...behaviorForm, intensity: value})}
                          max={10}
                          min={1}
                          step={1}
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Triggers</Label>
                      <Textarea 
                        value={behaviorForm.triggers}
                        onChange={(e) => setBehaviorForm({...behaviorForm, triggers: e.target.value})}
                        placeholder="What seemed to trigger this behavior?"
                        rows={2}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Context</Label>
                      <Textarea 
                        value={behaviorForm.context}
                        onChange={(e) => setBehaviorForm({...behaviorForm, context: e.target.value})}
                        placeholder="Where were you? What was happening?"
                        rows={2}
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Your Response</Label>
                        <Textarea 
                          value={behaviorForm.response}
                          onChange={(e) => setBehaviorForm({...behaviorForm, response: e.target.value})}
                          placeholder="How did you respond?"
                          rows={3}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Outcome</Label>
                        <Textarea 
                          value={behaviorForm.outcome}
                          onChange={(e) => setBehaviorForm({...behaviorForm, outcome: e.target.value})}
                          placeholder="What was the result?"
                          rows={3}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Additional Notes</Label>
                      <Textarea 
                        value={behaviorForm.notes}
                        onChange={(e) => setBehaviorForm({...behaviorForm, notes: e.target.value})}
                        placeholder="Any other observations..."
                        rows={2}
                      />
                    </div>

                    {/* Neurodivergent-Specific Tracking Section */}
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold mb-4 text-muted-foreground">
                        Neurodivergent Context (Optional)
                      </h3>
                      
                      {/* Sensory Environment */}
                      <div className="space-y-4 mb-6">
                        <h4 className="font-medium text-sm">Sensory Environment</h4>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                          <div className="space-y-2">
                            <Label className="text-xs">Noise Level</Label>
                            <Select 
                              value={behaviorForm.sensory_environment.noise_level} 
                              onValueChange={(value) => setBehaviorForm({
                                ...behaviorForm, 
                                sensory_environment: {...behaviorForm.sensory_environment, noise_level: value}
                              })}
                            >
                              <SelectTrigger className="h-8 text-sm">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="very_low">Very Quiet</SelectItem>
                                <SelectItem value="low">Quiet</SelectItem>
                                <SelectItem value="moderate">Moderate</SelectItem>
                                <SelectItem value="high">Loud</SelectItem>
                                <SelectItem value="very_high">Very Loud</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label className="text-xs">Lighting</Label>
                            <Select 
                              value={behaviorForm.sensory_environment.lighting} 
                              onValueChange={(value) => setBehaviorForm({
                                ...behaviorForm, 
                                sensory_environment: {...behaviorForm.sensory_environment, lighting: value}
                              })}
                            >
                              <SelectTrigger className="h-8 text-sm">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="dim">Dim</SelectItem>
                                <SelectItem value="natural">Natural</SelectItem>
                                <SelectItem value="bright">Bright</SelectItem>
                                <SelectItem value="fluorescent">Fluorescent</SelectItem>
                                <SelectItem value="flashing">Flashing/Flickering</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label className="text-xs">Crowding</Label>
                            <Select 
                              value={behaviorForm.sensory_environment.crowding} 
                              onValueChange={(value) => setBehaviorForm({
                                ...behaviorForm, 
                                sensory_environment: {...behaviorForm.sensory_environment, crowding: value}
                              })}
                            >
                              <SelectTrigger className="h-8 text-sm">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="none">Just us</SelectItem>
                                <SelectItem value="low">Few people</SelectItem>
                                <SelectItem value="moderate">Some people</SelectItem>
                                <SelectItem value="high">Crowded</SelectItem>
                                <SelectItem value="very_high">Very crowded</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label className="text-xs">Transitions</Label>
                            <Select 
                              value={behaviorForm.sensory_environment.transitions} 
                              onValueChange={(value) => setBehaviorForm({
                                ...behaviorForm, 
                                sensory_environment: {...behaviorForm.sensory_environment, transitions: value}
                              })}
                            >
                              <SelectTrigger className="h-8 text-sm">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="smooth">Smooth</SelectItem>
                                <SelectItem value="planned">Planned</SelectItem>
                                <SelectItem value="unexpected">Unexpected</SelectItem>
                                <SelectItem value="abrupt">Abrupt</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      {/* Diet/Meal Timing */}
                      <div className="space-y-4 mb-6">
                        <h4 className="font-medium text-sm">Diet & Meal Timing</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="space-y-2">
                            <Label className="text-xs">Meal Status</Label>
                            <Select 
                              value={behaviorForm.diet_timing.meal_status} 
                              onValueChange={(value) => setBehaviorForm({
                                ...behaviorForm, 
                                diet_timing: {...behaviorForm.diet_timing, meal_status: value}
                              })}
                            >
                              <SelectTrigger className="h-8 text-sm">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="just_ate">Just ate</SelectItem>
                                <SelectItem value="satisfied">Satisfied</SelectItem>
                                <SelectItem value="getting_hungry">Getting hungry</SelectItem>
                                <SelectItem value="hungry">Hungry</SelectItem>
                                <SelectItem value="very_hungry">Very hungry</SelectItem>
                                <SelectItem value="skipped_meal">Skipped meal</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label className="text-xs">Time Since Last Meal</Label>
                            <Select 
                              value={behaviorForm.diet_timing.time_since_meal} 
                              onValueChange={(value) => setBehaviorForm({
                                ...behaviorForm, 
                                diet_timing: {...behaviorForm.diet_timing, time_since_meal: value}
                              })}
                            >
                              <SelectTrigger className="h-8 text-sm">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="30 minutes">30 minutes</SelectItem>
                                <SelectItem value="1 hour">1 hour</SelectItem>
                                <SelectItem value="2 hours">2 hours</SelectItem>
                                <SelectItem value="3 hours">3 hours</SelectItem>
                                <SelectItem value="4 hours">4 hours</SelectItem>
                                <SelectItem value="5+ hours">5+ hours</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      {/* Routine Changes */}
                      <div className="space-y-4 mb-6">
                        <h4 className="font-medium text-sm">Routine & Changes</h4>
                        <div className="grid md:grid-cols-3 gap-3">
                          <div className="space-y-2">
                            <Label className="text-xs">Unexpected Events</Label>
                            <Input 
                              value={behaviorForm.routine_changes.unexpected_events}
                              onChange={(e) => setBehaviorForm({
                                ...behaviorForm, 
                                routine_changes: {...behaviorForm.routine_changes, unexpected_events: e.target.value}
                              })}
                              placeholder="Any surprises?"
                              className="h-8 text-sm"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label className="text-xs">Schedule Disruption</Label>
                            <Select 
                              value={behaviorForm.routine_changes.schedule_disruption} 
                              onValueChange={(value) => setBehaviorForm({
                                ...behaviorForm, 
                                routine_changes: {...behaviorForm.routine_changes, schedule_disruption: value}
                              })}
                            >
                              <SelectTrigger className="h-8 text-sm">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="none">None</SelectItem>
                                <SelectItem value="minor">Minor</SelectItem>
                                <SelectItem value="moderate">Moderate</SelectItem>
                                <SelectItem value="major">Major</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label className="text-xs">Transition Warning</Label>
                            <Select 
                              value={behaviorForm.routine_changes.transition_warning} 
                              onValueChange={(value) => setBehaviorForm({
                                ...behaviorForm, 
                                routine_changes: {...behaviorForm.routine_changes, transition_warning: value}
                              })}
                            >
                              <SelectTrigger className="h-8 text-sm">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="none">No warning</SelectItem>
                                <SelectItem value="2 minutes">2 minutes</SelectItem>
                                <SelectItem value="5 minutes">5 minutes</SelectItem>
                                <SelectItem value="10 minutes">10 minutes</SelectItem>
                                <SelectItem value="15+ minutes">15+ minutes</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button type="submit" className="w-full">
                      <Plus className="w-4 h-4 mr-2" />
                      Log Behavior Event
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="insights">
              <BehaviorInsights />
            </TabsContent>
          </Tabs>
        )}

        {/* Safety Notice */}
        <Card className="mt-8 bg-amber-50 border-amber-200">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-amber-800 mb-1">Important Safety Notice</p>
                <p className="text-amber-700">
                  This tracking tool is for general monitoring only. If you're concerned about your child's behavior or emotional wellbeing, 
                  please consult with a qualified healthcare professional. In emergencies, call 000.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}