import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatWidgetProps {
  label: string;
  value: string;
  icon: LucideIcon;
  variant?: "default" | "peach";
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function StatWidget({ label, value, icon: Icon, variant = "default" }: StatWidgetProps) {
  return (
    <motion.div
      variants={itemVariants}
      className={variant === "peach" ? "card-clay-peach text-center" : "card-clay text-center"}
    >
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3"
        style={{
          background: variant === "peach"
            ? 'linear-gradient(145deg, hsl(8 56% 80%), hsl(8 56% 72%))'
            : 'hsl(var(--bg))',
          boxShadow: 'var(--shadow-clay-sm), var(--shadow-inner-highlight)',
        }}
      >
        <Icon className="w-5 h-5 text-foreground/70" strokeWidth={2} />
      </div>
      <p className="text-2xl md:text-3xl font-extrabold text-foreground mb-1">{value}</p>
      <p className="text-sm text-muted-foreground font-medium">{label}</p>
    </motion.div>
  );
}
