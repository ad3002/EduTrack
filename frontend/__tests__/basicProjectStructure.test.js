// frontend/__tests__/basicProjectStructure.test.js

const fs = require('fs');
const path = require('path');

describe('Basic Frontend Project Structure', () => {
  const frontendPath = path.join(__dirname, '..');
  const srcPath = path.join(frontendPath, 'src');
  const componentsPath = path.join(srcPath, 'components');
  const pagesPath = path.join(srcPath, 'pages');
  const stylesPath = path.join(srcPath, 'styles');
  const tailwindConfigPath = path.join(frontendPath, 'tailwind.config.js');
  const navbarComponentPath = path.join(componentsPath, 'Navbar.js');

  test('src/ directory exists', () => {
    expect(fs.existsSync(srcPath)).toBe(true);
  });

  test('components/, pages/, styles/ directories exist inside src/', () => {
    const directories = ['components', 'pages', 'styles'];
    directories.forEach(dir => {
      const dirPath = path.join(srcPath, dir);
      expect(fs.existsSync(dirPath)).toBe(true);
      expect(fs.lstatSync(dirPath).isDirectory()).toBe(true);
    });
  });

  test('tailwind.config.js exists in frontend/ directory', () => {
    expect(fs.existsSync(tailwindConfigPath)).toBe(true);
  });

  test('Sample component Navbar.js exists in src/components/', () => {
    expect(fs.existsSync(navbarComponentPath)).toBe(true);
    expect(fs.lstatSync(navbarComponentPath).isFile()).toBe(true);
  });
});