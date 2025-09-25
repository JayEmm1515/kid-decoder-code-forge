import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[var(--neuro-button)] text-[hsl(var(--foreground))] shadow-[var(--neuro-button-shadow)] border-none hover:bg-[var(--neuro-button-light)] hover:shadow-[15px_15px_30px_hsl(250_40%_75%),_-15px_-15px_30px_hsl(250_40%_97%)] active:shadow-[var(--neuro-button-pressed)]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-[var(--neuro-button-shadow)] border-none hover:shadow-[15px_15px_30px_hsl(0_70%_55%),_-15px_-15px_30px_hsl(0_70%_75%)] active:shadow-[var(--neuro-button-pressed)]",
        outline:
          "bg-[var(--neuro-button)] text-[hsl(var(--foreground))] border border-[hsl(var(--foreground))]/20 shadow-[var(--neuro-button-shadow)] hover:shadow-[15px_15px_30px_hsl(250_40%_75%),_-15px_-15px_30px_hsl(250_40%_97%)] active:shadow-[var(--neuro-button-pressed)]",
        secondary:
          "bg-[hsl(var(--dreamy-purple))] text-white shadow-[12px_12px_24px_hsl(260_50%_60%),_-12px_-12px_24px_hsl(260_50%_80%)] border-none hover:shadow-[15px_15px_30px_hsl(260_50%_55%),_-15px_-15px_30px_hsl(260_50%_85%)] active:shadow-[inset_6px_6px_12px_hsl(260_50%_60%),_inset_-6px_-6px_12px_hsl(260_50%_75%)]",
        ghost: "bg-transparent text-[hsl(var(--foreground))] hover:bg-[var(--neuro-button)] hover:text-[hsl(var(--foreground))] hover:shadow-[var(--neuro-button-shadow)] active:shadow-[var(--neuro-button-pressed)]",
        link: "text-[hsl(var(--dreamy-purple))] underline-offset-4 hover:underline bg-transparent shadow-none",
        primary: "bg-[hsl(var(--dreamy-teal))] text-white shadow-[12px_12px_24px_hsl(180_55%_50%),_-12px_-12px_24px_hsl(180_55%_80%)] border-none hover:shadow-[15px_15px_30px_hsl(180_55%_45%),_-15px_-15px_30px_hsl(180_55%_85%)] active:shadow-[inset_6px_6px_12px_hsl(180_55%_50%),_inset_-6px_-6px_12px_hsl(180_55%_75%)]",
        
        // Exact match for your uploaded design - low poly 3D neumorphic buttons
        "poly-coral": `
          rounded-[28px] bg-[#F97F84] text-white border-none font-semibold
          shadow-[0_12px_32px_rgba(249,127,132,0.4),_0_4px_16px_rgba(249,127,132,0.2),_inset_0_2px_0_rgba(255,255,255,0.2),_inset_0_-2px_0_rgba(0,0,0,0.1)]
          hover:shadow-[0_16px_40px_rgba(249,127,132,0.5),_0_6px_20px_rgba(249,127,132,0.3),_inset_0_2px_0_rgba(255,255,255,0.3)]
          active:shadow-[inset_0_4px_12px_rgba(0,0,0,0.2),_inset_0_-1px_0_rgba(255,255,255,0.1)]
          transition-all duration-200 hover:translate-y-[-2px] active:translate-y-[1px] active:scale-95
          before:content-[''] before:absolute before:inset-[2px] before:rounded-[26px] before:bg-gradient-to-b before:from-white/20 before:to-transparent before:pointer-events-none
        `,
        
        "poly-teal": `
          rounded-[28px] bg-[#6EDCD7] text-white border-none font-semibold
          shadow-[0_12px_32px_rgba(110,220,215,0.4),_0_4px_16px_rgba(110,220,215,0.2),_inset_0_2px_0_rgba(255,255,255,0.2),_inset_0_-2px_0_rgba(0,0,0,0.1)]
          hover:shadow-[0_16px_40px_rgba(110,220,215,0.5),_0_6px_20px_rgba(110,220,215,0.3),_inset_0_2px_0_rgba(255,255,255,0.3)]
          active:shadow-[inset_0_4px_12px_rgba(0,0,0,0.2),_inset_0_-1px_0_rgba(255,255,255,0.1)]
          transition-all duration-200 hover:translate-y-[-2px] active:translate-y-[1px] active:scale-95
          before:content-[''] before:absolute before:inset-[2px] before:rounded-[26px] before:bg-gradient-to-b before:from-white/20 before:to-transparent before:pointer-events-none
        `,
        
        "poly-purple": `
          rounded-[28px] bg-[#A364D8] text-white border-none font-semibold
          shadow-[0_12px_32px_rgba(163,100,216,0.4),_0_4px_16px_rgba(163,100,216,0.2),_inset_0_2px_0_rgba(255,255,255,0.2),_inset_0_-2px_0_rgba(0,0,0,0.1)]
          hover:shadow-[0_16px_40px_rgba(163,100,216,0.5),_0_6px_20px_rgba(163,100,216,0.3),_inset_0_2px_0_rgba(255,255,255,0.3)]
          active:shadow-[inset_0_4px_12px_rgba(0,0,0,0.2),_inset_0_-1px_0_rgba(255,255,255,0.1)]
          transition-all duration-200 hover:translate-y-[-2px] active:translate-y-[1px] active:scale-95
          before:content-[''] before:absolute before:inset-[2px] before:rounded-[26px] before:bg-gradient-to-b before:from-white/20 before:to-transparent before:pointer-events-none
        `,
        
        "poly-mint": `
          rounded-[28px] bg-[#4CA096] text-white border-none font-semibold
          shadow-[0_12px_32px_rgba(76,160,150,0.4),_0_4px_16px_rgba(76,160,150,0.2),_inset_0_2px_0_rgba(255,255,255,0.2),_inset_0_-2px_0_rgba(0,0,0,0.1)]
          hover:shadow-[0_16px_40px_rgba(76,160,150,0.5),_0_6px_20px_rgba(76,160,150,0.3),_inset_0_2px_0_rgba(255,255,255,0.3)]
          active:shadow-[inset_0_4px_12px_rgba(0,0,0,0.2),_inset_0_-1px_0_rgba(255,255,255,0.1)]
          transition-all duration-200 hover:translate-y-[-2px] active:translate-y-[1px] active:scale-95
          before:content-[''] before:absolute before:inset-[2px] before:rounded-[26px] before:bg-gradient-to-b before:from-white/20 before:to-transparent before:pointer-events-none
        `,

        "poly-pink": `
          rounded-[28px] bg-[#EFB2D1] text-white border-none font-semibold
          shadow-[0_12px_32px_rgba(239,178,209,0.4),_0_4px_16px_rgba(239,178,209,0.2),_inset_0_2px_0_rgba(255,255,255,0.2),_inset_0_-2px_0_rgba(0,0,0,0.1)]
          hover:shadow-[0_16px_40px_rgba(239,178,209,0.5),_0_6px_20px_rgba(239,178,209,0.3),_inset_0_2px_0_rgba(255,255,255,0.3)]
          active:shadow-[inset_0_4px_12px_rgba(0,0,0,0.2),_inset_0_-1px_0_rgba(255,255,255,0.1)]
          transition-all duration-200 hover:translate-y-[-2px] active:translate-y-[1px] active:scale-95
          before:content-[''] before:absolute before:inset-[2px] before:rounded-[26px] before:bg-gradient-to-b before:from-white/20 before:to-transparent before:pointer-events-none
        `,
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-xl px-3 text-xs",
        lg: "h-12 rounded-2xl px-8 text-base [&_svg]:relative [&_svg]:z-10 [&_span]:relative [&_span]:z-10",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }