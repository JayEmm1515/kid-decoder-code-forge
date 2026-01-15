import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  Zap, 
  Snowflake, 
  Anchor,
  Heart,
  Frown,
  Angry,
  AlertTriangle,
  CircleOff,
  Lightbulb,
  Sparkles,
  RotateCcw
} from 'lucide-react';
import Layout from '@/components/Layout';

// Types
type Emotion = 'anger' | 'sadness' | 'fear' | 'joy' | 'shame' | 'curiosity';
type Response = 'storm' | 'wall' | 'anchor';
type Step = 'intro' | 'assessment' | 'results';

// Emotion data with icons
const EMOTIONS: { id: Emotion; label: string; icon: React.ElementType }[] = [
  { id: 'anger', label: 'Anger', icon: Angry },
  { id: 'sadness', label: 'Sadness', icon: Frown },
  { id: 'fear', label: 'Fear', icon: AlertTriangle },
  { id: 'joy', label: 'Joy', icon: Heart },
  { id: 'shame', label: 'Shame', icon: CircleOff },
  { id: 'curiosity', label: 'Curiosity', icon: Lightbulb },
];

// Response options
const RESPONSE_OPTIONS: { id: Response; label: string; subtext: string; icon: React.ElementType; color: string }[] = [
  { 
    id: 'storm', 
    label: 'They joined the chaos.', 
    subtext: 'They got upset, angry, or overwhelmed with me. It felt scary.',
    icon: Zap,
    color: 'pink'
  },
  { 
    id: 'wall', 
    label: 'They shut it down.', 
    subtext: 'They ignored me, mocked me, or told me to stop. I felt alone.',
    icon: Snowflake,
    color: 'purple'
  },
  { 
    id: 'anchor', 
    label: 'They anchored me.', 
    subtext: 'They stayed calm and helped me through it. I felt safe.',
    icon: Anchor,
    color: 'teal'
  },
];

