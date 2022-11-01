import { Text, TextProps } from "./Text"
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Lorem Ipsum'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: 'inline-radio'
        },
    }
} as Meta<TextProps>

export const Default: StoryObj = {}

export const Small: StoryObj<TextProps> = {
    args:{
        size: 'sm'
    }
}

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        size: 'lg',
        asChild: true,
        children: <p>Lorem Ipsum Dolor</p>
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