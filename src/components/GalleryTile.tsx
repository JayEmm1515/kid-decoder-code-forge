import { motion } from "framer-motion";

interface GalleryTileProps {
  label: string;
  variant: "slate" | "peach" | "white" | "muted";
  tall?: boolean;
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

const variantStyles: Record<string, React.CSSProperties> = {
  slate: {
    background: 'linear-gradient(145deg, hsl(213 20% 40%), hsl(213 20% 30%))',
    color: 'white',
  },
  peach: {
    background: 'linear-gradient(145deg, hsl(8 56% 88%), hsl(8 56% 80%))',
    color: 'hsl(220 24% 17%)',
  },
  white: {
    background: 'linear-gradient(145deg, hsl(0 0% 100%), hsl(210 18% 97%))',
    color: 'hsl(220 24% 17%)',
  },
  muted: {
    background: 'linear-gradient(145deg, hsl(210 18% 95%), hsl(210 18% 91%))',
    color: 'hsl(220 7% 46%)',
  },
};

export default function GalleryTile({ label, variant, tall }: GalleryTileProps) {
  return (
    <motion.div
      variants={itemVariants}
      className={`rounded-[24px] flex items-end p-5 ${tall ? 'row-span-2' : ''}`}
      style={{
        ...variantStyles[variant],
        boxShadow: 'var(--shadow-clay), var(--shadow-inner-highlight)',
        minHeight: tall ? '280px' : '140px',
        border: '1px solid rgba(31,41,55,0.06)',
      }}
    >
      <span className="text-sm font-bold opacity-80">{label}</span>
    </motion.div>
  );
}
