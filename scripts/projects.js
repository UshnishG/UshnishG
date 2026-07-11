"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const width = 800;
const height = 400;
const projects = [
    { name: 'Backend-DMIND', desc: 'AI/ML & Edge System Architecture. Payload routing pipelines.', tech: ['Python', 'AI/ML', 'Edge'] },
    { name: 'Synapse-AI', desc: '1st Prize Hackathon winner. Intelligent recruitment assistant.', tech: ['TypeScript', 'LLM', 'React'] },
    { name: 'Neural-Core', desc: 'Distributed training framework for custom transformer models.', tech: ['Rust', 'CUDA', 'Python'] },
    { name: 'IEEE-Portal', desc: 'Official portal for IEEE Computer Society AICSSYC 2026.', tech: ['Next.js', 'Tailwind', 'Go'] }
];
const customStyles = `
  .card-bg {
    fill: #161B22;
    stroke: ${utils_1.COLORS.border};
    stroke-width: 1;
    rx: 12;
    transition: all 0.3s ease;
  }
  .card:hover .card-bg {
    stroke: url(#primaryGrad);
    filter: url(#glow);
  }
  .title {
    font-size: 18px;
    font-weight: 700;
    fill: ${utils_1.COLORS.textMain};
  }
  .desc {
    font-size: 14px;
    fill: ${utils_1.COLORS.textMuted};
  }
  .tag-bg {
    fill: #21262D;
    rx: 4;
  }
  .tag-text {
    font-size: 11px;
    fill: ${utils_1.COLORS.accent};
  }
`;
let content = '<g>';
projects.forEach((proj, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = col * 390 + 10;
    const y = row * 190 + 10;
    let tags = '';
    proj.tech.forEach((t, ti) => {
        tags += `
      <rect class="tag-bg" x="${x + 20 + ti * 70}" y="${y + 130}" width="60" height="22" />
      <text class="mono tag-text" x="${x + 50 + ti * 70}" y="${y + 145}" text-anchor="middle">${t}</text>
    `;
    });
    content += `
    <g class="card" transform="translate(0, 0)">
      <rect class="card-bg" x="${x}" y="${y}" width="380" height="170" />
      <text class="grotesk title" x="${x + 20}" y="${y + 40}">${proj.name}</text>
      <foreignObject x="${x + 20}" y="${y + 60}" width="340" height="60">
        <div xmlns="http://www.w3.org/1999/xhtml" style="color: ${utils_1.COLORS.textMuted}; font-size: 14px; font-family: 'Inter', sans-serif;">
          ${proj.desc}
        </div>
      </foreignObject>
      ${tags}
    </g>
  `;
});
content += '</g>';
const svg = (0, utils_1.wrapSVG)(content, width, height, customStyles);
(0, utils_1.writeSVG)('assets/animations/projects.svg', svg);
//# sourceMappingURL=projects.js.map