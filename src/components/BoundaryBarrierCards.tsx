// components/BoundaryBarrierCards.tsx
// Tinder-style swipeable cards for "Parent Mirror Cards"
// Swipe RIGHT = resonates ✅, LEFT = doesn't resonate ❌
// Drop this file into your project and import where needed.

import React, { useMemo, useRef, useState } from "react";
import { X, Heart, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";
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
      Math.min(MAX_ROTATION, (dxVal / 8))
    );
    cardRef.current.style.transition = "none";
    cardRef.current.style.transform = `translate(${dxVal}px, ${dyVal}px) rotate(${rotation}deg)`;
  };

  const snapBack = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transition = "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)";
    cardRef.current.style.transform = "translate(0px, 0px) rotate(0deg)";
    dx.current = 0;
    dy.current = 0;
  };

  const flyOut = (dir: 1 | -1, cb: () => void) => {
    if (!cardRef.current) return cb();
    cardRef.current.style.transition = "transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
    const finalRotation = dir * (MAX_ROTATION + 10);
    cardRef.current.style.transform = `translate(${dir * OUT_DISTANCE}px, ${dy.current + 50}px) rotate(${finalRotation}deg)`;
    setTimeout(cb, 400);
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
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold" style={{ color: 'hsl(var(--clay-dark-teal))' }}>{title}</h2>
          <span className="text-sm font-medium" style={{ color: 'hsl(var(--clay-sage))' }}>
            {Math.min(index, items.length)}/{items.length}
          </span>
        </div>
        <div className="h-3 w-full rounded-full overflow-hidden" style={{ background: 'hsl(var(--clay-pale-mint))' }}>
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{ 
              width: `${progressPct}%`,
              background: 'linear-gradient(90deg, hsl(var(--clay-teal)), hsl(var(--clay-mint)))'
            }}
          />
        </div>
      </div>
      
      {/* Swipe Instructions */}
      {!done && (
        <div className="mb-4 p-4 rounded-2xl flex items-center justify-between gap-4" style={{ 
          background: 'linear-gradient(135deg, hsl(var(--clay-pale-mint)), hsl(var(--clay-cream)))',
          border: '2px solid hsl(var(--clay-mint))'
        }}>
          <div className="flex items-center gap-2 flex-1">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'hsl(var(--destructive))' }}>
              <ChevronLeft className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-semibold" style={{ color: 'hsl(var(--clay-dark-teal))' }}>
              Swipe left<br/>if it doesn't resonate
            </span>
          </div>
          <div className="w-px h-12" style={{ background: 'hsl(var(--clay-teal))' }} />
          <div className="flex items-center gap-2 flex-1 justify-end">
            <span className="text-sm font-semibold text-right" style={{ color: 'hsl(var(--clay-dark-teal))' }}>
              Swipe right<br/>if it resonates
            </span>
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'hsl(var(--clay-teal))' }}>
              <ChevronRight className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      )}

      {/* Card Stack */}
      <div className="relative h-[420px] select-none">
        {/* Background cards (for depth) */}
        {items.slice(index + 1, index + 3).map((item, i) => (
          <div
            key={item.id}
            className="absolute inset-0 rounded-3xl"
            style={{
              transform: `scale(${1 - (i + 1) * 0.05}) translateY(${(i + 1) * 12}px)`,
              opacity: 0.7 - i * 0.2,
              background: 'hsl(var(--clay-cream))',
              border: '3px solid hsl(var(--clay-pale-mint))',
              boxShadow: '0 8px 24px -4px rgba(77, 130, 128, 0.2)'
            }}
            aria-hidden
          />
        ))}

        {/* Top card */}
        {!done && current && (
          <div
            ref={cardRef}
            className="absolute inset-0 cursor-grab active:cursor-grabbing rounded-3xl will-change-transform touch-none"
            style={{
              background: swipeDirection === 'left' 
                ? 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), hsl(var(--clay-cream)))' 
                : swipeDirection === 'right' 
                ? 'linear-gradient(135deg, rgba(77, 130, 128, 0.2), hsl(var(--clay-pale-mint)))' 
                : 'linear-gradient(135deg, hsl(var(--clay-cream)), hsl(var(--clay-pale-mint)))',
              border: swipeDirection 
                ? `4px solid ${swipeDirection === 'left' ? 'hsl(var(--destructive))' : 'hsl(var(--clay-teal))'}`
                : '3px solid hsl(var(--clay-mint))',
              boxShadow: swipeDirection
                ? `0 20px 60px -10px ${swipeDirection === 'left' ? 'rgba(239, 68, 68, 0.4)' : 'rgba(77, 130, 128, 0.5)'}`
                : '0 20px 60px -10px rgba(77, 130, 128, 0.3)',
              transition: 'background 0.2s, border 0.2s, box-shadow 0.2s'
            }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
          >
            {/* Swipe direction indicators */}
            {swipeDirection && (
              <>
                <div 
                  className="absolute top-8 left-8 transition-opacity duration-200"
                  style={{ 
                    opacity: swipeDirection === 'left' ? 1 : 0,
                    pointerEvents: 'none'
                  }}
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center animate-pulse" 
                    style={{ background: 'hsl(var(--destructive))' }}>
                    <X className="w-10 h-10 text-white" strokeWidth={3} />
                  </div>
                </div>
                <div 
                  className="absolute top-8 right-8 transition-opacity duration-200"
                  style={{ 
                    opacity: swipeDirection === 'right' ? 1 : 0,
                    pointerEvents: 'none'
                  }}
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center animate-pulse" 
                    style={{ background: 'hsl(var(--clay-teal))' }}>
                    <Heart className="w-10 h-10 text-white" strokeWidth={3} fill="white" />
                  </div>
                </div>
              </>
            )}
            
            <div className="p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'hsl(var(--clay-dark-teal))' }}>
                {current.title}
              </h3>
              <p className="text-lg leading-relaxed flex-1" style={{ color: 'hsl(var(--clay-sage))' }}>
                {current.summary}
              </p>

              {/* Button affordances */}
              <div className="flex items-center justify-between gap-3 mt-6">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 h-14 rounded-2xl font-semibold text-base border-2 transition-all hover:scale-105"
                  style={{
                    borderColor: 'hsl(var(--destructive))',
                    color: 'hsl(var(--destructive))',
                    background: 'white'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleChoice(false);
                  }}
                >
                  <X className="w-5 h-5 mr-2" />
                  Pass
                </Button>
                <Button
                  size="lg"
                  className="flex-1 h-14 rounded-2xl font-semibold text-base text-white transition-all hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, hsl(var(--clay-teal)), hsl(var(--clay-mint)))'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleChoice(true);
                  }}
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Resonates
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Finished summary */}
        {done && (
          <div className="absolute inset-0 rounded-3xl p-8 flex flex-col" style={{
            background: 'linear-gradient(135deg, hsl(var(--clay-pale-mint)), hsl(var(--clay-cream)))',
            border: '3px solid hsl(var(--clay-mint))',
            boxShadow: '0 20px 60px -10px rgba(77, 130, 128, 0.3)'
          }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'hsl(var(--clay-dark-teal))' }}>
              Your Boundary Barriers
            </h3>
            <div className="flex-1 overflow-auto">
              {showSummaryOnFinish ? (
                <>
                  <p className="text-base mb-4" style={{ color: 'hsl(var(--clay-sage))' }}>
                    You marked these as most relevant:
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {results.filter(r => r.resonate).length === 0 ? (
                      <span className="text-sm" style={{ color: 'hsl(var(--clay-sage))' }}>
                        None selected. You can retake it.
                      </span>
                    ) : (
                      results
                        .filter((r) => r.resonate)
                        .map((r) => (
                          <span
                            key={r.id}
                            className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold"
                            style={{
                              background: 'hsl(var(--clay-mint))',
                              color: 'hsl(var(--clay-dark-teal))',
                              border: '2px solid hsl(var(--clay-teal))'
                            }}
                          >
                            {r.title}
                          </span>
                        ))
                    )}
                  </div>

                  {results.filter(r => r.resonate).length > 0 && (
                    <div className="p-4 rounded-2xl text-sm" style={{
                      background: 'white',
                      border: '2px solid hsl(var(--clay-mint))',
                      color: 'hsl(var(--clay-sage))'
                    }}>
                      Tip: Link each selected barrier to a short strategy pathway (e.g., a
                      one-minute read or micro-practice) inside your app.
                    </div>
                  )}
                </>
              ) : (
                <p style={{ color: 'hsl(var(--clay-sage))' }}>
                  Finished! Use the callback to route the user to tailored content.
                </p>
              )}

              <div className="mt-6 flex items-center justify-between gap-3">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="flex-1 h-12 rounded-2xl font-semibold border-2"
                  style={{
                    borderColor: 'hsl(var(--clay-teal))',
                    color: 'hsl(var(--clay-dark-teal))',
                    background: 'white'
                  }}
                  onClick={restart}
                >
                  <RotateCcw className="w-5 h-5 mr-2" />
                  Retake
                </Button>

                <Button
                  size="lg"
                  className="flex-1 h-12 rounded-2xl font-semibold text-white"
                  style={{
                    background: 'linear-gradient(135deg, hsl(var(--clay-teal)), hsl(var(--clay-mint)))'
                  }}
                  onClick={() => onFinish?.(results)}
                >
                  Continue
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer mini-legend */}
      {!done && (
        <div className="mt-6 text-center text-sm font-medium" style={{ color: 'hsl(var(--clay-sage))' }}>
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
