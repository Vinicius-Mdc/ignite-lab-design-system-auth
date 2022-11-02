import { TextInput, TextInputRootProps } from "./TextInput"
import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
            <TextInput.Wrapper>
                <TextInput.Icon>
                    <Envelope /> 
                </TextInput.Icon>,
                <TextInput.Input placeholder="Write anything..." />
            </TextInput.Wrapper>
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
            <TextInput.Wrapper>
                <TextInput.Input placeholder="Write anything..." />
            </TextInput.Wrapper>
        ]
    },
}

export const WithError: StoryObj = {
    args: {
        children: [
            <TextInput.Wrapper error>
                <TextInput.Input placeholder="Write anything..." />
            </TextInput.Wrapper>,
            <TextInput.Error>This is an error</TextInput.Error>
        ]
    },
}