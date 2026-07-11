"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const path = require('path');
const readmeContent = `
<div align="center">
  
  <img src="./assets/animations/hero.svg" alt="Hero Animation" width="800" />

  <br/>

  <p align="center">
    <a href="https://linkedin.com/in/ushnishghosal"><img src="https://img.shields.io/badge/LinkedIn-0B0F19?style=for-the-badge&logo=linkedin&logoColor=4F8CFF" alt="LinkedIn"/></a>
    <a href="https://github.com/UshnishG"><img src="https://img.shields.io/badge/GitHub-0B0F19?style=for-the-badge&logo=github&logoColor=4F8CFF" alt="GitHub"/></a>
  </p>

  <br/>

  <h2>⚙️ Tech Stack & Skills</h2>
  <img src="./assets/animations/skills.svg" alt="Skills Matrix" width="800" />

  <br/>
  
  <h2>🚀 Featured Projects</h2>
  <img src="./assets/animations/projects.svg" alt="Projects" width="800" />

  <br/>
  
  <h2>⏳ Timeline</h2>
  <img src="./assets/animations/timeline.svg" alt="Timeline" width="800" />

  <br/>
  
  <h2>📊 GitHub Statistics</h2>
  <img src="./assets/animations/stats.svg" alt="Statistics" width="800" />

  <br/>
  <br/>
  
  <!-- Easter Egg: The command terminal hero shows boot sequences. Konami code hinted here in invisible/comment format -->
  <!-- sudo future -> "Building the future with AI." -->
  
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0B0F19&height=100&section=footer" width="100%"/>
</div>
`;
const filePath = path.resolve(__dirname, '..', 'README.md');
fs.writeFileSync(filePath, readmeContent);
console.log('README.md generated successfully!');
//# sourceMappingURL=generate-readme.js.map