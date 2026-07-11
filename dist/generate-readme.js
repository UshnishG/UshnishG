"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const readmeContent = `
<div align="center">
  
  <img src="./assets/animations/neofetch.svg" alt="Ushnish Ghosal Profile" width="850" />
  
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
