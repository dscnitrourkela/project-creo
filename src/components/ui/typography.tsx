import { cn } from '@/lib/utils'
import React from 'react'

// Headings
export function H1({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-gabarito',
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  )
}

export function H2({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 font-gabarito',
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  )
}

export function H3({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn('scroll-m-20 text-2xl font-semibold tracking-tight font-gabarito', className)}
      {...props}
    >
      {children}
    </h3>
  )
}

export function H4({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      className={cn('scroll-m-20 text-xl font-semibold tracking-tight font-gabarito', className)}
      {...props}
    >
      {children}
    </h4>
  )
}

// Body
export function P({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('leading-7 [&:not(:first-child)]:mt-6 font-inter', className)} {...props}>
      {children}
    </p>
  )
}

export function Blockquote({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote className={cn('mt-6 border-l-2 pl-6 italic font-inter', className)} {...props}>
      {children}
    </blockquote>
  )
}

// Lists
export function List({ className, children, ...props }: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul className={cn('my-6 ml-6 list-disc [&>li]:mt-2 font-inter', className)} {...props}>
      {children}
    </ul>
  )
}

// Inline
export function InlineCode({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <code
      className={cn(
        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold font-inter',
        className,
      )}
      {...props}
    >
      {children}
    </code>
  )
}

// Text Styles
export function Lead({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('text-xl text-muted-foreground font-inter', className)} {...props}>
      {children}
    </p>
  )
}

export function Large({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('text-lg font-semibold font-inter', className)} {...props}>
      {children}
    </div>
  )
}

export function Small({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <small className={cn('text-sm font-medium leading-none font-inter', className)} {...props}>
      {children}
    </small>
  )
}

export function Muted({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('text-sm text-muted-foreground font-inter', className)} {...props}>
      {children}
    </p>
  )
}

// Custom Font Helpers
export function Coral({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('font-coral', className)} {...props}>
      {children}
    </div>
  )
}

export function Fort({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('font-fort', className)} {...props}>
      {children}
    </div>
  )
}

export function Obvia({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('font-obvia', className)} {...props}>
      {children}
    </div>
  )
}

export function Sailec({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('font-sailec', className)} {...props}>
      {children}
    </div>
  )
}

export function Termina({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('font-termina', className)} {...props}>
      {children}
    </div>
  )
}
