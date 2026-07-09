import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Smile,
  ShieldAlert,
  CloudRain,
  Compass,
  EyeOff,
  Flame,
  Tape,
  Megaphone,
  ShieldCheck,
  RotateCcw,
  Check,
} from "lucide-react";
import Layout from "@/components/Layout";

type ToolId = "duct-tape" | "megaphone" | "shock-absorber";
type Step = "intro" | "assessment" | "results";

const EMOTIONS = [
  { id: "joy", label: "Joy", icon: Smile },
  { id: "fear", label: "Fear", icon: ShieldAlert },
  { id: "sadness", label: "Sadness", icon: CloudRain },
  { id: "curiosity", label: "Curiosity", icon: Compass },
  { id: "shame", label: "Shame", icon: EyeOff },
  { id: "anger", label: "Anger", icon: Flame },
] as const;

type EmotionId = (typeof EMOTIONS)[number]["id"];

const TOOLS: {
  id: ToolId;
  name: string;
  tag: string;
  description: string;
  icon: typeof Tape;
  tint: "pink" | "mint" | "teal";
}[] = [
  {
    id: "duct-tape",
    name: "The Duct Tape",
    tag: "Dismissed",
    description:
      "They dismissed, minimized, or ignored the feeling (e.g., \"Stop crying\", \"You're fine\").",
    icon: Tape,
    tint: "pink",
  },
  {
    id: "megaphone",
    name: "The Megaphone",
    tag: "Escalated",
    description:
      "They absorbed the feeling and escalated. My anxiety made them panic; my anger made them furious.",
    icon: Megaphone,
    tint: "mint",
  },
  {
    id: "shock-absorber",
    name: "The Shock Absorber",
    tag: "Contained",
    description:
      "They stayed grounded, didn't take it personally, and helped me organize and regulate the feeling.",
    icon: ShieldCheck,
    tint: "teal",
  },
];

const REPORT: Record<ToolId, (emotion: string) => { title: string; body: string }> = {
  "duct-tape": (e) => ({
    title: `When your child feels ${e}...`,
    body: `...your inherited reflex is to use Duct Tape. Because your feelings were dismissed, your instinct is to quickly quiet, fix, or ignore your child's ${e} to make the discomfort go away. This can leave you feeling frustrated when they won't "just get over it", and can leave them feeling unseen.`,
  }),
  megaphone: (e) => ({
    title: `When your child feels ${e}...`,
    body: `...your inherited reflex is to grab the Megaphone. Because your feelings escalated the adults around you, your nervous system treats your child's ${e} as an emergency. You might find yourself matching their intensity, leading to chaotic and exhausting power struggles.`,
  }),
  "shock-absorber": (e) => ({
    title: `When your child feels ${e}...`,
    body: `...you have a built-in Shock Absorber. Because you were supported in this feeling, you have the capacity to stay grounded. You are able to be a safe, sturdy anchor for your child without taking their behavior personally.`,
  }),
};

const tintClasses = {
  pink: {
    bg: "bg-[hsl(var(--pink-soft))]",
    ring: "ring-[hsl(var(--pink-accent))]",
    iconBg: "bg-[hsl(var(--pink))]",
    iconText: "text-[hsl(var(--deep-teal))]",
    chip: "bg-[hsl(var(--pink))] text-[hsl(var(--deep-teal))]",
  },
  mint: {
    bg: "bg-[hsl(var(--mint-soft))]",
    ring: "ring-[hsl(var(--mint))]",
    iconBg: "bg-[hsl(var(--mint))]",
    iconText: "text-[hsl(var(--deep-teal))]",
    chip: "bg-[hsl(var(--mint))] text-[hsl(var(--deep-teal))]",
  },
  teal: {
    bg: "bg-white",
    ring: "ring-[hsl(var(--deep-teal))]",
    iconBg: "bg-[hsl(var(--deep-teal))]",
    iconText: "text-white",
    chip: "bg-[hsl(var(--deep-teal))] text-white",
  },
};

