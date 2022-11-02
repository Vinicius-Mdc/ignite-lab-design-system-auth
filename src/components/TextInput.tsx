import React, { InputHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot';

export interface TextInputIconProps{
  children: ReactNode
}

const TextInputIcon = (props: TextInputIconProps) => {
  return (
    <Slot className='w-6 h-6 text-gray-400'>
      {props.children}
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputRootProps{
  children: ReactNode
}

const TextInputRoot = (props:TextInputRootProps) => {
  return (
    <div className={``}>
      {props.children}
    </div>
  )
}

export interface TextInputWrapperProps{
  children: ReactNode
  error?: boolean
}

const TextInputWrapper = (props:TextInputWrapperProps) => {
  return (
    <div className={`flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full ${props.error && 'ring-2 ring-red-500'} border-red-500 focus-within:ring-2 focus-within:ring-cyan-300`}>
      {props.children}
    </div>
  )
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{}

const TextInputInput = (props:TextInputInputProps) => {
  return (
      <input {...props} className='flex-1 bg-transparent text-gray-100 text-xs outline-none placeholder:text-gray-400' />
  );
}

export interface TextInputErrorProps{
  children: React.ReactNode
  asChild?: boolean
  className?: string
}

const TextInputError = ({children, asChild, className}:TextInputErrorProps) => {
  const Comp = asChild ? Slot : 'span'
  return (
    <Comp className={
      clsx('text-red-500 font-sans text-sm', className)}
    >
      {children}
    </Comp>
  );
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Wrapper: TextInputWrapper,
  Input: TextInputInput,
  Icon: TextInputIcon,
  Error: TextInputError
}