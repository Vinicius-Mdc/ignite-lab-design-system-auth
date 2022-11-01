import { Button, ButtonRootProps } from "./Button"
import { Meta, StoryObj } from '@storybook/react'
import { Check } from 'phosphor-react'

export default {
    title: 'Components/Button',
    component: Button.Root,
    args: {
        children: [
            <Button.Text>
                Confirm
            </Button.Text>
        ]
    }
} as Meta<ButtonRootProps>

export const Default: StoryObj = {}

export const WithIcon: StoryObj = {
    args: {
        children: [
            <Button.Icon>
                <Check weight='bold' className='h-6 w-6 text-gray-800' />
            </Button.Icon>,
            <Button.Text>
                Confirm
            </Button.Text>
        ]
    }
}
