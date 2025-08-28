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