import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Anchor, Users, Phone, AlertTriangle } from 'lucide-react';
import Layout from '@/components/Layout';

export default function TeensPage() {
  const strategies = [
    {
      title: "Be the Anchor, Not the Storm: The Secure Base in Adolescence",
      content: "Teens are pushing for independence, but they still desperately need a secure base to return to. Your role shifts from manager to consultant. Be their anchor in the stormy seas of adolescence. This means being a non-anxious presence they can count on, even when they mess up. Your unwavering connection is the most protective factor against risk-taking behaviours.",
      icon: Anchor,
      color: "text-rose"
    },
    {
      title: "The 'Yes Brain': Fostering Resilience and Receptivity",
      content: "From Drs. Siegel and Bryson's work on the 'Yes Brain', the goal is to keep your teen's brain in a receptive state of openness and curiosity, rather than a reactive 'No Brain' state of defence. This is achieved by valuing their perspective (even if you don't agree with it), showing empathy, and moving from 'You can't' to 'How can we...'.",
      icon: Users,
      color: "text-mint"
    },
    {
      title: "Understanding the 'Remodelling' Brain",
      content: "The teenage brain is undergoing a massive remodelling project. The emotional, reward-seeking parts are highly active, while the prefrontal cortex (responsible for judgment and impulse control) is still under construction. This explains why they are prone to risky behaviour and intense emotions. It's not defiance for defiance's sake; it's neuroscience. Understanding this helps you respond with more patience and less frustration.",
      icon: GraduationCap,
      color: "text-violet"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen app-bg-warmcool p-4 md:p-8 text-white">
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