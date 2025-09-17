import React, { useMemo, useState } from "react";
import Layout from '@/components/Layout';

/** ---------- Core Types ---------- */
type Emotion =
  | "joy"
  | "sadness"
  | "anger"
  | "fear"
  | "shame"
  | "curiosity";

type InOut = "in" | "out";

type AgeBand =
  | "0-2"
  | "3-5"
  | "6-8"
  | "9-12"
  | "13-15"
  | "16-18";

type BehaviourGuide = {
  behaviour: string;
  quickExplain: string;          // plain-English meaning for parents
  coreSteps: string[];           // always helpful
  emotionSensitiveTweaks: Partial<Record<Emotion, string[]>>; // shown if that emotion = "out"
};

type AgeBandGuides = Record<AgeBand, BehaviourGuide[]>;

/** ---------- Config: Emotions & Psychoeducation ---------- */
const EMOTIONS: Emotion[] = ["joy", "sadness", "anger", "fear", "shame", "curiosity"];

const EMOTION_LABEL: Record<Emotion, string> = {
  joy: "Joy",
  sadness: "Sadness",
  anger: "Anger",
  fear: "Fear",
  shame: "Shame",
  curiosity: "Curiosity",
};

const EMOTION_PSYCHOED: Record<
  Emotion,
  { inMessage: string; outMessage: string; parentingImplication: string }
> = {
  joy: {
    inMessage:
      "You likely amplify your child's positive feelings and allow shared delight without needing to 'tone it down'.",
    outMessage:
      "Joy may have been muted or conditional; you might struggle to relax into play, silliness, or celebration.",
    parentingImplication:
      "Work on noticing and mirroring small moments of delight—name them and let them linger.",
  },
  sadness: {
    inMessage:
      "You can sit with tears and loss without rushing to fix, distract, or minimize.",
    outMessage:
      "Sadness might feel heavy or inconvenient; you may push for 'cheer up' quickly.",
    parentingImplication:
      "Practice 'being with' sadness: soft voice, slower pace, and simple reflections like 'This really hurts.'",
  },
  anger: {
    inMessage:
      "You can acknowledge protest and boundary-testing while holding safe limits.",
    outMessage:
      "Anger may feel dangerous or disrespectful; you might clamp down or avoid it.",
    parentingImplication:
      "Validate the feeling and separate it from behaviour: 'Anger is ok. Hitting isn't. I'll help you be safe.'",
  },
  fear: {
    inMessage:
      "You recognise fear signals and offer protection and gradual bravery, not forced exposure.",
    outMessage:
      "Fear may be dismissed as 'overreacting', or you feel pulled into over-reassurance.",
    parentingImplication:
      "Name fear early, co-regulate, and scaffold small steps toward safety and courage.",
  },
  shame: {
    inMessage:
      "You can meet shame with warmth and repair rather than lectures or withdrawal.",
    outMessage:
      "Shame might trigger you to correct quickly or pull away; perfectionism can show up.",
    parentingImplication:
      "Use de-shaming language: 'You're still a good kid when you make mistakes. We can fix this together.'",
  },
  curiosity: {
    inMessage:
      "You invite questions and exploration, tolerating mess, uncertainty, and 'why?'",
    outMessage:
      "Curiosity may have been discouraged; you might rush to answers or shut down meandering.",
    parentingImplication:
      "Try open questions and wonder aloud: 'I'm curious too—what do you think is happening?'",
  },
};

