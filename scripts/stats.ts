import { COLORS, wrapSVG, writeSVG } from './utils';

// Static/Mock data for stats (to be populated by GitHub Actions later)
const stats = {
  stars: 124,
  commits: 1042,
  prs: 45,
  issues: 23,
  contribs: 1840
};

const width = 800;
const height = 200;

const customStyles = `
  .stat-box {
    fill: #161B22;
    stroke: ${COLORS.border};
    rx: 8;
  }
  .stat-val {
    font-size: 32px;
    font-weight: 700;
    fill: url(#primaryGrad);
  }
  .stat-label {
    font-size: 14px;
    fill: ${COLORS.textMuted};
  }
`;

let content = '<g transform="translate(10, 20)">';

const metrics = [
  { label: 'Total Stars', val: stats.stars },
  { label: 'Commits (2026)', val: stats.commits },
  { label: 'Pull Requests', val: stats.prs },
  { label: 'Issues', val: stats.issues },
  { label: 'Contributions', val: stats.contribs }
];

metrics.forEach((m, i) => {
  const x = i * 155;
  content += `
    <g transform="translate(${x}, 0)">
      <rect class="stat-box" x="0" y="0" width="145" height="120" />
      <text class="mono stat-val" x="72.5" y="65" text-anchor="middle">${m.val}</text>
      <text class="grotesk stat-label" x="72.5" y="95" text-anchor="middle">${m.label}</text>
    </g>
  `;
});

content += '</g>';

const svg = wrapSVG(content, width, height, customStyles);
writeSVG('assets/animations/stats.svg', svg);
