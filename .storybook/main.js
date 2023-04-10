module.exports = {
  stories: [
    '../src/components/**/(*.)?stories.mdx',
    '../src/components/**/(*.)?stories.@(js|jsx|ts|tsx)'
  ],
  addons: ['@storybook/addon-essentials', '@storybook/addon-mdx-gfm'],
  staticDirs: ['../public'],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: true
  }
}