/** ---------- Behaviour Guides by Age (compact but comprehensive scaffold) ---------- */
const GUIDES: AgeBandGuides = {
  "0-2": [
    {
      behaviour: "Tantrum (overwhelm, transitions)",
      quickExplain: "Nervous system floods fast; needs co-regulation and predictability.",
      coreSteps: [
        "Soften face/voice; hold a calm, steady presence.",
        "Reduce input (lights/noise), offer physical comfort if welcomed.",
        "Narrate simply: 'Too much. I'm here.'",
      ],
      emotionSensitiveTweaks: {
        anger: ["Validate protest: 'You wanted that. It's hard when it's no.'"],
        fear: ["Use anchor words: 'Safe. With me.' Slow rocking / rhythmic breath."],
        shame: ["Avoid 'naughty'; focus on safety and needs instead."],
      },
    },
    {
      behaviour: "Separation distress",
      quickExplain: "Attachment alarm; needs predictable goodbye rituals.",
      coreSteps: [
        "Short, consistent ritual (song, kiss, hand squeeze).",
        "Name return time in toddler terms ('after snack').",
        "Hand-over to trusted adult with warmth, not sneaking away.",
      ],
      emotionSensitiveTweaks: {
        fear: ["Transitional object; photo or scarf with your scent."],
        sadness: ["Reflect feeling: 'Missing mum is hard. Your tears make sense.'"],
      },
    },
  ],
  "3-5": [
    {
      behaviour: "Hitting/biting in conflict",
      quickExplain: "Impulse > skill. Co-regulate, then teach.",
      coreSteps: [
        "Block safely: 'I won't let you hit.'",
        "Name feeling; state limit; offer alternative action.",
        "Repair coaching: check-in with the other child when calm.",
      ],
      emotionSensitiveTweaks: {
        anger: ["'Anger is ok—hands stay gentle. Stomp here / squeeze pillow.'"],
        shame: ["Praise specific effort in repair, not global traits."],
      },
    },
    {
      behaviour: "Bedtime resistance",
      quickExplain: "Body/brain not ready or separation worry.",
      coreSteps: [
        "Wind-down routine: predictable, visual steps.",
        "Co-regulate (story, breath, body scan).",
        "Gradual retreat if needed; return gently on call-outs.",
      ],
      emotionSensitiveTweaks: {
        fear: ["Add safety cues: night light, door ajar, parent voice check-ins."],
        curiosity: ["Use a 'wonder time' jar before lights out to honour questions."],
      },
    },
  ],
  "6-8": [
    {
      behaviour: "School refusal (mild)",
      quickExplain: "Avoidance loop; needs safety + small steps.",
      coreSteps: [
        "Collaborative plan with teacher; predictable mornings.",
        "Scale worries (0-10); plan 'one step braver'.",
        "Celebrate effort over outcome; quick goodbyes.",
      ],
      emotionSensitiveTweaks: {
        fear: ["Body anchors (breath, sensory tool); rehearsal walk-throughs."],
        shame: ["Normalize setbacks; externalize the 'Worry Bully'."],
      },
    },
    {
      behaviour: "Sass/backtalk",
      quickExplain: "Boundary-testing + language leap.",
      coreSteps: [
        "Acknowledge message behind tone; restate limit.",
        "Offer redo: 'Try that again with respectful words.'",
        "Follow through calmly; reconnect later.",
      ],
      emotionSensitiveTweaks: {
        anger: ["Teach 'I-statements' + movement outlets before talks."],
        joy: ["Catch respectful bids and amplify them with positive attention."],
      },
    },
  ],
  "9-12": [
    {
      behaviour: "Lying (low-stakes)",
      quickExplain: "Avoiding trouble/shame; protect relationship + truth.",
      coreSteps: [
        "Stay curious, not cornering: 'Help me understand what happened.'",
        "Emphasize repair over punishment; set clear expectations.",
        "Model truth-telling; reinforce honesty moments.",
      ],
      emotionSensitiveTweaks: {
        shame: ["Lead with connection first; name courage to correct mistakes."],
        fear: ["De-threaten: clear, known consequences; predictable repair steps."],
      },
    },
    {
      behaviour: "Tech meltdowns/limits",
      quickExplain: "Dopamine cliffs + transitions.",
      coreSteps: [
        "Visual timers; staged warnings; after-screen ritual (movement/snack).",
        "Limits set when calm; involve child in creating rules.",
        "Natural consequences; opportunities to earn back trust.",
      ],
      emotionSensitiveTweaks: {
        anger: ["Pre-plan a protest script + movement break on switch-off."],
        curiosity: ["Offer compelling off-screen 'quests' to satisfy seeking system."],
      },
    },
  ],
  "13-15": [
    {
      behaviour: "Explosive arguments",
      quickExplain: "Identity push + stress; needs containment + voice.",
      coreSteps: [
        "State the boundary + the value: 'Respect matters. Take 10.'",
        "Pause and reconvene; use problem-solving template.",
        "Repair rituals; name mutual wins.",
      ],
      emotionSensitiveTweaks: {
        anger: ["Channel to action plan first; then discuss meaning."],
        shame: ["Avoid character labels; focus on episode, not identity."],
      },
    },
    {
      behaviour: "Risky peer influence",
      quickExplain: "Belonging drive; coach discernment + exit plans.",
      coreSteps: [
        "Scenario rehearsals; code words for pickup.",
        "Values clarification; 'most-kids' norming data.",
        "Non-panicky debriefs after incidents.",
      ],
      emotionSensitiveTweaks: {
        fear: ["Rehearse say-no scripts; safe-adult maps and micro-choices."],
        curiosity: ["Offer healthy novelty (sport, maker projects, adventures)."],
      },
    },
  ],
  "16-18": [
    {
      behaviour: "Withdrawing/shutting down",
      quickExplain: "Overwhelm or shame; needs safe approach + choice.",
      coreSteps: [
        "Low-demand check-ins ('walk/drive talk?').",
        "Offer choices about when/how to talk; leave door open.",
        "Reflect strengths; collaborate on next small step.",
      ],
      emotionSensitiveTweaks: {
        shame: ["Lead with unconditional regard; share your own repair stories."],
        sadness: ["Invite grief language; link to meaning and supports."],
      },
    },
    {
      behaviour: "Boundary violations (curfew, substances)",
      quickExplain: "Autonomy surge; keep safety + consequences predictable.",
      coreSteps: [
        "Pre-agreed rules & consequences; review when calm.",
        "Risk-reduction plans (mates, transport, check-ins).",
        "Rebuild trust via consistent follow-through + repair.",
      ],
      emotionSensitiveTweaks: {
        anger: ["De-personalise enforcement; reflect fairness and firmness."],
        fear: ["Clarify safety nets and your availability without panic."],
      },
    },
  ],
};

