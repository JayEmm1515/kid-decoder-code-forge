import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import {
  ArrowLeft,
  Heart,
  X,
  RotateCcw,
  ChevronRight,
} from "lucide-react";

type Barrier = {
  id: string;
  title: string;
  body: string;
};

type Choice = "pass" | "resonates";

const BARRIERS: Barrier[] = [
  {
    id: "guilt",
    title: "Guilt",
    body: "You worry saying 'no' will make your child feel unloved—so you soften or give in.",
  },
  {
    id: "fear-of-escalation",
    title: "Fear of escalation",
    body: "You anticipate a meltdown or conflict, so you avoid holding the limit.",
  },
  {
    id: "inconsistency",
    title: "Inconsistency",
    body: "Rules change depending on mood, energy, or the day—so boundaries don't stick.",
  },
  {
    id: "people-pleasing",
    title: "People-pleasing",
    body: "You prioritise keeping the peace over being clear—especially around other adults.",
  },
  {
    id: "low-support",
    title: "Low support",
    body: "You're carrying it alone, so it's harder to stay steady when things get intense.",
  },
  {
    id: "burnout",
    title: "Burnout",
    body: "You're depleted, so the quickest path becomes the default—even if it's not the best one.",
  },
  {
    id: "own-upbringing",
    title: "Your own upbringing",
    body: "Old beliefs or experiences (strict, unpredictable, or enmeshed) make limits feel unsafe or wrong.",
  },
  {
    id: "unclear-plan",
    title: "Unclear plan",
    body: "You're not sure what to say or do in the moment—so you hesitate or negotiate too long.",
  },
];

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function ProgressBar({ value }: { value: number }) {
  const pct = clamp(value, 0, 100);
  return (
    <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
      <div
        className="h-full rounded-full"
        style={{
          width: `${pct}%`,
          background: "linear-gradient(90deg, var(--color-teal), var(--color-purple))",
        }}
      />
    </div>
  );
}

function SwipeCard({
  barrier,
  onDecision,
  disabled,
}: {
  barrier: Barrier;
  onDecision: (choice: Choice) => void;
  disabled?: boolean;
}) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-220, 0, 220], [-10, 0, 10]);
  // Overlays fade in as you drag.
  const passOpacity = useTransform(x, [-220, -80], [1, 0]);
  const resOpacity = useTransform(x, [80, 220], [0, 1]);
  const passScale = useTransform(x, [-220, -120], [1, 0.9]);
  const resScale = useTransform(x, [120, 220], [0.9, 1]);

  return (
    <motion.div
      className="absolute inset-0"
      style={{ x, rotate }}
      drag={disabled ? false : "x"}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.12}
      onDragEnd={(_, info) => {
        if (disabled) return;
        const dx = info.offset.x;
        if (dx > 120) onDecision("resonates");
        else if (dx < -120) onDecision("pass");
      }}
      whileTap={{ cursor: "grabbing" }}
    >
      <div className="relative h-full w-full rounded-3xl bg-white/70 backdrop-blur-xl border border-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.15)] overflow-hidden">
        {/* Drag overlays */}
        <motion.div
          className="absolute top-5 left-5 z-10 rounded-full px-3 py-1 text-sm font-semibold"
          style={{
            opacity: passOpacity,
            scale: passScale,
            color: "white",
            backgroundColor: "var(--color-coral-pink)",
          }}
        >
          PASS
        </motion.div>
        <motion.div
          className="absolute top-5 right-5 z-10 rounded-full px-3 py-1 text-sm font-semibold"
          style={{
            opacity: resOpacity,
            scale: resScale,
            color: "white",
            backgroundColor: "var(--color-teal)",
          }}
        >
          RESONATES
        </motion.div>
        <div className="p-7">
          <h2 className="text-2xl font-bold text-slate-900">{barrier.title}</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">{barrier.body}</p>
          <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-200 p-4 text-sm text-slate-600">
            Tip: swipe right if it resonates, left if it doesn't. You can also use the buttons below.
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/90 to-transparent pointer-events-none" />
      </div>
    </motion.div>
  );
}