export default function EmotionalBlueprint() {
  const [step, setStep] = useState<Step>('intro');
  const [currentEmotionIndex, setCurrentEmotionIndex] = useState(0);
  const [responses, setResponses] = useState<Record<Emotion, Response>>({} as Record<Emotion, Response>);

  const currentEmotion = EMOTIONS[currentEmotionIndex];
  const progress = ((currentEmotionIndex) / EMOTIONS.length) * 100;

  const handleResponse = (response: Response) => {
    setResponses(prev => ({
      ...prev,
      [currentEmotion.id]: response
    }));

    if (currentEmotionIndex < EMOTIONS.length - 1) {
      setCurrentEmotionIndex(prev => prev + 1);
    } else {
      setStep('results');
    }
  };

  const handleRestart = () => {
    setStep('intro');
    setCurrentEmotionIndex(0);
    setResponses({} as Record<Emotion, Response>);
  };

  // Calculate results
  const safeEmotions = EMOTIONS.filter(e => responses[e.id] === 'anchor');
  const growthEmotions = EMOTIONS.filter(e => responses[e.id] === 'storm' || responses[e.id] === 'wall');

  return (
    <Layout currentPageName="Emotional Blueprint">
      {/* Deep gradient background */}
      <div className="min-h-screen bg-blueprint-gradient pb-24 relative overflow-hidden">
        {/* Abstract gradient orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-teal/10 blur-3xl" />
          <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-purple/15 blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-pink/10 blur-3xl" />
        </div>

        <div className="relative z-10 p-4 md:p-8">
          <div className="max-w-lg mx-auto">
            {/* Back button */}
            <Link 
              to="/emotional-toolbox"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-6"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="font-nunito font-medium">Back</span>
            </Link>

            <AnimatePresence mode="wait">
              {step === 'intro' && (
                <IntroCard key="intro" onStart={() => setStep('assessment')} />
              )}
              
              {step === 'assessment' && currentEmotion && (
                <AssessmentCard
                  key={`assessment-${currentEmotion.id}`}
                  emotion={currentEmotion}
                  progress={progress}
                  currentIndex={currentEmotionIndex}
                  total={EMOTIONS.length}
                  onResponse={handleResponse}
                />
              )}
              
              {step === 'results' && (
                <ResultsCard
                  key="results"
                  safeEmotions={safeEmotions}
                  growthEmotions={growthEmotions}
                  onRestart={handleRestart}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// Intro Card Component
function IntroCard({ onStart }: { onStart: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="glass-container"
    >
      <div className="flex justify-center mb-6">
        <div className="clay-icon-box clay-icon-teal">
          <Sparkles className="w-8 h-8 text-teal" />
        </div>
      </div>

      <h1 className="font-nunito text-2xl md:text-3xl font-bold text-white text-center mb-4">
        Your Emotional Blueprint
      </h1>

      <p className="font-nunito text-white/70 text-center leading-relaxed mb-8">
        Children aren't born knowing how to handle big feelings—they rely on us to co-regulate them. 
        But we can only lend the calm that we possess. To understand your triggers with your child, 
        let's look at how your feelings were met when you were small.
      </p>

      <button
        onClick={onStart}
        className="clay-button clay-button-teal w-full"
      >
        Start Mapping
      </button>
    </motion.div>
  );
}

// Assessment Card Component
function AssessmentCard({ 
  emotion, 
  progress,
  currentIndex,
  total,
  onResponse 
}: { 
  emotion: { id: Emotion; label: string; icon: React.ElementType };
  progress: number;
  currentIndex: number;
  total: number;
  onResponse: (response: Response) => void;
}) {
  const Icon = emotion.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: -50, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="glass-container"
    >
      {/* Progress indicator */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="font-nunito text-sm text-white/50">{currentIndex + 1} of {total}</span>
        </div>
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-teal to-purple rounded-full"
            initial={{ width: `${(currentIndex / total) * 100}%` }}
            animate={{ width: `${((currentIndex + 1) / total) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Emotion icon */}
      <div className="flex justify-center mb-4">
        <div className="clay-icon-box clay-icon-purple">
          <Icon className="w-8 h-8 text-purple" />
        </div>
      </div>

      {/* Question */}
      <h2 className="font-nunito text-xl md:text-2xl font-bold text-white text-center mb-2">
        When you were small and felt{' '}
        <span className="text-purple-light">{emotion.label}</span>
      </h2>
      <p className="font-nunito text-white/60 text-center mb-8">
        how did your primary caregiver react?
      </p>

      {/* Response options */}
      <div className="space-y-4">
        {RESPONSE_OPTIONS.map((option, index) => (
          <ClayButton
            key={option.id}
            option={option}
            onClick={() => onResponse(option.id)}
            delay={index * 0.1}
          />
        ))}
      </div>
    </motion.div>
  );
}

// Clay Button Component
function ClayButton({ 
  option, 
  onClick,
  delay = 0
}: { 
  option: typeof RESPONSE_OPTIONS[0];
  onClick: () => void;
  delay?: number;
}) {
  const Icon = option.icon;
  const [isPressed, setIsPressed] = useState(false);

  const colorClasses = {
    pink: 'clay-option-pink',
    purple: 'clay-option-purple',
    teal: 'clay-option-teal',
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
      onClick={onClick}
      className={`clay-option ${colorClasses[option.color as keyof typeof colorClasses]} ${isPressed ? 'clay-option-pressed' : ''}`}
    >
      <div className="flex items-start gap-4">
        <div className={`clay-option-icon ${option.color === 'pink' ? 'bg-pink/20' : option.color === 'purple' ? 'bg-purple/20' : 'bg-teal/20'}`}>
          <Icon className={`w-6 h-6 ${option.color === 'pink' ? 'text-pink' : option.color === 'purple' ? 'text-purple' : 'text-teal'}`} />
        </div>
        <div className="flex-1 text-left">
          <p className="font-nunito font-bold text-slate-800 mb-1">{option.label}</p>
          <p className="font-nunito text-sm text-slate-600">{option.subtext}</p>
        </div>
      </div>
    </motion.button>
  );
}

// Results Card Component
function ResultsCard({ 
  safeEmotions, 
  growthEmotions,
  onRestart
}: { 
  safeEmotions: typeof EMOTIONS;
  growthEmotions: typeof EMOTIONS;
  onRestart: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="glass-container"
    >
      <div className="flex justify-center mb-6">
        <div className="clay-icon-box clay-icon-teal">
          <Sparkles className="w-8 h-8 text-teal" />
        </div>
      </div>

      <h1 className="font-nunito text-2xl md:text-3xl font-bold text-white text-center mb-6">
        Your Regulation Map
      </h1>

      {/* Safe Zone */}
      {safeEmotions.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="results-zone results-zone-safe mb-4"
        >
          <div className="flex items-center gap-2 mb-3">
            <Anchor className="w-5 h-5 text-teal" />
            <h3 className="font-nunito font-bold text-teal">Safe Zone</h3>
          </div>
          <div className="flex flex-wrap gap-2 mb-3">
            {safeEmotions.map(emotion => {
              const Icon = emotion.icon;
              return (
                <span key={emotion.id} className="emotion-chip emotion-chip-safe">
                  <Icon className="w-4 h-4" />
                  {emotion.label}
                </span>
              );
            })}
          </div>
          <p className="font-nunito text-sm text-slate-600">
            You have a natural map for these. Co-regulating your child here feels easier.
          </p>
        </motion.div>
      )}

      {/* Growth Zone */}
      {growthEmotions.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="results-zone results-zone-growth mb-6"
        >
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-5 h-5 text-pink" />
            <h3 className="font-nunito font-bold text-pink">Growth Zone</h3>
          </div>
          <div className="flex flex-wrap gap-2 mb-3">
            {growthEmotions.map(emotion => {
              const Icon = emotion.icon;
              return (
                <span key={emotion.id} className="emotion-chip emotion-chip-growth">
                  <Icon className="w-4 h-4" />
                  {emotion.label}
                </span>
              );
            })}
          </div>
          <p className="font-nunito text-sm text-slate-600">
            These emotions trigger your old alarm system. It's harder to stay calm here because you're building this map from scratch.
          </p>
        </motion.div>
      )}

      {/* All anchored message */}
      {growthEmotions.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center py-4 mb-6"
        >
          <p className="font-nunito text-white/70">
            Amazing! You have a strong foundation across all emotions. 
            This gives you natural flexibility when co-regulating your child.
          </p>
        </motion.div>
      )}

      {/* Restart button */}
      <button
        onClick={onRestart}
        className="clay-button clay-button-secondary w-full flex items-center justify-center gap-2"
      >
        <RotateCcw className="w-5 h-5" />
        Take Again
      </button>
    </motion.div>
  );
}
