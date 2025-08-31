import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Baby, ToyBrick, BookOpen, GraduationCap, ArrowRight, Search } from 'lucide-react';
import Layout from '@/components/Layout';

export default function UnderstandingBehaviourPage() {
  const ageGroups = [
    {
      title: 'Early Years (0-2)',
      description: "Attachment, co-regulation, and first words.",
      icon: Baby,
      age_group: '0-2',
      color: 'var(--teal-grey)',
      shadowColor: 'shadow-teal-500/10'
    },
    {
      title: 'Preschool (3-5)',
      description: "Big emotions, play, and growing independence.",
      icon: ToyBrick,
      age_group: '3-5',
      color: 'var(--violet)',
      shadowColor: 'shadow-purple-500/10'
    },
    {
      title: 'School Age (6-12)',
      description: "Friendships, rules, and a wider world.",
      icon: BookOpen,
      age_group: '6-12',
      color: 'var(--peach)',
      shadowColor: 'shadow-yellow-500/20'
    },
    {
      title: 'Teens (13-18)',
      description: "Identity, connection, and the path to adulthood.",
      icon: GraduationCap,
      age_group: '13-18',
      color: 'var(--rose)',
      shadowColor: 'shadow-pink-500/10'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-white p-4 md:p-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-purple-100 rounded-2xl mb-4">
              <Search className="w-10 h-10 text-violet" />
            </div>
            <h1 className="text-4xl font-extrabold text-ink tracking-tight">First, let's find the right lens.</h1>
            <p className="text-lg text-muted mt-3 max-w-2xl mx-auto">A child's behaviour is deeply connected to their developmental stage. Select an age group to see tailored guidance.</p>
          </div>
         
          <div className="grid md:grid-cols-2 gap-6">
            {ageGroups.map((group) => (
              <Link key={group.age_group} to={createPageUrl(`BehaviourList?age_group=${group.age_group}`)} className="group">
                <Card className={`p-6 bg-white border-2 border-transparent transition-all duration-300 hover:border-[color:var(--color)] hover:shadow-2xl ${group.shadowColor} rounded-2xl h-full`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                       <div style={{ backgroundColor: group.color }} className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                         <group.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-ink">{group.title}</h2>
                        <p className="text-muted mt-1">{group.description}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-slate-300 group-hover:text-[color:var(--color)] transition-all duration-300 transform group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}