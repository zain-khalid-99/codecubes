import * as React from "react"
import { cn } from "@/lib/utils"

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full max-w-[1200px] mx-auto px-6 md:px-8",
          className
        )}
        {...props}
      />
    )
  }
)
Container.displayName = "Container"

export { Container }
