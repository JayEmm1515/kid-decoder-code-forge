import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function EmotionalToolbox() {
  // Core emotions
  const emotions = [
    { id: "joy", label: "Joy", icon: "😊" },
    { id: "sadness", label: "Sadness", icon: "😢" },
    { id: "anger", label: "Anger", icon: "😡" },
    { id: "fear", label: "Fear", icon: "😨" },
    { id: "shame", label: "Shame", icon: "😳" },
    { id: "curiosity", label: "Curiosity", icon: "🤔" }
  ];

  const [insideToolbox, setInsideToolbox] = useState([]);
  const [outsideToolbox, setOutsideToolbox] = useState([]);
  const [dragging, setDragging] = useState(null);

  // Drop handler
  const handleDrop = (target, emotion) => {
    if (!emotion) return;
    if (target === "inside") {
      if (!insideToolbox.includes(emotion)) {
        setInsideToolbox([...insideToolbox, emotion]);
        setOutsideToolbox(outsideToolbox.filter((e) => e.id !== emotion.id));
      }
    } else {
      if (!outsideToolbox.includes(emotion)) {
        setOutsideToolbox([...outsideToolbox, emotion]);
        setInsideToolbox(insideToolbox.filter((e) => e.id !== emotion.id));
      }
    }
    setDragging(null);
  };

  const allPlaced = insideToolbox.length + outsideToolbox.length === emotions.length;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Organic Background Shapes */}
      <div className="organic-shape w-80 h-80 top-10 -right-10 floating-element"></div>
      <div className="organic-shape w-60 h-60 bottom-20 -left-10 floating-element" style={{ animationDelay: '3s' }}></div>
      
      <div className="relative z-10 p-6 max-w-5xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold gradient-text mb-4 floating-element">🧰 My Emotional Toolbox</h2>
          <div className="w-20 h-1 bg-gradient-organic mx-auto mb-6 rounded-full"></div>
          <p className="text-foreground/80 text-lg leading-relaxed max-w-3xl mx-auto">
            Drag each emotion into the toolbox if your caregiver helped you feel safe with it — 
            or outside the toolbox if it felt unsupported when you were growing up.
          </p>
        </div>

        {/* DRAGGABLE EMOTIONS */}
        <div className="flex gap-4 flex-wrap justify-center mb-12">
          {emotions.map((emotion, index) => (
            <div
              key={emotion.id}
              draggable
              onDragStart={() => setDragging(emotion)}
              className="ecosystem-card cursor-grab active:cursor-grabbing p-6 select-none floating-element min-w-[140px] text-center"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-3xl mb-2">{emotion.icon}</div>
              <div className="font-semibold text-foreground">{emotion.label}</div>
            </div>
          ))}
        </div>

        {/* DROP ZONES */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Inside Toolbox */}
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop("inside", dragging)}
            className="ecosystem-card min-h-[250px] p-8 border-2 border-dashed border-ecosystem-teal/50 bg-ecosystem-teal/5 hover:bg-ecosystem-teal/10 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-ecosystem-teal mb-6 flex items-center gap-3">
              <span className="text-3xl">🧰</span> Inside Toolbox
            </h3>
            {insideToolbox.length === 0 && (
              <div className="text-center py-12">
                <div className="text-4xl mb-4 opacity-50">🌱</div>
                <p className="text-foreground/60">Drop emotions here to grow your toolkit</p>
              </div>
            )}
            <div className="flex flex-wrap gap-3">
              {insideToolbox.map((emotion, index) => (
                <div
                  key={emotion.id}
                  className="ecosystem-card p-4 bg-ecosystem-teal/20 border-ecosystem-teal/40 flex items-center gap-3 floating-element"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-xl">{emotion.icon}</span>
                  <span className="font-medium text-ecosystem-teal">{emotion.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Outside Toolbox */}
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop("outside", dragging)}
            className="ecosystem-card min-h-[250px] p-8 border-2 border-dashed border-ecosystem-coral/50 bg-ecosystem-coral/5 hover:bg-ecosystem-coral/10 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-ecosystem-coral mb-6 flex items-center gap-3">
              <span className="text-3xl">🚪</span> Outside Toolbox
            </h3>
            {outsideToolbox.length === 0 && (
              <div className="text-center py-12">
                <div className="text-4xl mb-4 opacity-50">🍃</div>
                <p className="text-foreground/60">Drop emotions that need nurturing</p>
              </div>
            )}
            <div className="flex flex-wrap gap-3">
              {outsideToolbox.map((emotion, index) => (
                <div
                  key={emotion.id}
                  className="ecosystem-card p-4 bg-ecosystem-coral/20 border-ecosystem-coral/40 flex items-center gap-3 floating-element"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-xl">{emotion.icon}</span>
                  <span className="font-medium text-ecosystem-coral">{emotion.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SUMMARY */}
        {allPlaced && (
          <div className="mt-12 ecosystem-card p-8 bg-ecosystem-purple/10 border-ecosystem-purple/30 floating-element">
            <h3 className="text-2xl font-bold text-ecosystem-purple mb-6 flex items-center gap-3">
              <span className="text-3xl">✨</span> Reflection & Growth
            </h3>
            <div className="space-y-6">
              <div className="ecosystem-card p-6 bg-ecosystem-teal/10 border-ecosystem-teal/20">
                <p className="text-ecosystem-teal text-lg">
                  <span className="font-bold text-xl">🌟 Your Emotional Strengths:</span><br />
                  <span className="font-medium text-lg">{insideToolbox.map((e) => e.label).join(", ")}</span>
                </p>
              </div>
              <div className="ecosystem-card p-6 bg-ecosystem-coral/10 border-ecosystem-coral/20">
                <p className="text-ecosystem-coral text-lg">
                  <span className="font-bold text-xl">🌱 Growth Opportunities:</span><br />
                  <span className="font-medium text-lg">{outsideToolbox.map((e) => e.label).join(", ")}</span>
                </p>
              </div>
              <div className="ecosystem-card p-6 bg-gradient-organic/10 border-ecosystem-aqua/20">
                <p className="text-foreground leading-relaxed text-lg">
                  <span className="text-2xl mr-3">🌿</span>
                  <strong className="text-ecosystem-aqua">Remember:</strong> Missing tools aren't failures — they're beautiful opportunities to grow your
                  emotional capacity and help your child feel safe with every feeling. You're creating the garden where emotions can bloom safely.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}