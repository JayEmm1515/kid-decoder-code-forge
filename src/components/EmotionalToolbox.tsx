import React, { useState } from "react";

export default function EmotionalToolbox() {
  const EMOTIONS = [
    { id: "joy", label: "Joy" },
    { id: "sadness", label: "Sadness" },
    { id: "anger", label: "Anger" },
    { id: "fear", label: "Fear" },
    { id: "shame", label: "Shame" },
    { id: "curiosity", label: "Curiosity" }
  ];

  const [dragging, setDragging] = useState(null);
  const [toolbox, setToolbox] = useState([]);
  const [workbench, setWorkbench] = useState([]);

  const allPlaced = toolbox.length + workbench.length === EMOTIONS.length;

  const handleDrop = (target, emotion) => {
    if (!emotion) return;
    if (target === "toolbox") {
      setToolbox([...toolbox, emotion]);
      setWorkbench(workbench.filter((e) => e.id !== emotion.id));
    } else {
      setWorkbench([...workbench, emotion]);
      setToolbox(toolbox.filter((e) => e.id !== emotion.id));
    }
    setDragging(null);
  };

  const renderToolIcon = (emotion) => (
    <div
      key={emotion.id}
      draggable
      onDragStart={() => setDragging(emotion)}
      className="dreamy-card dreamy-card-small cursor-grab active:cursor-grabbing select-none min-w-[100px] text-center font-bold"
    >
      {emotion.label}
    </div>
  );

  const summary = () => {
    const missing = workbench.map((e) => e.id);
    const output = [];

    if (missing.includes("anger"))
      output.push("You may feel uncomfortable when your child expresses anger, and could struggle to set boundaries or stay calm.");
    if (missing.includes("sadness"))
      output.push("You might dismiss or feel overwhelmed by your child's sadness, possibly rushing to fix rather than sitting with the emotion.");
    if (missing.includes("shame"))
      output.push("You may find it hard to help your child feel loved when they've made a mistake, or might react harshly to behaviour tied to shame.");
    if (missing.includes("fear"))
      output.push("You might feel impatient or triggered by your child's fear or anxiety, especially when it mirrors your own unprocessed feelings.");
    if (missing.includes("joy"))
      output.push("If joy is missing, you may find it hard to join in your child's playfulness or feel a sense of closeness and delight.");
    if (missing.includes("curiosity"))
      output.push("A lack of support for curiosity may lead to rigid parenting or discomfort when your child questions, explores, or pushes limits.");

    if (output.length === 0)
      return "Your toolbox contains all six emotional tools — you likely find it easier to respond sensitively across a wide range of your child's emotional needs.";

    return output.join(" ");
  };

  return (
    <div className="dreamy-container pt-24 pb-12">
      <div className="relative z-10">
        {/* HEADER */}
        <div className="dreamy-card dreamy-card-hero text-center mb-8">
          <h2 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-4">🧰 Emotional Toolbox</h2>
          <p className="text-[hsl(var(--foreground))] opacity-80 text-lg leading-relaxed">
            Drag each tool (emotion) into your toolbox if you felt supported with it growing up — or leave it on the workbench if it felt unsafe or unsupported.
          </p>
        </div>

        {/* EMOTION TOOLS */}
        <div className="flex gap-4 flex-wrap justify-center mb-8">
          {EMOTIONS.map((emotion) =>
            !toolbox.concat(workbench).some((e) => e.id === emotion.id)
              ? renderToolIcon(emotion)
              : null
          )}
        </div>

        {/* DROP ZONES */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Toolbox */}
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop("toolbox", dragging)}
            className="dreamy-card min-h-[200px] border-2 border-dashed border-[hsl(var(--dreamy-teal))]/50 bg-[hsl(var(--dreamy-teal))]/10 hover:bg-[hsl(var(--dreamy-teal))]/20 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-[hsl(var(--dreamy-teal))] mb-6">🧰 Toolbox</h3>
            <div className="flex flex-wrap gap-3">
              {toolbox.map(renderToolIcon)}
            </div>
          </div>

          {/* Workbench */}
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop("workbench", dragging)}
            className="dreamy-card min-h-[200px] border-2 border-dashed border-[hsl(var(--dreamy-coral))]/50 bg-[hsl(var(--dreamy-coral))]/10 hover:bg-[hsl(var(--dreamy-coral))]/20 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-[hsl(var(--dreamy-coral))] mb-6">🔨 Workbench</h3>
            <div className="flex flex-wrap gap-3">
              {workbench.map(renderToolIcon)}
            </div>
          </div>
        </div>

        {/* SUMMARY */}
        {allPlaced && (
          <div className="mt-8 dreamy-card bg-[hsl(var(--dreamy-purple))]/10">
            <h3 className="text-2xl font-bold text-[hsl(var(--dreamy-purple))] mb-6">
              ✨ Parenting Insight
            </h3>
            <p className="text-[hsl(var(--foreground))] leading-relaxed text-lg">
              {summary()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}