import { TextInput, TextInputRootProps } from "./TextInput"
import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
                <TextInput.Icon>
                    <Envelope /> 
                </TextInput.Icon>,
                <TextInput.Input placeholder="Write anything..." />
        ]
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
    }
} as Meta<TextInputRootProps>

export const Default: StoryObj = {}

export const NoIcon: StoryObj = {
    args: {
        children: [
            <TextInput.Input placeholder="Write anything..." />
        ]
    },
}