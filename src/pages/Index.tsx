import { Link } from "react-router-dom";
import { ArrowRight, Menu, Bell, Heart } from "lucide-react";

const TEAL = "hsl(195 71% 17%)";
const TEAL_DARK = "hsl(195 71% 12%)";
const CREAM = "#F3ECE4";
const PEACH = "#F3D8D2";
const SAGE = "#CFDDD6";
const SAGE_BLUE = "#B9CBC8";
const PEACH_BTN = "#EBB6A8";
const INK = "#0D3B4C";

const CARDS = [
  {
    to: "/being-with-exercise",
    title: "BEING\nWITH",
    text: "Connection exercises for everyday moments",
    bg: CREAM,
    plateBg: "#FBF7F2",
    dot: TEAL,
    icon: <PlantIcon />,
  },
  {
    to: "/learn",
    title: "LEARN",
    text: "Guides, insights and expert advice",
    bg: PEACH,
    plateBg: "#F9E4DE",
    dot: "#FFFFFF",
    icon: <BookIcon />,
  },
  {
    to: "/understanding-behaviour",
    title: "DECODE",
    text: "Understand behaviour and what it's telling you",
    bg: SAGE,
    plateBg: "#E2ECE7",
    dot: PEACH_BTN,
    icon: <MagnifierIcon />,
  },
  {
    to: "/tracking",
    title: "TRACK",
    text: "Observe, reflect and see patterns",
    bg: SAGE_BLUE,
    plateBg: "#CFDDDA",
    dot: "#FFFFFF",
    icon: <BarsIcon />,
  },
];

export default function Index() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: INK }}>
      <div className="max-w-[520px] mx-auto pb-10">
        {/* HERO */}
        <section
          className="relative overflow-hidden px-7 pt-8 pb-10"
          style={{
            background: `linear-gradient(180deg, ${TEAL} 0%, ${TEAL_DARK} 100%)`,
          }}
        >
          {/* soft peach glow bottom-right of hero */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: 380, height: 380, right: -120, top: 40,
              background: "radial-gradient(circle, rgba(235,182,168,0.35), rgba(235,182,168,0) 70%)",
              filter: "blur(6px)",
            }}
          />

          {/* Top bar */}
          <div className="relative flex items-center justify-between mb-10">
            <button
              aria-label="Menu"
              className="w-11 h-11 flex items-center justify-center rounded-full"
              style={{ color: "#F1E9DF" }}
            >
              <Menu className="w-7 h-7" strokeWidth={2.2} />
            </button>
            <div
              className="relative w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                background: "#F5DED6",
                boxShadow: "0 6px 18px rgba(0,0,0,0.25), inset 0 1px 1px rgba(255,255,255,0.6)",
              }}
            >
              <Bell className="w-5 h-5" style={{ color: INK }} strokeWidth={2.2} />
              <span className="absolute top-0 right-0 w-3 h-3 rounded-full" style={{ backgroundColor: "#8BB4B2", border: "2px solid #F5DED6" }} />
            </div>
          </div>

          {/* Big title */}
          <h1
            className="relative font-black text-white tracking-tight"
            style={{
              fontFamily: '"Bebas Neue", "Anton", "Oswald", Impact, sans-serif',
              fontSize: 78,
              lineHeight: 0.92,
              letterSpacing: "0.01em",
            }}
          >
            THE KID<br />DECODER
          </h1>

          {/* Tagline */}
          <div className="relative mt-6">
            <p
              className="text-[13px] font-semibold tracking-[0.22em]"
              style={{ color: "#E9DFD5" }}
            >
              UNDERSTAND TODAY.
            </p>
            <p
              className="text-[13px] font-semibold tracking-[0.22em] mt-1"
              style={{ color: "#E9DFD5" }}
            >
              SUPPORT TOMORROW.
            </p>
            <div className="mt-3 h-[3px] w-16 rounded-full" style={{ backgroundColor: PEACH_BTN }} />
          </div>

          {/* Welcome back */}
          <div className="relative mt-10">
            <p
              className="text-[12px] font-bold tracking-[0.28em]"
              style={{ color: PEACH_BTN }}
            >
              WELCOME BACK,
            </p>
            <h2
              className="text-white font-black"
              style={{
                fontFamily: '"Bebas Neue", "Anton", Impact, sans-serif',
                fontSize: 56, lineHeight: 1, letterSpacing: "0.02em",
                marginTop: 6,
              }}
            >
              JESS
            </h2>
          </div>

          {/* Child selector pill */}
          <button
            className="relative mt-8 flex items-center gap-4 pl-2 pr-6 py-2 rounded-full w-full max-w-[320px]"
            style={{
              backgroundColor: "#FBF3EC",
              boxShadow: "0 10px 24px rgba(0,0,0,0.25), inset 0 1px 1px rgba(255,255,255,0.9)",
            }}
          >
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(145deg, #E4EEEC, #C9DAD7)",
                boxShadow: "inset 0 2px 4px rgba(13,59,76,0.15)",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
              </svg>
            </div>
            <div className="flex-1 text-left">
              <p className="text-[10px] font-bold tracking-[0.24em]" style={{ color: "#7A8B90" }}>YOUR CHILD</p>
              <p className="text-[18px] font-black tracking-[0.06em]" style={{ color: INK, fontFamily: '"Bebas Neue", Impact, sans-serif' }}>OLIVIA</p>
            </div>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={PEACH_BTN} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </section>

        {/* CARD GRID */}
        <section className="px-5 pt-6" style={{ backgroundColor: INK }}>
          <div className="grid grid-cols-2 gap-4">
            {CARDS.map((c) => (
              <FeatureTile key={c.title} {...c} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <section
          className="mt-8 mx-3 rounded-t-[28px] px-6 pt-6 pb-8 flex flex-col items-center"
          style={{ backgroundColor: "#F3ECE4" }}
        >
          <p className="text-[11px] font-bold tracking-[0.3em]" style={{ color: "#7A8B90" }}>
            YOU'RE NOT ALONE IN THIS
          </p>
          <button
            className="mt-4 w-12 h-12 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: "#F5DED6",
              boxShadow: "0 6px 14px rgba(13,59,76,0.15), inset 0 1px 1px rgba(255,255,255,0.7)",
            }}
            aria-label="Support"
          >
            <Heart className="w-5 h-5" style={{ color: INK }} strokeWidth={2.2} fill={PEACH_BTN} />
          </button>
        </section>
      </div>
    </div>
  );
}

