import { cn } from "@/utils/cn";
import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
      return (
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none",
            className
          )}
          ref={ref}
          {...props}
        />
      )
    }
)
Input.displayName = "Input";

export default Input;