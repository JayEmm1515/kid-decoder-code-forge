import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Baby, Heart, Shield, Phone, AlertTriangle } from 'lucide-react';
import Layout from '@/components/Layout';

export default function EarlyYearsPage() {
  const strategies = [
    {
      title: "Building a Secure Base: The Circle of Security",
      content: "In the early years, your main job is to be a 'secure base' and a 'safe haven' for your child. Inspired by Attachment Theory and the Circle of Security model, this means being present for your child's explorations and welcoming them back for comfort and reassurance. When your bub looks to you for a reaction, they're checking in. A calm, loving response builds their sense of safety in the world.",
      icon: Shield,
      color: 'text-teal-grey'
    },
    {
      title: "Co-Regulation: Your Superpower",
      content: "Infants can't manage their big feelings alone; they rely on you. This is called co-regulation. As Dr. Gabor Maté's work highlights, a parent's calm presence helps to soothe the child's nervous system. When you stay calm during their distress, you're not just stopping the crying; you are teaching their brain how to handle stress.",
      icon: Heart,
      color: 'text-violet'
    },
    {
      title: "Understanding 'Flipping Their Lid': Dan Siegel's Hand Model",
      content: "Dr. Dan Siegel's 'hand model of the brain' is a brilliant way to understand tantrums. When your toddler is overwhelmed, their 'upstairs brain' (thinking part) disconnects from the 'downstairs brain' (feeling/survival part). They've 'flipped their lid'. In this state, they can't listen to reason. The first step is always connection and soothing to help them get their thinking brain back online.",
      icon: Baby,
      color: 'text-soft-red'
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
                <CardContent>
                  <p className="text-white/90 leading-relaxed">{strategy.content}</p>
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