import { execSync } from 'child_process';
import * as path from 'path';
const scripts = [
  'neofetch.js',
  'hero.js',
  'terminal.js',
  'skills.js',
  'timeline.js',
  'projects.js',
  'stats.js',
  'generate-readme.js'
];

console.log('Starting build process...');

scripts.forEach(script => {
  console.log(`Running ${script}...`);
  try {
    execSync(`node ${path.join(__dirname, script)}`, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error running ${script}:`, error);
    process.exit(1);
  }
});

console.log('Build completed successfully!');
