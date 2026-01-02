import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Heart, Frown, Angry, AlertTriangle, CircleOff, Lightbulb } from 'lucide-react';
import Layout from '@/components/Layout';

// Types
type Emotion = 'joy' | 'sadness' | 'anger' | 'fear' | 'shame' | 'curiosity';
type InOut = 'in' | 'out';

// Data
const EMOTIONS: Emotion[] = ['joy', 'sadness', 'anger', 'fear', 'shame', 'curiosity'];

const EMOTION_LABELS: Record<Emotion, string> = {
  joy: 'Joy',
  sadness: 'Sadness', 
  anger: 'Anger',
  fear: 'Fear',
  shame: 'Shame',
  curiosity: 'Curiosity'
};

const EMOTION_ICONS: Record<Emotion, React.ElementType> = {
  joy: Heart,
  sadness: Frown,
  anger: Angry,
  fear: AlertTriangle,
  shame: CircleOff,
  curiosity: Lightbulb
};

const EMOTION_CONTENT: Record<Emotion, {
  strength: string;
  edge: string;
  parentingFocus: string;
}> = {
  joy: {
    strength: "You can join and amplify positive moments, allowing shared delight without dampening.",
    edge: "Joy may have felt muted or conditional; playful moments can be harder to relax into.",
    parentingFocus: "Name and linger with small sparks of delight; invite brief shared play."
  },
  sadness: {
    strength: "You tolerate tears and loss without rushing to fix or distract.",
    edge: "Sadness may feel heavy or inconvenient; you may push for 'cheer up' quickly.",
    parentingFocus: "Use a soft voice and simple reflections: 'This really hurts. I'm here.'"
  },
  anger: {
    strength: "You acknowledge protest and hold firm, safe limits.",
    edge: "Anger can feel risky or disrespectful; you may clamp down or avoid it.",
    parentingFocus: "Validate the feeling and separate it from behaviour: 'Anger's okay; hitting isn't.'"
  },
  fear: {
    strength: "You recognise fear signals and offer protection with gradual bravery.",
    edge: "Fear may be dismissed as overreacting or met with over-reassurance.",
    parentingFocus: "Name fear early, co-regulate, and scaffold small steps toward safety."
  },
  shame: {
    strength: "You meet shame with warmth and repair rather than criticism or withdrawal.",
    edge: "Shame may trigger quick correction, distance, or perfectionistic pressure.",
    parentingFocus: "Use de-shaming language: 'You're a good kid who made a mistake. We can repair this.'"
  },
  curiosity: {
    strength: "You invite questions and exploration, tolerating mess and uncertainty.",
    edge: "Curiosity might have been discouraged; you may rush to answers or close things down.",
    parentingFocus: "Ask open questions and wonder aloud together: 'What do you think is happening?'"
  }
};

