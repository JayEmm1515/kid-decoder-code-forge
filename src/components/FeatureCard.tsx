import { Link } from "react-router-dom";
import { ChevronRight, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function FeatureCard({ title, description, icon: Icon, path }: FeatureCardProps) {
  return (
    <motion.div variants={itemVariants}>
      <Link to={path} className="group block h-full">
        <div className="card-clay h-full">
          <div className="icon-bubble mb-5 group-hover:scale-110 transition-transform">
            <Icon className="w-6 h-6 text-primary" strokeWidth={2} />
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
          <div className="flex items-center gap-1 text-primary text-sm font-bold">
            Learn more
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