/** ---------- Summary Generator ---------- */
function generateSummary(state: Record<Emotion, InOut>) {
  const inList = EMOTIONS.filter((e) => state[e] === "in");
  const outList = EMOTIONS.filter((e) => state[e] === "out");

  const strengths = inList.map(
    (e) => `• ${EMOTION_LABEL[e]}: ${EMOTION_PSYCHOED[e].inMessage}`
  );

  const edges = outList.map(
    (e) => `• ${EMOTION_LABEL[e]}: ${EMOTION_PSYCHOED[e].outMessage}`
  );

  const implications = outList.map(
    (e) => `• ${EMOTION_LABEL[e]}: ${EMOTION_PSYCHOED[e].parentingImplication}`
  );

  const overview =
    outList.length === 0
      ? "You were broadly 'met' across emotions in childhood. Expect solid co-regulation capacity and flexibility under stress."
      : outList.length >= 4
      ? "Several emotions were likely hard to bring to caregivers. Expect hot-spots under stress; anchor in co-regulation skills and repair rituals."
      : "Some emotions were harder to bring to caregivers. Expect specific triggers; target practice on those feelings while using your existing strengths.";

  return {
    overview,
    strengths,
    growthEdges: edges,
    parentingImplications: implications,
  };
}

/** ---------- Helpers: Tailored Behaviour Strategies ---------- */
function getTailoredStrategiesFor(
  band: AgeBand,
  state: Record<Emotion, InOut>
) {
  const items = GUIDES[band];
  const tailored = items.map((g) => {
    const tweaks: string[] = [];
    for (const e of EMOTIONS) {
      if (state[e] === "out" && g.emotionSensitiveTweaks[e]) {
        tweaks.push(...(g.emotionSensitiveTweaks[e] as string[]));
      }
    }
    return { ...g, tweaks };
  });
  return tailored;
}

