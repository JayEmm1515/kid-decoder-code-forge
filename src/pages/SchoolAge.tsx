import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Brain, Users, Phone, AlertTriangle, Heart } from 'lucide-react';
import Layout from '@/components/Layout';

export default function SchoolAgePage() {
  const strategies = [
    {
      title: "Maintaining the Secure Base: Attachment in Middle Childhood",
      content: "John Bowlby's attachment theory shows that school-age children still need you as their secure base, even as they venture into the wider world. Gabor Maté's research emphasizes that the primary attachment relationship buffers against peer pressure, academic stress, and social challenges. Your consistent availability matters more than being the 'fun' parent.",
      details: "Create ritual connection time: 10-15 minutes daily of child-led conversation with no advice-giving. Ask open questions like 'What was the best part of your day?' This maintains the attachment relationship as their primary source of safety and belonging.",
      icon: Users,
      color: "text-pastel-y"
    },
    {
      title: "Mindful Awareness: Dan Siegel's Integration Practices",
      content: "Dan Siegel's 'Wheel of Awareness' teaches children to observe their inner world with curiosity rather than judgment. School-age children can begin to notice the difference between thoughts, feelings, and sensations, building the meta-cognitive skills essential for emotional regulation and academic success.",
      details: "Practice together: 'Let's notice what's happening in your body... your thoughts... your feelings.' This builds the prefrontal cortex areas responsible for self-awareness, attention regulation, and emotional balance. Research shows these skills predict better outcomes than IQ alone.",
      icon: Brain,
      color: "text-mint"
    },
    {
      title: "Collaborative Problem-Solving: Building Executive Function",
      content: "Moving beyond reward and punishment to collaborative problem-solving honors their developing prefrontal cortex. Dan Siegel's 'No-Drama Discipline' approach asks: 'How can we solve this problem together?' This builds executive function skills while maintaining the relationship.",
      details: "The process: Stay calm (your regulation helps theirs), acknowledge the problem without blame, brainstorm solutions together, agree on a plan, and follow up. This teaches responsibility, critical thinking, and collaborative skills they'll need for life.",
      icon: BookOpen,
      color: "text-violet"
    },
    {
      title: "The Power of Reflection: Building Emotional Intelligence",
      content: "School-age children can begin developing what Dan Siegel calls 'mindsight' - the ability to see the internal world of themselves and others. This is crucial for empathy, self-regulation, and social success. Teaching reflection builds these neural pathways.",
      details: "Daily practice: 'What do you think your friend was feeling when that happened?' or 'How did you handle that frustrating moment?' This develops the capacity to mentalize - understanding that behavior is driven by internal states, not just external events.",
      icon: Heart,
      color: "text-rose"
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