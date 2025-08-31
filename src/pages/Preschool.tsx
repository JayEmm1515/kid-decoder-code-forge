import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ToyBrick, Heart, Shield, Phone, AlertTriangle } from 'lucide-react';
import Layout from '@/components/Layout';

export default function PreschoolPage() {
  const strategies = [
    {
      title: "'Connect and Redirect': The No-Drama Discipline Approach",
      content: "When your preschooler is having a tough time, their 'downstairs brain' (emotions, survival) has taken over. Dr. Dan Siegel's 'Connect and Redirect' strategy is key here. First, connect with the emotion ('I can see you're very angry the block tower fell'). This soothes the downstairs brain. Only then can you redirect to problem-solving ('Let's build it again, maybe with a wider base this time').",
      icon: Heart,
      color: "text-violet"
    },
    {
      title: "Play is Their Language: Insights from Gabor Maté",
      content: "Dr. Gabor Maté emphasizes that for a child, play is not just fun; it's the primary way they learn, process emotions, and strengthen their attachment with you. When your child is acting out, sometimes the best remedy is 15 minutes of dedicated, child-led play. It refills their 'connection cup' and can resolve many challenging behaviours without a single word of discipline.",
      icon: ToyBrick,
      color: "text-mint"
    },
    {
      title: "Name It to Tame It: Building Emotional Literacy",
      content: "Preschoolers have big, complex feelings but a limited vocabulary. Help them by giving their emotions a name. 'It looks like you're feeling frustrated because the puzzle piece won't fit.' This 'Name it to Tame it' technique helps integrate their left (logical) and right (emotional) brain hemispheres, building their capacity for emotional regulation over time.",
      icon: Shield,
      color: "text-peach"
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