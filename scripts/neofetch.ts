import { COLORS, wrapSVG, writeSVG } from './utils';

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

export function generateNeofetchSVG(stats: {
  repos: number,
  stars: number,
  commits: number,
  followers: number,
  locAdded: number,
  locDeleted: number
}) {
  const customStyles = `
  .term-bg {
    fill: #0D1117;
    stroke: ${COLORS.border};
    stroke-width: 1;
    rx: 8;
  }
  .term-header {
    fill: #161B22;
  }
  .ascii {
    font-size: 11px;
    fill: ${COLORS.primary};
    font-family: 'JetBrains Mono', monospace;
    white-space: pre;
  }
  .info-key {
    fill: ${COLORS.accent};
    font-weight: bold;
    font-size: 13px;
  }
  .info-val {
    fill: ${COLORS.textMain};
    font-size: 13px;
  }
  .info-title {
    fill: ${COLORS.primary};
    font-weight: bold;
    font-size: 14px;
  }
  .info-divider {
    fill: ${COLORS.textMuted};
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
    <circle cx="20" cy="15" r="6" fill="${COLORS.error}" />
    <circle cx="40" cy="15" r="6" fill="${COLORS.warning}" />
    <circle cx="60" cy="15" r="6" fill="${COLORS.success}" />
    <text class="mono" x="415" y="20" fill="${COLORS.textMuted}" font-size="12" text-anchor="middle">UshnishG / README.md</text>
`;

  content += '<g transform="translate(30, 80)">';
  lines.forEach((line, i) => {
    content += `<text class="ascii" x="0" y="${i * 15}">${line.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</text>`;
  });
  content += '</g>';

  const infoX = 350;
  let infoY = 70;
  const lineHeight = 20;

  function addLine(key: string, val: string, isHeader = false) {
    if (isHeader) {
      content += `<text class="mono info-title" x="${infoX}" y="${infoY}">${key}</text>`;
      content += `<text class="mono info-divider" x="${infoX + key.length * 8}" y="${infoY}">${val}</text>`;
    } else {
      content += `<text class="mono info-key" x="${infoX}" y="${infoY}">${key}</text>`;
      content += `<text class="mono info-val" x="${infoX + 170}" y="${infoY}">${val}</text>`;
    }
    infoY += lineHeight;
  }

  function addDivider() {
    content += `<text class="mono info-divider" x="${infoX}" y="${infoY}">-------------------------------------------------</text>`;
    infoY += lineHeight;
  }

  function addCategoryHeader(title: string) {
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
  addLine('. Repos:', `${stats.repos} | Stars: ${stats.stars}`);
  addLine('. Commits:', `${stats.commits} | Followers: ${stats.followers}`);
  addLine('. Lines of Code:', `${stats.locAdded.toLocaleString()}++ , ${stats.locDeleted.toLocaleString()}--`);

  infoY += 20;
  content += `
  <rect x="${infoX}" y="${infoY}" width="20" height="20" fill="${COLORS.background}" />
  <rect x="${infoX + 25}" y="${infoY}" width="20" height="20" fill="${COLORS.error}" />
  <rect x="${infoX + 50}" y="${infoY}" width="20" height="20" fill="${COLORS.success}" />
  <rect x="${infoX + 75}" y="${infoY}" width="20" height="20" fill="${COLORS.warning}" />
  <rect x="${infoX + 100}" y="${infoY}" width="20" height="20" fill="${COLORS.primary}" />
  <rect x="${infoX + 125}" y="${infoY}" width="20" height="20" fill="${COLORS.secondary}" />
  <rect x="${infoX + 150}" y="${infoY}" width="20" height="20" fill="${COLORS.accent}" />
`;

  content += '</g>';

  const svg = wrapSVG(content, width, height, customStyles);
  writeSVG('assets/animations/neofetch.svg', svg);
}
