import { execSync } from 'child_process';
import * as path from 'path';
import { fetchGitHubStats } from './github';
import { generateNeofetchSVG } from './neofetch';
import { generateStatsSVG } from './stats';

const scripts = [
  'hero.js',
  'terminal.js',
  'skills.js',
  'timeline.js',
  'projects.js',
  'generate-readme.js'
];

async function build() {
  console.log('Starting build process...');

  try {
    const stats = await fetchGitHubStats();
    console.log('Fetched stats:', stats);
    
    console.log('Generating Neofetch SVG...');
    generateNeofetchSVG(stats);
    
    console.log('Generating Stats SVG...');
    generateStatsSVG(stats);

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
  } catch (err) {
    console.error('Build failed:', err);
    process.exit(1);
  }
}

build();
