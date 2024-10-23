// frontend/__tests__/frontendRepositorySetup.test.js

const fs = require('fs');
const path = require('path');

describe('Frontend Repository Setup', () => {
  const srcPath = path.join(__dirname, '..', 'src');
  const gitignorePath = path.join(__dirname, '..', '.gitignore');

  test('src/ directory exists', () => {
    expect(fs.existsSync(srcPath)).toBe(true);
  });

  test('src/ contains pages/, components/, styles/ directories', () => {
    ['pages', 'components', 'styles'].forEach(dir => {
      const dirPath = path.join(srcPath, dir);
      expect(fs.existsSync(dirPath)).toBe(true);
      expect(fs.lstatSync(dirPath).isDirectory()).toBe(true);
    });
  });

  test('.gitignore includes node_modules/ and .next/', () => {
    const gitignoreContent = fs.readFileSync(gitignorePath, 'utf-8');
    expect(gitignoreContent).toMatch(/node_modules\//);
    expect(gitignoreContent).toMatch(/\.next\//);
  });
});