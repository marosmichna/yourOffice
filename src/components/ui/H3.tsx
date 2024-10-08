import { cn } from "@/utils/cn"

export const H3 = (props: React.HTMLProps<HTMLHeadingElement>) => {
  return (
    <h3 
        {...props}
        className={cn(
            "text-xl font-medium tracking-tighter",
            props.className
        )}
    />
  )
}

