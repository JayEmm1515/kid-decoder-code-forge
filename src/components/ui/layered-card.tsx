import React from 'react';
import { cn } from '@/lib/utils';

interface LayeredCardProps {
  children: React.ReactNode;
  depth?: 1 | 2 | 3;
  className?: string;
  size?: 'default' | 'small';
}

export const LayeredCard = ({ 
  children, 
  depth = 1, 
  className, 
  size = 'default' 
}: LayeredCardProps) => {
  const depthClasses = {
    1: 'kd-depth-1',
    2: 'kd-depth-2', 
    3: 'kd-depth-3'
  };

  const sizeClasses = {
    default: '',
    small: 'max-w-[520px]'
  };

  return (
    <div className={cn(
      'kd-card',
      depthClasses[depth],
      sizeClasses[size],
      className
    )}>
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const LayeredCardHeader = ({ children, className }: CardHeaderProps) => (
  <header className={cn(
    'flex items-center justify-between gap-4 mb-[18px]',
    className
  )}>
    {children}
  </header>
);

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
  size?: 'h2' | 'h3';
}

export const LayeredCardTitle = ({ children, className, size = 'h2' }: CardTitleProps) => {
  const Component = size;
  const sizeClasses = {
    h2: 'm-0 text-xl tracking-wide',
    h3: 'm-1 mb-4 text-lg'
  };

  return (
    <Component className={cn(sizeClasses[size], className)}>
      {children}
    </Component>
  );
};

interface CardActionsProps {
  children: React.ReactNode;
  className?: string;
  layout?: 'flex' | 'grid';
}

export const LayeredCardActions = ({ 
  children, 
  className, 
  layout = 'flex' 
}: CardActionsProps) => {
  const layoutClasses = {
    flex: 'flex gap-3 justify-end',
    grid: 'grid grid-cols-3 gap-[10px]'
  };

  return (
    <div className={cn(layoutClasses[layout], className)}>
      {children}
    </div>
  );
};