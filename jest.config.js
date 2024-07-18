const dotenv = require('dotenv');

dotenv.config({ path: '.env.test' });

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
        '^@/(.*)$': '<rootDir>/$1',
    },
    transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest', {
            tsconfig: {
                jsx: 'react-jsx',
            },
        }],
        '^.+\\.(js|jsx)$': ['babel-jest', { presets: ['next/babel'] }],
    },
    moduleDirectories: ['node_modules', '<rootDir>/'],
};

globalThis.IS_REACT_ACT_ENVIRONMENT = true;