import React, { ReactNode } from 'react';
import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot';

export interface ButtonIconProps{
  children: ReactNode
}

const ButtonIcon = (props: ButtonIconProps) => {
  return (
    <Slot className='w-6 h-6 text-black'>
      {props.children}
    </Slot>
  )
}

export interface ButtonTextProps{
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  asChild?: boolean
}

const ButtonText = ({size='md', children, asChild}:ButtonTextProps) => {
const Comp = asChild ? Slot : 'span'
return (
  <Comp className={
    clsx('text-black font-sans', 
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

export interface ButtonRootProps{
    children: React.ReactNode
    asChild?: boolean
}

const ButtonRoot = ({children, asChild}:ButtonRootProps) => {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp className={
      clsx('flex items-center justify-center gap-4 py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-300 hover:cursor-pointer transition-colors focus:ring-2 ring-white')}
    >
      {children}
    </Comp>
  );
}

export const Button = {
  Root: ButtonRoot,
  Text: ButtonText,
  Icon: ButtonIcon
}