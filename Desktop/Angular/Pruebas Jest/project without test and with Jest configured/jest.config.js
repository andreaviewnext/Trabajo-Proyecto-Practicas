module.exports = {
  preset: 'jest-preset-angular',
  globalSetup: 'jest-preset-angular/global-setup',
  collectCoverage: true,

  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^src/app/services/book.service$': '<rootDir>/src/app/services/book.service.ts',
  },
  
};
