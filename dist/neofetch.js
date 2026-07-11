"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const width = 850;
const height = 450;
const geometricAscii = `             .,-:;//;:=,
         . :H@@@MM@M#H/.,+%;,
      ,/X+ +M@@M@MM%=,-%HMMM@X/,
     -+@MM; $M@@MH+-,;XMMMM@MMMM@+-
    ;@M@@M- XM@X;. -+XXXXXHHH@M@M#@/.
  ,%MM@@MH ,@%=            .---=-=:=,.
  -@#@@@MX .,              -%HX$$%%%+;
 =-./@M@M$                  .;@MMMM@MM:
 X@/ -$MM/                    .+MM@@@M$
,@M@H: :@:                    . =X#@@@@-
,@@@MMX, .                    /H- ;@M@M=
.H@@@@M@+,                    %MM+..%#$.
 /MMMM@MMH/.                  XM@MH; =;
  /%+%$XHH@$=              , .H@@@@MX,
   .=--------.           -%H.,@@@@@MX,
   .%MM@@@HHHXX$$$%+- .:$MMX =M@@MM%.
     =XMMM@MM@MM#H;,-+HMM@M+ /MMMX=
       =%@M@M#@$-.=$@MM@@@M; %M%=
         ,:+$+-,/H#MMMMMMM@- -,
               =++%%%%+/:-.`;
const lines = geometricAscii.split('\n');
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
  .ascii {
    font-size: 11px;
    fill: ${utils_1.COLORS.primary};
    font-family: 'JetBrains Mono', monospace;
    white-space: pre;
  }
  .info-key {
    fill: ${utils_1.COLORS.accent};
    font-weight: bold;
    font-size: 13px;
  }
  .info-val {
    fill: ${utils_1.COLORS.textMain};
    font-size: 13px;
  }
  .info-title {
    fill: ${utils_1.COLORS.primary};
    font-weight: bold;
    font-size: 14px;
  }
  .info-divider {
    fill: ${utils_1.COLORS.textMuted};
    font-size: 13px;
  }
  .mono {
    font-family: 'JetBrains Mono', monospace;
  }
`;
let content = `
  <g transform="translate(10, 10)">
    <rect class="term-bg" x="0" y="0" width="830" height="430" />
    <path class="term-header" d="M 0 8 a 8 8 0 0 1 8 -8 h 814 a 8 8 0 0 1 8 8 v 22 h -830 z" />
    <circle cx="20" cy="15" r="6" fill="${utils_1.COLORS.error}" />
    <circle cx="40" cy="15" r="6" fill="${utils_1.COLORS.warning}" />
    <circle cx="60" cy="15" r="6" fill="${utils_1.COLORS.success}" />
    <text class="mono" x="415" y="20" fill="${utils_1.COLORS.textMuted}" font-size="12" text-anchor="middle">UshnishG / README.md</text>
`;
content += '<g transform="translate(30, 80)">';
lines.forEach((line, i) => {
    content += `<text class="ascii" x="0" y="${i * 15}">${line.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</text>`;
});
content += '</g>';
const infoX = 350;
let infoY = 70;
const lineHeight = 20;
function addLine(key, val, isHeader = false) {
    if (isHeader) {
        content += `<text class="mono info-title" x="${infoX}" y="${infoY}">${key}</text>`;
        content += `<text class="mono info-divider" x="${infoX + key.length * 8}" y="${infoY}">${val}</text>`;
    }
    else {
        content += `<text class="mono info-key" x="${infoX}" y="${infoY}">${key}</text>`;
        content += `<text class="mono info-val" x="${infoX + 170}" y="${infoY}">${val}</text>`;
    }
    infoY += lineHeight;
}
function addDivider() {
    content += `<text class="mono info-divider" x="${infoX}" y="${infoY}">-------------------------------------------------</text>`;
    infoY += lineHeight;
}
function addCategoryHeader(title) {
    content += `<text class="mono info-title" x="${infoX}" y="${infoY}">${title}</text>`;
    infoY += lineHeight;
}
addLine('ushnish', '@ai-core', true);
addDivider();
addLine('. OS:', 'Windows 11, Linux, macOS');
addLine('. Role:', 'AI Engineer & Researcher');
addLine('. University:', 'SRM Institute of Science and Technology');
addLine('. IDE:', 'VS Code, Cursor, Neovim');
infoY += 10;
addLine('. Languages.Code:', 'Python, TypeScript, Rust, Go, C/C++');
addLine('. Languages.Speak:', 'English, Bengali, Hindi');
addLine('. Focus:', 'LLMs, Edge AI, Backend, Open Source');
infoY += 10;
addCategoryHeader('- Contact');
addLine('. Email:', 'contact@ushnish.com');
addLine('. LinkedIn:', 'ushnishghosal');
addLine('. GitHub:', 'UshnishG');
infoY += 10;
addCategoryHeader('- GitHub Stats');
addLine('. Repos:', '45 (Contributed: 80+) | Stars: 124');
addLine('. Commits:', '1,042 | Followers: 50+');
infoY += 20;
content += `
  <rect x="${infoX}" y="${infoY}" width="20" height="20" fill="${utils_1.COLORS.background}" />
  <rect x="${infoX + 25}" y="${infoY}" width="20" height="20" fill="${utils_1.COLORS.error}" />
  <rect x="${infoX + 50}" y="${infoY}" width="20" height="20" fill="${utils_1.COLORS.success}" />
  <rect x="${infoX + 75}" y="${infoY}" width="20" height="20" fill="${utils_1.COLORS.warning}" />
  <rect x="${infoX + 100}" y="${infoY}" width="20" height="20" fill="${utils_1.COLORS.primary}" />
  <rect x="${infoX + 125}" y="${infoY}" width="20" height="20" fill="${utils_1.COLORS.secondary}" />
  <rect x="${infoX + 150}" y="${infoY}" width="20" height="20" fill="${utils_1.COLORS.accent}" />
`;
content += '</g>';
const svg = (0, utils_1.wrapSVG)(content, width, height, customStyles);
(0, utils_1.writeSVG)('assets/animations/neofetch.svg', svg);
