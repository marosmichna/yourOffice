import { cn } from "@/utils/cn";
import React from "react";
import Label from "./Label";
import Input from "./Input";

// Form 

type FormProps = React.FormHTMLAttributes<HTMLFormElement>;

const Form = ({ className, children, ...props }: FormProps) => {
    return (
        <form 
            className={cn(
                "space-y-4",
                className
            )}
            {...props}
        >
            {children}
        </form>
    );
};

Form.displayName = "Form";

// Form Item

type FormItemProps = React.HTMLAttributes<HTMLDivElement>;

const FormItem = ({ className, children, ...props }: FormItemProps) => {
    return (
        <div
            className={cn(
                "space-y-2",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

FormItem.displayName = "FormItem";

// Form Label

type FormLabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

const FormLabel = ({ children, ...props }: FormLabelProps) => {
    return (
        <Label {...props}>
            {children}
        </Label>
    );
};

FormLabel.displayName = "FormLabel";

// Form Control

type FormControlProps = React.InputHTMLAttributes<HTMLInputElement>;

const FormControl = React.forwardRef<HTMLInputElement, FormControlProps>(
    (props, ref) => {
      return (
          <Input ref={ref} {...props} />
      );
    }
  );

FormControl.displayName = "FormControl";


export {Form, FormItem, FormLabel, FormControl};