/** ---------- Main Component ---------- */
export default function BeingWithExercisePage() {
  const [motherName, setMotherName] = useState<string>("");
  const [state, setState] = useState<Record<Emotion, InOut>>({
    joy: "in",
    sadness: "in",
    anger: "in",
    fear: "in",
    shame: "in",
    curiosity: "in",
  });

  const [ageBand, setAgeBand] = useState<AgeBand>("3-5");

  const summary = useMemo(() => generateSummary(state), [state]);
  const tailoredGuides = useMemo(
    () => getTailoredStrategiesFor(ageBand, state),
    [ageBand, state]
  );

  return (
    <Layout currentPageName="Being With Exercise">
      <div className="min-h-screen bg-background p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-ink tracking-tight mb-4">
              Being With Exercise
            </h1>
            <p className="text-lg text-muted">
              Understand your emotional patterns and get personalized parenting guidance.
            </p>
          </div>

          <div className="space-y-8">
            {/* Input Section */}
            <div className="bg-card p-6 rounded-lg border">
              <label className="block text-ink font-medium mb-2">
                Put your primary childhood attachment figure's name here (e.g., mother):
              </label>
              <input
                value={motherName}
                onChange={(e) => setMotherName(e.target.value)}
                placeholder="Name"
                className="w-full p-3 border border-border rounded-md bg-background text-ink focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Emotion Selector */}
            <div className="bg-card p-6 rounded-lg border">
              <h2 className="text-2xl font-bold text-ink mb-4">
                Emotional Patterns
              </h2>
              <p className="text-muted mb-6">
                Click each emotion to indicate whether it was "IN" (welcomed/accepted) or "OUT" (discouraged/unwelcome) in your childhood.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {EMOTIONS.map((e) => {
                  const isIn = state[e] === "in";
                  return (
                    <button
                      key={e}
                      onClick={() =>
                        setState((prev) => ({ ...prev, [e]: prev[e] === "in" ? "out" : "in" }))
                      }
                      className={`h-24 rounded-full border-2 border-ink font-bold text-white transition-all duration-200 hover:scale-105 ${
                        isIn 
                          ? "bg-green-600 shadow-lg shadow-green-200" 
                          : "bg-red-600 shadow-lg shadow-red-200"
                      }`}
                      title={`${EMOTION_LABEL[e]}: currently ${isIn ? "IN" : "OUT"} - click to toggle`}
                    >
                      {EMOTION_LABEL[e]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Pattern Summary */}
            <div className="bg-card p-6 rounded-lg border">
              <h2 className="text-2xl font-bold text-ink mb-4">Your Pattern</h2>
              
              <div className="space-y-4">
                {motherName && (
                  <p className="text-ink">
                    <span className="font-medium">Attachment figure:</span> {motherName}
                  </p>
                )}
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-800 mb-2">In (green):</h3>
                    <p className="text-green-700">
                      {EMOTIONS.filter((e) => state[e] === "in")
                        .map((e) => EMOTION_LABEL[e])
                        .join(", ") || "—"}
                    </p>
                  </div>
                  
                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <h3 className="font-semibold text-red-800 mb-2">Out (red):</h3>
                    <p className="text-red-700">
                      {EMOTIONS.filter((e) => state[e] === "out")
                        .map((e) => EMOTION_LABEL[e])
                        .join(", ") || "—"}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-ink mb-2">Overview</h3>
                    <p className="text-muted">{summary.overview}</p>
                  </div>

                  {summary.strengths.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-ink mb-2">Strengths to Lean On</h3>
                      <ul className="space-y-1 text-muted">
                        {summary.strengths.map((s, i) => (
                          <li key={i} className="text-sm">{s}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {summary.growthEdges.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-ink mb-2">Growth Edges</h3>
                      <ul className="space-y-1 text-muted">
                        {summary.growthEdges.map((s, i) => (
                          <li key={i} className="text-sm">{s}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {summary.parentingImplications.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-ink mb-2">Parenting: Where to Focus</h3>
                      <ul className="space-y-1 text-muted">
                        {summary.parentingImplications.map((s, i) => (
                          <li key={i} className="text-sm">{s}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Behaviour Guides */}
            <div className="bg-card p-6 rounded-lg border">
              <h2 className="text-2xl font-bold text-ink mb-4">Behaviour Guides</h2>

              <div className="mb-6">
                <label className="block font-semibold text-ink mb-2">Age band:</label>
                <select
                  value={ageBand}
                  onChange={(e) => setAgeBand(e.target.value as AgeBand)}
                  className="p-3 border border-border rounded-md bg-background text-ink focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="0-2">0–2</option>
                  <option value="3-5">3–5</option>
                  <option value="6-8">6–8</option>
                  <option value="9-12">9–12</option>
                  <option value="13-15">13–15</option>
                  <option value="16-18">16–18</option>
                </select>
              </div>

              <div className="space-y-6">
                {tailoredGuides.map((g, idx) => (
                  <div key={idx} className="p-6 border border-border rounded-lg bg-background">
                    <h3 className="font-bold text-lg text-ink mb-2">{g.behaviour}</h3>
                    <p className="italic text-muted mb-4">{g.quickExplain}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-ink mb-2">Core steps</h4>
                      <ul className="space-y-1 text-muted list-disc list-inside">
                        {g.coreSteps.map((s, i) => (
                          <li key={i} className="text-sm">{s}</li>
                        ))}
                      </ul>
                    </div>
                    
                    {g.tweaks.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-ink mb-2">
                          Extra tweaks (based on your "out" emotions)
                        </h4>
                        <ul className="space-y-1 text-muted list-disc list-inside">
                          {g.tweaks.map((t, i) => (
                            <li key={i} className="text-sm">{t}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <ExportBlock state={state} motherName={motherName} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

/** ---------- Export helper (for saving/analytics) ---------- */
function ExportBlock({
  state,
  motherName,
}: {
  state: Record<Emotion, InOut>;
  motherName: string;
}) {
  const payload = useMemo(
    () => ({
      attachmentFigure: motherName || null,
      emotions: state,
      timestamp: new Date().toISOString(),
    }),
    [motherName, state]
  );

  return (
    <div className="bg-card p-6 rounded-lg border">
      <h3 className="font-semibold text-ink mb-4">Export JSON</h3>
      <textarea
        readOnly
        value={JSON.stringify(payload, null, 2)}
        rows={8}
        className="w-full p-4 font-mono text-sm bg-background border border-border rounded-md text-ink"
      />
      <p className="text-muted text-sm mt-2">
        (Copy and save to your DB or analytics pipeline.)
      </p>
    </div>
  );
}