import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { ClientSidebar } from '@/components/common/ClientSidebar'

const meta = {
  title: 'Components/Sidebar',
  component: ClientSidebar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  args: {},
} satisfies Meta<typeof ClientSidebar>
export default meta
type Story = StoryObj<typeof meta>

export const OnlySidebar: Story = {
  args: {
    Children: <div></div>,
  },
}
export const WithText: Story = {
  args: {
    Children: <div>Some context</div>,
  },
}
