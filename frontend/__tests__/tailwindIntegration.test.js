// frontend/__tests__/tailwindIntegration.test.js

const fs = require('fs');
const path = require('path');

describe('Tailwind CSS Integration', () => {
  const indexPath = path.join(__dirname, '..', 'src', 'pages', 'index.js');
  const globalsPath = path.join(__dirname, '..', 'src', 'styles', 'globals.css');

  test('src/pages/index.js contains Tailwind CSS classes', () => {
    const indexContent = fs.readFileSync(indexPath, 'utf-8');
    const tailwindClasses = ['p-4', 'text-2xl'];
    tailwindClasses.forEach(cls => {
      const regex = new RegExp(`className="[^"]*\\b${cls}\\b[^"]*"`);
      expect(indexContent).toMatch(regex);
    });
  });

  test('src/styles/globals.css includes Tailwind directives', () => {
    const globalsContent = fs.readFileSync(globalsPath, 'utf-8');
    const directives = ['@tailwind base;', '@tailwind components;', '@tailwind utilities;'];
    directives.forEach(directive => {
      expect(globalsContent).toContain(directive);
    });
  });
});