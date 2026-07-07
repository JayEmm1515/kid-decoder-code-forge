import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft, Heart, Frown, Angry, AlertTriangle, CircleOff, Lightbulb,
  RotateCcw, Check, ArrowRight, Sparkles
} from 'lucide-react';
import Layout from '@/components/Layout';

/* ---------------- Types & Data ---------------- */

type Emotion = 'joy' | 'sadness' | 'anger' | 'fear' | 'shame' | 'curiosity';
type Zone = 'in' | 'out' | 'unassigned';

const EMOTIONS: Emotion[] = ['joy', 'sadness', 'anger', 'fear', 'shame', 'curiosity'];

const EMOTION_LABELS: Record<Emotion, string> = {
  joy: 'Joy', sadness: 'Sadness', anger: 'Anger',
  fear: 'Fear', shame: 'Shame', curiosity: 'Curiosity',
};

const EMOTION_ICONS: Record<Emotion, React.ElementType> = {
  joy: Heart, sadness: Frown, anger: Angry,
  fear: AlertTriangle, shame: CircleOff, curiosity: Lightbulb,
};

const EMOTION_CONTENT: Record<Emotion, { strength: string; edge: string; parentingFocus: string; }> = {
  joy: {
    strength: "You can join and amplify positive moments, allowing shared delight without dampening it.",
    edge: "Joy may have felt muted or conditional; playful moments can be harder to relax into.",
    parentingFocus: "Name and linger with small sparks of delight; invite brief shared play each day.",
  },
  sadness: {
    strength: "You tolerate tears and loss without rushing to fix or distract.",
    edge: "Sadness may feel heavy or inconvenient; you may push for 'cheer up' quickly.",
    parentingFocus: "Use a soft voice and simple reflections: 'This really hurts. I'm here.'",
  },
  anger: {
    strength: "You acknowledge protest and hold firm, safe limits without retaliating.",
    edge: "Anger can feel risky or disrespectful; you may clamp down or avoid it.",
    parentingFocus: "Validate the feeling and separate it from behaviour: 'Anger's okay; hitting isn't.'",
  },
  fear: {
    strength: "You recognise fear signals and offer protection with gradual bravery.",
    edge: "Fear may be dismissed as overreacting or met with over-reassurance.",
    parentingFocus: "Name fear early, co-regulate, and scaffold small brave steps.",
  },
  shame: {
    strength: "You meet shame with warmth and repair rather than criticism or withdrawal.",
    edge: "Shame may trigger quick correction, distance, or perfectionistic pressure.",
    parentingFocus: "Use de-shaming language: 'You're a good kid who made a mistake. We can repair this.'",
  },
  curiosity: {
    strength: "You invite questions and exploration, tolerating mess and uncertainty.",
    edge: "Curiosity might have been discouraged; you may rush to answers or shut things down.",
    parentingFocus: "Ask open questions and wonder aloud: 'What do you think is happening?'",
  },
};

const PAIR_INSIGHTS: Record<string, string> = {
  "anger,fear": "Protest and vulnerability both feel hard. You may clamp down on behaviour while minimising worries. Children can bottle anxiety and frustration until it bursts.",
  "anger,joy": "Big energy — excitement or frustration — is hard to hold. Children may learn to stay small and contained.",
  "anger,sadness": "Both hot protest and low withdrawal feel overwhelming. Children may feel there's little space to bring the full range.",
  "anger,shame": "Conflict and mistakes are especially loaded. You may swing between over-control and withdrawal.",
  "anger,curiosity": "Any form of challenge — protest or questioning — feels threatening. Children may sense they must comply quietly.",
  "fear,joy": "High-arousal states are tricky whether thrilled or anxious. Children may dampen their energy to protect you.",
  "fear,sadness": "Your child's small, helpless moments are hardest to meet. They may cover pain with strength or humour.",
  "fear,shame": "Worries and mistakes trigger urgency or distance. Your child may feel unsafe admitting weakness.",
  "fear,curiosity": "New situations feel uncomfortable. You may prefer predictability, and children miss chances to safely experiment.",
  "joy,sadness": "Highs and lows are both restricted. Children may feel they must stay in the emotional middle.",
  "joy,shame": "Pride and mistakes both feel fraught. Children may not feel safe showing success or failure.",
  "joy,curiosity": "Play and exploration may feel wasteful. Children could grow cautious about both fun and wonder.",
  "sadness,shame": "Vulnerability and mistakes are hard to accept. Children may hide both pain and imperfection.",
  "sadness,curiosity": "Reflection and exploration feel unsafe. Children may avoid stretching inward or outward.",
  "shame,curiosity": "Self-expression feels risky in error or exploration. Children may grow cautious about standing out.",
};

