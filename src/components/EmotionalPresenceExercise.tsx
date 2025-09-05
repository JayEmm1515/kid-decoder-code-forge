import React, { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/** ---------- Types ---------- */
type Emotion = "joy" | "sadness" | "anger" | "fear" | "shame" | "curiosity";
type InOut = "in" | "out";

const EMOTIONS: Emotion[] = ["joy", "sadness", "anger", "fear", "shame", "curiosity"];
const EMOTION_LABEL: Record<Emotion, string> = {
  joy: "Joy", 
  sadness: "Sadness", 
  anger: "Anger", 
  fear: "Fear", 
  shame: "Shame", 
  curiosity: "Curiosity",
};

/** ---------- Psychoeducation ---------- */
const EMO_INFO: Record<
  Emotion,
  { inMessage: string; outMessage: string; parentingImplication: string }
> = {
  joy: {
    inMessage: "You likely amplify your child's positive feelings and allow shared delight.",
    outMessage: "Joy may have been muted or conditional; play/silliness can feel hard.",
    parentingImplication: "Notice and mirror small moments of delight—name them and let them linger.",
  },
  sadness: {
    inMessage: "You can sit with tears and loss without rushing to fix.",
    outMessage: "Sadness might feel heavy or inconvenient; you may push for 'cheer up'.",
    parentingImplication: "Use soft voice and simple reflections like 'This really hurts.'",
  },
  anger: {
    inMessage: "You can acknowledge protest while holding safe limits.",
    outMessage: "Anger may feel dangerous; tendency to clamp down or avoid.",
    parentingImplication: "Validate feeling, separate from behaviour: 'Anger's ok; hitting isn't.'",
  },
  fear: {
    inMessage: "You recognise fear and offer protection plus gradual bravery.",
    outMessage: "Fear may be dismissed as overreaction or met with over-reassurance.",
    parentingImplication: "Name fear early, co-regulate, scaffold small steps.",
  },
  shame: {
    inMessage: "You meet shame with warmth and repair rather than lectures.",
    outMessage: "Shame may trigger quick correction or withdrawal; perfectionism shows up.",
    parentingImplication: "De-shame: 'You're still a good kid; we'll fix this together.'",
  },
  curiosity: {
    inMessage: "You invite questions and exploration, tolerating mess and 'why?'",
    outMessage: "Curiosity may have been discouraged; rush to answers or shut down.",
    parentingImplication: "Use open questions and wonder aloud together.",
  },
};

/** ---------- Summary generator ---------- */
function generateSummary(state: Record<Emotion, InOut>) {
  const inList = EMOTIONS.filter((e) => state[e] === "in");
  const outList = EMOTIONS.filter((e) => state[e] === "out");

  const strengths = inList.map(
    (e) => `• ${EMOTION_LABEL[e]}: ${EMO_INFO[e].inMessage}`
  );
  const edges = outList.map(
    (e) => `• ${EMOTION_LABEL[e]}: ${EMO_INFO[e].outMessage}`
  );
  const implications = outList.map(
    (e) => `• ${EMOTION_LABEL[e]}: ${EMO_INFO[e].parentingImplication}`
  );

  const overview =
    outList.length === 0
      ? "Broadly met across emotions; strong co-regulation capacity."
      : outList.length >= 4
      ? "Several emotions were hard to bring; expect hot-spots under stress."
      : "Some emotions were harder to bring; target those while leveraging strengths.";

  return { overview, strengths, edges, implications };
}

/** ---------- Export helper ---------- */
function ExportResults({ state, figureName }: { state: Record<Emotion, InOut>; figureName: string }) {
  const payload = {
    attachmentFigure: figureName || null,
    emotions: state,
    timestamp: new Date().toISOString(),
  };
  
  return (
    <Card className="p-4 mt-6">
      <h4 className="font-semibold mb-2 text-foreground">Export Results</h4>
      <textarea
        readOnly
        rows={8}
        value={JSON.stringify(payload, null, 2)}
        className="w-full p-3 font-mono text-sm bg-muted rounded-md border"
      />
    </Card>
  );
}

/** ---------- Main Component ---------- */
export default function EmotionalPresenceExercise() {
  const [figureName, setFigureName] = useState("");
  const [state, setState] = useState<Record<Emotion, InOut>>({
    joy: "in", sadness: "in", anger: "in", fear: "in", shame: "in", curiosity: "in",
  });
  const [draggedEmotion, setDraggedEmotion] = useState<Emotion | null>(null);

  const summary = useMemo(() => generateSummary(state), [state]);

  const onDragStart = (e: React.DragEvent<HTMLDivElement>, emotion: Emotion) => {
    e.dataTransfer.setData("text/emotion", emotion);
    e.dataTransfer.effectAllowed = "move";
    setDraggedEmotion(emotion);
  };

  const onDragEnd = () => {
    setDraggedEmotion(null);
  };

  const allowDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const onDropZone = (zone: InOut) => (e: React.DragEvent) => {
    e.preventDefault();
    const emotion = e.dataTransfer.getData("text/emotion") as Emotion;
    if (!emotion) return;
    setState((prev) => ({ ...prev, [emotion]: zone }));
    setDraggedEmotion(null);
  };

  const toggle = (emotion: Emotion) =>
    setState((prev) => ({ ...prev, [emotion]: prev[emotion] === "in" ? "out" : "in" }));

  const emotionChip = (emotion: Emotion) => {
    const where = state[emotion];
    const isBeingDragged = draggedEmotion === emotion;
    
    return (
      <div
        key={emotion}
        draggable
        onDragStart={(e) => onDragStart(e, emotion)}
        onDragEnd={onDragEnd}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") toggle(emotion);
        }}
        role="button"
        tabIndex={0}
        title={`Drag to IN/OUT or click to toggle`}
        className={`
          inline-flex items-center justify-center px-4 py-2 rounded-full border-2 cursor-grab
          font-semibold text-sm transition-all duration-200 select-none
          ${where === "in" 
            ? "bg-green-100 border-green-300 text-green-800 hover:bg-green-200" 
            : "bg-red-100 border-red-300 text-red-800 hover:bg-red-200"
          }
          ${isBeingDragged ? "opacity-50 scale-95" : "hover:scale-105"}
          active:scale-95
        `}
        onClick={() => toggle(emotion)}
      >
        {EMOTION_LABEL[emotion]}
      </div>
    );
  };

  const dropZone = (label: string, zone: InOut, description: string) => (
    <div
      onDragOver={allowDrop}
      onDrop={onDropZone(zone)}
      className={`
        w-44 h-44 rounded-full border-4 flex items-center justify-center text-white font-bold text-center p-3
        transition-all duration-200 cursor-pointer
        ${zone === "in" 
          ? "bg-green-600 border-green-800 shadow-lg shadow-green-500/25" 
          : "bg-red-600 border-red-800 shadow-lg shadow-red-500/25"
        }
        hover:scale-105 active:scale-95
      `}
      aria-label={`${label} drop zone`}
    >
      <div>
        <div className="text-lg font-bold">{label}</div>
        <div className="text-xs mt-1 opacity-90">{description}</div>
      </div>
    </div>
  );

  const inList = EMOTIONS.filter((e) => state[e] === "in");
  const outList = EMOTIONS.filter((e) => state[e] === "out");

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background p-6">
      <div className="max-w-5xl mx-auto">
        <Card className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Emotional Presence Exercise
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore your emotional comfort zones when thinking about an important attachment figure. 
              Drag emotions to reflect whether you feel comfortable being present with them (IN) or 
              find them challenging (OUT).
            </p>
          </div>

          <div className="mb-8">
            <Label htmlFor="figureName" className="text-sm font-medium">
              Attachment Figure (e.g., Parent, Partner, Child):
            </Label>
            <Input
              id="figureName"
              value={figureName}
              onChange={(e) => setFigureName(e.target.value)}
              placeholder="Enter name..."
              className="mt-2 max-w-sm"
            />
          </div>

          {/* Emotion chips */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Emotions to Categorize</h3>
            <div className="flex flex-wrap gap-3">
              {EMOTIONS.map(emotionChip)}
            </div>
          </div>

          {/* Drop zones */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center mb-8">
            {dropZone("IN", "in", "Comfortable being present with")}
            {dropZone("OUT", "out", "Challenging to be present with")}
          </div>

          {/* Current classification */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="p-4">
              <h4 className="font-bold mb-3 text-green-700">Comfortable With (IN)</h4>
              <div className="flex flex-wrap gap-2">
                {inList.map((e) => (
                  <span key={e} className="px-3 py-1 rounded-full bg-green-100 border border-green-300 text-green-800 text-sm">
                    {EMOTION_LABEL[e]}
                  </span>
                ))}
                {inList.length === 0 && (
                  <span className="text-muted-foreground text-sm">No emotions categorized here yet</span>
                )}
              </div>
            </Card>
            
            <Card className="p-4">
              <h4 className="font-bold mb-3 text-red-700">Challenging (OUT)</h4>
              <div className="flex flex-wrap gap-2">
                {outList.map((e) => (
                  <span key={e} className="px-3 py-1 rounded-full bg-red-100 border border-red-300 text-red-800 text-sm">
                    {EMOTION_LABEL[e]}
                  </span>
                ))}
                {outList.length === 0 && (
                  <span className="text-muted-foreground text-sm">No emotions categorized here yet</span>
                )}
              </div>
            </Card>
          </div>

          {/* Summary */}
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4 text-foreground">Your Emotional Presence Profile</h3>
            
            {figureName && (
              <p className="mb-4 text-muted-foreground">
                <strong>Attachment Figure:</strong> {figureName}
              </p>
            )}
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Overview</h4>
                <p className="text-muted-foreground">{summary.overview}</p>
              </div>

              {summary.strengths.length > 0 && (
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Your Strengths</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {summary.strengths.map((s, i) => <li key={i}>{s}</li>)}
                  </ul>
                </div>
              )}

              {summary.edges.length > 0 && (
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">Growth Edges</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {summary.edges.map((s, i) => <li key={i}>{s}</li>)}
                  </ul>
                </div>
              )}

              {summary.implications.length > 0 && (
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Parenting Focus Areas</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {summary.implications.map((s, i) => <li key={i}>{s}</li>)}
                  </ul>
                </div>
              )}
            </div>
          </Card>

          <ExportResults state={state} figureName={figureName} />
        </Card>
      </div>
    </div>
  );
}