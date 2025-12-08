import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Baby, ToyBrick, BookOpen, GraduationCap, ArrowRight, Search } from 'lucide-react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

export default function UnderstandingBehaviourPage() {
  const ageGroups = [
    {
      title: 'Early Years (0-2)',
      description: "Attachment, co-regulation, and first words.",
      icon: Baby,
      age_group: '0-2',
      cardStyle: 'glass-card-teal'
    },
    {
      title: 'Preschool (3-5)',
      description: "Big emotions, play, and growing independence.",
      icon: ToyBrick,
      age_group: '3-5',
      cardStyle: 'glass-card-purple'
    },
    {
      title: 'School Age (6-12)',
      description: "Friendships, rules, and a wider world.",
      icon: BookOpen,
      age_group: '6-12',
      cardStyle: 'glass-card-pink'
    },
    {
      title: 'Teens (13-18)',
      description: "Identity, connection, and the path to adulthood.",
      icon: GraduationCap,
      age_group: '13-18',
      cardStyle: 'glass-card-teal'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-airy p-4 md:p-8 pb-24">
        <div className="max-w-5xl mx-auto space-y-6">
          
          <PageHeader title="Understand Behaviour" />
          
          {/* Hero Section */}
          <div className="glass-card p-8 text-center">
            <div className="icon-box icon-box-purple w-16 h-16 mx-auto mb-4">
              <Search className="w-8 h-8 text-purple" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">First, let's find the right lens.</h2>
            <p className="text-white/60 max-w-xl mx-auto">
              A child's behaviour is deeply connected to their developmental stage. Select an age group to see tailored guidance.
            </p>
          </div>
         
          {/* Age Group Cards */}
          <div className="grid md:grid-cols-2 gap-4">
            {ageGroups.map((group) => (
              <Link key={group.age_group} to={createPageUrl(`BehaviourList?age_group=${group.age_group}`)} className="group">
                <div className={`${group.cardStyle} p-6 h-full`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="icon-box icon-box-teal w-12 h-12 flex-shrink-0">
                        <group.icon className="w-6 h-6 text-teal" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{group.title}</h3>
                        <p className="text-white/50 mt-1 text-sm">{group.description}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-teal group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* List Items Preview */}
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">Common Topics</h3>
              <span className="status-badge status-badge-teal">List Items</span>
            </div>
            <ul className="space-y-3">
              {['Tantrums & Meltdowns', 'Sleep Difficulties', 'Aggression', 'Anxiety'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-teal"></div>
                  <span className="text-white/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <button className="btn-pill w-full mt-4">
              View All Topics
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