/* ---------------- Component ---------------- */

export default function BeingWithExercise() {
  const [attachmentFigure, setAttachmentFigure] = useState('');
  const [zones, setZones] = useState<Record<Emotion, Zone>>(() => {
    const init = {} as Record<Emotion, Zone>;
    EMOTIONS.forEach(e => (init[e] = 'unassigned'));
    return init;
  });
  const [showReport, setShowReport] = useState(false);
  const [draggedEmotion, setDraggedEmotion] = useState<Emotion | null>(null);
  const [dragOver, setDragOver] = useState<Zone | null>(null);

  // Persist / restore
  useEffect(() => {
    const stored = localStorage.getItem('being-with-exercise-v2');
    if (stored) {
      try {
        const d = JSON.parse(stored);
        if (d.attachmentFigure) setAttachmentFigure(d.attachmentFigure);
        if (d.zones) setZones(d.zones);
        if (d.showReport) setShowReport(d.showReport);
      } catch {}
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('being-with-exercise-v2', JSON.stringify({ attachmentFigure, zones, showReport }));
  }, [attachmentFigure, zones, showReport]);

  const unassigned = EMOTIONS.filter(e => zones[e] === 'unassigned');
  const inEmotions = EMOTIONS.filter(e => zones[e] === 'in');
  const outEmotions = EMOTIONS.filter(e => zones[e] === 'out');
  const complete = unassigned.length === 0;
  const progress = Math.round(((EMOTIONS.length - unassigned.length) / EMOTIONS.length) * 100);

  const assign = (emotion: Emotion, zone: Zone) => {
    setZones(prev => ({ ...prev, [emotion]: zone }));
  };

  const resetExercise = () => {
    const init = {} as Record<Emotion, Zone>;
    EMOTIONS.forEach(e => (init[e] = 'unassigned'));
    setZones(init);
    setShowReport(false);
  };

  /* -------- Drag handlers (desktop enhancement) -------- */
  const onDragStart = (e: React.DragEvent, em: Emotion) => {
    setDraggedEmotion(em);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', em);
  };
  const onDragEnd = () => { setDraggedEmotion(null); setDragOver(null); };
  const onDragOver = (e: React.DragEvent, zone: Zone) => { e.preventDefault(); setDragOver(zone); };
  const onDrop = (e: React.DragEvent, zone: Zone) => {
    e.preventDefault();
    const em = e.dataTransfer.getData('text/plain') as Emotion;
    if (em && EMOTIONS.includes(em)) assign(em, zone);
    setDragOver(null); setDraggedEmotion(null);
  };

  /* ---------------- Report content ---------------- */
  const figure = attachmentFigure.trim() || 'your caregiver';

  const overview = useMemo(() => {
    if (outEmotions.length === 0) {
      return `${figure} appears to have met the full emotional range. You likely carry strong co-regulation capacity and can stay present with your child across highs and lows.`;
    }
    if (outEmotions.length >= 4) {
      return `Most emotions were hard to bring to ${figure}. Expect hot-spots when your child brings ${outEmotions.map(e => EMOTION_LABELS[e].toLowerCase()).join(', ')}. Prioritise co-regulation, small repairs, and being kind to yourself as you build tolerance.`;
    }
    return `${figure} met some feelings well but not all. Your growth edges are around ${outEmotions.map(e => EMOTION_LABELS[e].toLowerCase()).join(', ')}. Lean on your strengths (${inEmotions.map(e => EMOTION_LABELS[e].toLowerCase()).join(', ')}) while stretching where it's harder.`;
  }, [figure, outEmotions, inEmotions]);

  const pairInsight = useMemo(() => {
    if (outEmotions.length !== 2) return null;
    const key = [...outEmotions].sort().join(',');
    return PAIR_INSIGHTS[key] || null;
  }, [outEmotions]);

  /* ---------------- Render ---------------- */

  return (
    <Layout currentPageName="Being With Exercise">
      <div className="min-h-screen bg-airy p-4 md:p-8 pb-24">
        <div className="max-w-2xl mx-auto space-y-5">
          {/* Back */}
          <Link to="/emotional-toolbox"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-foreground hover:bg-foreground/10 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Back to Toolbox
          </Link>

          {/* Header */}
          <div className="glass-card p-6 md:p-8 text-center">
            <div className="icon-box icon-box-purple w-14 h-14 mx-auto mb-4">
              <Heart className="w-7 h-7 text-purple" strokeWidth={1.5} />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">Being With</h1>
            <p className="text-muted-foreground mt-2 text-sm md:text-base">
              For each feeling, decide whether your caregiver could <span className="text-teal font-medium">stay present with it (IN)</span> or
              <span className="text-pink font-medium"> struggled with it (OUT)</span>.
            </p>
          </div>

          {!showReport && (
            <>
              {/* Caregiver name */}
              <div className="glass-card p-5">
                <label className="block text-sm font-medium text-foreground/80 mb-2" htmlFor="attachment-figure">
                  Who are you thinking of? (e.g. Mum, Dad, Grandma)
                </label>
                <input
                  id="attachment-figure"
                  type="text"
                  value={attachmentFigure}
                  onChange={(e) => setAttachmentFigure(e.target.value)}
                  placeholder="Enter name..."
                  className="w-full px-4 py-3 rounded-xl bg-foreground/10 border border-foreground/20 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-teal/50"
                />
              </div>

              {/* Progress */}
              <div className="glass-card p-4">
                <div className="flex items-center justify-between mb-2 text-xs text-muted-foreground">
                  <span>{EMOTIONS.length - unassigned.length} of {EMOTIONS.length} assigned</span>
                  <span>{progress}%</span>
                </div>
                <div className="h-2 rounded-full bg-foreground/10 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-teal to-purple transition-all duration-300"
                       style={{ width: `${progress}%` }} />
                </div>
              </div>

              {/* Unassigned pool */}
              <div className="glass-card p-5">
                <p className="text-sm text-muted-foreground mb-3">
                  {unassigned.length > 0
                    ? 'Tap IN or OUT for each feeling (or drag it into a zone).'
                    : 'All feelings assigned. Review below or generate your report.'}
                </p>
                <div className="space-y-2">
                  {unassigned.length === 0 && (
                    <p className="text-center text-muted-foreground/60 text-sm py-2">Nothing left to sort ✓</p>
                  )}
                  {unassigned.map(emotion => {
                    const Icon = EMOTION_ICONS[emotion];
                    return (
                      <div key={emotion}
                        draggable
                        onDragStart={(e) => onDragStart(e, emotion)}
                        onDragEnd={onDragEnd}
                        className={`
                          flex items-center justify-between gap-2 p-2 pl-4 rounded-2xl
                          bg-foreground/5 border border-foreground/10 transition-all
                          ${draggedEmotion === emotion ? 'opacity-50' : ''}
                        `}
                      >
                        <div className="flex items-center gap-3 text-foreground">
                          <Icon className="w-5 h-5 text-foreground/80" />
                          <span className="font-medium">{EMOTION_LABELS[emotion]}</span>
                        </div>
                        <div className="flex gap-2">
                          <button onClick={() => assign(emotion, 'in')}
                            className="px-3 py-1.5 rounded-full bg-teal/20 border border-teal/40 text-teal text-xs font-semibold hover:bg-teal/30 transition-colors">
                            IN
                          </button>
                          <button onClick={() => assign(emotion, 'out')}
                            className="px-3 py-1.5 rounded-full bg-pink/20 border border-pink/40 text-pink text-xs font-semibold hover:bg-pink/30 transition-colors">
                            OUT
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Zone summary + drop targets */}
              <div className="grid grid-cols-2 gap-3">
                <div
                  onDragOver={(e) => onDragOver(e, 'in')}
                  onDrop={(e) => onDrop(e, 'in')}
                  className={`glass-card-teal p-4 min-h-[140px] transition-all ${dragOver === 'in' ? 'ring-2 ring-teal scale-[1.02]' : ''}`}
                >
                  <h3 className="text-teal font-semibold text-sm mb-2">IN · Met well</h3>
                  {inEmotions.length === 0
                    ? <p className="text-muted-foreground/60 text-xs italic">Drop or tap IN</p>
                    : <div className="flex flex-wrap gap-1.5">
                        {inEmotions.map(e => (
                          <button key={e} onClick={() => assign(e, 'unassigned')}
                            className="text-xs text-teal bg-teal/15 border border-teal/30 px-2 py-1 rounded-full hover:bg-teal/25">
                            {EMOTION_LABELS[e]} ×
                          </button>
                        ))}
                      </div>}
                </div>
                <div
                  onDragOver={(e) => onDragOver(e, 'out')}
                  onDrop={(e) => onDrop(e, 'out')}
                  className={`glass-card-pink p-4 min-h-[140px] transition-all ${dragOver === 'out' ? 'ring-2 ring-pink scale-[1.02]' : ''}`}
                >
                  <h3 className="text-pink font-semibold text-sm mb-2">OUT · Struggled</h3>
                  {outEmotions.length === 0
                    ? <p className="text-muted-foreground/60 text-xs italic">Drop or tap OUT</p>
                    : <div className="flex flex-wrap gap-1.5">
                        {outEmotions.map(e => (
                          <button key={e} onClick={() => assign(e, 'unassigned')}
                            className="text-xs text-pink bg-pink/15 border border-pink/30 px-2 py-1 rounded-full hover:bg-pink/25">
                            {EMOTION_LABELS[e]} ×
                          </button>
                        ))}
                      </div>}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button onClick={resetExercise}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-foreground/5 border border-foreground/15 text-foreground/80 hover:bg-foreground/10 transition-colors">
                  <RotateCcw className="w-4 h-4" /> Reset
                </button>
                <button
                  onClick={() => setShowReport(true)}
                  disabled={!complete}
                  className={`
                    flex-[2] flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all
                    ${complete
                      ? 'bg-gradient-to-r from-teal to-purple text-foreground hover:opacity-90 shadow-lg'
                      : 'bg-foreground/5 border border-foreground/10 text-muted-foreground/50 cursor-not-allowed'}
                  `}
                >
                  {complete ? <>Generate My Report <ArrowRight className="w-4 h-4" /></> : <>Assign all feelings to continue</>}
                </button>
              </div>
            </>
          )}

          {/* REPORT */}
          {showReport && (
            <div className="space-y-5">
              <div className="glass-card p-6 space-y-2">
                <div className="flex items-center gap-2 text-purple">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-wider font-semibold">Your Personalised Report</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground">Being With {figure}</h2>
                <p className="text-muted-foreground text-sm">
                  Based on {inEmotions.length} feeling{inEmotions.length !== 1 ? 's' : ''} met well and
                  {' '}{outEmotions.length} that were harder.
                </p>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-sm font-semibold text-purple mb-2">Overview</h3>
                <p className="text-foreground text-sm leading-relaxed">{overview}</p>
              </div>

              {pairInsight && (
                <div className="glass-card p-6 border-l-4 border-purple">
                  <h3 className="text-sm font-semibold text-purple mb-2">Pattern Insight</h3>
                  <p className="text-foreground text-sm leading-relaxed">{pairInsight}</p>
                </div>
              )}

              {inEmotions.length > 0 && (
                <div className="glass-card-teal p-6">
                  <h3 className="text-teal font-semibold mb-3 flex items-center gap-2">
                    <Check className="w-4 h-4" /> Your Strengths ({inEmotions.length})
                  </h3>
                  <div className="space-y-3">
                    {inEmotions.map(e => {
                      const Icon = EMOTION_ICONS[e];
                      return (
                        <div key={e} className="flex gap-3">
                          <Icon className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-teal font-medium text-sm">{EMOTION_LABELS[e]}</p>
                            <p className="text-foreground/80 text-xs mt-0.5">{EMOTION_CONTENT[e].strength}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {outEmotions.length > 0 && (
                <div className="glass-card-pink p-6">
                  <h3 className="text-pink font-semibold mb-3">Growth Areas ({outEmotions.length})</h3>
                  <div className="space-y-3">
                    {outEmotions.map(e => {
                      const Icon = EMOTION_ICONS[e];
                      return (
                        <div key={e} className="p-3 rounded-xl bg-pink/10 border border-pink/20">
                          <div className="flex items-center gap-2 mb-1">
                            <Icon className="w-4 h-4 text-pink" />
                            <p className="text-pink font-medium text-sm">{EMOTION_LABELS[e]}</p>
                          </div>
                          <p className="text-muted-foreground text-xs mb-2">{EMOTION_CONTENT[e].edge}</p>
                          <p className="text-foreground text-xs">
                            <span className="text-purple font-medium">Try this: </span>
                            {EMOTION_CONTENT[e].parentingFocus}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                <button onClick={() => setShowReport(false)}
                  className="flex-1 px-4 py-3 rounded-xl bg-foreground/5 border border-foreground/15 text-foreground/80 hover:bg-foreground/10 transition-colors">
                  Edit Answers
                </button>
                <button onClick={resetExercise}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-teal to-purple text-foreground font-semibold hover:opacity-90">
                  <RotateCcw className="w-4 h-4" /> Start Over
                </button>
              </div>
            </div>
          )}

          <div className="text-center pt-2">
            <p className="text-muted-foreground/60 text-xs">Auto-saved locally</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
