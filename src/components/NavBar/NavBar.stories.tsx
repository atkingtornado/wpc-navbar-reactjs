import type { Meta, StoryObj } from "@storybook/react"

import NavBar from "./NavBar"

const meta: Meta<typeof NavBar> = {
  title: "Example/NavBar",
  component: NavBar,
  parameters: {
    layout: "fullscreen",
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    theme: "light",
  },
}

export const Dark: Story = {
  args: {
    theme: "dark",
  },
}

export const test: Story = {
  args: {
    theme: "light",
  },
}
