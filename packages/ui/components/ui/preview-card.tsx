import { cn } from "@ui/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const cardVariants = cva("relative w-full rounded-lg border p-4", {
  variants: {
    variant: {
      default: "bg-muted/70 text-foreground",
      success: "bg-success/10 border-success/25",
      destructive: "bg-destructive/10 border-destructive/25",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface CardProps extends VariantProps<typeof cardVariants> {
  label: string;
  children: React.ReactNode;
}

export const PreviewCard = ({ children, variant, label }: CardProps) => {
  return (
    <div className={cn(cardVariants({ variant }))}>
      <div>
        <p className="text-xl font-semibold">{label}</p>
      </div>
      <div className="w-full h-32 rounded-sm flex justify-center items-center gap-1 text-4xl">{children}</div>
    </div>
  );
};
