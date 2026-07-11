"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const width = 800;
const height = 400;
function generateNodes() {
    let nodes = '';
    let lines = '';
    const points = [];
    for (let i = 0; i < 30; i++) {
        points.push({
            x: Math.random() * width,
            y: Math.random() * height
        });
    }
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            const dx = points[i].x - points[j].x;
            const dy = points[i].y - points[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 150) {
                lines += `<line x1="${points[i].x}" y1="${points[i].y}" x2="${points[j].x}" y2="${points[j].y}" stroke="${utils_1.COLORS.primary}" stroke-width="0.5" stroke-opacity="${1 - dist / 150}" />`;
            }
        }
    }
    for (let i = 0; i < points.length; i++) {
        nodes += `<circle cx="${points[i].x}" cy="${points[i].y}" r="2" fill="${utils_1.COLORS.accent}" fill-opacity="0.6">
      <animate attributeName="cy" values="${points[i].y};${points[i].y - 10};${points[i].y}" dur="${3 + Math.random() * 2}s" repeatCount="indefinite" />
      <animate attributeName="cx" values="${points[i].x};${points[i].x + 10};${points[i].x}" dur="${3 + Math.random() * 2}s" repeatCount="indefinite" />
    </circle>`;
    }
    return `<g class="network-bg" opacity="0.4">${lines}${nodes}</g>`;
}
const customStyles = `
  .terminal-box {
    fill: #161B22;
    stroke: ${utils_1.COLORS.border};
    stroke-width: 1;
    rx: 8;
  }
  .title {
    font-size: 32px;
    font-weight: 700;
    fill: url(#primaryGrad);
  }
  .subtitle {
    font-size: 20px;
    fill: ${utils_1.COLORS.textMuted};
  }
  .terminal-text {
    font-size: 14px;
    fill: ${utils_1.COLORS.success};
  }
  .cursor {
    animation: blink 1s step-end infinite;
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  
  /* Reveal lines sequentially */
  .line1 { opacity: 0; animation: reveal 0.1s forwards 0.5s; }
  .line2 { opacity: 0; animation: reveal 0.1s forwards 1.2s; }
  .line3 { opacity: 0; animation: reveal 0.1s forwards 1.8s; }
  .line4 { opacity: 0; animation: reveal 0.1s forwards 2.4s; }
  .line5 { opacity: 0; animation: reveal 0.1s forwards 3.0s; }
  .line-final { opacity: 0; animation: reveal 0.5s forwards 3.5s; }
  
  @keyframes reveal {
    to { opacity: 1; }
  }
`;
const heroContent = `
  ${generateNodes()}
  
  <g transform="translate(50, 80)">
    <!-- Terminal window -->
    <rect class="terminal-box" x="0" y="0" width="350" height="200" />
    <circle cx="20" cy="20" r="6" fill="${utils_1.COLORS.error}" />
    <circle cx="40" cy="20" r="6" fill="${utils_1.COLORS.warning}" />
    <circle cx="60" cy="20" r="6" fill="${utils_1.COLORS.success}" />
    <line x1="0" y1="40" x2="350" y2="40" stroke="${utils_1.COLORS.border}" stroke-width="1" />
    
    <g class="mono terminal-text" transform="translate(20, 70)">
      <text class="line1" y="0">> boot sequence init...</text>
      <text class="line2" y="25">Loading AI Core [OK]</text>
      <text class="line3" y="50">Loading Projects [OK]</text>
      <text class="line4" y="75">Loading Research [OK]</text>
      <text class="line5" y="100">System Ready.</text>
      <rect class="cursor line5" x="110" y="88" width="8" height="15" fill="${utils_1.COLORS.success}" />
    </g>
  </g>

  <g transform="translate(450, 140)" class="line-final">
    <text class="grotesk title" y="0">Hi, I'm Ushnish Ghosal.</text>
    <text class="subtitle" y="40">AI Engineer. Researcher. Builder.</text>
    <text class="subtitle" y="70" font-size="14" fill="${utils_1.COLORS.accent}">Building the future with AI.</text>
  </g>
`;
const svg = (0, utils_1.wrapSVG)(heroContent, width, height, customStyles);
(0, utils_1.writeSVG)('assets/animations/hero.svg', svg);
//# sourceMappingURL=hero.js.map