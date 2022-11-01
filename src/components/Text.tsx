import React from 'react';
import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot';

export interface TextProps{
    size?: 'sm' | 'md' | 'lg'
    children: React.ReactNode
    asChild?: boolean
}

export const Text = ({size='md', children, asChild}:TextProps) => {
  const Comp = asChild ? Slot : 'span'
  return (
    <Comp className={
      clsx('text-gray-100 font-sans', 
      {
        'text-xs': size === 'sm',
        'text-md': size === 'md',
        'text-lg': size === 'lg'
      })}
    >
      {children}
    </Comp>
  );
}