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
    <div className="dreamy-container pt-24 pb-12">
      
      <div className="relative z-10">
        {/* HEADER */}
        <div className="dreamy-card dreamy-card-hero text-center mb-8">
          <h2 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-4">🧰 My Emotional Toolbox</h2>
          <p className="text-[hsl(var(--foreground))] opacity-80 text-lg leading-relaxed">
            Drag each emotion into the toolbox if your caregiver helped you feel safe with it — 
            or outside the toolbox if it felt unsupported when you were growing up.
          </p>
        </div>

        {/* DRAGGABLE EMOTIONS */}
        <div className="flex gap-4 flex-wrap justify-center mb-8">
          {emotions.map((emotion, index) => (
            <div
              key={emotion.id}
              draggable
              onDragStart={() => setDragging(emotion)}
              className="dreamy-card dreamy-card-small cursor-grab active:cursor-grabbing select-none min-w-[140px] text-center"
            >
              <div className="text-3xl mb-2">{emotion.icon}</div>
              <div className="font-semibold text-[hsl(var(--foreground))]">{emotion.label}</div>
            </div>
          ))}
        </div>

        {/* DROP ZONES */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Inside Toolbox */}
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop("inside", dragging)}
            className="dreamy-card min-h-[250px] border-2 border-dashed border-[hsl(var(--dreamy-teal))]/50 bg-[hsl(var(--dreamy-teal))]/10 hover:bg-[hsl(var(--dreamy-teal))]/20 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-[hsl(var(--dreamy-teal))] mb-6 flex items-center gap-3">
              <span className="text-3xl">🧰</span> Inside Toolbox
            </h3>
            {insideToolbox.length === 0 && (
              <div className="text-center py-12">
                <div className="text-4xl mb-4 opacity-50">🌱</div>
                <p className="text-[hsl(var(--foreground))] opacity-60">Drop emotions here to grow your toolkit</p>
              </div>
            )}
            <div className="flex flex-wrap gap-3">
              {insideToolbox.map((emotion, index) => (
                <div
                  key={emotion.id}
                  className="dreamy-card dreamy-card-tiny bg-[hsl(var(--dreamy-teal))]/20"
                >
                  <span className="text-xl">{emotion.icon}</span>
                  <span className="font-medium text-[hsl(var(--dreamy-teal))]">{emotion.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Outside Toolbox */}
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop("outside", dragging)}
            className="dreamy-card min-h-[250px] border-2 border-dashed border-[hsl(var(--dreamy-coral))]/50 bg-[hsl(var(--dreamy-coral))]/10 hover:bg-[hsl(var(--dreamy-coral))]/20 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-[hsl(var(--dreamy-coral))] mb-6 flex items-center gap-3">
              <span className="text-3xl">🚪</span> Outside Toolbox
            </h3>
            {outsideToolbox.length === 0 && (
              <div className="text-center py-12">
                <div className="text-4xl mb-4 opacity-50">🍃</div>
                <p className="text-[hsl(var(--foreground))] opacity-60">Drop emotions that need nurturing</p>
              </div>
            )}
            <div className="flex flex-wrap gap-3">
              {outsideToolbox.map((emotion, index) => (
                <div
                  key={emotion.id}
                  className="dreamy-card dreamy-card-tiny bg-[hsl(var(--dreamy-coral))]/20"
                >
                  <span className="text-xl">{emotion.icon}</span>
                  <span className="font-medium text-[hsl(var(--dreamy-coral))]">{emotion.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SUMMARY */}
        {allPlaced && (
          <div className="mt-8 dreamy-card bg-[hsl(var(--dreamy-purple))]/10">
            <h3 className="text-2xl font-bold text-[hsl(var(--dreamy-purple))] mb-6 flex items-center gap-3">
              <span className="text-3xl">✨</span> Reflection & Growth
            </h3>
            <div className="space-y-4">
              <div className="dreamy-card dreamy-card-small bg-[hsl(var(--dreamy-teal))]/10">
                <p className="text-[hsl(var(--dreamy-teal))] text-lg">
                  <span className="font-bold text-xl">🌟 Your Emotional Strengths:</span><br />
                  <span className="font-medium text-lg">{insideToolbox.map((e) => e.label).join(", ")}</span>
                </p>
              </div>
              <div className="dreamy-card dreamy-card-small bg-[hsl(var(--dreamy-coral))]/10">
                <p className="text-[hsl(var(--dreamy-coral))] text-lg">
                  <span className="font-bold text-xl">🌱 Growth Opportunities:</span><br />
                  <span className="font-medium text-lg">{outsideToolbox.map((e) => e.label).join(", ")}</span>
                </p>
              </div>
              <div className="dreamy-card dreamy-card-small bg-[hsl(var(--dreamy-mint))]/10">
                <p className="text-[hsl(var(--foreground))] leading-relaxed text-lg">
                  <span className="text-2xl mr-3">🌿</span>
                  <strong className="text-[hsl(var(--dreamy-mint))]">Remember:</strong> Missing tools aren't failures — they're beautiful opportunities to grow your
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