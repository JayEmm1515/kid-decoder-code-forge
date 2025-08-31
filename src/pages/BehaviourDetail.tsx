import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BehaviorGuide } from '@/entities/BehaviorGuide';
import { createPageUrl } from '@/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Lightbulb, UserCheck, Heart, AlertTriangle, Phone } from 'lucide-react';
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
        <div className="min-h-screen bg-white p-8 text-center text-ink">Loading guide...</div>
      </Layout>
    );
  }

  if (!guide) {
    return (
      <Layout>
        <div className="min-h-screen bg-white p-8 text-center text-ink">Could not find the requested guide.</div>
      </Layout>
    );
  }

  const sections = [
    { title: "What It Means", content: guide.what_it_means, icon: Lightbulb, color: "var(--teal-grey)" },
    { title: "What It Might Convey", content: guide.what_it_conveys, icon: Heart, color: "var(--violet)" },
    { title: "Your Experience as a Parent", content: guide.parent_experience, icon: UserCheck, color: "var(--soft-red)" }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-white p-4 md:p-8">
        <div className="max-w-3xl mx-auto">
          <header className="mb-8">
            <Link to={createPageUrl(`BehaviourList?age_group=${guide.age_group}`)} className="inline-flex items-center gap-2 text-muted hover:text-ink mb-4 transition-colors font-medium">
              <ArrowLeft className="w-5 h-5" />
              Back to Behaviour List
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-ink tracking-tight">{guide.title}</h1>
            <p className="text-lg text-muted mt-3">An evidence-based guide for the {guide.age_group} years age group.</p>
          </header>

          {/* Main Content Sections */}
          <div className="space-y-6 mb-10">
            {sections.map(section => (
              <div key={section.title}>
                <h2 className="flex items-center gap-3 text-2xl font-bold text-ink mb-4">
                  <div style={{ backgroundColor: section.color }} className="w-10 h-10 rounded-lg flex items-center justify-center">
                     <section.icon className="w-6 h-6 text-white" />
                  </div>
                  {section.title}
                </h2>
                <div className="prose prose-lg text-ink max-w-none leading-relaxed">
                  <p>{section.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* When to Seek Help */}
          <Card className="bg-pink-ice border-dusty-rose">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-plum flex items-center gap-3">
                <AlertTriangle className="w-6 h-6" />
                When to Seek Professional Help
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-plum">
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
        </div>
      </div>
    </Layout>
  );
}