import { ComponentProps } from 'react'
import { styled } from '../../lib/stitches'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$blue500',
  border: '1px solid $blue300',
})

export interface BoxProps extends ComponentProps<typeof Box> {}
