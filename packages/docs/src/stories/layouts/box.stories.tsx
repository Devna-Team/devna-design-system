import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@devna-ds/react'

export default {
	title: 'Layout/Box',
	component: Box,
	args: {
		children: (
			<Text >Testando o elemento Box</Text>
		)
	},
	argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
