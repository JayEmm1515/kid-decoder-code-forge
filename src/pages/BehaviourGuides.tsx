// pages/BehaviourGuides.tsx
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

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
    <div
      className="min-h-screen p-6 md:p-10"
      style={{
        backgroundImage: "url('/images/ui/behaviour-guides.webp')",
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
                  // clay-style shadow + hover
                  'shadow-[0_8px_16px_rgba(0,0,0,0.3)]',
                  'hover:shadow-[0_12px_24px_rgba(0,0,0,0.4)]',
                  'hover:-translate-y-1',
                  'transition-all duration-200',
                  'relative overflow-hidden',
                ].join(' ')}
              >
                <span className="relative z-10">{b.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
