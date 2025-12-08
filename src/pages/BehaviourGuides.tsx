import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { ChevronRight } from 'lucide-react';

const behaviours = [
  { label: 'Tantrums', slug: 'tantrums', cardStyle: 'glass-card-pink' },
  { label: 'Aggression', slug: 'aggression', cardStyle: 'glass-card-purple' },
  { label: 'Defiance', slug: 'defiance', cardStyle: 'glass-card-teal' },
  { label: 'Withdrawal', slug: 'withdrawal', cardStyle: 'glass-card-pink' },
  { label: 'Anxiety', slug: 'anxiety', cardStyle: 'glass-card-purple' },
  { label: 'Sensory Overload', slug: 'sensory-overload', cardStyle: 'glass-card-teal' },
  { label: 'Separation Distress', slug: 'separation-distress', cardStyle: 'glass-card-pink' },
  { label: 'Refusal', slug: 'refusal', cardStyle: 'glass-card-purple' },
  { label: 'Meltdowns (ND)', slug: 'meltdowns-nd', cardStyle: 'glass-card-teal' },
  { label: 'Positive Behaviours', slug: 'positive', cardStyle: 'glass-card-pink' },
];

export default function BehaviourGuides() {
  return (
    <Layout>
      <div className="min-h-screen bg-airy p-4 md:p-8 pb-24">
        <div className="max-w-4xl mx-auto space-y-6">
          
          <PageHeader title="Behaviour Guides" />

          <div className="grid sm:grid-cols-2 gap-4">
            {behaviours.map(b => (
              <Link key={b.slug} to={createPageUrl(`BehaviourDetail?slug=${b.slug}`)} className="group">
                <div className={`${b.cardStyle} p-5`}>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">{b.label}</span>
                    <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-teal group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
