const { defaults: jestNgPreset } = require('jest-preset-angular/presets');
const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig')

/** @type {import('ts-jest').InitialOptionsTsJest} */
module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  coverageDirectory: "coverage",
    globalSetup: 'jest-preset-angular/global-setup',

   globals: {
        'ts-jest': {
            ...jestNgPreset.globals['ts-jest'],
            // [...your overriden options]
            tsconfig: '<rootDir>/tsconfig.spec.json'
        }
    },
  moduleNameMapper: { ...pathsToModuleNameMapper(compilerOptions.paths || {}, { prefix: '<rootDir>/' }),
    "lodash-es": "lodash"
},
  preset: "jest-preset-angular",
  roots: [
    "<rootDir>/src/"
  ],
  setupFilesAfterEnv: [
    "<rootDir>/setup-jest.ts"
  ],


  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  // Options that will be passed to the testEnvironment
  testEnvironmentOptions: { },
  // The glob patterns Jest uses to detect test files
  testMatch: [
    "**/(*.component)+(.spec|.test).[tj]s"
  ],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: [
    "\\\\node_modules\\\\"
  ],
  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: [
    '<rootDir>/node_modules/'
  ],
  // Indicates whether each individual test should be reported during the run
  verbose: true,
};
