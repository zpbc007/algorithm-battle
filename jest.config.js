module.exports = {
    moduleNameMapper: { 
        '^@utils/(.*)$': '<rootDir>/src/source-code/utils/$1', 
        '^@app/(.*)$': '<rootDir>/src/source-code/$1' 
    },
    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: ['<rootDir>/dist', '<rootDir>/src/.obsidian'],
    moduleDirectories: ['<rootDir>/src/source-code', 'node_modules'],
    roots: ['src'],
}
