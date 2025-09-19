import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Anchor, Users, Phone, AlertTriangle, Heart } from 'lucide-react';
import Layout from '@/components/Layout';

export default function TeensPage() {
  const strategies = [
    {
      title: "The Secure Base Paradox: Staying Connected While Letting Go",
      content: "Attachment research shows that teens who feel most securely connected to parents are actually better able to individuate healthily. Your role shifts from manager to consultant - being their anchor while they navigate increasing independence. This isn't permissive parenting; it's being a non-anxious, consistent presence they can count on.",
      details: "Circle of Security in adolescence: Be bigger, stronger, wiser, and kind. They need to know you can handle their emotions without becoming reactive. Your regulation during their dysregulation teaches them that intense feelings are manageable and temporary.",
      icon: Anchor,
      color: "text-rose"
    },
    {
      title: "Cultivating the 'Yes Brain': Receptivity Over Reactivity", 
      content: "Dan Siegel and Tina Payne Bryson's 'Yes Brain' research shows that adolescents learn best when their brains are in a state of openness rather than defensiveness. This happens when they feel truly seen and heard, even when you disagree with their choices. Lead with curiosity before correction.",
      details: "Practical approach: 'Help me understand your perspective' before sharing yours. Validate their emotions even when you can't support their actions. This keeps their prefrontal cortex online and available for learning, rather than triggering fight-or-flight responses.",
      icon: Users,
      color: "text-mint"
    },
    {
      title: "The Adolescent Brain Revolution: Understanding Development",
      content: "Neuroscientist David Yeager's research reveals that the teenage brain isn't broken - it's designed for exploration and sensation-seeking to prepare them for independence. The limbic system is highly active while the prefrontal cortex is still developing, explaining their intensity and impulsivity.",
      details: "This knowledge changes everything: Their behavior isn't personal or purposefully difficult. Their brains are literally wired for risk-taking and emotional intensity. Understanding this helps you respond with patience rather than taking their behavior as a reflection of your parenting.",
      icon: GraduationCap,
      color: "text-violet"
    },
    {
      title: "Collaborative Authority: Respecting Their Developing Autonomy",
      content: "Research by Laurence Steinberg shows that teens need increasing autonomy with consistent support. This means involving them in family decisions, respecting their perspectives, while maintaining clear boundaries around safety and values. It's authoritative, not authoritarian or permissive.",
      details: "Implementation: Include them in creating family rules, explain the 'why' behind boundaries, negotiate on non-safety issues, and follow through with agreed consequences. This builds their decision-making skills while maintaining the relationship.",
      icon: Heart,
      color: "text-peach"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-coral-teal p-4 md:p-8 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white flex items-center gap-3">
              <GraduationCap className="w-10 h-10 text-rose" />
              Teens (13-18)
            </h1>
            <p className="text-white/80 mt-2">Parenting through the brain's biggest remodel with connection and trust.</p>
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
              <p>Adolescence has its ups and downs, but professional help is crucial if you notice:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Significant changes in mood, including persistent depression, irritability, or anxiety.</li>
                <li>Withdrawal from friends, family, and activities they once enjoyed.</li>
                <li>A steep decline in academic performance.</li>
                <li>Signs of substance abuse, eating disorders, or self-harm (e.g., unexplained cuts or burns).</li>
                <li>Engaging in high-risk behaviours or having major trouble with the law.</li>
                <li>Any talk of suicide or wanting to die.</li>
              </ul>
              <p className="font-bold flex items-center gap-2 mt-4">
                <Phone className="w-5 h-5"/>
                Never dismiss talk of suicide. Contact a mental health professional, organisations like Headspace, or call 000 in an emergency.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}