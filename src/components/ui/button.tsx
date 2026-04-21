import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-sans font-medium transition-all focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-matcha text-cream hover:bg-matcha-deep shadow-paper active:translate-y-px",
        ghost:
          "border border-border bg-cream/70 text-ink hover:bg-cream-deep hover:text-matcha",
        ink: "bg-ink text-cream hover:bg-ink/90",
        naked: "text-ink hover:text-matcha",
      },
      size: {
        sm: "px-3 py-2 text-sm rounded-md",
        md: "px-5 py-3 text-[0.95rem] rounded-md",
        lg: "px-6 py-4 text-base rounded-md",
        xl: "px-7 py-[18px] text-[1.05rem] rounded-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };
