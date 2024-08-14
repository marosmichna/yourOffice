import { cn } from "@/utils/cn"

export const H1 = (props: React.HTMLProps<HTMLHeadingElement>) => {
  return (
    <h3 
        {...props}
        className={cn(
            "text-3xl font-medium tracking-tighter",
            props.className
        )}
    />
  )
}