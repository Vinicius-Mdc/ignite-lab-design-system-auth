import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot';
import { ClipLoader } from 'react-spinners';

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
  loading?: boolean
}

const ButtonText = ({size='md', children, asChild, loading}:ButtonTextProps) => {
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
    {loading ? <ClipLoader size='16' /> : children}
  </Comp>
);
}

export interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode
    asChild?: boolean
}

const ButtonRoot = ({children, asChild, className, ...props}:ButtonRootProps) => {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp className={
      clsx('flex items-center justify-center gap-4 py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-300 hover:cursor-pointer transition-colors focus:ring-2 ring-white', className)}
      {...props}
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