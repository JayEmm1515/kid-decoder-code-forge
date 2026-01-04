import React, { useRef, useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ArrowLeft, Heart, X, RotateCcw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

type Barrier = {
  id: string;
  title: string;
  body: string;
  soundsLike?: string;
  script?: string;
};

type Choice = "pass" | "resonates";

const BARRIERS: Barrier[] = [
  {
    id: "guilt",
    title: "Guilt",
    body: "You worry saying 'no' will make your child feel unloved—so you soften or give in.",
    soundsLike: '"If I say no, they\'ll feel rejected…"',
    script: '"I love you. The answer is no. I\'ll help you handle the feeling."',
  },
  {
    id: "fear-of-escalation",
    title: "Fear of Escalation",
    body: "You anticipate a meltdown or conflict, so you avoid holding the limit.",
    soundsLike: '"This will blow up if I hold the line…"',
    script: '"I can see you\'re angry. The limit stays. I\'ll stay close."',
  },
  {
    id: "inconsistency",
    title: "Inconsistency",
    body: "Rules change depending on mood, energy, or the day—so boundaries don't stick.",
    soundsLike: '"Sometimes I let it slide, sometimes I can\'t…"',
    script: '"Same rule today. I\'ll remind you once, then I\'ll follow through."',
  },
  {
    id: "people-pleasing",
    title: "People-Pleasing",
    body: "You prioritise keeping the peace over being clear—especially around other adults.",
    soundsLike: '"I don\'t want to look harsh or be judged…"',
    script: '"I\'m being clear because it\'s kind. We can talk about it later."',
  },
  {
    id: "low-support",
    title: "Low Support",
    body: "You're carrying it alone, so it's harder to stay steady when things get intense.",
    soundsLike: '"I have no back-up, so I just need this to stop…"',
    script: '"I\'m doing this the best I can. Small steps. One limit at a time."',
  },
  {
    id: "burnout",
    title: "Burnout",
    body: "You're depleted, so the quickest path becomes the default—even if it's not the best one.",
    soundsLike: '"I don\'t have the energy for the battle…"',
    script: '"I\'m tired. The answer is still no. Let\'s make this easier and reset."',
  },
  {
    id: "own-upbringing",
    title: "Your Own Upbringing",
    body: "Old beliefs or experiences (strict, unpredictable, or enmeshed) make limits feel unsafe or wrong.",
    soundsLike: '"Setting limits feels mean or dangerous…"',
    script: '"A calm boundary is safety. I can be kind and firm at the same time."',
  },
  {
    id: "unclear-plan",
    title: "Unclear Plan",
    body: "You're not sure what to say or do in the moment—so you hesitate or negotiate too long.",
    soundsLike: '"I freeze, then I over-explain…"',
    script: '"Short answer first. Then support feelings. Then follow through."',
  },
];

const SWIPE_THRESHOLD = 100;

export default function BoundaryBarriers() {
  const navigate = useNavigate();
  const total = BARRIERS.length;
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Choice>>({});
  const [history, setHistory] = useState<Array<{ id: string; choice: Choice }>>([]);
  const [exitDirection, setExitDirection] = useState<"left" | "right" | null>(null);
  const [dragDirection, setDragDirection] = useState<"left" | "right" | null>(null);

  const current = useMemo(() => BARRIERS[index], [index]);
  const completedCount = Object.keys(answers).length;
  const progressPct = total === 0 ? 0 : (completedCount / total) * 100;
  const done = index >= total;

  function decide(choice: Choice) {
    if (!current) return;
    const id = current.id;
    setExitDirection(choice === "resonates" ? "right" : "left");
    
    setTimeout(() => {
      setAnswers((prev) => ({ ...prev, [id]: choice }));
      setHistory((prev) => [...prev, { id, choice }]);
      setIndex((i) => Math.min(i + 1, total));
      setExitDirection(null);
      setDragDirection(null);
    }, 200);
  }

  function undo() {
    const last = history[history.length - 1];
    if (!last) return;
    setHistory((prev) => prev.slice(0, -1));
    setAnswers((prev) => {
      const nextA = { ...prev };
      delete nextA[last.id];
      return nextA;
    });
    const rewindTo = BARRIERS.findIndex((b) => b.id === last.id);
    setIndex(rewindTo >= 0 ? rewindTo : Math.max(index - 1, 0));
  }

  function handleDrag(_: any, info: PanInfo) {
    if (Math.abs(info.offset.x) > 30) {
      setDragDirection(info.offset.x > 0 ? "right" : "left");
    } else {
      setDragDirection(null);
    }
  }

  function handleDragEnd(_: any, info: PanInfo) {
    if (info.offset.x > SWIPE_THRESHOLD) {
      decide("resonates");
    } else if (info.offset.x < -SWIPE_THRESHOLD) {
      decide("pass");
    } else {
      setDragDirection(null);
    }
  }

  const resonated = Object.entries(answers)
    .filter(([_, choice]) => choice === "resonates")
    .map(([id]) => BARRIERS.find((b) => b.id === id))
    .filter(Boolean) as Barrier[];

  return (
    <div className="min-h-screen bg-airy relative overflow-hidden">
      {/* Background blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-teal/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-purple/20 blur-3xl" />

      {/* Header */}
      <div className="relative z-10 px-4 pt-6 pb-4">
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center h-10 w-10 rounded-full glass-card text-teal shadow-sm hover:scale-105 transition-transform"
            aria-label="Back"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-foreground">Boundary Barriers</h1>
            <p className="text-sm text-muted-foreground">Discover what gets in the way</p>
          </div>
        </div>

        {/* Progress */}
        <div className="glass-card rounded-2xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">Your progress</span>
            <span className="text-sm font-semibold text-teal tabular-nums">
              {completedCount} of {total}
            </span>
          </div>
          <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-teal to-purple"
              initial={{ width: 0 }}
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>

      {/* Instructions */}
      {!done && (
        <div className="px-4 mb-4">
          <div className="glass-card rounded-2xl p-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-coral-pink flex items-center justify-center">
                <X className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs font-medium text-muted-foreground">
                Swipe left<br />to pass
              </span>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-muted-foreground text-right">
                Swipe right<br />if it resonates
              </span>
              <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Card Stack */}
      <div className="px-4 pb-32">
        <div className="relative h-[420px] max-w-md mx-auto">
          {/* Background cards for depth */}
          {!done && BARRIERS.slice(index + 1, index + 3).map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 glass-card rounded-3xl"
              style={{
                transform: `scale(${1 - (i + 1) * 0.04}) translateY(${(i + 1) * 10}px)`,
                opacity: 0.6 - i * 0.2,
                zIndex: -i - 1,
              }}
            />
          ))}

          {/* Main swipe card */}
          <AnimatePresence mode="wait">
            {!done && current && (
              <motion.div
                key={current.id}
                className="absolute inset-0 cursor-grab active:cursor-grabbing touch-none"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  x: 0,
                  rotate: 0,
                }}
                exit={{
                  x: exitDirection === "right" ? 300 : exitDirection === "left" ? -300 : 0,
                  rotate: exitDirection === "right" ? 15 : exitDirection === "left" ? -15 : 0,
                  opacity: 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDrag={handleDrag}
                onDragEnd={handleDragEnd}
                whileDrag={{ cursor: "grabbing" }}
              >
                <div 
                  className={`h-full rounded-3xl border-2 transition-all duration-200 overflow-hidden ${
                    dragDirection === "left" 
                      ? "border-coral-pink bg-coral-pink/5" 
                      : dragDirection === "right" 
                      ? "border-teal bg-teal/5" 
                      : "border-border/50 bg-card"
                  }`}
                  style={{
                    boxShadow: dragDirection 
                      ? `0 20px 50px -12px ${dragDirection === "left" ? "rgba(255, 107, 129, 0.4)" : "rgba(72, 191, 172, 0.4)"}`
                      : "0 20px 50px -12px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  {/* Swipe indicators */}
                  <AnimatePresence>
                    {dragDirection === "left" && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute top-6 left-6 z-10"
                      >
                        <div className="w-14 h-14 rounded-full bg-coral-pink flex items-center justify-center shadow-lg">
                          <X className="w-8 h-8 text-white" strokeWidth={3} />
                        </div>
                      </motion.div>
                    )}
                    {dragDirection === "right" && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute top-6 right-6 z-10"
                      >
                        <div className="w-14 h-14 rounded-full bg-teal flex items-center justify-center shadow-lg">
                          <Heart className="w-8 h-8 text-white" fill="white" strokeWidth={2} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Card content */}
                  <div className="p-6 h-full flex flex-col">
                    <h2 className="text-2xl font-bold text-foreground mb-3">{current.title}</h2>
                    <p className="text-base text-muted-foreground leading-relaxed mb-6">{current.body}</p>
                    
                    <div className="mt-auto space-y-3">
                      <div className="glass-card rounded-xl p-3">
                        <div className="text-xs font-semibold text-pink mb-1">In the moment it sounds like</div>
                        <div className="text-sm text-foreground">{current.soundsLike}</div>
                      </div>
                      <div className="glass-card rounded-xl p-3">
                        <div className="text-xs font-semibold text-teal mb-1">Try this script</div>
                        <div className="text-sm text-foreground">{current.script}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Completion state */}
          {done && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="h-full glass-card rounded-3xl p-6 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal to-purple flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-foreground">Complete!</span>
              </div>

              {resonated.length > 0 ? (
                <>
                  <p className="text-sm text-muted-foreground mb-4">
                    These barriers resonated with you:
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {resonated.map((b) => (
                      <span
                        key={b.id}
                        className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium bg-teal/10 text-teal border border-teal/30"
                      >
                        <Heart className="w-3 h-3" />
                        {b.title}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Understanding your barriers is the first step. Next, explore strategies tailored to each one.
                  </p>
                </>
              ) : (
                <p className="text-sm text-muted-foreground">
                  No barriers resonated this time. You can retake the exercise or explore other tools.
                </p>
              )}

              <div className="mt-auto pt-6 flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 h-12 rounded-xl"
                  onClick={() => {
                    setIndex(0);
                    setAnswers({});
                    setHistory([]);
                  }}
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Retake
                </Button>
                <Button
                  className="flex-1 h-12 rounded-xl bg-teal text-white hover:bg-teal/90"
                  asChild
                >
                  <Link to="/dashboard">Continue</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom action buttons */}
      {!done && (
        <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-xl border-t border-border">
          <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full"
              onClick={undo}
              disabled={history.length === 0}
            >
              <RotateCcw className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="h-14 w-14 rounded-full border-2 border-coral-pink text-coral-pink hover:bg-coral-pink hover:text-white"
              onClick={() => decide("pass")}
            >
              <X className="h-7 w-7" />
            </Button>
            <Button
              className="h-14 w-14 rounded-full bg-teal text-white hover:bg-teal/90"
              onClick={() => decide("resonates")}
            >
              <Heart className="h-7 w-7" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
