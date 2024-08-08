import { cn } from "@/utils/cn"

const H3 = (props: React.HTMLProps<HTMLHeadingElement>) => {
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

export default H3

