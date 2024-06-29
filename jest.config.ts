module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js'],
    testMatch: ['**/*.test.ts'], // Match TypeScript test files
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json', // Path to your tsconfig.json file
        },
    },
};
