"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const width = 800;
const height = 250;
const customStyles = `
  .term-bg {
    fill: #0D1117;
    stroke: ${utils_1.COLORS.border};
    stroke-width: 1;
    rx: 8;
  }
  .term-header {
    fill: #161B22;
  }
  .term-text {
    font-size: 14px;
    fill: ${utils_1.COLORS.textMain};
  }
  .prompt {
    fill: ${utils_1.COLORS.accent};
    font-weight: bold;
  }
  .success { fill: ${utils_1.COLORS.success}; }
  .cursor {
    animation: blink 1s step-end infinite;
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  
  .cmd1 { opacity: 0; animation: showCmd 0.1s forwards 1s; }
  .res1 { opacity: 0; animation: showCmd 0.1s forwards 1.5s; }
  
  .cmd2 { opacity: 0; animation: showCmd 0.1s forwards 3s; }
  .res2 { opacity: 0; animation: showCmd 0.1s forwards 3.5s; }
  
  .cmd3 { opacity: 0; animation: showCmd 0.1s forwards 5s; }
  .res3 { opacity: 0; animation: showCmd 0.1s forwards 5.5s; }
  
  .cmd4 { opacity: 0; animation: showCmd 0.1s forwards 7s; }
  .res4 { opacity: 0; animation: showCmd 0.1s forwards 7.5s; }

  @keyframes showCmd {
    to { opacity: 1; }
  }
`;
let content = `
  <g transform="translate(100, 20)">
    <rect class="term-bg" x="0" y="0" width="600" height="200" />
    <path class="term-header" d="M 0 8 a 8 8 0 0 1 8 -8 h 584 a 8 8 0 0 1 8 8 v 22 h -600 z" />
    <circle cx="20" cy="15" r="6" fill="${utils_1.COLORS.error}" />
    <circle cx="40" cy="15" r="6" fill="${utils_1.COLORS.warning}" />
    <circle cx="60" cy="15" r="6" fill="${utils_1.COLORS.success}" />
    <text class="mono" x="300" y="20" fill="${utils_1.COLORS.textMuted}" font-size="12" text-anchor="middle">ushnish@ai-core: ~</text>
    
    <g class="mono term-text" transform="translate(20, 60)">
      <text class="cmd1"><tspan class="prompt">ushnish@ai-core:~$</tspan> whoami</text>
      <text class="res1" y="25" fill="${utils_1.COLORS.secondary}">Ushnish Ghosal - AI Engineer & Researcher</text>
      
      <text class="cmd2" y="55"><tspan class="prompt">ushnish@ai-core:~$</tspan> ./show_skills.sh</text>
      <text class="res2 success" y="80">[+] Python [+] Rust [+] LLMs [+] Edge AI</text>
      
      <text class="cmd3" y="110"><tspan class="prompt">ushnish@ai-core:~$</tspan> cat vision.txt</text>
      <text class="res3" y="135" fill="${utils_1.COLORS.textMuted}">"Building scalable, intelligent systems for the future."</text>
      
      <text class="cmd4" y="165"><tspan class="prompt">ushnish@ai-core:~$</tspan> <tspan class="cursor" fill="${utils_1.COLORS.textMain}">█</tspan></text>
    </g>
  </g>
`;
const svg = (0, utils_1.wrapSVG)(content, width, height, customStyles);
(0, utils_1.writeSVG)('assets/animations/terminal.svg', svg);
//# sourceMappingURL=terminal.js.map