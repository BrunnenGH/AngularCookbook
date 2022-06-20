/* tslint:disable:max-line-length */
import type { InitialOptionsTsJest } from 'ts-jest/dist/types';

// All presets come with default ts-jest config options.
// If you want to override any of the options, you'll need to use the JavaScript version of Jest config, copy the original options and override the options you need
import { defaults as jestNgPreset } from 'jest-preset-angular/presets';
// import { defaultsESM as jestNgPreset } from 'jest-preset-angular/presets'

const config: InitialOptionsTsJest = {
  // preset: 'jest-preset-angular', // https://thymikee.github.io/jest-preset-angular/docs/getting-started/presets
  // setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  // globalSetup: 'jest-preset-angular/global-setup',

  globals: {
    'ts-jest': {
      ...jestNgPreset.globals['ts-jest'],
      // [...your overriden options]
    },
  },
};

export default config;
