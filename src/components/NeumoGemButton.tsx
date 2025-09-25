import React from "react";
import { cn } from "@/lib/utils";

interface NeumoGemButtonProps {
  label: string;
  icon: React.ReactNode;
  from: string;
  to: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function NeumoGemButton({
  label,
  icon,
  from,
  to,
  size = "md",
  className,
}: NeumoGemButtonProps) {
  const sizeClasses = {
    sm: "w-20 h-20 rounded-2xl",
    md: "w-24 h-24 rounded-2xl", 
    lg: "w-28 h-28 rounded-3xl",
  };

  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-sm",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden transition-all duration-200 ease-out group cursor-pointer",
        "hover:scale-105 hover:-translate-y-1",
        "active:scale-95 active:translate-y-0",
        sizeClasses[size],
        className
      )}
      style={{
        background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
        boxShadow: `
          0 8px 16px rgba(0, 0, 0, 0.1),
          0 4px 32px rgba(0, 0, 0, 0.08),
          inset 0 1px 0 rgba(255, 255, 255, 0.4),
          inset 0 -1px 0 rgba(0, 0, 0, 0.1)
        `,
      }}
    >
      {/* Glass highlight overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `linear-gradient(135deg, 
            rgba(255, 255, 255, 0.4) 0%, 
            rgba(255, 255, 255, 0.1) 50%, 
            rgba(255, 255, 255, 0) 100%
          )`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-3 text-center">
        <div className="mb-2 drop-shadow-sm">
          {icon}
        </div>
        <span className={cn(
          "font-semibold text-white drop-shadow-sm leading-tight",
          textSizes[size]
        )}>
          {label}
        </span>
      </div>

      {/* Hover glow effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-200"
        style={{
          background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
          filter: 'blur(8px)',
        }}
      />
    </div>
  );
}