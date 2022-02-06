module.exports = {
  stories: [
    '../src/components/**/(*.)?stories.mdx',
    '../src/components/**/(*.)?stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-knobs'
  ],
  framework: '@storybook/react'
}
