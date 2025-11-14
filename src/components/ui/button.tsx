import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-clay-medium border-none hover:shadow-clay-heavy hover:-translate-y-0.5 active:shadow-clay-inset active:translate-y-0 rounded-3xl",
        destructive:
          "bg-destructive text-destructive-foreground shadow-clay-medium border-none hover:shadow-clay-heavy hover:-translate-y-0.5 active:shadow-clay-inset active:translate-y-0 rounded-3xl",
        outline:
          "bg-card text-foreground border-2 border-border shadow-clay-light hover:shadow-clay-medium hover:-translate-y-0.5 active:shadow-clay-inset active:translate-y-0 rounded-3xl",
        secondary:
          "bg-secondary text-secondary-foreground shadow-clay-medium border-none hover:shadow-clay-heavy hover:-translate-y-0.5 active:shadow-clay-inset active:translate-y-0 rounded-3xl",
        ghost: "bg-transparent text-foreground hover:bg-muted hover:shadow-clay-light rounded-3xl",
        link: "text-primary underline-offset-4 hover:underline bg-transparent shadow-none",
        primary: "bg-primary text-primary-foreground shadow-clay-medium border-none hover:shadow-clay-heavy hover:-translate-y-0.5 active:shadow-clay-inset active:translate-y-0 rounded-3xl",
        
        // 3D App Icon Buttons - matching your exact design
        "poly-coral": `
          rounded-[22px] bg-gradient-to-br from-[#F97F84] via-[#F97F84] to-[#E86B70] text-white border-none font-semibold
          shadow-[0_4px_8px_rgba(0,0,0,0.1),_0_12px_32px_rgba(249,127,132,0.25),_0_2px_4px_rgba(0,0,0,0.05),_inset_0_1px_0_rgba(255,255,255,0.3)]
          hover:shadow-[0_6px_12px_rgba(0,0,0,0.12),_0_16px_40px_rgba(249,127,132,0.3),_0_2px_6px_rgba(0,0,0,0.08)] hover:translate-y-[-1px]
          active:shadow-[0_2px_4px_rgba(0,0,0,0.15),_0_6px_16px_rgba(249,127,132,0.2),_inset_0_2px_4px_rgba(0,0,0,0.1)] active:translate-y-[1px]
          transition-all duration-150 ease-out overflow-hidden
          before:content-[''] before:absolute before:inset-0 before:rounded-[22px] before:bg-gradient-to-t before:from-transparent before:via-transparent before:to-white/15 before:pointer-events-none
        `,
        
        "poly-teal": `
          rounded-[22px] bg-gradient-to-br from-[#6EDCD7] via-[#6EDCD7] to-[#5BC4BF] text-white border-none font-semibold
          shadow-[0_4px_8px_rgba(0,0,0,0.1),_0_12px_32px_rgba(110,220,215,0.25),_0_2px_4px_rgba(0,0,0,0.05),_inset_0_1px_0_rgba(255,255,255,0.3)]
          hover:shadow-[0_6px_12px_rgba(0,0,0,0.12),_0_16px_40px_rgba(110,220,215,0.3),_0_2px_6px_rgba(0,0,0,0.08)] hover:translate-y-[-1px]
          active:shadow-[0_2px_4px_rgba(0,0,0,0.15),_0_6px_16px_rgba(110,220,215,0.2),_inset_0_2px_4px_rgba(0,0,0,0.1)] active:translate-y-[1px]
          transition-all duration-150 ease-out overflow-hidden
          before:content-[''] before:absolute before:inset-0 before:rounded-[22px] before:bg-gradient-to-t before:from-transparent before:via-transparent before:to-white/15 before:pointer-events-none
        `,
        
        "poly-purple": `
          rounded-[22px] bg-gradient-to-br from-[#A364D8] via-[#A364D8] to-[#8F51C4] text-white border-none font-semibold
          shadow-[0_4px_8px_rgba(0,0,0,0.1),_0_12px_32px_rgba(163,100,216,0.25),_0_2px_4px_rgba(0,0,0,0.05),_inset_0_1px_0_rgba(255,255,255,0.3)]
          hover:shadow-[0_6px_12px_rgba(0,0,0,0.12),_0_16px_40px_rgba(163,100,216,0.3),_0_2px_6px_rgba(0,0,0,0.08)] hover:translate-y-[-1px]
          active:shadow-[0_2px_4px_rgba(0,0,0,0.15),_0_6px_16px_rgba(163,100,216,0.2),_inset_0_2px_4px_rgba(0,0,0,0.1)] active:translate-y-[1px]
          transition-all duration-150 ease-out overflow-hidden
          before:content-[''] before:absolute before:inset-0 before:rounded-[22px] before:bg-gradient-to-t before:from-transparent before:via-transparent before:to-white/15 before:pointer-events-none
        `,
        
        "poly-mint": `
          rounded-[22px] bg-gradient-to-br from-[#4CA096] via-[#4CA096] to-[#3E8A80] text-white border-none font-semibold
          shadow-[0_4px_8px_rgba(0,0,0,0.1),_0_12px_32px_rgba(76,160,150,0.25),_0_2px_4px_rgba(0,0,0,0.05),_inset_0_1px_0_rgba(255,255,255,0.3)]
          hover:shadow-[0_6px_12px_rgba(0,0,0,0.12),_0_16px_40px_rgba(76,160,150,0.3),_0_2px_6px_rgba(0,0,0,0.08)] hover:translate-y-[-1px]
          active:shadow-[0_2px_4px_rgba(0,0,0,0.15),_0_6px_16px_rgba(76,160,150,0.2),_inset_0_2px_4px_rgba(0,0,0,0.1)] active:translate-y-[1px]
          transition-all duration-150 ease-out overflow-hidden
          before:content-[''] before:absolute before:inset-0 before:rounded-[22px] before:bg-gradient-to-t before:from-transparent before:via-transparent before:to-white/15 before:pointer-events-none
        `,

        "poly-pink": `
          rounded-[22px] bg-gradient-to-br from-[#EFB2D1] via-[#EFB2D1] to-[#E09BBF] text-white border-none font-semibold
          shadow-[0_4px_8px_rgba(0,0,0,0.1),_0_12px_32px_rgba(239,178,209,0.25),_0_2px_4px_rgba(0,0,0,0.05),_inset_0_1px_0_rgba(255,255,255,0.3)]
          hover:shadow-[0_6px_12px_rgba(0,0,0,0.12),_0_16px_40px_rgba(239,178,209,0.3),_0_2px_6px_rgba(0,0,0,0.08)] hover:translate-y-[-1px]
          active:shadow-[0_2px_4px_rgba(0,0,0,0.15),_0_6px_16px_rgba(239,178,209,0.2),_inset_0_2px_4px_rgba(0,0,0,0.1)] active:translate-y-[1px]
          transition-all duration-150 ease-out overflow-hidden
          before:content-[''] before:absolute before:inset-0 before:rounded-[22px] before:bg-gradient-to-t before:from-transparent before:via-transparent before:to-white/15 before:pointer-events-none
        `,
        
        "poly-white": `
          rounded-[18px] bg-gradient-to-br from-[#FFFFFF] via-[#F8F9FA] to-[#E9ECEF] text-[#002962] border-none font-semibold
          shadow-[0_4px_8px_rgba(0,0,0,0.08),_0_10px_24px_rgba(0,0,0,0.06),_0_2px_4px_rgba(0,0,0,0.04),_inset_0_1px_0_rgba(255,255,255,0.8)]
          hover:shadow-[0_6px_12px_rgba(0,0,0,0.1),_0_14px_32px_rgba(0,0,0,0.08),_0_2px_6px_rgba(0,0,0,0.05)] hover:translate-y-[-1px]
          active:shadow-[0_2px_4px_rgba(0,0,0,0.12),_0_4px_12px_rgba(0,0,0,0.06),_inset_0_2px_4px_rgba(0,0,0,0.08)] active:translate-y-[1px]
          transition-all duration-150 ease-out overflow-hidden
          before:content-[''] before:absolute before:inset-0 before:rounded-[18px] before:bg-gradient-to-t before:from-transparent before:via-transparent before:to-white/40 before:pointer-events-none
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