const COMBINATION_INSIGHTS: Record<string, string> = {
  "joy": "When joy is out but other emotions are in, you may find it hard to relax into silliness or fun. Parenting can feel serious, and playful moments may seem wasteful or uncomfortable. Children might hold back excitement. Focus: allow short playful bursts, even if they feel awkward at first.",
  "sadness": "When sadness is out, tears and grief may be difficult for you to tolerate. You might rush to cheer your child up or encourage resilience too quickly. Children may feel they cannot bring hurt or loss to you. Focus: pause, validate sadness, and let tears run their course.",
  "anger": "When anger is out, protest and frustration can feel unsafe. You might clamp down quickly or avoid conflict. Children may hide their frustration or act it out explosively. Focus: name the anger, separate it from behaviour, and set firm but warm boundaries.",
  "fear": "When fear is out, you may minimise or dismiss worries, or feel pulled into over-reassurance. Children may learn fear is unsafe to show. Focus: acknowledge fear early, offer calm presence, and scaffold small brave steps.",
  "shame": "When shame is out, mistakes and embarrassment may trigger discomfort in you. You may correct too quickly, withdraw, or push perfection. Children may feel they must get things 'just right' to stay connected. Focus: respond with warmth and repair, emphasising worth even when errors happen.",
  "curiosity": "When curiosity is out, questions and exploration can feel bothersome or unsafe. You may rush to answers or close topics down. Children may stop sharing their wonderings. Focus: ask open questions and wonder aloud together.",
  
  "anger,fear": "With anger and fear both out, protest and vulnerability feel especially challenging. You may clamp down on behaviour while also minimising worries. Children can bottle up anxiety and frustration until it bursts. Focus: validate both protest and worry, offering containment without dismissal.",
  "anger,joy": "With anger and joy both out, big energy is hard to manage — whether excitement or frustration. You may prefer calm and compliance. Children might learn to stay small and contained. Focus: stretch tolerance for both delight and protest in safe, bounded ways.",
  "anger,sadness": "With anger and sadness both out, you may find strong feelings — whether hot or low — overwhelming. Children may feel there's little space for protest or hurt. Focus: practise sitting with both intensity and withdrawal, showing it's safe to bring the full range.",
  "anger,shame": "With anger and shame both out, conflict and mistakes are especially loaded. You may swing between over-control and withdrawal. Children can fear rejection when frustrated or wrong. Focus: hold limits firmly while emphasising connection: 'You're still good when you're mad or make mistakes.'",
  "anger,curiosity": "With anger and curiosity both out, challenge feels threatening — whether through protest or questioning. Children may sense they must comply quietly. Focus: welcome challenge as growth, modelling calm responses to both frustration and inquiry.",
  "fear,joy": "With fear and joy both out, high-arousal states are tricky — whether excitement or anxiety. You may feel unsafe with intensity. Children may dampen their energy to avoid overwhelming you. Focus: practise co-regulating both thrills and worries.",
  "fear,sadness": "With fear and sadness both out, your child's helpless or small moments may be hardest to meet. They may learn to cover pain with strength or humour. Focus: respond with steady empathy and safety: 'That was scary. I'm here.'",
  "fear,shame": "With fear and shame both out, your child's worries and mistakes may trigger urgency or distance. They might feel unsafe to admit weakness. Focus: pair reassurance with de-shaming language, normalising fear and imperfection.",
  "fear,curiosity": "With fear and curiosity both out, new situations feel uncomfortable. You may prefer predictability and avoid exploration. Children might miss chances to experiment safely. Focus: co-explore gently, modelling curiosity alongside reassurance.",
  "joy,sadness": "With joy and sadness both out, highs and lows alike are restricted. Children may feel they must stay in the middle to stay safe. Focus: expand tolerance for both celebration and grief.",
  "joy,shame": "With joy and shame both out, pride and mistakes both feel fraught. You may dampen big wins and react strongly to errors. Children may feel unsafe showing either success or failure. Focus: celebrate effort openly and respond to mistakes with warmth.",
  "joy,curiosity": "With joy and curiosity both out, play and exploration may feel wasteful. Children could grow cautious about both fun and wonder. Focus: build tolerance for silliness and open-ended inquiry.",
  "sadness,shame": "With sadness and shame both out, vulnerability and mistakes may be hard to accept. Children may hide both pain and imperfection. Focus: normalise tears and errors as safe, expected parts of growth.",
  "sadness,curiosity": "With sadness and curiosity both out, reflection and exploration can feel unsafe. Children may avoid inward or outward stretching. Focus: practise both sitting with grief and asking open questions.",
  "shame,curiosity": "With shame and curiosity both out, self-expression feels risky — whether in error or in exploration. Children may grow cautious about standing out. Focus: respond to mistakes with warmth and to questions with encouragement."
};

export default function BeingWithExercise() {
  const [attachmentFigure, setAttachmentFigure] = useState<string>('');
  const [emotions, setEmotions] = useState<Record<Emotion, InOut>>(() => {
    const initial: Record<Emotion, InOut> = {} as Record<Emotion, InOut>;
    EMOTIONS.forEach(emotion => {
      initial[emotion] = 'in';
    });
    return initial;
  });
  const [draggedEmotion, setDraggedEmotion] = useState<Emotion | null>(null);
  const [dragOver, setDragOver] = useState<'in' | 'out' | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('being-with-exercise');
    if (stored) {
      try {
        const data = JSON.parse(stored);
        if (data.attachmentFigure) setAttachmentFigure(data.attachmentFigure);
        if (data.emotions) setEmotions(data.emotions);
      } catch (e) {
        // Ignore parsing errors
      }
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    const data = { attachmentFigure, emotions };
    localStorage.setItem('being-with-exercise', JSON.stringify(data));
  }, [attachmentFigure, emotions]);

  const handleDragStart = (e: React.DragEvent, emotion: Emotion) => {
    setDraggedEmotion(emotion);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', emotion);
  };

  const handleDragEnd = () => {
    setDraggedEmotion(null);
    setDragOver(null);
  };

  const handleDragOver = (e: React.DragEvent, zone: 'in' | 'out') => {
    e.preventDefault();
    setDragOver(zone);
  };

  const handleDragLeave = () => {
    setDragOver(null);
  };

  const handleDrop = (e: React.DragEvent, zone: 'in' | 'out') => {
    e.preventDefault();
    const emotion = e.dataTransfer.getData('text/plain') as Emotion;
    if (emotion && EMOTIONS.includes(emotion)) {
      setEmotions(prev => ({...prev, [emotion]: zone}));
    }
    setDragOver(null);
    setDraggedEmotion(null);
  };

  const toggleEmotion = (emotion: Emotion) => {
    setEmotions(prev => ({
      ...prev, 
      [emotion]: prev[emotion] === 'in' ? 'out' : 'in'
    }));
  };

  // Generate summary
  const inEmotions = EMOTIONS.filter(e => emotions[e] === 'in');
  const outEmotions = EMOTIONS.filter(e => emotions[e] === 'out');
  
  const getOverview = () => {
    if (outEmotions.length === 0) {
      return "Broadly met across emotions; strong co-regulation capacity and flexibility under stress.";
    } else if (outEmotions.length >= 4) {
      return "Several emotions were hard to bring to caregivers; expect hot-spots under stress and prioritise co-regulation and repair rituals.";
    } else {
      return "Some emotions were harder to bring; expect specific triggers and build skills around those while leveraging strengths.";
    }
  };

  // Get combination insight
  const getCombinationInsight = () => {
    if (outEmotions.length === 0) return null;
    
    if (outEmotions.length === 2) {
      const key = outEmotions.sort().join(',');
      if (COMBINATION_INSIGHTS[key]) {
        return COMBINATION_INSIGHTS[key];
      }
    }
    
    if (outEmotions.length === 1) {
      const emotion = outEmotions[0];
      if (COMBINATION_INSIGHTS[emotion]) {
        return COMBINATION_INSIGHTS[emotion];
      }
    }
    
    return null;
  };

  const combinationInsight = getCombinationInsight();

  return (
    <Layout currentPageName="Being With Exercise">
      <div className="min-h-screen bg-airy p-4 md:p-8 pb-24">
        <div className="max-w-2xl mx-auto space-y-6">
          
          {/* Back Button */}
          <Link 
            to="/emotional-toolbox"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-foreground hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Toolbox
          </Link>

          {/* Header */}
          <div className="glass-card p-8 text-center">
            <div className="icon-box icon-box-purple w-14 h-14 mx-auto mb-4">
              <Heart className="w-7 h-7 text-purple" strokeWidth={1.5} />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Being With
            </h1>
            <p className="text-white/50 mt-2 text-sm md:text-base">
              Drag each feeling into IN or OUT based on how it was met by your primary caregiver.
            </p>
          </div>

          {/* Attachment Figure Input */}
          <div className="glass-card p-5">
            <label className="block text-sm font-medium text-white/70 mb-2" htmlFor="attachment-figure">
              Attachment figure (e.g., Mum)
            </label>
            <input
              id="attachment-figure"
              type="text"
              value={attachmentFigure}
              onChange={(e) => setAttachmentFigure(e.target.value)}
              placeholder="Enter name..."
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-teal/50 transition-all"
            />
          </div>

          {/* Emotion Chips */}
          <div className="glass-card p-5">
            <p className="text-sm text-white/50 mb-4">Tap to toggle or drag to zones below</p>
            <div className="flex flex-wrap gap-3">
              {EMOTIONS.map(emotion => {
                const Icon = EMOTION_ICONS[emotion];
                const isIn = emotions[emotion] === 'in';
                return (
                  <button
                    key={emotion}
                    draggable
                    onDragStart={(e) => handleDragStart(e, emotion)}
                    onDragEnd={handleDragEnd}
                    onClick={() => toggleEmotion(emotion)}
                    className={`
                      flex items-center gap-2 px-4 py-2.5 rounded-full font-medium text-sm
                      cursor-grab active:cursor-grabbing transition-all duration-200
                      ${isIn 
                        ? 'bg-teal/20 border-2 border-teal/40 text-teal' 
                        : 'bg-pink/20 border-2 border-pink/40 text-pink'
                      }
                      hover:scale-105
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    {EMOTION_LABELS[emotion]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Drop Zones */}
          <div className="grid grid-cols-2 gap-4">
            <div
              onDragOver={(e) => handleDragOver(e, 'in')}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, 'in')}
              className={`
                aspect-square rounded-full flex items-center justify-center
                border-4 transition-all duration-200
                ${dragOver === 'in' 
                  ? 'bg-teal/30 border-teal scale-105' 
                  : 'bg-teal/20 border-teal/50'
                }
              `}
            >
              <span className="text-2xl md:text-3xl font-bold text-teal">IN</span>
            </div>
            <div
              onDragOver={(e) => handleDragOver(e, 'out')}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, 'out')}
              className={`
                aspect-square rounded-full flex items-center justify-center
                border-4 transition-all duration-200
                ${dragOver === 'out' 
                  ? 'bg-pink/30 border-pink scale-105' 
                  : 'bg-pink/20 border-pink/50'
                }
              `}
            >
              <span className="text-2xl md:text-3xl font-bold text-pink">OUT</span>
            </div>
          </div>

          {/* Current Classification */}
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card-teal p-4">
              <h3 className="text-teal font-semibold mb-2 text-sm">Met Well (IN)</h3>
              {inEmotions.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {inEmotions.map(e => (
                    <span key={e} className="text-xs text-white/70 bg-teal/20 px-2 py-1 rounded-full">
                      {EMOTION_LABELS[e]}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-white/40 text-xs italic">None selected</p>
              )}
            </div>
            <div className="glass-card-pink p-4">
              <h3 className="text-pink font-semibold mb-2 text-sm">Challenging (OUT)</h3>
              {outEmotions.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {outEmotions.map(e => (
                    <span key={e} className="text-xs text-white/70 bg-pink/20 px-2 py-1 rounded-full">
                      {EMOTION_LABELS[e]}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-white/40 text-xs italic">None selected</p>
              )}
            </div>
          </div>

          {/* Summary Section */}
          <div className="glass-card p-6 space-y-5">
            <h2 className="text-xl font-bold text-white">Your Profile</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-purple mb-1">Overview</h3>
                <p className="text-white/70 text-sm">{getOverview()}</p>
              </div>

              {combinationInsight && (
                <div className="p-4 rounded-xl bg-purple/10 border border-purple/30">
                  <h3 className="text-sm font-semibold text-purple mb-2">Pattern Insight</h3>
                  <p className="text-white/70 text-sm">{combinationInsight}</p>
                </div>
              )}

              {/* Strengths */}
              {inEmotions.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-teal mb-2">Your Strengths</h3>
                  <div className="space-y-2">
                    {inEmotions.map(e => (
                      <div key={e} className="text-xs text-white/60">
                        <span className="text-teal font-medium">{EMOTION_LABELS[e]}:</span>{' '}
                        {EMOTION_CONTENT[e].strength}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Growth Areas */}
              {outEmotions.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-pink mb-2">Growth Areas</h3>
                  <div className="space-y-3">
                    {outEmotions.map(e => (
                      <div key={e} className="p-3 rounded-lg bg-pink/10 border border-pink/20">
                        <p className="text-pink font-medium text-sm mb-1">{EMOTION_LABELS[e]}</p>
                        <p className="text-white/60 text-xs mb-1">{EMOTION_CONTENT[e].edge}</p>
                        <p className="text-white/80 text-xs">
                          <span className="text-purple">Focus:</span> {EMOTION_CONTENT[e].parentingFocus}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="text-center pt-2">
            <p className="text-muted-foreground text-xs">Auto-saved locally</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
