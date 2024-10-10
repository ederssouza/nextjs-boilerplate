import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './'
})

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: {
        rootDir: '.'
      }
    }
  },
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/(*.)?stories.tsx',
    '!src/components/*/index.ts',
    '!src/pages/_app.tsx',
    '!src/pages/_document.tsx',
    '!src/types/**/*'
  ]
}

export default createJestConfig(config)
