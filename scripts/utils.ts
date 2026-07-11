export const COLORS = {
  background: '#0B0F19',
  primary: '#4F8CFF',
  secondary: '#7B61FF',
  accent: '#00E5FF',
  success: '#3DDC97',
  warning: '#F5B841',
  error: '#FF5C7A',
  textMain: '#FFFFFF',
  textMuted: '#8B949E',
  border: '#30363D'
};

export function wrapSVG(content: string, width: number, height: number, customStyles: string = ''): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${COLORS.primary}" />
      <stop offset="100%" stop-color="${COLORS.secondary}" />
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${COLORS.accent}" />
      <stop offset="100%" stop-color="${COLORS.primary}" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="5" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;family=JetBrains+Mono:wght@400;700&amp;family=Space+Grotesk:wght@500;700&amp;display=swap');
    
    * {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    }
    .mono {
      font-family: 'JetBrains Mono', monospace;
    }
    .grotesk {
      font-family: 'Space Grotesk', sans-serif;
    }
    ${customStyles}
  </style>
  <rect width="100%" height="100%" fill="${COLORS.background}" rx="12" />
  ${content}
</svg>`;
}

import * as fs from 'fs';
import * as path from 'path';

export function writeSVG(filename: string, svg: string) {
  const filePath = path.resolve(__dirname, '..', filename);
  fs.writeFileSync(filePath, svg);
  console.log(`Generated ${filename}`);
}