export default function BoundaryBarriers() {
  const navigate = useNavigate();
  const total = BARRIERS.length;
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Choice>>({});
  const [history, setHistory] = useState<Array<{ id: string; choice: Choice }>>([]);
  const current = useMemo(() => BARRIERS[index], [index]);
  const completedCount = Object.keys(answers).length;
  const progressPct = total === 0 ? 0 : (completedCount / total) * 100;

  function decide(choice: Choice) {
    if (!current) return;
    const id = current.id;
    setAnswers((prev) => ({ ...prev, [id]: choice }));
    setHistory((prev) => [...prev, { id, choice }]);
    // Move to next card
    setIndex((i) => Math.min(i + 1, total));
  }

  function undo() {
    const last = history[history.length - 1];
    if (!last) return;
    setHistory((prev) => prev.slice(0, -1));
    setAnswers((prev) => {
      const next = { ...prev };
      delete next[last.id];
      return next;
    });
    // Rewind to the card we just removed.
    const rewindTo = BARRIERS.findIndex((b) => b.id === last.id);
    setIndex(rewindTo >= 0 ? rewindTo : Math.max(index - 1, 0));
  }

  // Keyboard support (desktop)
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (index >= total) return;
      if (e.key === "ArrowLeft") decide("pass");
      if (e.key === "ArrowRight") decide("resonates");
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z") undo();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, total, current, history]);

  const done = index >= total;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top header */}
      <div className="mx-auto max-w-4xl px-4 pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-slate-900 text-white shadow-sm hover:opacity-90"
              aria-label="Back"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div>
              <div className="text-2xl font-extrabold text-slate-900 leading-tight">
                Boundary Barriers
              </div>
              <div className="text-sm text-slate-600">Discover what gets in the way</div>
            </div>
          </div>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            My Account <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Progress */}
        <div className="mt-6 rounded-2xl bg-white border border-slate-200 p-4">
          <div className="flex items-center justify-between">
            <div className="font-semibold text-slate-900">
              What gets in the way of setting boundaries?
            </div>
            <div className="text-sm text-slate-600 tabular-nums">
              {Math.min(completedCount + (done ? 0 : 1), total)} of {total}
            </div>
          </div>
          <div className="mt-3">
            <ProgressBar value={progressPct} />
          </div>
        </div>
      </div>

      {/* Card area */}
      <div className="mx-auto max-w-4xl px-4 pb-28 pt-6">
        <div className="relative mx-auto h-[420px] w-full max-w-[640px]">
          <AnimatePresence>
            {!done && current && (
              <motion.div
                key={current.id}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: 10 }}
                transition={{ duration: 0.18 }}
              >
                {/* subtle stacked card behind */}
                <div className="absolute inset-0 translate-y-2 scale-[0.985] rounded-3xl bg-white/40 border border-slate-200 shadow-sm" />
                <SwipeCard barrier={current} onDecision={decide} />
              </motion.div>
            )}
          </AnimatePresence>

          {done && (
            <div className="h-full w-full rounded-3xl bg-white border border-slate-200 p-7 shadow-sm">
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold text-white"
                style={{ background: "linear-gradient(90deg, var(--color-teal), var(--color-purple))" }}
              >
                <Heart className="h-4 w-4" />
                Completed
              </div>
              <h2 className="mt-4 text-2xl font-bold text-slate-900">You're done.</h2>
              <p className="mt-2 text-slate-700">
                Next: show a tailored summary (e.g., top resonating barriers + suggested strategies).
              </p>
              <pre className="mt-5 rounded-2xl bg-slate-50 border border-slate-200 p-4 text-xs text-slate-700 overflow-auto">
{JSON.stringify(answers, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>

      {/* Sticky actions */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-slate-200 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto max-w-4xl px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={undo}
              disabled={history.length === 0}
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold border border-slate-200 bg-white text-slate-700 disabled:opacity-40"
            >
              <RotateCcw className="h-4 w-4" />
              Undo
            </button>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => !done && decide("pass")}
                disabled={done}
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm disabled:opacity-40"
                style={{ backgroundColor: "var(--color-coral-pink)" }}
              >
                <X className="h-5 w-5" />
                Pass
              </button>
              <button
                type="button"
                onClick={() => !done && decide("resonates")}
                disabled={done}
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm disabled:opacity-40"
                style={{ backgroundColor: "var(--color-teal)" }}
              >
                <Heart className="h-5 w-5" />
                Resonates
              </button>
            </div>
          </div>
          <div className="mt-2 text-xs text-slate-500">
            Keyboard: Left/Right arrows to choose • Ctrl/Cmd+Z to undo
          </div>
        </div>
      </div>
    </div>
  );
}
