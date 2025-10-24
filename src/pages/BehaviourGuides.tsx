import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Layout from '@/components/Layout';

const behaviours = [
  { label: 'Tantrums', slug: 'tantrums', grad: 'from-[#FA9F6B] to-[#E6765E]' },
  { label: 'Aggression', slug: 'aggression', grad: 'from-[#F9557B] to-[#BB32A1]' },
  { label: 'Defiance', slug: 'defiance', grad: 'from-[#579D9C] to-[#0C3B38]' },
  { label: 'Withdrawal', slug: 'withdrawal', grad: 'from-[#BB32A1] to-[#E576C5]' },
  { label: 'Anxiety', slug: 'anxiety', grad: 'from-[#F9C35E] to-[#FA9F6B]' },
  { label: 'Sensory Overload', slug: 'sensory-overload', grad: 'from-[#E576C5] to-[#BB32A1]' },
  { label: 'Separation Distress', slug: 'separation-distress', grad: 'from-[#579D9C] to-[#8BD1CF]' },
  { label: 'Refusal', slug: 'refusal', grad: 'from-[#0C3B38] to-[#579D9C]' },
  { label: 'Meltdowns (ND)', slug: 'meltdowns-nd', grad: 'from-[#BB32A1] to-[#F9557B]' },
  { label: 'Positive Behaviours', slug: 'positive', grad: 'from-[#8BD1CF] to-[#579D9C]' },
];

export default function BehaviourGuides() {
  return (
    <Layout currentPageName="Behaviour Guides">
      <div
        className="min-h-screen p-6 md:p-10"
        style={{
          backgroundImage: "url('/public/behaviour-guides-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-6">
            Behaviour Guides
          </h1>

          <div className="grid sm:grid-cols-2 gap-4">
            {behaviours.map(b => (
              <Link key={b.slug} to={createPageUrl(`BehaviourDetail?slug=${b.slug}`)}>
                <div
                  className={[
                    'group rounded-2xl px-5 py-4 text-white font-semibold text-lg',
                    'bg-gradient-to-br', b.grad,
                    'shadow-lg hover:shadow-2xl',
                    'transform hover:scale-105 transition-all duration-300',
                    'backdrop-blur-sm border border-white/10',
                    'hover:border-white/30',
                  ].join(' ')}
                >
                  <div className="flex items-center justify-between">
                    <span className="drop-shadow-md">{b.label}</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
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
