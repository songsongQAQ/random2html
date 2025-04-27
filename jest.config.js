/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/src/__tests__/**/*.test.ts'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts', '!src/__tests__/**/*.ts'],
  coverageDirectory: 'coverage'
}; 