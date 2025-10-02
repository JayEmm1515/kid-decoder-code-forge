// components/BoundaryBarrierCards.tsx
// Tinder-style swipeable cards for "Parent Mirror Cards"
// Swipe RIGHT = resonates ✅, LEFT = doesn't resonate ❌
// Drop this file into your project and import where needed.

import React, { useMemo, useRef, useState } from "react";
import { X, Heart, RotateCcw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type BarrierCard = {
  id: string;
  title: string;
  summary: string;
  hint?: string;
};

type Result = {
  id: string;
  title: string;
  resonate: boolean; // true = swiped right
};

type Props = {
  items?: BarrierCard[];
  onFinish?: (results: Result[]) => void;
  title?: string;
  showSummaryOnFinish?: boolean;
};

const DEFAULT_ITEMS: BarrierCard[] = [
  {
    id: "guilt",
    title: "Guilt",
    summary:
      "You worry saying 'no' will make your child feel unloved—so you soften or give in.",
    hint: "Try: connect first, then hold the limit kindly.",
  },
  {
    id: "fear-of-rupture",
    title: "Fear of Rupture",
    summary:
      "You avoid conflict because meltdowns feel overwhelming or trigger past experiences.",
    hint: "Try: prepare a short script and breathe out slowly as you hold the line.",
  },
  {
    id: "fatigue",
    title: "Fatigue & Burnout",
    summary:
      "You're exhausted, so consistency slips and limits move around day-to-day.",
    hint: "Try: pre-decide your 'non-negotiables' for tired days.",
  },
  {
    id: "over-id",
    title: "Over-Identification",
    summary:
      "Their distress feels like yours—so you rescue rather than coach regulation.",
    hint: "Try: name the feeling, slow your voice, and stay present.",
  },
  {
    id: "dev-mismatch",
    title: "Developmental Mismatch",
    summary:
      "You expect skills (self-soothing, impulse control) that aren't yet realistic.",
    hint: "Try: adjust expectations to the age/stage; teach in calm moments.",
  },
  {
    id: "skill-gap",
    title: "Skill Gaps",
    summary:
      "You're not sure how to set limits without power struggles or long debates.",
    hint: "Try: 'When-Then' language and one calm repeat before a consequence.",
  },
  {
    id: "conflicting-advice",
    title: "Conflicting Advice",
    summary:
      "Socials, family, professionals—too many voices make it hard to choose a path.",
    hint: "Try: choose one evidence-based framework and stick with it for 2 weeks.",
  },
  {
    id: "cultural-pressure",
    title: "Cultural/Community Pressure",
    summary:
      "Worried you'll be seen as 'too strict' (or not strict enough).",
    hint: "Try: anchor to your values and your child's needs, not the crowd.",
  },
];

const SWIPE_THRESHOLD = 120; // px
const MAX_ROTATION = 15; // deg
const OUT_DISTANCE = 800; // px for fly-out

export default function BoundaryBarrierCards({
  items = DEFAULT_ITEMS,
  onFinish,
  title = "What gets in the way of setting boundaries?",
  showSummaryOnFinish = true,
}: Props) {
  const [index, setIndex] = useState(0);
  const [results, setResults] = useState<Result[]>([]);
  const [done, setDone] = useState(false);

  // Gesture state for the top card
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);
  const dx = useRef(0);
  const dy = useRef(0);
  const isDragging = useRef(false);
  const animatingOut = useRef(false);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);

  const current = items[index];
  const remaining = items.length - index - 1;

  const progressPct = useMemo(
    () => ((index) / items.length) * 100,
    [index, items.length]
  );

  const handleChoice = (resonate: boolean) => {
    if (!current || animatingOut.current) return;
    animatingOut.current = true;

    // Record result
    const nextResults = [
      ...results,
      { id: current.id, title: current.title, resonate },
    ];
    setResults(nextResults);

    // Animate out direction
    const dir = resonate ? 1 : -1;
    flyOut(dir, () => {
      animatingOut.current = false;
      // Advance
      if (index + 1 >= items.length) {
        setDone(true);
        onFinish?.(nextResults);
      } else {
        setIndex((i) => i + 1);
        resetTopCard();
      }
    });
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!current || done) return;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    startX.current = e.clientX;
    startY.current = e.clientY;
    isDragging.current = true;
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || startX.current === null || startY.current === null) return;
    dx.current = e.clientX - startX.current;
    dy.current = e.clientY - startY.current;
    
    // Update swipe direction for color feedback
    if (Math.abs(dx.current) > 30) {
      setSwipeDirection(dx.current > 0 ? 'right' : 'left');
    } else {
      setSwipeDirection(null);
    }
    
    updateTransform(dx.current, dy.current);
  };

  const onPointerUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const swipedRight = dx.current > SWIPE_THRESHOLD;
    const swipedLeft = dx.current < -SWIPE_THRESHOLD;

    if (swipedRight) {
      handleChoice(true);
    } else if (swipedLeft) {
      handleChoice(false);
    } else {
      // Snap back
      setSwipeDirection(null);
      snapBack();
    }
  };

  // --- Anim helpers ---
  const cardRef = useRef<HTMLDivElement | null>(null);

  const updateTransform = (dxVal: number, dyVal: number) => {
    if (!cardRef.current) return;
    const rotation = Math.max(
      -MAX_ROTATION,
      Math.min(MAX_ROTATION, (dxVal / 10))
    );
    cardRef.current.style.transition = "transform 0s";
    cardRef.current.style.transform = `translate(${dxVal}px, ${dyVal}px) rotate(${rotation}deg)`;
  };

  const snapBack = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transition = "transform 0.2s ease-out";
    cardRef.current.style.transform = "translate(0px, 0px) rotate(0deg)";
    if (cardRef.current.firstElementChild) {
      (cardRef.current.firstElementChild as HTMLElement).style.transition = "background-color 0.2s ease-out";
      (cardRef.current.firstElementChild as HTMLElement).style.backgroundColor = "";
    }
    dx.current = 0;
    dy.current = 0;
  };

  const flyOut = (dir: 1 | -1, cb: () => void) => {
    if (!cardRef.current) return cb();
    cardRef.current.style.transition = "transform 0.25s ease-in";
    cardRef.current.style.transform = `translate(${dir * OUT_DISTANCE}px, ${dy.current}px) rotate(${dir * MAX_ROTATION}deg)`;
    // Wait for animation to finish
    setTimeout(cb, 250);
  };

  const resetTopCard = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transition = "none";
    cardRef.current.style.transform = "translate(0px, 0px) rotate(0deg)";
    dx.current = 0;
    dy.current = 0;
  };

  const restart = () => {
    setIndex(0);
    setResults([]);
    setDone(false);
    resetTopCard();
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
          <span className="text-sm text-slate-500">
            {Math.min(index, items.length)}/{items.length}
          </span>
        </div>
        <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[var(--color-teal)] to-[var(--color-purple)]"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      {/* Card Stack */}
      <div className="relative h-[380px] select-none">
        {/* Background cards (for depth) */}
        {items.slice(index + 1, index + 3).map((item, i) => (
          <Card
            key={item.id}
            className="absolute inset-0 mx-2 bg-white border-slate-200"
            style={{
              transform: `scale(${1 - (i + 1) * 0.04}) translateY(${(i + 1) * 8}px)`,
              opacity: 0.85 - i * 0.15,
            }}
            aria-hidden
          >
            <CardContent className="p-0 h-full" />
          </Card>
        ))}

        {/* Top card */}
        {!done && current && (
          <Card
            ref={cardRef as any}
            className="absolute inset-0 mx-2 bg-white border-slate-200 shadow-xl will-change-transform transition-colors duration-200"
            style={{
              backgroundColor: swipeDirection === 'left' 
                ? 'rgba(239, 68, 68, 0.15)' 
                : swipeDirection === 'right' 
                ? 'rgba(34, 197, 94, 0.15)' 
                : 'white'
            }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-slate-800">{current.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-slate-600 leading-relaxed">{current.summary}</p>

              {/* Swipe affordances */}
              <div className="absolute left-3 bottom-3 right-3 flex items-center justify-between gap-3">
                <Button
                  variant="outline"
                  className="flex-1 border-rose-200 text-rose-600 hover:bg-rose-50"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleChoice(false);
                  }}
                >
                  <X className="w-4 h-4 mr-2" />
                  Doesn't resonate
                </Button>
                <Button
                  className="flex-1 bg-gradient-to-r from-[var(--color-teal)] to-[var(--color-purple)] text-white hover:opacity-90"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleChoice(true);
                  }}
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Resonates
                </Button>
              </div>

              {/* Subtle hint for gesture */}
              <div className="absolute left-0 right-0 bottom-[86px] text-center">
                <p className="text-xs text-slate-400">Swipe ⟵ no · yes ⟶</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Finished summary */}
        {done && (
          <Card className="absolute inset-0 mx-2 bg-white border-slate-200 flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl text-slate-800">Your Boundary Barriers</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-auto">
              {showSummaryOnFinish ? (
                <>
                  <p className="text-slate-600 mb-3">
                    You marked these as most relevant:
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {results.filter(r => r.resonate).length === 0 ? (
                      <span className="text-slate-500 text-sm">
                        None selected. You can retake it.
                      </span>
                    ) : (
                      results
                        .filter((r) => r.resonate)
                        .map((r) => (
                          <span
                            key={r.id}
                            className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-sm text-teal-800"
                          >
                            {r.title}
                          </span>
                        ))
                    )}
                  </div>

                  {results.filter(r => r.resonate).length > 0 && (
                    <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-600">
                      Tip: Link each selected barrier to a short strategy pathway (e.g., a
                      one-minute read or micro-practice) inside your app.
                    </div>
                  )}
                </>
              ) : (
                <p className="text-slate-600">
                  Finished! Use the callback to route the user to tailored content.
                </p>
              )}

              <div className="mt-4 flex items-center justify-between">
                <Button variant="outline" onClick={restart}>
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Retake
                </Button>

                {/* Example: pass results back up */}
                <Button
                  className="bg-gradient-to-r from-[var(--color-teal)] to-[var(--color-purple)] text-white hover:opacity-90"
                  onClick={() => onFinish?.(results)}
                >
                  Continue
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Footer mini-legend */}
      {!done && (
        <div className="mt-4 text-center text-xs text-slate-500">
          {remaining > -1 && <>Cards remaining: {remaining + 1}</>}
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------
   HOW TO USE

   <BoundaryBarrierCards
     items={[
       { id: 'guilt', title: 'Guilt', summary: '…', hint: '…' },
       // …more
     ]}
     onFinish={(results) => {
       // results: [{ id, title, resonate }]
       // Example: route to a results page
       // navigate(createPageUrl(`BoundaryResults?picked=${encodeURIComponent(JSON.stringify(results))}`))
     }}
   />

   Styling:
   - Uses shadcn/ui Card & Button + Tailwind classes.
   - Colour vars reference your existing CSS variables.
------------------------------------------- */
