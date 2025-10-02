import React, { useState, useEffect } from 'react';
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

// Styles
const styles = {
  container: {
    maxWidth: '980px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    lineHeight: '1.6'
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: '40px'
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: '0 0 10px 0',
    color: '#333'
  },
  subtitle: {
    fontSize: '1rem',
    color: '#666',
    margin: '0'
  },
  section: {
    marginBottom: '30px'
  },
  label: {
    display: 'block',
    fontWeight: '600',
    marginBottom: '8px',
    color: '#333'
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '2px solid #ddd',
    borderRadius: '8px',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box' as const
  },
  inputFocus: {
    borderColor: '#1faa00'
  },
  chipContainer: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '12px',
    marginBottom: '30px'
  },
  chip: {
    padding: '12px 24px',
    border: '2px solid',
    borderRadius: '30px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'grab',
    userSelect: 'none' as const,
    transition: 'all 0.2s',
    outline: 'none',
    minWidth: '100px',
    textAlign: 'center' as const
  },
  chipIn: {
    backgroundColor: '#e8f5e9',
    borderColor: '#c8e6c9',
    color: '#2e7d32'
  },
  chipOut: {
    backgroundColor: '#ffebee',
    borderColor: '#ffcdd2', 
    color: '#c62828'
  },
  chipFocus: {
    outline: '3px solid #4285f4',
    outlineOffset: '2px'
  },
  dropZoneContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '40px',
    marginBottom: '30px',
    flexWrap: 'wrap' as const
  },
  dropZone: {
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    border: '3px solid #333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
    cursor: 'pointer',
    outline: 'none',
    transition: 'all 0.2s'
  },
  dropZoneIn: {
    backgroundColor: '#1faa00',
    boxShadow: '0 0 20px rgba(31,170,0,0.18)'
  },
  dropZoneOut: {
    backgroundColor: '#d50000', 
    boxShadow: '0 0 20px rgba(213,0,0,0.18)'
  },
  dropZoneHover: {
    filter: 'brightness(1.1)',
    transform: 'scale(1.05)'
  },
  dropZoneFocus: {
    outline: '3px solid #4285f4',
    outlineOffset: '4px'
  },
  listsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    marginBottom: '30px'
  },
  listPanel: {
    padding: '16px',
    borderRadius: '8px',
    border: '2px solid'
  },
  listPanelIn: {
    backgroundColor: '#e8f5e9',
    borderColor: '#c8e6c9'
  },
  listPanelOut: {
    backgroundColor: '#ffebee',
    borderColor: '#ffcdd2'
  },
  listTitle: {
    fontWeight: 'bold',
    marginBottom: '8px',
    fontSize: '1.1rem'
  },
  listTitleIn: {
    color: '#2e7d32'
  },
  listTitleOut: {
    color: '#c62828'
  },
  summarySection: {
    backgroundColor: '#f8f9fa',
    padding: '24px',
    borderRadius: '8px',
    border: '1px solid #e9ecef'
  },
  summaryTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: '#333'
  },
  summaryItem: {
    marginBottom: '16px'
  },
  summaryItemTitle: {
    fontWeight: '600',
    marginBottom: '8px',
    color: '#333'
  },
  summaryItemContent: {
    color: '#555',
    fontSize: '0.95rem'
  },
  summaryList: {
    margin: '8px 0',
    paddingLeft: '0',
    listStyle: 'none'
  },
  summaryListItem: {
    marginBottom: '4px',
    fontSize: '0.9rem',
    color: '#555'
  },
  exportSection: {
    marginTop: '30px'
  },
  exportTextarea: {
    width: '100%',
    height: '120px',
    padding: '12px',
    border: '2px solid #ddd',
    borderRadius: '8px',
    fontFamily: 'monospace',
    fontSize: '0.9rem',
    resize: 'vertical' as const,
    backgroundColor: '#f8f9fa',
    boxSizing: 'border-box' as const
  },
  // Responsive styles
  '@media (max-width: 768px)': {
    dropZoneContainer: {
      flexDirection: 'column' as const,
      gap: '20px'
    },
    listsContainer: {
      gridTemplateColumns: '1fr'
    }
  }
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
  const [focusedChip, setFocusedChip] = useState<Emotion | null>(null);
  const [focusedZone, setFocusedZone] = useState<'in' | 'out' | null>(null);

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

  const handleChipKeyDown = (e: React.KeyboardEvent, emotion: Emotion) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleEmotion(emotion);
    }
  };

  const handleZoneKeyDown = (e: React.KeyboardEvent, zone: 'in' | 'out') => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (focusedChip) {
        setEmotions(prev => ({...prev, [focusedChip]: zone}));
      }
    }
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
    
    // Check for two-emotion combinations first
    if (outEmotions.length === 2) {
      const key = outEmotions.sort().join(',');
      if (COMBINATION_INSIGHTS[key]) {
        return COMBINATION_INSIGHTS[key];
      }
    }
    
    // Check for single emotion insights
    if (outEmotions.length === 1) {
      const emotion = outEmotions[0];
      if (COMBINATION_INSIGHTS[emotion]) {
        return COMBINATION_INSIGHTS[emotion];
      }
    }
    
    return null;
  };

  const combinationInsight = getCombinationInsight();

  // Export JSON
  const exportData = {
    attachmentFigure: attachmentFigure || null,
    emotions: emotions,
    timestamp: new Date().toISOString()
  };

  return (
    <Layout currentPageName="Being With Exercise">
      <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>Being With</h1>
        <p style={styles.subtitle}>
          Drag each feeling into IN or OUT based on how it was met by your primary caregiver.
        </p>
      </header>

      {/* Attachment Figure Input */}
      <section style={styles.section}>
        <label style={styles.label} htmlFor="attachment-figure">
          Attachment figure (e.g., Mum)
        </label>
        <input
          id="attachment-figure"
          type="text"
          value={attachmentFigure}
          onChange={(e) => setAttachmentFigure(e.target.value)}
          style={{
            ...styles.input,
            ...(document.activeElement?.id === 'attachment-figure' ? styles.inputFocus : {})
          }}
          onFocus={(e) => e.target.style.borderColor = '#1faa00'}
          onBlur={(e) => e.target.style.borderColor = '#ddd'}
        />
      </section>

      {/* Emotion Chips */}
      <section style={styles.section}>
        <div style={styles.chipContainer}>
          {EMOTIONS.map(emotion => (
            <button
              key={emotion}
              draggable
              onDragStart={(e) => handleDragStart(e, emotion)}
              onDragEnd={handleDragEnd}
              onClick={() => toggleEmotion(emotion)}
              onKeyDown={(e) => handleChipKeyDown(e, emotion)}
              onFocus={() => setFocusedChip(emotion)}
              onBlur={() => setFocusedChip(null)}
              style={{
                ...styles.chip,
                ...(emotions[emotion] === 'in' ? styles.chipIn : styles.chipOut),
                ...(focusedChip === emotion ? styles.chipFocus : {})
              }}
              aria-label={`${EMOTION_LABELS[emotion]} - currently ${emotions[emotion].toUpperCase()} - click to toggle or drag to drop zone`}
            >
              {EMOTION_LABELS[emotion]}
            </button>
          ))}
        </div>
      </section>

      {/* Drop Zones */}
      <section style={styles.section}>
        <div style={styles.dropZoneContainer}>
          <div
            onDragOver={(e) => handleDragOver(e, 'in')}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, 'in')}
            onKeyDown={(e) => handleZoneKeyDown(e, 'in')}
            onFocus={() => setFocusedZone('in')}
            onBlur={() => setFocusedZone(null)}
            tabIndex={0}
            style={{
              ...styles.dropZone,
              ...styles.dropZoneIn,
              ...(dragOver === 'in' ? styles.dropZoneHover : {}),
              ...(focusedZone === 'in' ? styles.dropZoneFocus : {})
            }}
            aria-label="IN drop zone - emotions that were welcomed"
          >
            IN
          </div>
          <div
            onDragOver={(e) => handleDragOver(e, 'out')}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, 'out')}
            onKeyDown={(e) => handleZoneKeyDown(e, 'out')}
            onFocus={() => setFocusedZone('out')}
            onBlur={() => setFocusedZone(null)}
            tabIndex={0}
            style={{
              ...styles.dropZone,
              ...styles.dropZoneOut,
              ...(dragOver === 'out' ? styles.dropZoneHover : {}),
              ...(focusedZone === 'out' ? styles.dropZoneFocus : {})
            }}
            aria-label="OUT drop zone - emotions that were discouraged"
          >
            OUT
          </div>
        </div>
      </section>

      {/* Current Classification */}
      <section style={styles.section}>
        <div style={styles.listsContainer}>
          <div style={{...styles.listPanel, ...styles.listPanelIn}}>
            <h3 style={{...styles.listTitle, ...styles.listTitleIn}}>IN (green)</h3>
            <p>{inEmotions.map(e => EMOTION_LABELS[e]).join(', ') || 'None'}</p>
          </div>
          <div style={{...styles.listPanel, ...styles.listPanelOut}}>
            <h3 style={{...styles.listTitle, ...styles.listTitleOut}}>OUT (red)</h3>
            <p>{outEmotions.map(e => EMOTION_LABELS[e]).join(', ') || 'None'}</p>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section style={styles.summarySection}>
        <h2 style={styles.summaryTitle}>Summary</h2>
        
        {attachmentFigure && (
          <div style={styles.summaryItem}>
            <div style={styles.summaryItemTitle}>Attachment figure:</div>
            <div style={styles.summaryItemContent}>{attachmentFigure}</div>
          </div>
        )}

        <div style={styles.summaryItem}>
          <div style={styles.summaryItemTitle}>In (green):</div>
          <div style={styles.summaryItemContent}>
            {inEmotions.map(e => EMOTION_LABELS[e]).join(', ') || 'None'}
          </div>
        </div>

        <div style={styles.summaryItem}>
          <div style={styles.summaryItemTitle}>Out (red):</div>
          <div style={styles.summaryItemContent}>
            {outEmotions.map(e => EMOTION_LABELS[e]).join(', ') || 'None'}
          </div>
        </div>

        <div style={styles.summaryItem}>
          <div style={styles.summaryItemTitle}>Overview:</div>
          <div style={styles.summaryItemContent}>{getOverview()}</div>
        </div>

        {combinationInsight && (
          <div style={styles.summaryItem}>
            <div style={styles.summaryItemTitle}>Pattern insight:</div>
            <div style={styles.summaryItemContent}>{combinationInsight}</div>
          </div>
        )}

        {inEmotions.length > 0 && (
          <div style={styles.summaryItem}>
            <div style={styles.summaryItemTitle}>Strengths:</div>
            <ul style={styles.summaryList}>
              {inEmotions.map(emotion => (
                <li key={emotion} style={styles.summaryListItem}>
                  {EMOTION_LABELS[emotion]}: {EMOTION_CONTENT[emotion].strength}
                </li>
              ))}
            </ul>
          </div>
        )}

        {outEmotions.length > 0 && (
          <div style={styles.summaryItem}>
            <div style={styles.summaryItemTitle}>Growth edges:</div>
            <ul style={styles.summaryList}>
              {outEmotions.map(emotion => (
                <li key={emotion} style={styles.summaryListItem}>
                  {EMOTION_LABELS[emotion]}: {EMOTION_CONTENT[emotion].edge}
                </li>
              ))}
            </ul>
          </div>
        )}

        {outEmotions.length > 0 && (
          <div style={styles.summaryItem}>
            <div style={styles.summaryItemTitle}>Parenting focus:</div>
            <ul style={styles.summaryList}>
              {outEmotions.map(emotion => (
                <li key={emotion} style={styles.summaryListItem}>
                  {EMOTION_LABELS[emotion]}: {EMOTION_CONTENT[emotion].parentingFocus}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Export */}
      <section style={styles.exportSection}>
        <label style={styles.label} htmlFor="export-data">
          Export Data (JSON):
        </label>
        <textarea
          id="export-data"
          readOnly
          value={JSON.stringify(exportData, null, 2)}
          style={styles.exportTextarea}
        />
      </section>
    </div>
    </Layout>
  );
}