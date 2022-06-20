const { defaults: jestNgPreset } = require('jest-preset-angular/presets');
// const { defaultsESM: jestNgPreset } = require('jest-preset-angular/presets')

const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig')

/** @type {import('ts-jest').InitialOptionsTsJest} */
module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    globalSetup: 'jest-preset-angular/global-setup',
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths /*, { prefix: '<rootDir>/' } */),
    globals: {
        'ts-jest': {
            ...jestNgPreset.globals['ts-jest'],
            // [...your overriden options]
            tsConfig: '<rootDir>/tsconfig.spec.json'
        },
    },
};
