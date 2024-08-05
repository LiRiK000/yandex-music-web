import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Button } from '../components/ui/button'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Default Button',
  },
}
export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Default Button',
  },
}
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Default Button',
  },
}
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Default Button',
  },
}
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Default Button',
  },
}
export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Default Button',
  },
}
export const Def: Story = {
  args: {
    size: 'default',
    children: 'Default Button',
  },
}
export const Sm: Story = {
  args: {
    size: 'sm',
    children: 'Default Button',
  },
}

export const Lg: Story = {
  args: {
    size: 'lg',
    children: 'Default Button',
  },
}

export const Icon: Story = {
  args: {
    size: 'icon',
    children: '🔍',
  },
}
