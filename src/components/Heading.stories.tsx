import { Heading, HeadingProps } from "./Heading"
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Lorem Ipsum'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: 'inline-radio'
        },
    }
} as Meta<HeadingProps>

export const Default: StoryObj = {}

export const Small: StoryObj<HeadingProps> = {
    args:{
        size: 'sm'
    }
}

export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        size: 'lg',
        asChild: true,
        children: <p>P tag children</p>
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
        asChild: {
            table: {
                disable: true
            }
        }
    }
}