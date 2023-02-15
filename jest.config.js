module.exports = {
    moduleNameMapper: { 
        '^@utils/(.*)$': '<rootDir>/src/utils/$1', 
        '^@app/(.*)$': '<rootDir>/src/$1' 
    },
    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: ['<rootDir>/dist'],
    moduleDirectories: ['<rootDir>/src', 'node_modules'],
    roots: ['src'],
}
