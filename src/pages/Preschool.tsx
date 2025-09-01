import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ToyBrick, Heart, Shield, Phone, AlertTriangle } from 'lucide-react';
import Layout from '@/components/Layout';

export default function PreschoolPage() {
  const strategies = [
    {
      title: "Connect and Redirect: The Whole-Brain Child Approach",
      content: "Dan Siegel and Tina Payne Bryson's research shows that when preschoolers are overwhelmed, their 'upstairs brain' (logic, planning) goes offline. The key is connection first - 'I can see you're really upset about the broken toy' - which activates their social engagement system and helps bring the thinking brain back online. Only then redirect to solutions.",
      details: "The science: Mirror neurons fire when you acknowledge their emotion, helping them feel understood. This releases oxytocin and reduces cortisol, literally changing their brain state from reactive to receptive. Then you can engage their prefrontal cortex with collaborative problem-solving.",
      icon: Heart,
      color: "text-violet"
    },
    {
      title: "Play as Attachment Language: Gabor Maté's Insights",
      content: "Gabor Maté's work reveals that play serves attachment before learning. When children act out, they're often communicating 'I need connection.' Research shows that 15-20 minutes of child-led, uninterrupted play daily can prevent many behavioral challenges by filling their deep need to feel delighted in by their caregiver.",
      details: "Triple P principle in action: Follow their lead completely. Your job isn't to teach or improve the play, but to join their world with genuine interest. This communicates unconditional positive regard, which Mary Ainsworth found was crucial for secure attachment formation.",
      icon: ToyBrick,
      color: "text-mint"
    },
    {
      title: "Emotional Coaching: Building Integration", 
      content: "Dan Siegel's 'name it to tame it' technique helps integrate the right brain (emotion) with the left brain (language). When you help preschoolers label emotions, you're literally helping different parts of their brain communicate, building neural pathways for future emotional regulation.",
      details: "Practical steps: Acknowledge the emotion first ('You seem frustrated'), then be curious ('What's that like in your body?'), validate ('That makes sense'), then explore together ('What could help?'). This process builds their emotional vocabulary and self-awareness.",
      icon: Shield,
      color: "text-peach"
    },
    {
      title: "Positive Parenting: The Triple P Foundation",
      content: "The Triple P program emphasizes that preschoolers thrive with clear, consistent boundaries delivered with warmth. Their research shows that positive attention for desired behavior is far more effective than punishment for unwanted behavior. Catch them being good, describe what you see, and celebrate their efforts.",
      details: "Key strategies: Descriptive praise ('I noticed you shared your toys with your sister'), planned ignoring for minor misbehavior, and natural consequences delivered with empathy. This builds intrinsic motivation and self-regulation skills.",
      icon: ToyBrick,
      color: "text-rose"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen app-bg-therapy p-4 md:p-8 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white flex items-center gap-3">
              <ToyBrick className="w-10 h-10 text-pink-ice" />
              Preschool (3-5)
            </h1>
            <p className="text-white/80 mt-2">Guiding big emotions and building cooperation through play and connection.</p>
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
              <p>This age is full of testing boundaries, but it's wise to consult a GP or psychologist if your child:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Shows extreme, persistent aggression towards others (hitting, biting) that doesn't improve with guidance.</li>
                <li>Is unusually withdrawn, fearful, or anxious and avoids social interaction.</li>
                <li>Experiences significant delays in language or has trouble being understood by others.</li>
                <li>Shows a sudden and dramatic change in behaviour, mood, or sleep patterns.</li>
                <li>Is having extreme difficulty with toilet training (beyond age 4, if other concerns are present).</li>
              </ul>
              <p className="font-bold flex items-center gap-2 mt-4">
                <Phone className="w-5 h-5"/>
                If you ever feel your child is a danger to themselves or others, seek immediate help or call 000.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}