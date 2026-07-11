import { COLORS, wrapSVG, writeSVG } from './utils';

const width = 800;
const height = 200;

const milestones = [
  { year: '2020', title: 'Started Programming' },
  { year: '2023', title: 'Joined SRMIST' },
  { year: '2024', title: 'Hackathon Wins' },
  { year: '2025', title: 'Synapse Recruiter 1st' },
  { year: '2026', title: 'IEEE Chair' }
];

const customStyles = `
  .timeline-line {
    stroke: ${COLORS.border};
    stroke-width: 4;
  }
  .timeline-progress {
    stroke: url(#primaryGrad);
    stroke-width: 4;
    stroke-dasharray: 800;
    stroke-dashoffset: 800;
    animation: draw-line 2s ease-out forwards;
  }
  .node {
    fill: #161B22;
    stroke: ${COLORS.primary};
    stroke-width: 3;
    animation: pop-node 0.5s ease-out backwards;
  }
  .year {
    font-size: 14px;
    fill: ${COLORS.accent};
    font-weight: 700;
  }
  .title {
    font-size: 12px;
    fill: ${COLORS.textMuted};
  }
  @keyframes draw-line {
    to { stroke-dashoffset: 0; }
  }
  @keyframes pop-node {
    0% { transform: scale(0); }
    80% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
`;

let content = `
  <g transform="translate(50, 100)">
    <line class="timeline-line" x1="0" y1="0" x2="700" y2="0" />
    <line class="timeline-progress" x1="0" y1="0" x2="700" y2="0" />
`;

const spacing = 700 / (milestones.length - 1);

milestones.forEach((m, i) => {
  const x = i * spacing;
  const delay = i * 0.4;
  content += `
    <g transform="translate(${x}, 0)" style="animation-delay: ${delay}s">
      <circle class="node" cx="0" cy="0" r="8" style="animation-delay: ${delay}s" />
      <text class="mono year" x="0" y="-20" text-anchor="middle" style="opacity:0; animation: reveal 0.5s forwards ${delay + 0.2}s">${m.year}</text>
      <text class="grotesk title" x="0" y="25" text-anchor="middle" style="opacity:0; animation: reveal 0.5s forwards ${delay + 0.3}s">${m.title}</text>
    </g>
  `;
});

content += `
  </g>
  <style>
    @keyframes reveal { to { opacity: 1; } }
  </style>
`;

const svg = wrapSVG(content, width, height, customStyles);
writeSVG('assets/animations/timeline.svg', svg);
