import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Brain, Users, Phone, AlertTriangle } from 'lucide-react';
import Layout from '@/components/Layout';

export default function SchoolAgePage() {
  const strategies = [
    {
      title: "Staying Connected: The Power of Attachment",
      content: "As their world expands with school and friends, your role as their secure base is more important than ever. Gabor Maté notes that the primary attachment relationship is the buffer against the stresses of the outside world. Make time for one-on-one connection, even just 10-15 minutes a day, to listen without judgment. This keeps the lines of communication open for when the big problems arise.",
      icon: Users,
      color: "text-pastel-y"
    },
    {
      title: "The Wheel of Awareness: Teaching Self-Reflection",
      content: "Dr. Dan Siegel's 'Wheel of Awareness' is a great concept for this age. You can guide them to notice what's happening in their body (sensations), their mind (thoughts), and their heart (feelings) without judgment. Asking 'What was that like for you?' instead of 'Why did you do that?' encourages them to look inwards, building the foundations of emotional intelligence.",
      icon: Brain,
      color: "text-mint"
    },
    {
      title: "Problem-Solving, Not Punishing",
      content: "When rules are broken, shift from punishment to collaborative problem-solving, a core tenet of 'No-Drama Discipline'. Say, 'The rule about screen time was broken. That's a problem. What are some ideas for how we can solve this and make sure it doesn't happen tomorrow?' This empowers them, respects their developing 'upstairs brain', and teaches critical life skills.",
      icon: BookOpen,
      color: "text-violet"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen app-bg-sunset p-4 md:p-8 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white flex items-center gap-3">
              <BookOpen className="w-10 h-10 text-pastel-y" />
              School Age (6-12)
            </h1>
            <p className="text-white/80 mt-2">Navigating friendships, rules, and growing independence while staying connected.</p>
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
              <p>This is an age of social and academic learning. Seek support from a GP, school counsellor, or psychologist if your child:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Exhibits persistent and significant struggles with learning, attention, or focus.</li>
                <li>Has ongoing difficulties making or keeping friends, or is the target of bullying.</li>
                <li>Shows persistent signs of anxiety or depression (e.g., frequent stomach aches, school refusal, sadness, loss of interest in hobbies).</li>
                <li>Has major, ongoing conflicts at home or school that don't respond to your best efforts.</li>
                <li>Expresses thoughts of self-harm or hopelessness.</li>
              </ul>
              <p className="font-bold flex items-center gap-2 mt-4">
                <Phone className="w-5 h-5"/>
                Any mention of self-harm should be taken seriously. Contact a mental health professional or call 000 for immediate crises.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}