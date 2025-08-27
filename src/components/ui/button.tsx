import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.96] active:transition-all active:duration-150",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-br from-background to-background/90 text-foreground shadow-[var(--neuro-shadow-sm)] border border-white/10 hover:shadow-[var(--neuro-shadow-light)] active:shadow-[var(--neuro-shadow-inset)]",
        destructive:
          "bg-gradient-to-br from-destructive to-destructive/90 text-destructive-foreground shadow-[var(--neuro-shadow-sm)] border border-red-500/20 hover:shadow-[var(--neuro-shadow-light)] active:shadow-[var(--neuro-shadow-inset)]",
        outline:
          "bg-gradient-to-br from-background to-background/80 text-foreground border border-border shadow-[var(--neuro-shadow-sm)] hover:shadow-[var(--neuro-shadow-light)] active:shadow-[var(--neuro-shadow-inset)]",
        secondary:
          "bg-gradient-to-br from-secondary to-secondary/90 text-secondary-foreground shadow-[var(--neuro-shadow-sm)] border border-secondary/20 hover:shadow-[var(--neuro-shadow-light)] active:shadow-[var(--neuro-shadow-inset)]",
        ghost: "bg-transparent text-foreground hover:bg-gradient-to-br hover:from-accent hover:to-accent/80 hover:text-accent-foreground hover:shadow-[var(--neuro-shadow-sm)] active:shadow-[var(--neuro-shadow-inset)]",
        link: "text-primary underline-offset-4 hover:underline bg-transparent shadow-none",
        primary: "bg-gradient-to-br from-primary to-primary/90 text-primary-foreground shadow-[var(--neuro-shadow-sm)] border border-primary/20 hover:shadow-[var(--neuro-shadow-light)] active:shadow-[var(--neuro-shadow-inset)]",
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
