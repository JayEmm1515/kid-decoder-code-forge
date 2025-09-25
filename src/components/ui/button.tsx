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
        
        // New Low Poly 3D Neumorphic Buttons
        "poly-cream-3d": `
          rounded-[24px] bg-[hsl(var(--poly-cream))] text-[hsl(220_20%_20%)] border-none
          shadow-[12px_12px_28px_hsl(48_56%_70%),_-12px_-12px_28px_hsl(48_56%_95%),_inset_2px_2px_8px_hsl(48_56%_90%),_inset_-2px_-2px_8px_hsl(48_56%_85%)]
          before:content-[''] before:absolute before:inset-[8px] before:rounded-[16px] 
          before:bg-[hsl(48_56%_86%)] before:shadow-[inset_6px_6px_16px_hsl(48_56%_75%),_inset_-6px_-6px_16px_hsl(48_56%_92%)]
          after:content-[''] after:absolute after:inset-[16px] after:rounded-[12px] 
          after:bg-[hsl(48_56%_84%)] after:shadow-[4px_4px_12px_hsl(48_56%_78%),_-4px_-4px_12px_hsl(48_56%_90%)]
          hover:shadow-[16px_16px_32px_hsl(48_56%_65%),_-16px_-16px_32px_hsl(48_56%_98%)]
          active:shadow-[inset_8px_8px_20px_hsl(48_56%_70%),_inset_-8px_-8px_20px_hsl(48_56%_88%)]
          transition-all duration-200 hover:translate-y-[-1px] active:translate-y-[1px]
        `,
        
        "poly-teal-3d": `
          rounded-[24px] bg-[hsl(var(--poly-teal))] text-white border-none
          shadow-[12px_12px_28px_hsl(194_39%_40%),_-12px_-12px_28px_hsl(194_39%_75%),_inset_2px_2px_8px_hsl(194_39%_62%),_inset_-2px_-2px_8px_hsl(194_39%_48%)]
          before:content-[''] before:absolute before:inset-[8px] before:rounded-[16px] 
          before:bg-[hsl(194_39%_58%)] before:shadow-[inset_6px_6px_16px_hsl(194_39%_45%),_inset_-6px_-6px_16px_hsl(194_39%_68%)]
          after:content-[''] after:absolute after:inset-[16px] after:rounded-[12px] 
          after:bg-[hsl(194_39%_55%)] after:shadow-[4px_4px_12px_hsl(194_39%_42%),_-4px_-4px_12px_hsl(194_39%_65%)]
          hover:shadow-[16px_16px_32px_hsl(194_39%_35%),_-16px_-16px_32px_hsl(194_39%_80%)]
          active:shadow-[inset_8px_8px_20px_hsl(194_39%_40%),_inset_-8px_-8px_20px_hsl(194_39%_62%)]
          transition-all duration-200 hover:translate-y-[-1px] active:translate-y-[1px]
        `,
        
        "poly-purple-3d": `
          rounded-[24px] bg-[hsl(var(--poly-purple))] text-white border-none
          shadow-[12px_12px_28px_hsl(266_56%_55%),_-12px_-12px_28px_hsl(266_56%_85%),_inset_2px_2px_8px_hsl(266_56%_77%),_inset_-2px_-2px_8px_hsl(266_56%_63%)]
          before:content-[''] before:absolute before:inset-[8px] before:rounded-[16px] 
          before:bg-[hsl(266_56%_73%)] before:shadow-[inset_6px_6px_16px_hsl(266_56%_60%),_inset_-6px_-6px_16px_hsl(266_56%_83%)]
          after:content-[''] after:absolute after:inset-[16px] after:rounded-[12px] 
          after:bg-[hsl(266_56%_70%)] after:shadow-[4px_4px_12px_hsl(266_56%_57%),_-4px_-4px_12px_hsl(266_56%_80%)]
          hover:shadow-[16px_16px_32px_hsl(266_56%_50%),_-16px_-16px_32px_hsl(266_56%_90%)]
          active:shadow-[inset_8px_8px_20px_hsl(266_56%_55%),_inset_-8px_-8px_20px_hsl(266_56%_77%)]
          transition-all duration-200 hover:translate-y-[-1px] active:translate-y-[1px]
        `,
        
        "poly-mint-3d": `
          rounded-[24px] bg-[hsl(var(--poly-mint))] text-[hsl(220_20%_20%)] border-none
          shadow-[12px_12px_28px_hsl(166_61%_58%),_-12px_-12px_28px_hsl(166_61%_88%),_inset_2px_2px_8px_hsl(166_61%_80%),_inset_-2px_-2px_8px_hsl(166_61%_66%)]
          before:content-[''] before:absolute before:inset-[8px] before:rounded-[16px] 
          before:bg-[hsl(166_61%_76%)] before:shadow-[inset_6px_6px_16px_hsl(166_61%_63%),_inset_-6px_-6px_16px_hsl(166_61%_86%)]
          after:content-[''] after:absolute after:inset-[16px] after:rounded-[12px] 
          after:bg-[hsl(166_61%_73%)] after:shadow-[4px_4px_12px_hsl(166_61%_60%),_-4px_-4px_12px_hsl(166_61%_83%)]
          hover:shadow-[16px_16px_32px_hsl(166_61%_53%),_-16px_-16px_32px_hsl(166_61%_93%)]
          active:shadow-[inset_8px_8px_20px_hsl(166_61%_58%),_inset_-8px_-8px_20px_hsl(166_61%_80%)]
          transition-all duration-200 hover:translate-y-[-1px] active:translate-y-[1px]
        `,
        
        "poly-coral-3d": `
          rounded-[24px] bg-[hsl(var(--poly-coral))] text-[hsl(220_20%_20%)] border-none
          shadow-[12px_12px_28px_hsl(11_100%_70%),_-12px_-12px_28px_hsl(11_100%_95%),_inset_2px_2px_8px_hsl(11_100%_88%),_inset_-2px_-2px_8px_hsl(11_100%_82%)]
          before:content-[''] before:absolute before:inset-[8px] before:rounded-[16px] 
          before:bg-[hsl(11_100%_87%)] before:shadow-[inset_6px_6px_16px_hsl(11_100%_75%),_inset_-6px_-6px_16px_hsl(11_100%_92%)]
          after:content-[''] after:absolute after:inset-[16px] after:rounded-[12px] 
          after:bg-[hsl(11_100%_85%)] after:shadow-[4px_4px_12px_hsl(11_100%_78%),_-4px_-4px_12px_hsl(11_100%_90%)]
          hover:shadow-[16px_16px_32px_hsl(11_100%_65%),_-16px_-16px_32px_hsl(11_100%_98%)]
          active:shadow-[inset_8px_8px_20px_hsl(11_100%_70%),_inset_-8px_-8px_20px_hsl(11_100%_88%)]
          transition-all duration-200 hover:translate-y-[-1px] active:translate-y-[1px]
        `,
        
        "poly-lime-3d": `
          rounded-[24px] bg-[hsl(var(--poly-lime))] text-[hsl(220_20%_20%)] border-none
          shadow-[12px_12px_28px_hsl(101_52%_63%),_-12px_-12px_28px_hsl(101_52%_88%),_inset_2px_2px_8px_hsl(101_52%_83%),_inset_-2px_-2px_8px_hsl(101_52%_73%)]
          before:content-[''] before:absolute before:inset-[8px] before:rounded-[16px] 
          before:bg-[hsl(101_52%_81%)] before:shadow-[inset_6px_6px_16px_hsl(101_52%_68%),_inset_-6px_-6px_16px_hsl(101_52%_86%)]
          after:content-[''] after:absolute after:inset-[16px] after:rounded-[12px] 
          after:bg-[hsl(101_52%_78%)] after:shadow-[4px_4px_12px_hsl(101_52%_65%),_-4px_-4px_12px_hsl(101_52%_83%)]
          hover:shadow-[16px_16px_32px_hsl(101_52%_58%),_-16px_-16px_32px_hsl(101_52%_93%)]
          active:shadow-[inset_8px_8px_20px_hsl(101_52%_63%),_inset_-8px_-8px_20px_hsl(101_52%_83%)]
          transition-all duration-200 hover:translate-y-[-1px] active:translate-y-[1px]
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