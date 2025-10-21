import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BehaviorGuide } from '@/entities/BehaviorGuide';
import { createPageUrl } from '@/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Lightbulb, UserCheck, Heart, AlertTriangle, Phone, MessageCircle, Sparkles } from 'lucide-react';
import Layout from '@/components/Layout';

export default function BehaviourDetailPage() {
  const [guide, setGuide] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const slug = new URLSearchParams(location.search).get('slug');

  useEffect(() => {
    if (slug) {
      setIsLoading(true);
      BehaviorGuide.filter({ slug })
        .then(data => {
          if (data.length > 0) {
            setGuide(data[0]);
          }
          setIsLoading(false);
        })
        .catch(err => {
          console.error("Error fetching guide:", err);
          setIsLoading(false);
        });
    }
  }, [slug]);

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen bg-teal-coral p-8 text-center text-ink">Loading guide...</div>
      </Layout>
    );
  }

  if (!guide) {
    return (
      <Layout>
        <div className="min-h-screen bg-teal-coral p-8 text-center text-ink">Could not find the requested guide.</div>
      </Layout>
    );
  }

  // Did You Know facts mapping
  const didYouKnowFacts = {
    'tantrums': 'When children "flip their lid" (Siegel), their logical brain shuts down. Connection and soothing must come before teaching or reasoning.',
    'aggression': 'Aggression is often a sign of overwhelm, not intent to harm. Naming feelings helps a child learn safer ways to express them.',
    'defiance': 'Defiance is a developmental push for autonomy. Circle of Security reminds us kids need both freedom to explore and reassurance of safety.',
    'clinginess': 'Clinginess signals a child checking that their "secure base" is steady. Short, predictable goodbye rituals reduce anxiety over time.',
    'separation-anxiety': 'Clinginess signals a child checking that their "secure base" is steady. Short, predictable goodbye rituals reduce anxiety over time.',
    'withdrawal': 'Withdrawal is often a coping strategy for overwhelm. Gentle presence—without pressure—invites re-connection.',
    'isolation': 'Withdrawal is often a coping strategy for overwhelm. Gentle presence—without pressure—invites re-connection.',
    'anxiety': 'Anxiety in children can look like stomach aches, irritability, or avoidance rather than obvious "worry" words.',
    'lying': 'Younger kids may "lie" because imagination is stronger than logic. Asking "What made it hard to tell the truth?" teaches honesty with empathy.',
    'fabrication': 'Younger kids may "lie" because imagination is stronger than logic. Asking "What made it hard to tell the truth?" teaches honesty with empathy.',
    'stealing': 'Impulse control develops gradually through childhood. Calm teaching about consequences shapes values more than punishment.',
    'taking-without-permission': 'Impulse control develops gradually through childhood. Calm teaching about consequences shapes values more than punishment.',
    'risk-taking': 'The teen brain is wired for risk—reward systems are on overdrive while judgment is still developing. Connection lowers risk.',
    'thrill-seeking': 'The teen brain is wired for risk—reward systems are on overdrive while judgment is still developing. Connection lowers risk.',
    'bedtime-resistance': 'Sleep difficulties often spike during developmental leaps. A consistent routine acts as a signal of safety for the brain.',
    'sleep-struggles': 'Sleep difficulties often spike during developmental leaps. A consistent routine acts as a signal of safety for the brain.',
    'mealtime-battles': 'Refusal is often about control, not just food. Offering choices ("Do you want carrot sticks or cucumber?") restores autonomy.',
    'picky-eating': 'Refusal is often about control, not just food. Offering choices ("Do you want carrot sticks or cucumber?") restores autonomy.',
    'toilet-training-resistance': 'Stress, big life changes, or pressure can cause regressions. Calm patience builds confidence faster than rewards or punishments alone.',
    'sibling-rivalry': 'Children compete for connection, not just toys. Special one-on-one time with each child reduces rivalry more than refereeing fights.',
    'jealousy': 'Jealousy reflects a fear of losing connection. Naming the feeling ("You wish I was just with you right now") reduces shame.',
    'bullying-others': 'Children who bully are often struggling with disconnection or stress themselves. Boundaries plus empathy can shift behaviour.',
    'being-bullied': 'Secure attachment is the strongest protective factor against bullying. Kids with safe adult allies cope and recover better.',
    'school-refusal': 'School avoidance often masks anxiety. Small exposure steps—paired with strong parental empathy—help more than force.',
    'excessive-screen-use': 'Screens trigger dopamine like other rewards. Screen addiction. Clear, consistent routines—not punishment—teach balance.',
    'screen-limits': 'Screens trigger dopamine like other rewards. Screen addiction. Clear, consistent routines—not punishment—teach balance.',
    'hyperactivity': 'Movement helps regulate attention and emotions. Allowing active breaks improves focus rather than punishing fidgeting.',
    'restlessness': 'Movement helps regulate attention and emotions. Allowing active breaks improves focus rather than punishing fidgeting.',
    'inattention': 'Inattention may be a sign of fatigue, stress, or unmet sensory needs—not laziness. Gentle support builds focus over time.',
    'daydreaming': 'Inattention may be a sign of fatigue, stress, or unmet sensory needs—not laziness. Gentle support builds focus over time.',
    'excessive-crying': 'Crying is a biological stress release. Being "with" the child in crying moments wires the brain for resilience.',
    'whining': 'Whining often means "I need connection" but lack the skills to ask directly. Pausing to connect reduces it more than scolding.',
    'over-sensitivity': 'Some children\'s nervous systems are more finely tuned. Maté notes they absorb stress easily, needing extra co-regulation.',
    'emotional-sensitivity': 'Some children\'s nervous systems are more finely tuned. Maté notes they absorb stress easily, needing extra co-regulation.',
    'sensory-sensitivity': 'Some children\'s nervous systems are more finely tuned. Maté notes they absorb stress easily, needing extra co-regulation.',
    'impulsivity': 'Impulse control develops slowly into the twenties. Scaffolding (visual reminders, step-by-step cues) supports self-control better than punishment.',
    'bossiness': 'Over-control can be a way to manage inner anxiety. Coaching flexible play builds resilience and friendships.',
    'controlling-play': 'Over-control can be a way to manage inner anxiety. Coaching flexible play builds resilience and friendships.',
    'dishonesty-homework': 'Avoidance often reflects overwhelm or fear of failure. Curiosity and collaboration work better than punishment.',
    'homework-avoidance': 'Avoidance often reflects overwhelm or fear of failure. Curiosity and collaboration work better than punishment.',
    'chore-avoidance': 'Avoidance often reflects overwhelm or fear of failure. Curiosity and collaboration work better than punishment.',
    'perfectionism': 'Perfectionism often arises from fear of losing approval. Normalising mistakes teaches resilience and self-worth.',
    'fear-of-failure': 'Perfectionism often arises from fear of losing approval. Normalising mistakes teaches resilience and self-worth.',
    'risk-avoidance': 'Over-cautious kids may have heightened sensitivity. Gentle encouragement in small steps helps expand confidence.',
    'over-cautiousness': 'Over-cautious kids may have heightened sensitivity. Gentle encouragement in small steps helps expand confidence.',
    'regression': 'Regression often follows stress or transitions. It\'s usually a temporary way of seeking safety, not "bad behaviour."',
    'acting-younger': 'Regression often follows stress or transitions. It\'s usually a temporary way of seeking safety, not "bad behaviour."',
    'substance-curiosity': 'Maté stresses that substance use is rarely about the drug itself, but about disconnection and pain. Staying connected is the most protective factor.',
    'substance-experimentation': 'Maté stresses that substance use is rarely about the drug itself, but about disconnection and pain. Staying connected is the most protective factor.'
  };

  // Get the fact for this behavior guide
  const getDidYouKnowFact = (title) => {
    const normalizedTitle = title.toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters except hyphens and spaces
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/--+/g, '-'); // Replace multiple hyphens with single hyphen
    
    // Try exact match first
    if (didYouKnowFacts[normalizedTitle]) {
      return didYouKnowFacts[normalizedTitle];
    }
    
    // Try partial matches for complex titles
    for (const [key, fact] of Object.entries(didYouKnowFacts)) {
      if (normalizedTitle.includes(key) || key.includes(normalizedTitle.split('-')[0])) {
        return fact;
      }
    }
    
    return null;
  };

  const didYouKnowFact = getDidYouKnowFact(guide.title);

  const sections = [
    { title: "What It Means", content: guide.what_it_means, icon: Lightbulb, color: "var(--teal-grey)" },
    { title: "What It Might Convey", content: guide.what_it_conveys, icon: Heart, color: "var(--violet)" },
    { title: "Your Experience as a Parent", content: guide.parent_experience, icon: UserCheck, color: "var(--soft-red)" }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 md:p-8">
        <div className="max-w-3xl mx-auto">
          <header className="mb-8">
            <Link to={createPageUrl(`BehaviourList?age_group=${guide.age_group}`)} className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-4 transition-colors font-medium">
              <ArrowLeft className="w-5 h-5" />
              Back to Behaviour List
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 tracking-tight">{guide.title}</h1>
            <p className="text-lg text-gray-300 mt-3">An evidence-based guide for the {guide.age_group} years age group.</p>
          </header>

          {/* Main Content Sections */}
          <div className="space-y-6 mb-10">
            {sections.map(section => (
              <div key={section.title} className="bg-slate-800/60 backdrop-blur-xl border border-cyan-400/20 rounded-3xl p-6">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-cyan-400 mb-4">
                  <div style={{ backgroundColor: section.color }} className="w-10 h-10 rounded-2xl flex items-center justify-center">
                     <section.icon className="w-6 h-6 text-white" />
                  </div>
                  {section.title}
                </h2>
                <div className="prose prose-lg max-w-none leading-relaxed text-gray-300">
                  <p>{section.content}</p>
                </div>
              </div>
            ))}
            
            {/* Age-Specific Strategies */}
            {guide.age_specific_strategies && (
              <div className="bg-slate-800/60 backdrop-blur-xl border border-cyan-400/20 rounded-3xl p-6">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-cyan-400 mb-4">
                  <div style={{ backgroundColor: "var(--primary)" }} className="w-10 h-10 rounded-2xl flex items-center justify-center">
                     <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  Practical Strategies for {guide.age_group} Years
                </h2>
                <div className="grid gap-3">
                  {guide.age_specific_strategies.map((strategy, index) => (
                    <div key={index} className="p-4 bg-slate-700/30 rounded-2xl border-l-4 border-cyan-400">
                      <p className="text-gray-300 leading-relaxed">{strategy}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Did You Know Section */}
          {didYouKnowFact && (
            <Card className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border-cyan-400/30 rounded-3xl mb-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                      Did You Know?
                    </h3>
                    <p className="text-gray-300 leading-relaxed italic">
                      {didYouKnowFact}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* When to Seek Help */}
          <Card className="bg-red-900/20 border-red-500/30 rounded-3xl mb-6">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-red-400 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6" />
                Red Flags to Watch For
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-300">
              <p>Consider seeking immediate professional help if you notice:</p>
              {guide.red_flags && (
                <ul className="list-disc list-inside space-y-2">
                  {guide.red_flags.map((flag, index) => (
                    <li key={index}>{flag}</li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>

          {/* When to Seek Help */}
          <Card className="bg-red-900/20 border-red-500/30 rounded-3xl">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-red-400 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6" />
                When to Seek Professional Help
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-300">
              <p>If you notice persistent patterns that concern you, consider reaching out to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Your child's GP or pediatrician</li>
                <li>A child psychologist or family therapist</li>
                <li>Your child's school counselor</li>
                <li>Local parenting support groups</li>
              </ul>
              <p className="font-bold flex items-center gap-2 mt-4">
                <Phone className="w-5 h-5"/>
                For any immediate safety concerns, always call 000.
              </p>
            </CardContent>
          </Card>

          {/* AI Chat Bot Link */}
          <Card className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border-cyan-400/30 rounded-3xl mt-6">
            <CardContent className="p-6 text-center">
              <div className="flex flex-col items-center gap-4">
                <MessageCircle className="w-12 h-12 text-cyan-400" />
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Have Questions About Other Behaviors?</h3>
                  <p className="text-gray-300 mb-4">
                    If you have questions about behaviors not covered in our guides, our AI parenting assistant is here to help with evidence-based guidance.
                  </p>
                </div>
                <Button asChild className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white rounded-2xl shadow-lg">
                  <Link to={createPageUrl("ParentingChat")} className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Ask Our AI Assistant
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}