import React, { useState, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ArrowLeft, Heart, X, RotateCcw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

type Barrier = {
  id: string;
  title: string;
  meaning: string;
  momentThought: string;
  script: string;
};

type Choice = "pass" | "resonates";

const BARRIERS: Barrier[] = [
  {
    id: "guilt",
    title: "Guilt",
    meaning: "You worry saying 'no' will make your child feel unloved—so you soften or give in.",
    momentThought: '"If I say no, they\'ll feel rejected…"',
    script: '"I love you. The answer is no. I\'ll help you handle the feeling."',
  },
  {
    id: "fear-of-escalation",
    title: "Fear of Escalation",
    meaning: "You anticipate a meltdown or conflict, so you avoid holding the limit.",
    momentThought: '"This will blow up if I hold the line…"',
    script: '"I can see you\'re angry. The limit stays. I\'ll stay close."',
  },
  {
    id: "inconsistency",
    title: "Inconsistency",
    meaning: "Rules change depending on mood, energy, or the day—so boundaries don't stick.",
    momentThought: '"Sometimes I let it slide, sometimes I can\'t…"',
    script: '"Same rule today. I\'ll remind you once, then I\'ll follow through."',
  },
  {
    id: "people-pleasing",
    title: "People-Pleasing",
    meaning: "You prioritise keeping the peace over being clear—especially around other adults.",
    momentThought: '"I don\'t want to look harsh or be judged…"',
    script: '"I\'m being clear because it\'s kind. We can talk about it later."',
  },
  {
    id: "low-support",
    title: "Low Support",
    meaning: "You're carrying it alone, so it's harder to stay steady when things get intense.",
    momentThought: '"I have no back-up, so I just need this to stop…"',
    script: '"I\'m doing this the best I can. Small steps. One limit at a time."',
  },
  {
    id: "burnout",
    title: "Burnout",
    meaning: "You're depleted, so the quickest path becomes the default—even if it's not the best one.",
    momentThought: '"I don\'t have the energy for the battle…"',
    script: '"I\'m tired. The answer is still no. Let\'s make this easier and reset."',
  },
  {
    id: "own-upbringing",
    title: "Your Own Upbringing",
    meaning: "Old beliefs or experiences (strict, unpredictable, or enmeshed) make limits feel unsafe or wrong.",
    momentThought: '"Setting limits feels mean or dangerous…"',
    script: '"A calm boundary is safety. I can be kind and firm at the same time."',
  },
  {
    id: "unclear-plan",
    title: "Unclear Plan",
    meaning: "You're not sure what to say or do in the moment—so you hesitate or negotiate too long.",
    momentThought: '"I freeze, then I over-explain…"',
    script: '"Short answer first. Then support feelings. Then follow through."',
  },
];

const SWIPE_THRESHOLD = 120;

export default function BoundaryBarriers() {
  const navigate = useNavigate();
  const total = BARRIERS.length;
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Choice>>({});
  const [history, setHistory] = useState<Array<{ id: string; choice: Choice }>>([]);
  const [exitDirection, setExitDirection] = useState<"left" | "right" | null>(null);
  const [dragX, setDragX] = useState(0);

  const current = useMemo(() => BARRIERS[index], [index]);
  const progressPct = total === 0 ? 0 : (index / total) * 100;
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
      setDragX(0);
    }, 250);
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
    setDragX(info.offset.x);
  }

  function handleDragEnd(_: any, info: PanInfo) {
    if (info.offset.x > SWIPE_THRESHOLD) {
      decide("resonates");
    } else if (info.offset.x < -SWIPE_THRESHOLD) {
      decide("pass");
    } else {
      setDragX(0);
    }
  }

  const resonated = Object.entries(answers)
    .filter(([_, choice]) => choice === "resonates")
    .map(([id]) => BARRIERS.find((b) => b.id === id))
    .filter(Boolean) as Barrier[];

  // Calculate visual feedback based on drag
  const swipeOpacity = Math.min(Math.abs(dragX) / SWIPE_THRESHOLD, 1);
  const swipeDirection = dragX > 30 ? "right" : dragX < -30 ? "left" : null;

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ 
      background: 'linear-gradient(135deg, hsl(175 40% 92%) 0%, hsl(220 30% 94%) 30%, hsl(270 30% 94%) 70%, hsl(175 35% 90%) 100%)'
    }}>
      {/* Subtle background shapes */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full opacity-40" style={{ background: 'radial-gradient(circle, hsl(175 50% 80%) 0%, transparent 70%)' }} />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-30" style={{ background: 'radial-gradient(circle, hsl(270 40% 85%) 0%, transparent 70%)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, hsl(165 45% 85%) 0%, transparent 60%)' }} />
      </div>

      {/* Header */}
      <div className="relative z-10 px-4 pt-6 pb-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm text-slate-700 shadow-sm hover:bg-white transition-all"
            aria-label="Back"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-slate-800">Boundary Barriers</h1>
            <p className="text-sm text-slate-500">Discover what gets in the way</p>
          </div>
        </div>
      </div>

      {/* Progress */}
      {!done && (
        <div className="relative z-10 px-4 pb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-slate-500">Progress</span>
            <span className="text-xs font-semibold text-slate-700 tabular-nums">
              {index} of {total}
            </span>
          </div>
          <div className="h-2 w-full rounded-full bg-slate-200/70 overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, hsl(175 55% 45%) 0%, hsl(270 50% 55%) 100%)' }}
              initial={{ width: 0 }}
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      )}

      {/* Card Stack Area */}
      <div className="relative z-10 px-4 pb-36">
        <div className="relative h-[480px] max-w-sm mx-auto">
          {/* Background cards for depth */}
          {!done && BARRIERS.slice(index + 1, index + 3).map((_, i) => (
            <div
              key={`bg-${i}`}
              className="absolute inset-x-0 mx-auto rounded-3xl bg-white/60 shadow-sm"
              style={{
                top: `${(i + 1) * 8}px`,
                width: `calc(100% - ${(i + 1) * 16}px)`,
                height: 'calc(100% - 16px)',
                zIndex: -i - 1,
                opacity: 0.7 - i * 0.2,
              }}
            />
          ))}

          {/* Main swipe card */}
          <AnimatePresence mode="wait">
            {!done && current && (
              <motion.div
                key={current.id}
                className="absolute inset-0 cursor-grab active:cursor-grabbing touch-none select-none"
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  y: 0,
                  x: 0,
                  rotate: 0,
                }}
                exit={{
                  x: exitDirection === "right" ? 350 : exitDirection === "left" ? -350 : 0,
                  rotate: exitDirection === "right" ? 20 : exitDirection === "left" ? -20 : 0,
                  opacity: 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.12}
                onDrag={handleDrag}
                onDragEnd={handleDragEnd}
                style={{ x: 0 }}
                whileDrag={{ cursor: "grabbing" }}
              >
                <div
                  className="h-full rounded-3xl bg-white shadow-xl overflow-hidden relative"
                  style={{
                    boxShadow: swipeDirection === "right"
                      ? '0 25px 50px -12px rgba(45, 180, 170, 0.35), 0 12px 24px -8px rgba(0,0,0,0.1)'
                      : swipeDirection === "left"
                      ? '0 25px 50px -12px rgba(239, 68, 68, 0.35), 0 12px 24px -8px rgba(0,0,0,0.1)'
                      : '0 25px 50px -12px rgba(0,0,0,0.15), 0 12px 24px -8px rgba(0,0,0,0.08)',
                  }}
                >
                  {/* Swipe overlay indicators */}
                  <AnimatePresence>
                    {swipeDirection === "left" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: swipeOpacity }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent z-10 pointer-events-none"
                      >
                        <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-red-500 text-white font-bold text-sm shadow-lg" style={{ transform: 'rotate(-12deg)' }}>
                          <X className="w-5 h-5" strokeWidth={3} />
                          PASS
                        </div>
                      </motion.div>
                    )}
                    {swipeDirection === "right" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: swipeOpacity }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-bl from-teal/10 to-transparent z-10 pointer-events-none"
                      >
                        <div className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 rounded-full text-white font-bold text-sm shadow-lg" style={{ background: 'hsl(175 55% 45%)', transform: 'rotate(12deg)' }}>
                          <Heart className="w-5 h-5" fill="white" />
                          RESONATES
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Card content */}
                  <div className="p-6 h-full flex flex-col">
                    {/* Title */}
                    <h2 className="text-2xl font-bold text-slate-800 mb-3">{current.title}</h2>
                    
                    {/* Meaning */}
                    <p className="text-base text-slate-600 leading-relaxed mb-6">{current.meaning}</p>

                    {/* Info sections */}
                    <div className="mt-auto space-y-3">
                      {/* Moment thought */}
                      <div className="rounded-2xl p-4" style={{ background: 'hsl(220 25% 96%)', border: '1px solid hsl(220 20% 90%)' }}>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: 'hsl(330 55% 60%)' }} />
                          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">In the moment it sounds like</span>
                        </div>
                        <p className="text-sm text-slate-700 italic">{current.momentThought}</p>
                      </div>

                      {/* Script */}
                      <div className="rounded-2xl p-4" style={{ background: 'hsl(175 40% 96%)', border: '1px solid hsl(175 35% 88%)' }}>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: 'hsl(175 55% 45%)' }} />
                          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Try this script</span>
                        </div>
                        <p className="text-sm text-slate-700 font-medium">{current.script}</p>
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
              className="h-full bg-white rounded-3xl shadow-xl p-6 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, hsl(175 55% 45%) 0%, hsl(270 50% 55%) 100%)' }}>
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold text-slate-800">Complete!</span>
                  <p className="text-sm text-slate-500">You've reviewed all barriers</p>
                </div>
              </div>

              {resonated.length > 0 ? (
                <>
                  <p className="text-sm text-slate-600 mb-4">
                    You saved <span className="font-bold text-teal">{resonated.length}</span> barrier{resonated.length !== 1 ? 's' : ''} that resonated with you:
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {resonated.map((b) => (
                      <span
                        key={b.id}
                        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium"
                        style={{ background: 'hsl(175 45% 92%)', color: 'hsl(175 55% 35%)', border: '1px solid hsl(175 40% 82%)' }}
                      >
                        <Heart className="w-3.5 h-3.5" fill="currentColor" />
                        {b.title}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-slate-500">
                    Understanding your barriers is the first step. Explore strategies tailored to each one.
                  </p>
                </>
              ) : (
                <p className="text-sm text-slate-500">
                  No barriers resonated this time. That's great! You can retake the exercise later or explore other tools.
                </p>
              )}

              <div className="mt-auto pt-6 flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 h-12 rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50"
                  onClick={() => {
                    setIndex(0);
                    setAnswers({});
                    setHistory([]);
                  }}
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Restart
                </Button>
                <Button
                  className="flex-1 h-12 rounded-xl text-white"
                  style={{ background: 'hsl(175 55% 45%)' }}
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
        <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-slate-200/50 z-20">
          <div className="max-w-sm mx-auto px-6 py-5 flex items-center justify-center gap-6">
            {/* Pass button */}
            <button
              onClick={() => decide("pass")}
              className="h-16 w-16 rounded-full bg-white border-2 border-red-400 text-red-500 flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all active:scale-95"
              aria-label="Pass"
            >
              <X className="h-8 w-8" strokeWidth={2.5} />
            </button>

            {/* Undo button */}
            <button
              onClick={undo}
              disabled={history.length === 0}
              className="h-11 w-11 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shadow-md hover:bg-slate-200 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Undo"
            >
              <RotateCcw className="h-5 w-5" />
            </button>

            {/* Resonates button */}
            <button
              onClick={() => decide("resonates")}
              className="h-16 w-16 rounded-full text-white flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all active:scale-95"
              style={{ background: 'linear-gradient(135deg, hsl(175 55% 45%) 0%, hsl(175 50% 50%) 100%)', boxShadow: '0 8px 24px rgba(45, 180, 170, 0.35)' }}
              aria-label="Resonates"
            >
              <Heart className="h-8 w-8" fill="white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
