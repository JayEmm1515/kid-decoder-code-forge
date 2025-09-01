import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Baby, Heart, Shield, Phone, AlertTriangle } from 'lucide-react';
import Layout from '@/components/Layout';

export default function EarlyYearsPage() {
  const strategies = [
    {
      title: "Building a Secure Base: The Circle of Security Foundation",
      content: "Based on Bowlby's attachment theory and refined by the Circle of Security program, your role is to be both a 'secure base' from which your child explores and a 'safe haven' they return to for comfort. When your baby reaches for you, makes eye contact, or shows distress, they're seeking connection. Research shows that consistent, warm responses during these moments build neural pathways for emotional regulation and trust that last a lifetime.",
      details: "Key practices: Follow their lead in play, offer comfort without rushing to 'fix', validate their emotions even when you can't understand the cause. Mary Ainsworth's research revealed that securely attached children had caregivers who were consistently available and responsive.",
      icon: Shield,
      color: 'text-mint'
    },
    {
      title: "Co-Regulation: Teaching Through Your Nervous System", 
      content: "Gabor Maté's extensive work shows that babies are born with an immature nervous system that relies entirely on their caregiver's regulation. Your calm breathing, soothing voice, and steady heartbeat literally teach their nervous system how to return to balance. This isn't about being perfect – it's about repair when things go wrong.",
      details: "Practical approach: When baby is distressed, focus first on your own breathing. Speak slowly and softly. Hold them close so they feel your regulated state. Research by Stephen Porges shows this 'co-regulation' builds their future capacity for self-soothing.",
      icon: Heart,
      color: 'text-violet'
    },
    {
      title: "The Developing Brain: Dan Siegel's Integration Model",
      content: "Dan Siegel's research reveals that a baby's brain is building one million neural connections per second. The 'downstairs brain' (emotions, survival instincts) is fully online, while the 'upstairs brain' (logic, reasoning) won't be ready until age 25. Understanding this helps you respond with compassion rather than frustration when they can't be 'reasoned with'.",
      details: "Your response matters: Connection before direction. When they're upset, comfort first (downstairs brain), then engage their curiosity (beginning upstairs brain development). This integration work you do now forms the foundation for their future emotional intelligence.",
      icon: Baby,
      color: 'text-peach'
    },
    {
      title: "Evolved Developmental Niche: Darcia Narvaez's Framework",
      content: "Developmental psychologist Darcia Narvaez describes the 'evolved developmental niche' - the conditions babies evolved to expect for optimal brain development. This includes responsive caregiving, extensive physical affection, multiple caring adults, and rich sensory experiences in natural environments.",
      details: "Modern application: Skin-to-skin contact, baby wearing, responsive feeding, limiting overstimulation. Research shows children who receive these evolved supports show better stress resilience, empathy development, and emotional regulation throughout life.",
      icon: Heart,
      color: 'text-rose'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen app-bg-aurora p-4 md:p-8 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white flex items-center gap-3">
              <Baby className="w-10 h-10 text-mint" />
              Early Years (0-2)
            </h1>
            <p className="text-white/80 mt-2">Nurturing the foundations of emotional wellbeing through connection.</p>
          </div>

          <div className="grid md:grid-cols-1 gap-6">
            {strategies.map(strategy => (
              <Card key={strategy.title} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className={`text-xl font-semibold flex items-center gap-3 text-white`}>
                    <strategy.icon className="w-6 h-6" />
                    {strategy.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-white/90 leading-relaxed">{strategy.content}</p>
                  {strategy.details && (
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <p className="text-white/80 text-sm leading-relaxed italic">{strategy.details}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 bg-soft-red/20 border-soft-red/50">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-white flex items-center gap-3">
                <AlertTriangle className="w-6 h-6" />
                When to Seek Professional Help
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-white/90">
              <p>While challenges are a normal part of development, trust your instincts. Consider speaking with a GP or Child Health Nurse if you notice:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Lack of response to sounds or failure to babble by 12 months.</li>
                <li>No pointing or other gestures by 12 months.</li>
                <li>Doesn't smile or show warm, joyful expressions by 6 months.</li>
                <li>Significant feeding or sleeping issues that cause you major concern.</li>
                <li>You are feeling overwhelmed, anxious, or depressed. Your wellbeing is paramount.</li>
              </ul>
              <p className="font-bold flex items-center gap-2 mt-4">
                <Phone className="w-5 h-5"/>
                For any immediate medical emergency, always call 000.
              </p>
            </CardContent>
          </Card>
        </div>
       </div>
    </Layout>
  );
}