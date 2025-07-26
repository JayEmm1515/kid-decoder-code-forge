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
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* HEADER */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-aquarius-teal to-aquarius-blue bg-clip-text text-transparent">
          🧰 My Emotional Toolbox
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Drag each emotion into the toolbox if your caregiver helped you feel safe with it — 
          or outside the toolbox if it felt unsupported when you were growing up.
        </p>
      </div>

      {/* DRAGGABLE EMOTIONS */}
      <div className="flex gap-3 flex-wrap justify-center mb-8">
        {emotions.map((emotion) => (
          <div
            key={emotion.id}
            draggable
            onDragStart={() => setDragging(emotion)}
            className="cursor-grab active:cursor-grabbing px-4 py-3 bg-background border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <span className="text-xl mr-2">{emotion.icon}</span>
            <span className="font-semibold text-foreground">{emotion.label}</span>
          </div>
        ))}
      </div>

      {/* DROP ZONES */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Inside Toolbox */}
        <Card
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop("inside", dragging)}
          className="border-2 border-dashed border-aquarius-teal/50 bg-aquarius-teal/5 min-h-[200px]"
        >
          <CardHeader>
            <CardTitle className="text-aquarius-teal flex items-center gap-2">
              Inside Toolbox 🧰
            </CardTitle>
            <CardDescription>
              Emotions you felt supported with as a child
            </CardDescription>
          </CardHeader>
          <CardContent>
            {insideToolbox.length === 0 && (
              <p className="text-sm text-muted-foreground">Drop emotions here</p>
            )}
            <div className="flex flex-wrap gap-2">
              {insideToolbox.map((emotion) => (
                <div
                  key={emotion.id}
                  className="px-3 py-1 bg-aquarius-teal/20 text-aquarius-teal rounded-md text-sm font-medium"
                >
                  {emotion.icon} {emotion.label}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Outside Toolbox */}
        <Card
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop("outside", dragging)}
          className="border-2 border-dashed border-aquarius-rose/50 bg-aquarius-rose/5 min-h-[200px]"
        >
          <CardHeader>
            <CardTitle className="text-aquarius-rose flex items-center gap-2">
              Outside Toolbox 🚪
            </CardTitle>
            <CardDescription>
              Emotions that felt unsupported as a child
            </CardDescription>
          </CardHeader>
          <CardContent>
            {outsideToolbox.length === 0 && (
              <p className="text-sm text-muted-foreground">Drop emotions here</p>
            )}
            <div className="flex flex-wrap gap-2">
              {outsideToolbox.map((emotion) => (
                <div
                  key={emotion.id}
                  className="px-3 py-1 bg-aquarius-rose/20 text-aquarius-rose rounded-md text-sm font-medium"
                >
                  {emotion.icon} {emotion.label}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* SUMMARY */}
      {allPlaced && (
        <Card className="bg-aquarius-purple/5 border-aquarius-purple/20">
          <CardHeader>
            <CardTitle className="text-aquarius-purple flex items-center gap-2">
              ✨ Reflection
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-foreground">
              ✅ You feel comfortable with:{" "}
              <span className="font-semibold text-aquarius-teal">
                {insideToolbox.map((e) => e.label).join(", ")}
              </span>
            </p>
            <p className="text-foreground">
              ❗ These feelings felt unsupported:{" "}
              <span className="font-semibold text-aquarius-rose">
                {outsideToolbox.map((e) => e.label).join(", ")}
              </span>
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              🌱 Missing tools aren't failures — they're opportunities to grow your
              emotional capacity and help your child feel safe with every feeling.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}