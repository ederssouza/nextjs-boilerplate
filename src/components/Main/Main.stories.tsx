import type { StoryFn, Meta } from '@storybook/react'
import Main from './Main'

const meta: Meta<typeof Main> = {
  title: 'Main',
  component: Main,
  args: {
    title: 'React Avançado',
    description: 'TypeScript, ReactJS, NextJS e Styled Components'
  }
}

export default meta

export const Basic: StoryFn = (args) => <Main {...args} />

Basic.args = {
  title: 'Basic title',
  description: 'Basic description'
}

export const Default: StoryFn = (args) => <Main {...args} />
