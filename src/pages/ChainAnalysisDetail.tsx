import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { Child, ChainAnalysis } from "@/entities/all";
import { Brain, Plus, Link2, AlertTriangle, Target, Lightbulb, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type ChainLink = {
  step: number;
  description: string;
  thoughts: string;
  feelings: string;
  behaviors: string;
};

export default function ChainAnalysisDetailPage() {
  const [children, setChildren] = useState([]);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    child_id: "",
    title: "",
    incident_date: new Date().toISOString().split('T')[0],
    vulnerability_factors: "",
    prompting_event: "",
    links_in_chain: [] as ChainLink[],
    consequences: "",
    prevention_strategies: "",
    intervention_points: ""
  });

  useEffect(() => {
    loadChildren();
  }, []);

  const loadChildren = async () => {
    try {
      const data = await Child.list();
      setChildren(data);
      if (data.length > 0) {
        setFormData(prev => ({ ...prev, child_id: data[0].id }));
      }
    } catch (error) {
      console.error('Error loading children:', error);
    }
  };

  const addChainLink = () => {
    const newLink: ChainLink = {
      step: formData.links_in_chain.length + 1,
      description: "",
      thoughts: "",
      feelings: "",
      behaviors: ""
    };
    setFormData(prev => ({
      ...prev,
      links_in_chain: [...prev.links_in_chain, newLink]
    }));
  };

  const updateChainLink = (index: number, field: keyof ChainLink, value: string) => {
    const updatedLinks = [...formData.links_in_chain];
    updatedLinks[index] = { ...updatedLinks[index], [field]: value };
    setFormData(prev => ({ ...prev, links_in_chain: updatedLinks }));
  };

  const removeChainLink = (index: number) => {
    const updatedLinks = formData.links_in_chain.filter((_, i) => i !== index);
    // Renumber the steps
    const renumberedLinks = updatedLinks.map((link, i) => ({ ...link, step: i + 1 }));
    setFormData(prev => ({ ...prev, links_in_chain: renumberedLinks }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await ChainAnalysis.create(formData);
      toast({
        title: "Chain Analysis Saved",
        description: "Your analysis has been saved successfully.",
      });
      // Reset form
      setFormData({
        child_id: children[0]?.id || "",
        title: "",
        incident_date: new Date().toISOString().split('T')[0],
        vulnerability_factors: "",
        prompting_event: "",
        links_in_chain: [],
        consequences: "",
        prevention_strategies: "",
        intervention_points: ""
      });
    } catch (error) {
      console.error('Error saving chain analysis:', error);
      toast({
        title: "Error",
        description: "Failed to save analysis. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <Layout>
      <div className="p-6 max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
            <Brain className="w-8 h-8 text-primary" />
            Chain Analysis
          </h1>
          <p className="text-muted-foreground">
            Break down challenging behaviors step by step to understand patterns and develop effective strategies.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
                Incident Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Child</Label>
                  <Select value={formData.child_id} onValueChange={(value) => setFormData({...formData, child_id: value})}>
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
                  <Label>Incident Date</Label>
                  <Input 
                    type="date" 
                    value={formData.incident_date}
                    onChange={(e) => setFormData({...formData, incident_date: e.target.value})}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Title/Description</Label>
                <Input 
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  placeholder="Brief description of the incident (e.g. 'Playground Meltdown')"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Vulnerability Factors</Label>
                <Textarea 
                  value={formData.vulnerability_factors}
                  onChange={(e) => setFormData({...formData, vulnerability_factors: e.target.value})}
                  placeholder="What made your child more vulnerable? (tired, hungry, overstimulated, stressed, etc.)"
                  rows={3}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Prompting Event</Label>
                <Textarea 
                  value={formData.prompting_event}
                  onChange={(e) => setFormData({...formData, prompting_event: e.target.value})}
                  placeholder="What immediately triggered the behavior? What happened right before?"
                  rows={3}
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Chain Links */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Link2 className="w-5 h-5 text-blue-500" />
                  Links in the Chain
                </CardTitle>
                <Button type="button" onClick={addChainLink} variant="outline" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Link
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {formData.links_in_chain.length === 0 ? (
                <div className="text-center py-8">
                  <Link2 className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No chain links added yet.</p>
                  <p className="text-sm text-muted-foreground mt-1">Add links to trace the progression of the behavior.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {formData.links_in_chain.map((link, index) => (
                    <div key={index} className="border rounded-lg p-4 space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <ArrowRight className="w-3 h-3" />
                          Step {link.step}
                        </Badge>
                        <Button 
                          type="button" 
                          onClick={() => removeChainLink(index)}
                          variant="ghost" 
                          size="sm"
                          className="text-red-500 hover:text-red-700"
                        >
                          Remove
                        </Button>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <Label>What Happened?</Label>
                          <Textarea 
                            value={link.description}
                            onChange={(e) => updateChainLink(index, 'description', e.target.value)}
                            placeholder="Describe what happened in this step..."
                            rows={2}
                          />
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-3">
                          <div className="space-y-2">
                            <Label>Thoughts</Label>
                            <Textarea 
                              value={link.thoughts}
                              onChange={(e) => updateChainLink(index, 'thoughts', e.target.value)}
                              placeholder="What might they have been thinking?"
                              rows={2}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Feelings</Label>
                            <Textarea 
                              value={link.feelings}
                              onChange={(e) => updateChainLink(index, 'feelings', e.target.value)}
                              placeholder="What emotions were present?"
                              rows={2}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Behaviors</Label>
                            <Textarea 
                              value={link.behaviors}
                              onChange={(e) => updateChainLink(index, 'behaviors', e.target.value)}
                              placeholder="What did they do?"
                              rows={2}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Outcomes and Solutions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-green-500" />
                Outcomes & Solutions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Consequences</Label>
                <Textarea 
                  value={formData.consequences}
                  onChange={(e) => setFormData({...formData, consequences: e.target.value})}
                  placeholder="What were the results? How did it end?"
                  rows={3}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Prevention Strategies</Label>
                <Textarea 
                  value={formData.prevention_strategies}
                  onChange={(e) => setFormData({...formData, prevention_strategies: e.target.value})}
                  placeholder="What could help prevent this in the future? (earlier bedtime, snacks, transitions warnings, etc.)"
                  rows={3}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Intervention Points</Label>
                <Textarea 
                  value={formData.intervention_points}
                  onChange={(e) => setFormData({...formData, intervention_points: e.target.value})}
                  placeholder="Where in the chain could you have intervened differently?"
                  rows={3}
                  required
                />
              </div>
            </CardContent>
          </Card>

          <Button type="submit" size="lg" className="w-full">
            <Lightbulb className="w-5 h-5 mr-2" />
            Save Chain Analysis
          </Button>
        </form>

        {/* Educational Note */}
        <Card className="mt-8 bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <Brain className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-blue-800 mb-1">About Chain Analysis</p>
                <p className="text-blue-700">
                  Chain analysis helps identify patterns and break points in challenging behaviors. By understanding the 
                  thoughts, feelings, and events that lead to difficult moments, we can develop more effective strategies 
                  and intervene earlier in the chain.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}