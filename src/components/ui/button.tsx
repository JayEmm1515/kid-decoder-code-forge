import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.96] active:transition-all active:duration-150",
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
        "poly-cream": "bg-[hsl(var(--poly-cream))] text-[hsl(220_20%_20%)] shadow-[8px_8px_20px_hsl(48_56%_75%),_-8px_-8px_20px_hsl(48_56%_92%),_inset_1px_1px_3px_hsl(48_56%_88%)] border-none hover:shadow-[12px_12px_25px_hsl(48_56%_70%),_-12px_-12px_25px_hsl(48_56%_95%)] active:shadow-[inset_6px_6px_15px_hsl(48_56%_75%),_inset_-6px_-6px_15px_hsl(48_56%_88%)] transform transition-all duration-200 hover:translate-y-[-2px] active:translate-y-[1px]",
        "poly-teal": "bg-[hsl(var(--poly-teal))] text-white shadow-[8px_8px_20px_hsl(194_39%_45%),_-8px_-8px_20px_hsl(194_39%_70%),_inset_1px_1px_3px_hsl(194_39%_62%)] border-none hover:shadow-[12px_12px_25px_hsl(194_39%_40%),_-12px_-12px_25px_hsl(194_39%_75%)] active:shadow-[inset_6px_6px_15px_hsl(194_39%_45%),_inset_-6px_-6px_15px_hsl(194_39%_62%)] transform transition-all duration-200 hover:translate-y-[-2px] active:translate-y-[1px]",
        "poly-purple": "bg-[hsl(var(--poly-purple))] text-white shadow-[8px_8px_20px_hsl(266_56%_60%),_-8px_-8px_20px_hsl(266_56%_85%),_inset_1px_1px_3px_hsl(266_56%_77%)] border-none hover:shadow-[12px_12px_25px_hsl(266_56%_55%),_-12px_-12px_25px_hsl(266_56%_90%)] active:shadow-[inset_6px_6px_15px_hsl(266_56%_60%),_inset_-6px_-6px_15px_hsl(266_56%_77%)] transform transition-all duration-200 hover:translate-y-[-2px] active:translate-y-[1px]",
        "poly-mint": "bg-[hsl(var(--poly-mint))] text-[hsl(220_20%_20%)] shadow-[8px_8px_20px_hsl(166_61%_63%),_-8px_-8px_20px_hsl(166_61%_88%),_inset_1px_1px_3px_hsl(166_61%_80%)] border-none hover:shadow-[12px_12px_25px_hsl(166_61%_58%),_-12px_-12px_25px_hsl(166_61%_93%)] active:shadow-[inset_6px_6px_15px_hsl(166_61%_63%),_inset_-6px_-6px_15px_hsl(166_61%_80%)] transform transition-all duration-200 hover:translate-y-[-2px] active:translate-y-[1px]",
        "poly-coral": "bg-[hsl(var(--poly-coral))] text-[hsl(220_20%_20%)] shadow-[8px_8px_20px_hsl(11_100%_75%),_-8px_-8px_20px_hsl(11_100%_95%),_inset_1px_1px_3px_hsl(11_100%_88%)] border-none hover:shadow-[12px_12px_25px_hsl(11_100%_70%),_-12px_-12px_25px_hsl(11_100%_98%)] active:shadow-[inset_6px_6px_15px_hsl(11_100%_75%),_inset_-6px_-6px_15px_hsl(11_100%_88%)] transform transition-all duration-200 hover:translate-y-[-2px] active:translate-y-[1px]",
        "poly-lime": "bg-[hsl(var(--poly-lime))] text-[hsl(220_20%_20%)] shadow-[8px_8px_20px_hsl(101_52%_68%),_-8px_-8px_20px_hsl(101_52%_88%),_inset_1px_1px_3px_hsl(101_52%_83%)] border-none hover:shadow-[12px_12px_25px_hsl(101_52%_63%),_-12px_-12px_25px_hsl(101_52%_93%)] active:shadow-[inset_6px_6px_15px_hsl(101_52%_68%),_inset_-6px_-6px_15px_hsl(101_52%_83%)] transform transition-all duration-200 hover:translate-y-[-2px] active:translate-y-[1px]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-xl px-3 text-xs",
        lg: "h-12 rounded-2xl px-8 text-base",
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