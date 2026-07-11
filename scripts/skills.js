"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const width = 800;
const height = 400;
const skills = [
    { name: 'Artificial Intelligence', progress: 95 },
    { name: 'LLMs & GenAI', progress: 90 },
    { name: 'Python', progress: 95 },
    { name: 'Backend', progress: 85 },
    { name: 'TypeScript', progress: 80 },
    { name: 'C/C++', progress: 85 },
    { name: 'Rust & Go', progress: 75 },
    { name: 'Cloud & DevOps', progress: 80 }
];
const customStyles = `
  .skill-bg {
    fill: #161B22;
    rx: 6;
  }
  .skill-fill {
    fill: url(#accentGrad);
    rx: 6;
    animation: load-bar 1.5s ease-out forwards;
  }
  .skill-text {
    font-size: 14px;
    fill: ${utils_1.COLORS.textMain};
    font-weight: 500;
  }
  .skill-percent {
    font-size: 12px;
    fill: ${utils_1.COLORS.textMuted};
  }
  @keyframes load-bar {
    from { width: 0; }
  }
`;
let skillsContent = '<g transform="translate(40, 40)">';
skills.forEach((skill, i) => {
    const y = i * 42;
    skillsContent += `
    <text class="grotesk skill-text" x="0" y="${y + 14}">${skill.name}</text>
    <rect class="skill-bg" x="200" y="${y}" width="500" height="12" />
    <rect class="skill-fill" x="200" y="${y}" width="${(skill.progress / 100) * 500}" height="12" />
    <text class="mono skill-percent" x="720" y="${y + 12}">${skill.progress}%</text>
  `;
});
skillsContent += '</g>';
const svg = (0, utils_1.wrapSVG)(skillsContent, width, height, customStyles);
(0, utils_1.writeSVG)('assets/animations/skills.svg', svg);
//# sourceMappingURL=skills.js.map