export default function HandMeDownToolbox() {
  const [step, setStep] = useState<Step>("intro");
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Partial<Record<EmotionId, ToolId>>>({});
  const [pending, setPending] = useState<ToolId | null>(null);

  const current = EMOTIONS[idx];
  const total = EMOTIONS.length;
  const progress = ((idx + (pending ? 1 : 0)) / total) * 100;

  const handleNext = () => {
    if (!pending) return;
    const newAnswers = { ...answers, [current.id]: pending };
    setAnswers(newAnswers);
    setPending(null);
    if (idx + 1 >= total) {
      setStep("results");
    } else {
      setIdx(idx + 1);
    }
  };

  const handleBack = () => {
    if (idx === 0) return;
    const prev = EMOTIONS[idx - 1];
    setPending(answers[prev.id] ?? null);
    setIdx(idx - 1);
  };

  const restart = () => {
    setStep("intro");
    setIdx(0);
    setAnswers({});
    setPending(null);
  };

  return (
    <Layout currentPageName="Hand-Me-Down Toolbox">
      <div className="min-h-screen bg-background pb-24">
        {/* Decorative background blobs */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] overflow-hidden">
          <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-[hsl(var(--pink-soft))] blur-3xl opacity-70" />
          <div className="absolute -top-16 right-[-60px] h-80 w-80 rounded-full bg-[hsl(var(--mint-soft))] blur-3xl opacity-80" />
        </div>

        <div className="relative mx-auto max-w-xl px-4 pt-6 md:px-6 md:pt-10">
          <Link
            to="/emotional-toolbox"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/60 hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>

          <AnimatePresence mode="wait">
            {step === "intro" && <Intro key="intro" onStart={() => setStep("assessment")} />}

            {step === "assessment" && (
              <Assessment
                key={`a-${current.id}`}
                emotion={current}
                idx={idx}
                total={total}
                progress={progress}
                selected={pending}
                onSelect={setPending}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}

            {step === "results" && (
              <Results key="results" answers={answers as Record<EmotionId, ToolId>} onRestart={restart} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </Layout>
  );
}

/* ── Intro ── */
function Intro({ onStart }: { onStart: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35 }}
      className="card-clay overflow-hidden relative"
    >
      <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[hsl(var(--pink-soft))] opacity-70" />
      <div className="absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-[hsl(var(--mint-soft))] opacity-70" />

      <div className="relative">
        <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--pink-soft))] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[hsl(var(--deep-teal))]">
          <Sparkles className="h-3.5 w-3.5" />
          A gentle self-inventory
        </div>

        <h1 className="mt-4 text-3xl md:text-4xl font-black tracking-tight text-foreground leading-tight">
          Your Hand-Me-Down<br />Toolbox
        </h1>

        <p className="mt-4 text-base md:text-lg text-foreground/70 leading-relaxed">
          When we are born, our emotional toolbox is empty. We rely on our
          caregivers to stock it for us. Let's look at what tools you were
          handed for each feeling.
        </p>

        <div className="mt-6 grid grid-cols-3 gap-2">
          {TOOLS.map((t) => {
            const T = tintClasses[t.tint];
            const Icon = t.icon;
            return (
              <div
                key={t.id}
                className={`rounded-2xl p-3 flex flex-col items-center gap-2 ${T.bg}`}
              >
                <div className={`h-9 w-9 rounded-xl flex items-center justify-center ${T.iconBg}`}>
                  <Icon className={`h-4 w-4 ${T.iconText}`} />
                </div>
                <p className="text-[11px] font-bold text-center text-foreground/80 leading-tight">
                  {t.name.replace("The ", "")}
                </p>
              </div>
            );
          })}
        </div>

        <button
          onClick={onStart}
          className="mt-7 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[hsl(var(--deep-teal))] px-6 py-4 text-base font-bold text-white shadow-clay-sm transition-transform active:scale-[0.98] hover:-translate-y-0.5"
        >
          Start Inventory
          <ArrowRight className="h-4 w-4" />
        </button>

        <p className="mt-4 text-xs text-center text-foreground/50">
          Takes about 2 minutes · Shame-free zone
        </p>
      </div>
    </motion.div>
  );
}

