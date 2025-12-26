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
import PageHeader from "@/components/PageHeader";
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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6 max-w-5xl mx-auto">
        <PageHeader title="Behavior & Mood Tracking" subtitle="Log your child's daily behaviors and emotional patterns to identify trends and insights." />

        {children.length === 0 ? (
          <Card className="text-center p-8 bg-gradient-to-br from-slate-800/60 to-purple-900/40 backdrop-blur-sm border border-cyan-400/30 rounded-3xl shadow-xl">
            <CardContent className="pt-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="w-12 h-12 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-cyan-400">No Children Added</h3>
              <p className="text-cyan-200/70 mb-6">You need to add at least one child before you can start tracking.</p>
              <Button asChild className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white rounded-2xl px-8 py-6 text-lg font-semibold shadow-lg">
                <a href="/children">Add Your First Child</a>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 bg-slate-800/60 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-2 shadow-lg">
              <TabsTrigger value="mood" className="flex items-center gap-2 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-teal-500 data-[state=active]:text-white text-cyan-300">
                <Heart className="w-4 h-4" />
                Mood Tracking
              </TabsTrigger>
              <TabsTrigger value="behavior" className="flex items-center gap-2 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-teal-500 data-[state=active]:text-white text-cyan-300">
                <Target className="w-4 h-4" />
                Behavior Logging
              </TabsTrigger>
              <TabsTrigger value="insights" className="flex items-center gap-2 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-teal-500 data-[state=active]:text-white text-cyan-300">
                <Brain className="w-4 h-4" />
                Insights
              </TabsTrigger>
            </TabsList>

            <TabsContent value="mood">
              <Card className="bg-gradient-to-br from-slate-800/60 to-purple-900/40 backdrop-blur-sm border border-cyan-400/30 rounded-3xl shadow-xl">
                <CardHeader className="border-b border-cyan-400/20 pb-6">
                  <CardTitle className="flex items-center gap-3 text-2xl text-cyan-400">
                    <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    Daily Mood Entry
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <form onSubmit={handleMoodSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-cyan-300 font-semibold">Child</Label>
                        <Select value={moodForm.child_id} onValueChange={(value) => setMoodForm({...moodForm, child_id: value})}>
                          <SelectTrigger className="bg-slate-700/50 border-cyan-400/30 text-cyan-100 rounded-xl h-12">
                            <SelectValue placeholder="Select child" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-cyan-400/30 rounded-xl z-50">
                            {children.map(child => (
                              <SelectItem key={child.id} value={child.id} className="text-cyan-100 focus:bg-cyan-500/20 focus:text-cyan-300 rounded-lg">{child.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-cyan-300 font-semibold">Date</Label>
                        <Input 
                          type="date" 
                          value={moodForm.date}
                          onChange={(e) => setMoodForm({...moodForm, date: e.target.value})}
                          required
                          className="bg-slate-700/50 border-cyan-400/30 text-cyan-100 rounded-xl h-12"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label className="text-cyan-300 font-semibold">Morning Mood</Label>
                        <Select value={moodForm.morning_mood} onValueChange={(value) => setMoodForm({...moodForm, morning_mood: value})}>
                          <SelectTrigger className="bg-slate-700/50 border-cyan-400/30 text-cyan-100 rounded-xl h-12">
                            <SelectValue placeholder="Select mood" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-cyan-400/30 rounded-xl z-50">
                            {Object.entries(moodOptions).map(([key, label]) => (
                              <SelectItem key={key} value={key} className="text-cyan-100 focus:bg-cyan-500/20 focus:text-cyan-300 rounded-lg">{label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-cyan-300 font-semibold">Afternoon Mood</Label>
                        <Select value={moodForm.afternoon_mood} onValueChange={(value) => setMoodForm({...moodForm, afternoon_mood: value})}>
                          <SelectTrigger className="bg-slate-700/50 border-cyan-400/30 text-cyan-100 rounded-xl h-12">
                            <SelectValue placeholder="Select mood" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-cyan-400/30 rounded-xl z-50">
                            {Object.entries(moodOptions).map(([key, label]) => (
                              <SelectItem key={key} value={key} className="text-cyan-100 focus:bg-cyan-500/20 focus:text-cyan-300 rounded-lg">{label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-cyan-300 font-semibold">Evening Mood</Label>
                        <Select value={moodForm.evening_mood} onValueChange={(value) => setMoodForm({...moodForm, evening_mood: value})}>
                          <SelectTrigger className="bg-slate-700/50 border-cyan-400/30 text-cyan-100 rounded-xl h-12">
                            <SelectValue placeholder="Select mood" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-cyan-400/30 rounded-xl z-50">
                            {Object.entries(moodOptions).map(([key, label]) => (
                              <SelectItem key={key} value={key} className="text-cyan-100 focus:bg-cyan-500/20 focus:text-cyan-300 rounded-lg">{label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-cyan-300 font-semibold">Sleep Quality</Label>
                        <Select value={moodForm.sleep_quality} onValueChange={(value) => setMoodForm({...moodForm, sleep_quality: value})}>
                          <SelectTrigger className="bg-slate-700/50 border-cyan-400/30 text-cyan-100 rounded-xl h-12">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-cyan-400/30 rounded-xl z-50">
                            <SelectItem value="poor" className="text-cyan-100 focus:bg-cyan-500/20 focus:text-cyan-300 rounded-lg">Poor</SelectItem>
                            <SelectItem value="fair" className="text-cyan-100 focus:bg-cyan-500/20 focus:text-cyan-300 rounded-lg">Fair</SelectItem>
                            <SelectItem value="good" className="text-cyan-100 focus:bg-cyan-500/20 focus:text-cyan-300 rounded-lg">Good</SelectItem>
                            <SelectItem value="excellent" className="text-cyan-100 focus:bg-cyan-500/20 focus:text-cyan-300 rounded-lg">Excellent</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-cyan-300 font-semibold">Energy Level: {moodForm.energy_level[0]}/10</Label>
                        <Slider 
                          value={moodForm.energy_level} 
                          onValueChange={(value) => setMoodForm({...moodForm, energy_level: value})}
                          max={10}
                          min={1}
                          step={1}
                          className="mt-4"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-cyan-300 font-semibold">Notable Events</Label>
                      <Textarea 
                        value={moodForm.notable_events}
                        onChange={(e) => setMoodForm({...moodForm, notable_events: e.target.value})}
                        placeholder="Anything significant that happened today..."
                        rows={3}
                        className="bg-slate-700/50 border-cyan-400/30 text-cyan-100 rounded-xl resize-none"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white rounded-2xl h-14 text-lg font-semibold shadow-lg">
                      <Plus className="w-5 h-5 mr-2" />
                      Save Mood Entry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="behavior">
              <Card className="bg-gradient-to-br from-slate-800/60 to-purple-900/40 backdrop-blur-sm border border-cyan-400/30 rounded-3xl shadow-xl">
                <CardHeader className="border-b border-cyan-400/20 pb-6">
                  <CardTitle className="flex items-center gap-3 text-2xl text-cyan-400">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    Behavior Event Log
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <form onSubmit={handleBehaviorSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label className="text-cyan-300 font-semibold">Child</Label>
                        <Select value={behaviorForm.child_id} onValueChange={(value) => setBehaviorForm({...behaviorForm, child_id: value})}>
                          <SelectTrigger className="bg-slate-700/50 border-cyan-400/30 text-cyan-100 rounded-xl h-12">
                            <SelectValue placeholder="Select child" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-cyan-400/30 rounded-xl z-50">
                            {children.map(child => (
                              <SelectItem key={child.id} value={child.id} className="text-cyan-100 focus:bg-cyan-500/20 focus:text-cyan-300 rounded-lg">{child.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-cyan-300 font-semibold">Date</Label>
                        <Input 
                          type="date" 
                          value={behaviorForm.date}
                          onChange={(e) => setBehaviorForm({...behaviorForm, date: e.target.value})}
                          required
                          className="bg-slate-700/50 border-cyan-400/30 text-cyan-100 rounded-xl h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-cyan-300 font-semibold">Time</Label>
                        <Input 
                          type="time" 
                          value={behaviorForm.time}
                          onChange={(e) => setBehaviorForm({...behaviorForm, time: e.target.value})}
                          required
                          className="bg-slate-700/50 border-cyan-400/30 text-cyan-100 rounded-xl h-12"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-cyan-300 font-semibold">Behavior Type</Label>
                        <Select value={behaviorForm.behavior_type} onValueChange={(value) => setBehaviorForm({...behaviorForm, behavior_type: value})} required>
                          <SelectTrigger className="bg-slate-700/50 border-cyan-400/30 text-cyan-100 rounded-xl h-12">
                            <SelectValue placeholder="Select behavior type" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-cyan-400/30 rounded-xl z-50">
                            {Object.entries(behaviorTypes).map(([key, label]) => (
                              <SelectItem key={key} value={key} className="text-cyan-100 focus:bg-cyan-500/20 focus:text-cyan-300 rounded-lg">{label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-cyan-300 font-semibold">Intensity: {behaviorForm.intensity[0]}/10</Label>
                        <Slider 
                          value={behaviorForm.intensity} 
                          onValueChange={(value) => setBehaviorForm({...behaviorForm, intensity: value})}
                          max={10}
                          min={1}
                          step={1}
                          className="mt-4"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-cyan-300 font-semibold">Triggers</Label>
                      <Textarea 
                        value={behaviorForm.triggers}
                        onChange={(e) => setBehaviorForm({...behaviorForm, triggers: e.target.value})}
                        placeholder="What seemed to trigger this behavior?"
                        rows={2}
                        required
                        className="bg-slate-700/50 border-cyan-400/30 text-cyan-100 rounded-xl resize-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-cyan-300 font-semibold">Context</Label>
                      <Textarea 
                        value={behaviorForm.context}
                        onChange={(e) => setBehaviorForm({...behaviorForm, context: e.target.value})}
                        placeholder="Where were you? What was happening?"
                        rows={2}
                        required
                        className="bg-slate-700/50 border-cyan-400/30 text-cyan-100 rounded-xl resize-none"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-cyan-300 font-semibold">Your Response</Label>
                        <Textarea 
                          value={behaviorForm.response}
                          onChange={(e) => setBehaviorForm({...behaviorForm, response: e.target.value})}
                          placeholder="How did you respond?"
                          rows={3}
                          required
                          className="bg-slate-700/50 border-cyan-400/30 text-cyan-100 rounded-xl resize-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-cyan-300 font-semibold">Outcome</Label>
                        <Textarea 
                          value={behaviorForm.outcome}
                          onChange={(e) => setBehaviorForm({...behaviorForm, outcome: e.target.value})}
                          placeholder="What was the result?"
                          rows={3}
                          required
                          className="bg-slate-700/50 border-cyan-400/30 text-cyan-100 rounded-xl resize-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-cyan-300 font-semibold">Additional Notes</Label>
                      <Textarea 
                        value={behaviorForm.notes}
                        onChange={(e) => setBehaviorForm({...behaviorForm, notes: e.target.value})}
                        placeholder="Any other observations..."
                        rows={2}
                        className="bg-slate-700/50 border-cyan-400/30 text-cyan-100 rounded-xl resize-none"
                      />
                    </div>

                    {/* Neurodivergent-Specific Tracking Section */}
                    <div className="border-t border-cyan-400/20 pt-6">
                      <h3 className="text-xl font-bold mb-4 text-purple-400">
                        Neurodivergent Context (Optional)
                      </h3>
                      
                      {/* Sensory Environment */}
                      <div className="space-y-4 mb-6 bg-slate-700/30 p-4 rounded-2xl border border-cyan-400/20">
                        <h4 className="font-semibold text-sm text-cyan-300">Sensory Environment</h4>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                          <div className="space-y-2">
                            <Label className="text-xs text-cyan-200">Noise Level</Label>
                            <Select 
                              value={behaviorForm.sensory_environment.noise_level} 
                              onValueChange={(value) => setBehaviorForm({
                                ...behaviorForm, 
                                sensory_environment: {...behaviorForm.sensory_environment, noise_level: value}
                              })}
                            >
                              <SelectTrigger className="h-10 text-sm bg-slate-800/50 border-cyan-400/20 text-cyan-100 rounded-lg">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent className="bg-slate-800 border-cyan-400/30 rounded-xl z-50">
                                <SelectItem value="very_low" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">Very Quiet</SelectItem>
                                <SelectItem value="low" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">Quiet</SelectItem>
                                <SelectItem value="moderate" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">Moderate</SelectItem>
                                <SelectItem value="high" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">Loud</SelectItem>
                                <SelectItem value="very_high" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">Very Loud</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label className="text-xs text-cyan-200">Lighting</Label>
                            <Select 
                              value={behaviorForm.sensory_environment.lighting} 
                              onValueChange={(value) => setBehaviorForm({
                                ...behaviorForm, 
                                sensory_environment: {...behaviorForm.sensory_environment, lighting: value}
                              })}
                            >
                              <SelectTrigger className="h-10 text-sm bg-slate-800/50 border-cyan-400/20 text-cyan-100 rounded-lg">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent className="bg-slate-800 border-cyan-400/30 rounded-xl z-50">
                                <SelectItem value="dim" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">Dim</SelectItem>
                                <SelectItem value="natural" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">Natural</SelectItem>
                                <SelectItem value="bright" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">Bright</SelectItem>
                                <SelectItem value="fluorescent" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">Fluorescent</SelectItem>
                                <SelectItem value="flashing" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">Flashing/Flickering</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label className="text-xs text-cyan-200">Crowding</Label>
                            <Select 
                              value={behaviorForm.sensory_environment.crowding} 
                              onValueChange={(value) => setBehaviorForm({
                                ...behaviorForm, 
                                sensory_environment: {...behaviorForm.sensory_environment, crowding: value}
                              })}
                            >
                              <SelectTrigger className="h-10 text-sm bg-slate-800/50 border-cyan-400/20 text-cyan-100 rounded-lg">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent className="bg-slate-800 border-cyan-400/30 rounded-xl z-50">
                                <SelectItem value="none" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">Just us</SelectItem>
                                <SelectItem value="low" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">Few people</SelectItem>
                                <SelectItem value="moderate" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">Some people</SelectItem>
                                <SelectItem value="high" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">Crowded</SelectItem>
                                <SelectItem value="very_high" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">Very crowded</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label className="text-xs text-cyan-200">Transitions</Label>
                            <Select 
                              value={behaviorForm.sensory_environment.transitions} 
                              onValueChange={(value) => setBehaviorForm({
                                ...behaviorForm, 
                                sensory_environment: {...behaviorForm.sensory_environment, transitions: value}
                              })}
                            >
                              <SelectTrigger className="h-10 text-sm bg-slate-800/50 border-cyan-400/20 text-cyan-100 rounded-lg">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent className="bg-slate-800 border-cyan-400/30 rounded-xl z-50">
                                <SelectItem value="smooth" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">Smooth</SelectItem>
                                <SelectItem value="planned" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">Planned</SelectItem>
                                <SelectItem value="unexpected" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">Unexpected</SelectItem>
                                <SelectItem value="abrupt" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">Abrupt</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      {/* Diet/Meal Timing */}
                      <div className="space-y-4 mb-6 bg-slate-700/30 p-4 rounded-2xl border border-cyan-400/20">
                        <h4 className="font-semibold text-sm text-cyan-300">Diet & Meal Timing</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="space-y-2">
                            <Label className="text-xs text-cyan-200">Meal Status</Label>
                            <Select 
                              value={behaviorForm.diet_timing.meal_status} 
                              onValueChange={(value) => setBehaviorForm({
                                ...behaviorForm, 
                                diet_timing: {...behaviorForm.diet_timing, meal_status: value}
                              })}
                            >
                              <SelectTrigger className="h-10 text-sm bg-slate-800/50 border-cyan-400/20 text-cyan-100 rounded-lg">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent className="bg-slate-800 border-cyan-400/30 rounded-xl z-50">
                                <SelectItem value="just_ate" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">Just ate</SelectItem>
                                <SelectItem value="satisfied" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">Satisfied</SelectItem>
                                <SelectItem value="getting_hungry" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">Getting hungry</SelectItem>
                                <SelectItem value="hungry" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">Hungry</SelectItem>
                                <SelectItem value="very_hungry" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">Very hungry</SelectItem>
                                <SelectItem value="skipped_meal" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">Skipped meal</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label className="text-xs text-cyan-200">Time Since Last Meal</Label>
                            <Select 
                              value={behaviorForm.diet_timing.time_since_meal} 
                              onValueChange={(value) => setBehaviorForm({
                                ...behaviorForm, 
                                diet_timing: {...behaviorForm.diet_timing, time_since_meal: value}
                              })}
                            >
                              <SelectTrigger className="h-10 text-sm bg-slate-800/50 border-cyan-400/20 text-cyan-100 rounded-lg">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent className="bg-slate-800 border-cyan-400/30 rounded-xl z-50">
                                <SelectItem value="30 minutes" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">30 minutes</SelectItem>
                                <SelectItem value="1 hour" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">1 hour</SelectItem>
                                <SelectItem value="2 hours" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">2 hours</SelectItem>
                                <SelectItem value="3 hours" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">3 hours</SelectItem>
                                <SelectItem value="4 hours" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">4 hours</SelectItem>
                                <SelectItem value="5+ hours" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">5+ hours</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      {/* Routine Changes */}
                      <div className="space-y-4 mb-6 bg-slate-700/30 p-4 rounded-2xl border border-cyan-400/20">
                        <h4 className="font-semibold text-sm text-cyan-300">Routine & Changes</h4>
                        <div className="grid md:grid-cols-3 gap-3">
                          <div className="space-y-2">
                            <Label className="text-xs text-cyan-200">Unexpected Events</Label>
                            <Input 
                              value={behaviorForm.routine_changes.unexpected_events}
                              onChange={(e) => setBehaviorForm({
                                ...behaviorForm, 
                                routine_changes: {...behaviorForm.routine_changes, unexpected_events: e.target.value}
                              })}
                              placeholder="Any surprises?"
                              className="h-10 text-sm bg-slate-800/50 border-cyan-400/20 text-cyan-100 rounded-lg"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label className="text-xs text-cyan-200">Schedule Disruption</Label>
                            <Select 
                              value={behaviorForm.routine_changes.schedule_disruption} 
                              onValueChange={(value) => setBehaviorForm({
                                ...behaviorForm, 
                                routine_changes: {...behaviorForm.routine_changes, schedule_disruption: value}
                              })}
                            >
                              <SelectTrigger className="h-10 text-sm bg-slate-800/50 border-cyan-400/20 text-cyan-100 rounded-lg">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent className="bg-slate-800 border-cyan-400/30 rounded-xl z-50">
                                <SelectItem value="none" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">None</SelectItem>
                                <SelectItem value="minor" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">Minor</SelectItem>
                                <SelectItem value="moderate" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">Moderate</SelectItem>
                                <SelectItem value="major" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">Major</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label className="text-xs text-cyan-200">Transition Warning</Label>
                            <Select 
                              value={behaviorForm.routine_changes.transition_warning} 
                              onValueChange={(value) => setBehaviorForm({
                                ...behaviorForm, 
                                routine_changes: {...behaviorForm.routine_changes, transition_warning: value}
                              })}
                            >
                              <SelectTrigger className="h-10 text-sm bg-slate-800/50 border-cyan-400/20 text-cyan-100 rounded-lg">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent className="bg-slate-800 border-cyan-400/30 rounded-xl z-50">
                                <SelectItem value="none" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">No warning</SelectItem>
                                <SelectItem value="2 minutes" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">2 minutes</SelectItem>
                                <SelectItem value="5 minutes" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">5 minutes</SelectItem>
                                <SelectItem value="10 minutes" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">10 minutes</SelectItem>
                                <SelectItem value="15+ minutes" className="text-cyan-100 focus:bg-cyan-500/20 rounded-lg">15+ minutes</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white rounded-2xl h-14 text-lg font-semibold shadow-lg">
                      <Plus className="w-5 h-5 mr-2" />
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
        <Card className="mt-8 bg-gradient-to-br from-amber-900/40 to-orange-900/40 border-amber-400/30 backdrop-blur-sm rounded-3xl shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-7 h-7 text-amber-400" />
              </div>
              <div>
                <p className="font-bold text-amber-300 mb-2 text-lg">Important Safety Notice</p>
                <p className="text-amber-100/80">
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