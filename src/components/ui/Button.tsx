import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary' | 'submit';
};

const Button = ({ className, variant, ...props }: ButtonProps) => {
  return (
    <button {...props} className={cn(buttonVariants({ variant }), className)} />
  )
}

const buttonVariants = cva(
    'py-2 px-4 rounded-md font-semibold hover:opacity-80',
    {
        variants: {
            variant: {
                primary: 'bg-gradient-to-r from-red-500 to-red-700 text-black',
                secondary: 'bg-green-700 text-white',
                submit: 'bg-gradient-to-r from-cyan-200 to-cyan-500 w-full'
            },
        },
        defaultVariants: {
            variant: 'primary',
        },
    },
);

Button.displayName = "Button";

export default Button;
