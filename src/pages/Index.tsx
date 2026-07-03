import { Link } from "react-router-dom";
import { ArrowRight, Plus } from "lucide-react";
import Layout from "@/components/Layout";

const AGE_GROUPS = [
  { label: "Toddlers", path: "/early-years" },
  { label: "Preschoolers", path: "/preschool" },
  { label: "Primary School", path: "/school-age" },
  { label: "Tweens", path: "/school-age" },
  { label: "Teens", path: "/teens" },
];

const Index = () => {
  return (
    <Layout currentPageName="Home">
      <div className="max-w-[520px] mx-auto px-5 pt-6 pb-16 md:max-w-3xl md:px-8">
        {/* Hero */}
        <section
          className="relative rounded-[34px] overflow-hidden mb-6 h-[520px] p-7 flex flex-col justify-end"
          style={{
            background:
              "linear-gradient(135deg, hsl(195 71% 22%) 0%, hsl(195 71% 14%) 100%)",
            boxShadow: "var(--shadow-clay-lg)",
          }}
        >
          {/* Decorative clay spheres */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 220, height: 220, top: -60, right: -50,
              background: "radial-gradient(circle at 35% 35%, hsl(348 82% 82%), hsl(348 76% 70%))",
              opacity: 0.5, filter: "blur(2px)",
            }}
          />
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 160, height: 160, bottom: 100, left: -40,
              background: "radial-gradient(circle at 30% 30%, hsl(187 40% 85%), hsl(187 40% 70%))",
              opacity: 0.35, filter: "blur(4px)",
            }}
          />

          <span
            className="absolute top-8 left-7 text-[13px] font-extrabold tracking-[0.15em]"
            style={{ color: "hsl(var(--pink))" }}
          >
            TODAY'S FOCUS
          </span>

          <h1 className="relative text-[38px] leading-[42px] font-black text-white tracking-wide mb-4">
            UNDERSTAND<br />THE WHY<br />BEHIND THEIR<br />BEHAVIOUR
          </h1>
          <p className="relative text-[15px] leading-[22px] text-white/90 w-3/4 mb-2">
            Decode big feelings with calm, connection and confidence.
          </p>

          <Link
            to="/behaviour-guides"
            className="absolute right-6 bottom-7 w-[62px] h-[62px] rounded-full flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
            style={{
              backgroundColor: "hsl(var(--pink-strong))",
              boxShadow: "0 6px 18px rgba(245,167,184,0.5)",
            }}
            aria-label="Explore focus"
          >
            <ArrowRight className="w-7 h-7 text-white" strokeWidth={2.5} />
          </Link>
        </section>

        {/* Two feature cards */}
        <div className="grid grid-cols-2 gap-[14px] mb-[18px]">
          <FeatureCard
            to="/being-with-exercise"
            title="BEING WITH"
            text="A guided Yes / No exercise to uncover core feelings beneath behaviour."
            colour="hsl(var(--pink))"
          />
          <FeatureCard
            to="/tracking"
            title="TRACKER"
            text="Log parent mood, child mood, behaviours, triggers and what helped."
            colour="hsl(var(--mint))"
          />
        </div>

        {/* Behaviour Library (large white card) */}
        <section
          className="bg-white rounded-[32px] p-6 mb-[18px]"
          style={{ boxShadow: "var(--shadow-clay)" }}
        >
          <p className="text-[12px] font-black tracking-[0.14em] mb-2" style={{ color: "hsl(var(--pink-accent))" }}>
            BEHAVIOUR LIBRARY
          </p>
          <h2 className="text-[34px] leading-9 font-black tracking-wide mb-[18px]" style={{ color: "hsl(var(--deep-teal))" }}>
            BY AGE GROUP
          </h2>
          <div className="flex flex-col gap-2.5">
            {AGE_GROUPS.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="h-[58px] rounded-[20px] px-[18px] flex items-center justify-between transition-colors hover:brightness-95"
                style={{ backgroundColor: "hsl(var(--neutral-row))" }}
              >
                <span className="text-[15px] font-bold" style={{ color: "hsl(var(--deep-teal))" }}>
                  {item.label}
                </span>
                <ArrowRight className="w-5 h-5" style={{ color: "hsl(var(--pink-accent))" }} strokeWidth={2.5} />
              </Link>
            ))}
          </div>
        </section>

        {/* Dark Chain Analysis card */}
        <Link
          to="/chain-analysis"
          className="block rounded-[32px] p-[26px] mb-[18px] transition-transform hover:-translate-y-1"
          style={{
            backgroundColor: "hsl(var(--deep-teal))",
            boxShadow: "var(--shadow-clay)",
          }}
        >
          <p className="text-[12px] font-black tracking-[0.14em] mb-2.5" style={{ color: "hsl(var(--pink))" }}>
            CHAIN ANALYSIS
          </p>
          <h2 className="text-[28px] leading-8 font-black text-white tracking-wide mb-3.5">
            TRIGGER → FEELING → BEHAVIOUR
          </h2>
          <p className="text-[14px] leading-[21px]" style={{ color: "hsl(var(--mint-soft))" }}>
            Map what happened before, during and after the behaviour so patterns become easier to understand.
          </p>
        </Link>

        {/* Toolkit card */}
        <Link
          to="/learn"
          className="block rounded-[32px] p-[26px] transition-transform hover:-translate-y-1"
          style={{
            backgroundColor: "hsl(var(--pink-soft))",
            boxShadow: "var(--shadow-clay)",
          }}
        >
          <p className="text-[12px] font-black tracking-[0.14em] mb-2" style={{ color: "hsl(var(--pink-accent))" }}>
            POSITIVE DISCIPLINE TOOLKIT
          </p>
          <h2 className="text-[34px] leading-9 font-black tracking-wide mb-3" style={{ color: "hsl(var(--deep-teal))" }}>
            CALM LIMITS
          </h2>
          <p className="text-[15px] leading-[22px]" style={{ color: "hsl(var(--deep-teal))" }}>
            Practical tools for boundaries, repair, routines, emotional coaching and connection before correction.
          </p>
        </Link>
      </div>

      <div className="h-24 md:hidden" />
    </Layout>
  );
};

function FeatureCard({
  to,
  title,
  text,
  colour,
}: {
  to: string;
  title: string;
  text: string;
  colour: string;
}) {
  return (
    <Link
      to={to}
      className="rounded-[28px] p-5 min-h-[180px] flex flex-col justify-between transition-transform hover:-translate-y-1"
      style={{ backgroundColor: colour, boxShadow: "var(--shadow-clay-sm)" }}
    >
      <div>
        <h3 className="text-[22px] leading-6 font-black tracking-wide mb-2" style={{ color: "hsl(var(--deep-teal))" }}>
          {title}
        </h3>
        <p className="text-[13px] leading-[18px]" style={{ color: "hsl(var(--deep-teal))" }}>
          {text}
        </p>
      </div>
      <div
        className="w-[38px] h-[38px] rounded-full flex items-center justify-center self-end"
        style={{ backgroundColor: "rgba(255,255,255,0.55)" }}
      >
        <Plus className="w-5 h-5" style={{ color: "hsl(var(--deep-teal))" }} strokeWidth={2.5} />
      </div>
    </Link>
  );
}

export default Index;
