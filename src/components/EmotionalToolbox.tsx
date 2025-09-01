import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, RotateCcw, CheckCircle2 } from "lucide-react";

export default function EmotionalToolbox() {
  const EMOTIONS = [
    { id: "joy", label: "Joy", description: "Playfulness, delight, celebration" },
    { id: "sadness", label: "Sadness", description: "Grief, loss, disappointment" },
    { id: "anger", label: "Anger", description: "Boundaries, protection, advocacy" },
    { id: "fear", label: "Fear", description: "Caution, safety, awareness" },
    { id: "shame", label: "Shame", description: "Vulnerability, belonging, worthiness" },
    { id: "curiosity", label: "Curiosity", description: "Learning, exploration, wonder" }
  ];

  const [toolbox, setToolbox] = useState([]);
  const [workbench, setWorkbench] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null);

  const allPlaced = toolbox.length + workbench.length === EMOTIONS.length;
  const availableEmotions = EMOTIONS.filter(
    emotion => ![...toolbox, ...workbench].some(e => e.id === emotion.id)
  );

  const handleDragStart = (emotion) => {
    setDraggedItem(emotion);
  };

  const handleDrop = (target) => {
    if (!draggedItem) return;
    
    if (target === "toolbox") {
      setToolbox([...toolbox, draggedItem]);
      setWorkbench(workbench.filter(e => e.id !== draggedItem.id));
    } else {
      setWorkbench([...workbench, draggedItem]);
      setToolbox(toolbox.filter(e => e.id !== draggedItem.id));
    }
    setDraggedItem(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const reset = () => {
    setToolbox([]);
    setWorkbench([]);
  };

  const generateInsight = () => {
    const missingTools = workbench.map(e => e.id);
    const insights = [];

    if (missingTools.includes("joy")) {
      insights.push("Without joy in your toolkit, you might struggle to join your child in play or feel delight in their discoveries. Consider what made joy unsafe in your childhood.");
    }
    if (missingTools.includes("sadness")) {
      insights.push("If sadness feels unsafe, you might rush to 'fix' your child's tears rather than sitting with their pain. Learning to hold space for sadness builds emotional resilience.");
    }
    if (missingTools.includes("anger")) {
      insights.push("When anger is on the workbench, setting boundaries might feel threatening. Your child needs you to model healthy anger as protection and advocacy.");
    }
    if (missingTools.includes("fear")) {
      insights.push("Without fear as a tool, you might dismiss your child's anxieties or feel impatient with their caution. Fear serves protection when honored appropriately.");
    }
    if (missingTools.includes("shame")) {
      insights.push("Shame on the workbench suggests difficulty helping your child feel worthy when they mess up. Learning to separate behavior from identity is crucial.");
    }
    if (missingTools.includes("curiosity")) {
      insights.push("Missing curiosity might manifest as rigid parenting or discomfort when your child questions rules. Curiosity fuels connection and learning.");
    }

    if (insights.length === 0) {
      return "You have all emotional tools available! This suggests a rich emotional vocabulary that serves you well in parenting. Your capacity to hold space for the full range of human emotions helps your child develop emotional intelligence.";
    }

    return insights.join(" ");
  };

  const EmotionCard = ({ emotion }) => (
    <div
      draggable
      onDragStart={() => handleDragStart(emotion)}
      className="group p-4 bg-white rounded-xl border border-slate-200 shadow-sm cursor-grab active:cursor-grabbing transition-all duration-200 hover:shadow-md hover:border-violet"
      style={{ userSelect: 'none' }}
    >
      <div className="text-center">
        <h4 className="font-semibold text-ink text-lg">{emotion.label}</h4>
        <p className="text-muted text-sm mt-1">{emotion.description}</p>
      </div>
    </div>
  );

  return (
    <div className="dreamy-container pt-24 pb-12">
      <div className="relative z-10">
        {/* Header */}
        <div className="dreamy-card dreamy-card-hero text-center mb-8">
          <div className="inline-block p-4 bg-violet/10 rounded-2xl mb-4">
            <Heart className="w-10 h-10 text-violet" />
          </div>
          <h2 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-4">Emotional Toolbox Assessment</h2>
          <p className="text-[hsl(var(--foreground))] opacity-80 text-lg leading-relaxed max-w-2xl mx-auto">
            Based on Dr. Gabor Maté's attachment research, this tool helps you understand which emotions 
            feel safe and available in your parenting. Drag each emotion to your toolbox if it felt 
            supported growing up, or to the workbench if it felt unsafe.
          </p>
        </div>

        {/* Available Emotions */}
        {availableEmotions.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-[hsl(var(--foreground))] mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-violet" />
              Available Emotions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {availableEmotions.map(emotion => (
                <EmotionCard key={emotion.id} emotion={emotion} />
              ))}
            </div>
          </div>
        )}

        {/* Drop Zones */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Toolbox */}
          <div
            onDragOver={handleDragOver}
            onDrop={() => handleDrop("toolbox")}
            className="dreamy-card min-h-[200px] border-2 border-dashed border-mint/50 bg-mint/10 hover:bg-mint/20 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="w-6 h-6 text-mint" />
              <h3 className="text-xl font-semibold text-[hsl(var(--foreground))]">Your Toolbox</h3>
              <Badge variant="secondary">{toolbox.length}/6</Badge>
            </div>
            <p className="text-[hsl(var(--foreground))]/70 text-sm mb-4">
              Emotions that felt safe and supported in your childhood
            </p>
            <div className="space-y-3">
              {toolbox.map(emotion => (
                <EmotionCard key={emotion.id} emotion={emotion} />
              ))}
              {toolbox.length === 0 && (
                <div className="text-center py-8 text-[hsl(var(--foreground))]/60">
                  <p>Drag emotions here that felt supported growing up</p>
                </div>
              )}
            </div>
          </div>

          {/* Workbench */}
          <div
            onDragOver={handleDragOver}
            onDrop={() => handleDrop("workbench")}
            className="dreamy-card min-h-[200px] border-2 border-dashed border-peach/50 bg-peach/10 hover:bg-peach/20 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-peach" />
              <h3 className="text-xl font-semibold text-[hsl(var(--foreground))]">The Workbench</h3>
              <Badge variant="outline">{workbench.length}/6</Badge>
            </div>
            <p className="text-[hsl(var(--foreground))]/70 text-sm mb-4">
              Emotions that felt unsafe or unsupported
            </p>
            <div className="space-y-3">
              {workbench.map(emotion => (
                <EmotionCard key={emotion.id} emotion={emotion} />
              ))}
              {workbench.length === 0 && (
                <div className="text-center py-8 text-[hsl(var(--foreground))]/60">
                  <p>Drag emotions here that felt unsafe or dismissed</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Results */}
        {allPlaced && (
          <div className="dreamy-card bg-violet/10 border-violet/20">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-violet" />
              <h3 className="text-xl font-semibold text-violet">Your Parenting Insight</h3>
            </div>
            <div className="space-y-4">
              <p className="text-[hsl(var(--foreground))] leading-relaxed">{generateInsight()}</p>
              <div className="p-4 bg-white/50 rounded-lg border border-violet/20">
                <p className="text-sm text-[hsl(var(--foreground))]/70 italic">
                  Remember: This is about your own childhood experiences, not your worth as a parent. 
                  Awareness is the first step toward growth. Consider exploring emotions on your workbench 
                  with a therapist or through self-reflection to expand your emotional toolkit.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Reset Button */}
        {(toolbox.length > 0 || workbench.length > 0) && (
          <div className="text-center mt-8">
            <Button onClick={reset} variant="outline" className="gap-2 dreamy-button">
              <RotateCcw className="w-4 h-4" />
              Start Over
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}