/* ── Assessment ── */
function Assessment({
  emotion,
  idx,
  total,
  progress,
  selected,
  onSelect,
  onNext,
  onBack,
}: {
  emotion: (typeof EMOTIONS)[number];
  idx: number;
  total: number;
  progress: number;
  selected: ToolId | null;
  onSelect: (t: ToolId) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const EmoIcon = emotion.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.3 }}
      className="space-y-5"
    >
      {/* Progress */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-foreground/50">
            Emotion {idx + 1} of {total}
          </span>
          <span className="text-xs font-bold text-foreground/50">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-2 rounded-full bg-white shadow-inner overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[hsl(var(--pink))] to-[hsl(var(--deep-teal))]"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      {/* Emotion card */}
      <div className="card-clay text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[hsl(var(--pink-soft))]">
          <EmoIcon className="h-7 w-7 text-[hsl(var(--deep-teal))]" />
        </div>
        <p className="text-xs font-bold uppercase tracking-wider text-foreground/50">
          When you felt
        </p>
        <h2 className="mt-1 text-4xl md:text-5xl font-black text-foreground">
          {emotion.label}
        </h2>
        <p className="mt-3 text-sm md:text-base text-foreground/70 max-w-sm mx-auto">
          as a child, how did your caregivers usually react?
        </p>
      </div>

      {/* Tools */}
      <div className="space-y-3">
        {TOOLS.map((tool) => {
          const T = tintClasses[tool.tint];
          const Icon = tool.icon;
          const isSel = selected === tool.id;
          return (
            <motion.button
              key={tool.id}
              type="button"
              onClick={() => onSelect(tool.id)}
              whileTap={{ scale: 0.98 }}
              className={`w-full text-left rounded-[24px] p-5 transition-all ${T.bg} ${
                isSel
                  ? `ring-2 ${T.ring} shadow-clay-lg -translate-y-0.5`
                  : "shadow-clay-sm hover:shadow-clay hover:-translate-y-0.5"
              }`}
              style={{ border: "1px solid var(--border-raw)" }}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`h-12 w-12 flex-shrink-0 rounded-2xl flex items-center justify-center ${T.iconBg}`}
                >
                  <Icon className={`h-5 w-5 ${T.iconText}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base font-black text-foreground">
                      {tool.name}
                    </h3>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${T.chip}`}>
                      {tool.tag}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-foreground/70 leading-relaxed">
                    {tool.description}
                  </p>
                </div>
                <div
                  className={`h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                    isSel
                      ? "bg-[hsl(var(--deep-teal))] scale-100"
                      : "bg-white/60 scale-90"
                  }`}
                >
                  {isSel && <Check className="h-3.5 w-3.5 text-white" />}
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Nav */}
      <div className="flex items-center gap-3 pt-2">
        <button
          onClick={onBack}
          disabled={idx === 0}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-bold text-foreground shadow-clay-sm disabled:opacity-40 disabled:cursor-not-allowed transition-transform active:scale-[0.98]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!selected}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-[hsl(var(--deep-teal))] px-6 py-4 text-base font-bold text-white shadow-clay-sm disabled:opacity-40 disabled:cursor-not-allowed transition-transform active:scale-[0.98] hover:-translate-y-0.5"
        >
          {idx + 1 === total ? "See My Blueprint" : "Next"}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
}

/* ── Results ── */
function Results({
  answers,
  onRestart,
}: {
  answers: Record<EmotionId, ToolId>;
  onRestart: () => void;
}) {
  const counts = { "duct-tape": 0, megaphone: 0, "shock-absorber": 0 } as Record<ToolId, number>;
  EMOTIONS.forEach((e) => {
    const a = answers[e.id];
    if (a) counts[a]++;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35 }}
      className="space-y-5"
    >
      {/* Header */}
      <div className="card-clay-slate relative overflow-hidden">
        <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[hsl(var(--pink))] opacity-30 blur-2xl" />
        <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-[hsl(var(--mint))] opacity-20 blur-2xl" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
            <Sparkles className="h-3.5 w-3.5" />
            Your Report
          </div>
          <h1 className="mt-4 text-3xl md:text-4xl font-black text-white leading-tight">
            Your Parenting<br />Blueprint
          </h1>
          <p className="mt-4 text-sm md:text-base text-white/80 leading-relaxed">
            You can only parent with the tools you were given. Here is how your
            inherited toolbox is likely showing up in your home today:
          </p>

          {/* Tool tally */}
          <div className="mt-5 grid grid-cols-3 gap-2">
            {TOOLS.map((t) => {
              const Icon = t.icon;
              return (
                <div key={t.id} className="rounded-2xl bg-white/10 p-3 text-center">
                  <div className="mx-auto mb-1.5 flex h-8 w-8 items-center justify-center rounded-xl bg-white/15">
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-2xl font-black text-white">{counts[t.id]}</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-white/70">
                    {t.name.replace("The ", "")}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Per-emotion reports */}
      <div className="space-y-3">
        {EMOTIONS.map((emotion, i) => {
          const toolId = answers[emotion.id];
          if (!toolId) return null;
          const tool = TOOLS.find((t) => t.id === toolId)!;
          const T = tintClasses[tool.tint];
          const EmoIcon = emotion.icon;
          const ToolIcon = tool.icon;
          const report = REPORT[toolId](emotion.label.toLowerCase());

          return (
            <motion.div
              key={emotion.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className={`rounded-[24px] p-5 ${T.bg} shadow-clay-sm`}
              style={{ border: "1px solid var(--border-raw)" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-2xl bg-white flex items-center justify-center shadow-clay-sm">
                  <EmoIcon className="h-5 w-5 text-[hsl(var(--deep-teal))]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-foreground/50">
                    {emotion.label}
                  </p>
                  <div className="flex items-center gap-1.5">
                    <ToolIcon className="h-3.5 w-3.5 text-foreground/70" />
                    <p className="text-sm font-bold text-foreground">
                      {tool.name}
                    </p>
                  </div>
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${T.chip}`}>
                  {tool.tag}
                </span>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">
                <span className="font-bold">{report.title}</span> {report.body.replace(/^\.\.\./, "…")}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Closing */}
      <div className="card-clay-peach">
        <p className="text-sm md:text-base text-foreground/85 leading-relaxed">
          If you found yourself relying on <span className="font-bold">duct tape</span> and{" "}
          <span className="font-bold">megaphones</span>, it's no wonder your child's big feelings
          can feel exhausting! You aren't failing—you're just missing a tool.{" "}
          <span className="font-bold">The good news? You can always go to the hardware store.</span>
        </p>
      </div>

      <div className="space-y-3">
        <Link
          to="/learn"
          className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[hsl(var(--deep-teal))] px-6 py-4 text-base font-bold text-white shadow-clay-sm transition-transform active:scale-[0.98] hover:-translate-y-0.5"
        >
          Go to the Hardware Store
          <ArrowRight className="h-4 w-4" />
        </Link>
        <button
          onClick={onRestart}
          className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-bold text-foreground shadow-clay-sm transition-transform active:scale-[0.98]"
        >
          <RotateCcw className="h-4 w-4" />
          Take Again
        </button>
      </div>
    </motion.div>
  );
}
