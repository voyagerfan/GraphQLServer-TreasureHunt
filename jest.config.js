/** @type {import("jest").Config} **/
export default {
  preset: 'ts-jest',
  testEnvironment: "node",
  testMatch: ['**/*.test.ts', '**/*/spect.ts']
};