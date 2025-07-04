import * as React from 'react';

import { cn } from '@/lib/utils';
import type { CardProps, CardHeaderProps, CardContentProps, CardFooterProps } from '@/types';

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CardProps
>(({ className, variant = 'default', padding, hover, clickable, onClick, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-lg border bg-card text-card-foreground shadow-sm',
      variant === 'outlined' && 'border-2',
      variant === 'elevated' && 'shadow-lg',
      variant === 'interactive' && 'cursor-pointer transition-all duration-200',
      hover && 'hover:shadow-md hover:scale-[1.02] transition-all duration-200',
      clickable && 'cursor-pointer',
      className
    )}
    onClick={onClick}
    {...props}
  />
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CardHeaderProps
>(({ className, title, subtitle, action, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  >
    {title && <h3 className="text-2xl font-semibold leading-none tracking-tight">{title}</h3>}
    {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
    {action && <div className="ml-auto">{action}</div>}
  </div>
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CardContentProps
>(({ className, padding, ...props }, ref) => (
  <div 
    ref={ref} 
    className={cn('p-6 pt-0', className)} 
    {...props} 
  />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CardFooterProps
>(({ className, padding, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