function FeatureTile({
  to, title, text, bg, plateBg, dot, icon,
}: {
  to: string; title: string; text: string; bg: string; plateBg: string; dot: string; icon: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className="relative rounded-[24px] p-4 pb-5 block overflow-hidden transition-transform active:scale-[0.98] hover:-translate-y-0.5"
      style={{
        backgroundColor: bg,
        boxShadow: "0 12px 28px rgba(0,0,0,0.18), inset 0 1px 1px rgba(255,255,255,0.55)",
        minHeight: 240,
      }}
    >
      {/* corner dot */}
      <div className="absolute top-3 right-3 flex items-center gap-1">
        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: dot, opacity: 0.9 }} />
        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#FFFFFF", opacity: 0.7 }} />
      </div>

      {/* plate */}
      <div
        className="w-[86px] h-[86px] rounded-full flex items-center justify-center mb-3"
        style={{
          background: `radial-gradient(circle at 35% 30%, #FFFFFF, ${plateBg} 75%)`,
          boxShadow: "inset 0 -4px 10px rgba(13,59,76,0.08), inset 0 3px 6px rgba(255,255,255,0.9), 0 4px 10px rgba(13,59,76,0.08)",
        }}
      >
        {icon}
      </div>

      <h3
        className="font-black leading-[0.95] mb-1.5 whitespace-pre-line"
        style={{
          fontFamily: '"Bebas Neue", Impact, sans-serif',
          fontSize: 24, color: INK, letterSpacing: "0.04em",
        }}
      >
        {title}
      </h3>
      <div className="h-[2px] w-8 rounded-full mb-2" style={{ backgroundColor: PEACH_BTN }} />
      <p className="text-[12px] leading-[16px] pr-6" style={{ color: "#3E5A63" }}>
        {text}
      </p>

      {/* arrow button */}
      <div
        className="absolute bottom-3 right-3 w-10 h-10 rounded-full flex items-center justify-center"
        style={{
          background: `linear-gradient(145deg, #F0C5B8, ${PEACH_BTN})`,
          boxShadow: "0 4px 10px rgba(13,59,76,0.2), inset 0 1px 1px rgba(255,255,255,0.6)",
        }}
      >
        <ArrowRight className="w-4 h-4" style={{ color: INK }} strokeWidth={2.5} />
      </div>
    </Link>
  );
}

/* ── Abstract clay icons (pure CSS/SVG) ── */

function PlantIcon() {
  return (
    <svg width="46" height="46" viewBox="0 0 60 60" fill="none">
      <path d="M30 34 C 30 24, 22 20, 18 22 C 18 30, 24 34, 30 34 Z" fill="#8FB8A6" />
      <path d="M30 34 C 30 22, 38 18, 44 22 C 44 30, 36 34, 30 34 Z" fill="#A9C9BA" />
      <path d="M22 34 h16 l-2 12 a2 2 0 0 1 -2 2 h-8 a2 2 0 0 1 -2 -2 Z" fill="#EBB6A8" />
      <path d="M22 34 h16 v3 h-16 z" fill="#D89E90" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg width="46" height="46" viewBox="0 0 60 60" fill="none">
      <rect x="16" y="14" width="28" height="34" rx="3" fill="#D89E90" />
      <rect x="18" y="16" width="24" height="30" rx="2" fill="#E9B4A6" />
      <rect x="30" y="16" width="2" height="30" fill="#C88A7C" opacity="0.5" />
      <rect x="40" y="20" width="2" height="22" rx="1" fill="#F0D2C9" />
    </svg>
  );
}

function MagnifierIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 60 60" fill="none">
      <circle cx="26" cy="26" r="12" fill="#EAF1EE" stroke="#4A6B69" strokeWidth="3.5" />
      <circle cx="24" cy="24" r="6" fill="#B9CFC8" opacity="0.7" />
      <rect x="34" y="34" width="14" height="5" rx="2.5" transform="rotate(45 34 34)" fill="#4A6B69" />
    </svg>
  );
}

function BarsIcon() {
  return (
    <svg width="52" height="46" viewBox="0 0 60 50" fill="none">
      <rect x="10" y="20" width="9" height="26" rx="2" fill="#4A6B69" />
      <rect x="22" y="10" width="9" height="36" rx="2" fill="#7A9895" />
      <rect x="34" y="24" width="9" height="22" rx="2" fill="#A6BEB9" />
      <rect x="46" y="30" width="9" height="16" rx="2" fill="#F0C5B8" />
    </svg>
  );
}
