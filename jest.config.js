/** @type {import('@jest/types/build/Config').InitialOptions} */
module.exports = {
  preset: 'ts-jest',
  testMatch: ['<rootDir>/src/**/*.test.ts'],
  collectCoverage: true,
  errorOnDeprecated: true,
  resetMocks: true,
  testEnvironment: 'node',
  timers: 'fake',
}
