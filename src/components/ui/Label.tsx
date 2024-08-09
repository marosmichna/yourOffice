import { cn } from "@/utils/cn";
import React from "react";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
    ({ className, ...props }, ref) => {
        return (
            <label 
                className={cn(
                    "block text-sm font-medium text-gray-700",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)

Label.displayName = "Label";

export default Label;