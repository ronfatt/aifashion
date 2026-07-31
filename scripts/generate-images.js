const fs = require('fs');
const path = require('path');

const PRODUCTS_DATA = [
  {
    slug: 'sembang-kencang-tee',
    name: 'SEMBANG KENCANG Oversized Tee',
    subtitle: 'Talk Big. Move Slow.',
    frontMain: 'SEMBANG KENCANG',
    frontSub: 'Talk Big. Move Slow.',
    backCopy: 'Banyak cakap. Sedikit gerak.',
    type: 'tee',
    accentColor: '#8D2025', // Heritage Red
    subAccent: '#B7945A', // Batik Gold
    badge: 'BEST SELLER',
    batikColor: '#8D2025',
    styleType: 'stencil-side-batik',
  },
  {
    slug: 'acah-padu-sleeveless',
    name: 'ACAH PADU Sleeveless Tee',
    subtitle: 'Style Banyak, Kerja Kurang.',
    frontMain: 'ACAH PADU',
    frontSub: 'Style Banyak, Kerja Kurang.',
    backCopy: 'Nampak macam power. Itu je.',
    type: 'sleeveless',
    accentColor: '#D65A20', // Burnt Orange
    subAccent: '#F2EFE8',
    badge: 'HOT',
    batikColor: '#D65A20',
    styleType: 'raw-side-batik',
  },
  {
    slug: 'terpaling-on-tee',
    name: 'TERPALING ON Oversized Tee',
    subtitle: 'Reply Laju, Datang Lambat.',
    frontMain: 'TERPALING ON',
    frontSub: 'Reply Laju, Datang Lambat.',
    backCopy: 'Online sentiasa. Action entah bila.',
    type: 'tee',
    accentColor: '#C8FF00', // Acid Lime
    subAccent: '#8C8C8C',
    badge: 'NEW DROP',
    batikColor: '#C8FF00',
    styleType: 'cyber-batik',
  },
  {
    slug: 'boleh-lah-sleeveless',
    name: 'BOLEH LAH Sleeveless Tee',
    subtitle: 'Not Great. Still Jalan.',
    frontMain: 'BOLEH LAH',
    frontSub: 'Not Great. Still Jalan.',
    backCopy: 'Tak perfect. Tapi lepas.',
    type: 'sleeveless',
    accentColor: '#8D2025', // Heritage Red
    subAccent: '#F2EFE8',
    badge: 'LIMITED RUN',
    batikColor: '#8D2025',
    styleType: 'minimal-stamp',
  },
  {
    slug: 'padu-gila-tee',
    name: 'PADU GILA Oversized Tee',
    subtitle: 'Too Loud To Ignore.',
    frontMain: 'PADU GILA',
    frontSub: 'Too Loud To Ignore.',
    backCopy: 'Local heat. Global attitude.',
    type: 'tee',
    accentColor: '#8D2025', // Heritage Crimson
    subAccent: '#F2EFE8',
    badge: 'BEST SELLER',
    batikColor: '#8D2025',
    styleType: 'bold-floral-side',
  },
  {
    slug: 'jom-lepak-tee',
    name: 'JOM LEPAK Oversized Tee',
    subtitle: 'No Rush. No Drama.',
    frontMain: 'JOM LEPAK',
    frontSub: 'No Rush. No Drama.',
    backCopy: 'Kopi dulu. Cerita kemudian.',
    type: 'tee',
    accentColor: '#F2EFE8', // Off-White
    subAccent: '#B7945A', // Batik Gold
    badge: 'NEW DROP',
    batikColor: '#B7945A',
    styleType: 'brushstroke-batik',
  },
  {
    slug: 'ngam-lah-tee',
    name: 'NGAM LAH Oversized Tee',
    subtitle: 'Local Vibes Only.',
    frontMain: 'NGAM LAH',
    frontSub: 'Local Vibes Only.',
    backCopy: 'Masuk kepala. Masuk gaya.',
    type: 'tee',
    accentColor: '#0E5B5F', // Deep Teal
    subAccent: '#E8DFCF',
    badge: 'LIMITED RUN',
    batikColor: '#0E5B5F',
    styleType: 'teal-panel-batik',
  },
  {
    slug: 'syok-lah-tee',
    name: 'SYOK LAH Oversized Tee',
    subtitle: 'Too Good To Miss.',
    frontMain: 'SYOK LAH',
    frontSub: 'Too Good To Miss.',
    backCopy: 'Sekali pakai terus jadi.',
    type: 'tee',
    accentColor: '#2D5A27', // Forest Green
    subAccent: '#D65A20', // Terracotta
    badge: 'NEW DROP',
    batikColor: '#2D5A27',
    styleType: 'cream-brush-batik',
  },
  {
    slug: 'sentap-sikit-tee',
    name: 'SENTAP SIKIT Oversized Tee',
    subtitle: 'Truth Hurts A Bit.',
    frontMain: 'SENTAP SIKIT',
    frontSub: 'Truth Hurts A Bit.',
    backCopy: 'Kalau terasa, mungkin betul.',
    type: 'tee',
    accentColor: '#8D2025',
    subAccent: '#B7945A',
    badge: 'HOT',
    batikColor: '#8D2025',
    styleType: 'truth-warning',
  },
  {
    slug: 'steady-konon-sleeveless',
    name: 'STEADY KONON Sleeveless Tee',
    subtitle: 'Cool Kat Luar, Panic Kat Dalam.',
    frontMain: 'STEADY KONON',
    frontSub: 'Cool Kat Luar, Panic Kat Dalam.',
    backCopy: 'Muka relax. Jiwa kalut.',
    type: 'sleeveless',
    accentColor: '#C8FF00',
    subAccent: '#D65A20',
    badge: 'LIMITED RUN',
    batikColor: '#C8FF00',
    styleType: 'raw-side-batik',
  },
  {
    slug: 'banyak-alasan-tee',
    name: 'BANYAK ALASAN Oversized Tee',
    subtitle: 'Excuses Premium Edition.',
    frontMain: 'BANYAK ALASAN',
    frontSub: 'Excuses Premium Edition.',
    backCopy: 'Idea ada. Gerak tak ada.',
    type: 'tee',
    accentColor: '#D65A20',
    subAccent: '#F2EFE8',
    badge: 'NEW DROP',
    batikColor: '#D65A20',
    styleType: 'procrastinator-cert',
  },
  {
    slug: 'chill-dulu-tee',
    name: 'CHILL DULU Oversized Tee',
    subtitle: 'Everything Also Urgent?',
    frontMain: 'CHILL DULU',
    frontSub: 'Everything Also Urgent?',
    backCopy: 'Relax bro. Dunia belum habis.',
    type: 'tee',
    accentColor: '#F2EFE8',
    subAccent: '#0E5B5F',
    badge: 'BEST SELLER',
    batikColor: '#0E5B5F',
    styleType: 'anti-burnout',
  },
];

function generateFrontSVG(prod) {
  const isSleeveless = prod.type === 'sleeveless';
  const accent = prod.accentColor;
  const sub = prod.subAccent;
  const batikCol = prod.batikColor;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070707" />
      <stop offset="50%" stop-color="#0d0d0d" />
      <stop offset="100%" stop-color="#141414" />
    </linearGradient>
    <pattern id="cottonTexture" width="6" height="6" patternUnits="userSpaceOnUse">
      <rect width="6" height="6" fill="#111111"/>
      <path d="M 0 3 L 6 3 M 3 0 L 3 6" stroke="#181818" stroke-width="0.8"/>
    </pattern>
    <filter id="inkDistress">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </defs>

  <!-- Studio Backdrop -->
  <rect width="100%" height="100%" fill="url(#bgGrad)" />

  <!-- Garment Floor Shadow -->
  <ellipse cx="400" cy="815" rx="250" ry="25" fill="#000000" opacity="0.85" />

  <!-- Black Garment Silhouette -->
  <g transform="translate(0, 40)">
    ${
      isSleeveless
        ? `<!-- Raw Armhole Boxy Sleeveless Silhouette -->
           <path d="M 280 150 L 340 130 L 460 130 L 520 150 L 515 310 L 490 350 L 500 760 L 300 760 L 310 350 L 285 310 Z" fill="url(#cottonTexture)" stroke="#222222" stroke-width="3"/>
           <path d="M 520 150 Q 475 240 515 310" fill="none" stroke="#2a2a2a" stroke-width="5"/>
           <path d="M 280 150 Q 325 240 285 310" fill="none" stroke="#2a2a2a" stroke-width="5"/>`
        : `<!-- Drop-Shoulder Heavyweight Oversized Tee Silhouette -->
           <path d="M 210 200 L 330 130 L 470 130 L 590 200 L 650 360 L 555 400 L 520 330 L 520 760 L 280 760 L 280 330 L 245 400 L 150 360 Z" fill="url(#cottonTexture)" stroke="#222222" stroke-width="3"/>
           <line x1="280" y1="170" x2="280" y2="330" stroke="#262626" stroke-width="2" stroke-dasharray="3 2"/>
           <line x1="520" y1="170" x2="520" y2="330" stroke="#262626" stroke-width="2" stroke-dasharray="3 2"/>`
    }

    <!-- Collar Ribbing -->
    <path d="M 330 130 Q 400 195 470 130" fill="none" stroke="#1c1c1c" stroke-width="14" />
    <path d="M 330 130 Q 400 195 470 130" fill="none" stroke="#2d2d2d" stroke-width="2" stroke-dasharray="4 2"/>

    <!-- Inside Neck Brand Woven Tag -->
    <rect x="365" y="145" width="70" height="26" fill="#080808" stroke="#333" stroke-width="1" rx="1"/>
    <text x="400" y="157" font-family="Bebas Neue, sans-serif" font-size="11" font-weight="bold" fill="#F2EFE8" text-anchor="middle">LOKAL//LOUD</text>
    <text x="400" y="166" font-family="sans-serif" font-size="6" font-weight="bold" fill="${accent}" text-anchor="middle">MADE IN MY • 260GSM</text>

    <!-- SIDE FLORAL BATIK TRAILING ARTWORK (Creeping up from right hem & side seam) -->
    <g opacity="0.85">
      <!-- Batik Floral Trailing Vines on Right Side -->
      <path d="M 450 760 Q 480 650 510 520 Q 530 450 480 400" fill="none" stroke="${batikCol}" stroke-width="4" />
      <path d="M 470 700 Q 500 620 460 550" fill="none" stroke="${batikCol}" stroke-width="2" />
      
      <!-- Flower 1 (Hem) -->
      <g transform="translate(470, 720) scale(1.2)">
        <circle cx="0" cy="0" r="8" fill="none" stroke="${batikCol}" stroke-width="2"/>
        <path d="M 0 -22 Q -8 -10 0 0 Q 8 -10 0 -22 Z" fill="${batikCol}" opacity="0.8"/>
        <path d="M 0 22 Q -8 10 0 0 Q 8 10 0 22 Z" fill="${batikCol}" opacity="0.8"/>
        <path d="M -22 0 Q -10 -8 0 0 Q -10 8 -22 0 Z" fill="${batikCol}" opacity="0.8"/>
        <path d="M 22 0 Q 10 -8 0 0 Q 10 8 22 0 Z" fill="${batikCol}" opacity="0.8"/>
      </g>

      <!-- Flower 2 (Mid Hip) -->
      <g transform="translate(500, 580) scale(1.5)">
        <circle cx="0" cy="0" r="10" fill="none" stroke="${sub}" stroke-width="2"/>
        <path d="M 0 -25 Q -10 -12 0 0 Q 10 -12 0 -25 Z" fill="${batikCol}"/>
        <path d="M 0 25 Q -10 12 0 0 Q 10 12 0 25 Z" fill="${batikCol}"/>
        <path d="M -25 0 Q -12 -10 0 0 Q -12 10 -25 0 Z" fill="${batikCol}"/>
        <path d="M 25 0 Q 12 -10 0 0 Q 12 10 25 0 Z" fill="${batikCol}"/>
      </g>

      <!-- Flower 3 (Upper Waist) -->
      <g transform="translate(480, 430) scale(1.1)">
        <circle cx="0" cy="0" r="6" fill="${sub}"/>
        <path d="M 0 -18 Q -6 -9 0 0 Q 6 -9 0 -18 Z" fill="${batikCol}"/>
        <path d="M 0 18 Q -6 9 0 0 Q 6 9 0 18 Z" fill="${batikCol}"/>
        <path d="M -18 0 Q -9 -6 0 0 Q -9 6 -18 0 Z" fill="${batikCol}"/>
        <path d="M 18 0 Q 9 -6 0 0 Q 9 6 18 0 Z" fill="${batikCol}"/>
      </g>
    </g>

    <!-- Bottom Hem Batik Border Tape -->
    <rect x="280" y="742" width="240" height="18" fill="#080808" stroke="${batikCol}" stroke-width="1.5"/>
    <path d="M 285 751 L 515 751" stroke="${batikCol}" stroke-width="2" stroke-dasharray="6 4"/>

    <!-- FRONT PRINT MAIN SLANG TYPOGRAPHY -->
    <g transform="translate(400, 360)">
      <!-- Main Slang Title -->
      <text x="0" y="-15" font-family="Bebas Neue, sans-serif" font-size="58" font-weight="900" fill="#F2EFE8" text-anchor="middle" letter-spacing="3" filter="url(#inkDistress)">
        ${prod.frontMain}
      </text>

      <!-- Second Line in Accent Color -->
      <text x="0" y="38" font-family="Bebas Neue, sans-serif" font-size="42" font-weight="900" fill="${accent}" text-anchor="middle" letter-spacing="4">
        ${prod.frontMain.split(' ')[1] || ''}
      </text>

      <!-- English Subtitle Tag Box -->
      <rect x="-140" y="60" width="280" height="26" fill="#080808" stroke="${accent}" stroke-width="1" rx="2"/>
      <text x="0" y="77" font-family="sans-serif" font-size="11" font-weight="900" fill="${sub}" text-anchor="middle" letter-spacing="2">
        ${prod.frontSub.toUpperCase()}
      </text>
    </g>

    <!-- Bottom Hem Woven Patch Tag -->
    <rect x="290" y="718" width="36" height="20" fill="#080808" stroke="${accent}" stroke-width="1"/>
    <text x="308" y="731" font-family="sans-serif" font-size="7" font-weight="extrabold" fill="${accent}" text-anchor="middle">🇲🇾 MY</text>
  </g>

  <!-- Editorial Spec Overlay at Bottom -->
  <text x="40" y="930" font-family="Bebas Neue, sans-serif" font-size="32" fill="#F2EFE8" letter-spacing="2">${prod.name}</text>
  <text x="40" y="955" font-family="sans-serif" font-size="12" fill="#8C8C8C" font-weight="600">OVERSIZED FIT | 260 GSM PREMIUM COTTON | BATIK INPIRED GRAPHIC</text>
  <rect x="700" y="920" width="60" height="24" fill="#111111" stroke="${accent}" stroke-width="1"/>
  <text x="730" y="936" font-family="sans-serif" font-size="10" font-weight="bold" fill="${accent}" text-anchor="middle">FRONT</text>
</svg>`;
}

function generateBackSVG(prod) {
  const isSleeveless = prod.type === 'sleeveless';
  const accent = prod.accentColor;
  const sub = prod.subAccent;
  const batikCol = prod.batikColor;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070707" />
      <stop offset="50%" stop-color="#0d0d0d" />
      <stop offset="100%" stop-color="#141414" />
    </linearGradient>
    <pattern id="cottonTexture" width="6" height="6" patternUnits="userSpaceOnUse">
      <rect width="6" height="6" fill="#111111"/>
      <path d="M 0 3 L 6 3 M 3 0 L 3 6" stroke="#181818" stroke-width="0.8"/>
    </pattern>
  </defs>

  <rect width="100%" height="100%" fill="url(#bgGrad)" />

  <ellipse cx="400" cy="815" rx="250" ry="25" fill="#000000" opacity="0.85" />

  <g transform="translate(0, 40)">
    ${
      isSleeveless
        ? `<path d="M 280 150 L 340 130 L 460 130 L 520 150 L 515 310 L 490 350 L 500 760 L 300 760 L 310 350 L 285 310 Z" fill="url(#cottonTexture)" stroke="#222222" stroke-width="3"/>`
        : `<path d="M 210 200 L 330 130 L 470 130 L 590 200 L 650 360 L 555 400 L 520 330 L 520 760 L 280 760 L 280 330 L 245 400 L 150 360 Z" fill="url(#cottonTexture)" stroke="#222222" stroke-width="3"/>
           <line x1="280" y1="170" x2="280" y2="330" stroke="#262626" stroke-width="2" stroke-dasharray="3 2"/>
           <line x1="520" y1="170" x2="520" y2="330" stroke="#262626" stroke-width="2" stroke-dasharray="3 2"/>`
    }

    <!-- Collar Back -->
    <path d="M 330 130 L 470 130" stroke="#1c1c1c" stroke-width="14"/>

    <!-- SIDE BATIK FLORAL PATTERN (Back Right Side Trail) -->
    <g opacity="0.8">
      <path d="M 500 760 Q 470 600 510 420 Q 520 300 480 200" fill="none" stroke="${batikCol}" stroke-width="3" />
      <g transform="translate(480, 680) scale(1.4)">
        <circle cx="0" cy="0" r="8" fill="none" stroke="${batikCol}" stroke-width="2"/>
        <path d="M 0 -22 Q -8 -10 0 0 Q 8 -10 0 -22 Z" fill="${batikCol}"/>
        <path d="M 0 22 Q -8 10 0 0 Q 8 10 0 22 Z" fill="${batikCol}"/>
        <path d="M -22 0 Q -10 -8 0 0 Q -10 8 -22 0 Z" fill="${batikCol}"/>
        <path d="M 22 0 Q 10 -8 0 0 Q 10 8 22 0 Z" fill="${batikCol}"/>
      </g>
    </g>

    <!-- BACK GIANT SLANG STATEMENT PRINT -->
    <g transform="translate(400, 340)">
      <!-- Batik Symbol Center Crest -->
      <g transform="translate(0, -90) scale(0.9)">
        <circle cx="0" cy="0" r="10" fill="${accent}"/>
        <path d="M 0 -25 Q -10 -12 0 0 Q 10 -12 0 -25 Z" fill="${batikCol}"/>
        <path d="M 0 25 Q -10 12 0 0 Q 10 12 0 25 Z" fill="${batikCol}"/>
        <path d="M -25 0 Q -12 -10 0 0 Q -12 10 -25 0 Z" fill="${batikCol}"/>
        <path d="M 25 0 Q 12 -10 0 0 Q 12 10 25 0 Z" fill="${batikCol}"/>
      </g>

      <!-- Headline -->
      <text x="0" y="-40" font-family="Bebas Neue, sans-serif" font-size="64" font-weight="900" fill="${accent}" text-anchor="middle" letter-spacing="4">
        ${prod.frontMain}
      </text>

      <!-- Sarcastic Quote Box -->
      <rect x="-190" y="0" width="380" height="65" fill="#080808" stroke="#333333" stroke-width="1.5" rx="3"/>
      <text x="0" y="38" font-family="sans-serif" font-size="20" font-weight="900" fill="#F2EFE8" text-anchor="middle" letter-spacing="1">
        "${prod.backCopy}"
      </text>

      <text x="0" y="95" font-family="sans-serif" font-size="10" font-weight="700" fill="#8C8C8C" text-anchor="middle" letter-spacing="3">
        PRINTED IN MALAYSIA • ATTITUDE GLOBAL
      </text>

      <!-- Barcode Tag -->
      <rect x="-60" y="118" width="120" height="28" fill="#080808" stroke="#292929" stroke-width="1"/>
      <line x1="-50" y1="123" x2="-50" y2="141" stroke="#FFF" stroke-width="2"/>
      <line x1="-44" y1="123" x2="-44" y2="141" stroke="#FFF" stroke-width="4"/>
      <line x1="-34" y1="123" x2="-34" y2="141" stroke="#FFF" stroke-width="1"/>
      <line x1="-25" y1="123" x2="-25" y2="141" stroke="#FFF" stroke-width="3"/>
      <line x1="-15" y1="123" x2="-15" y2="141" stroke="#FFF" stroke-width="5"/>
      <line x1="-2" y1="123" x2="-2" y2="141" stroke="#FFF" stroke-width="2"/>
      <line x1="8" y1="123" x2="8" y2="141" stroke="#FFF" stroke-width="4"/>
      <line x1="20" y1="123" x2="20" y2="141" stroke="#FFF" stroke-width="2"/>
      <line x1="30" y1="123" x2="30" y2="141" stroke="#FFF" stroke-width="3"/>
      <line x1="45" y1="123" x2="45" y2="141" stroke="#FFF" stroke-width="2"/>
    </g>
  </g>

  <!-- Editorial Spec Overlay at Bottom -->
  <text x="40" y="930" font-family="Bebas Neue, sans-serif" font-size="32" fill="#F2EFE8" letter-spacing="2">${prod.name}</text>
  <text x="40" y="955" font-family="sans-serif" font-size="12" fill="#8C8C8C" font-weight="600">BACK VIEW // "${prod.backCopy}"</text>
  <rect x="700" y="920" width="60" height="24" fill="#111111" stroke="${accent}" stroke-width="1"/>
  <text x="730" y="936" font-family="sans-serif" font-size="10" font-weight="bold" fill="${accent}" text-anchor="middle">BACK</text>
</svg>`;
}

function generateDetailSVG(prod) {
  const accent = prod.accentColor;
  const batikCol = prod.batikColor;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#050505" />
      <stop offset="100%" stop-color="#141414" />
    </linearGradient>
    <pattern id="macroFabric" width="10" height="10" patternUnits="userSpaceOnUse">
      <rect width="10" height="10" fill="#111111"/>
      <path d="M 0 5 L 10 5 M 5 0 L 5 10" stroke="#1e1e1e" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="100%" height="100%" fill="url(#bgGrad)" />

  <g transform="translate(100, 140)">
    <rect width="600" height="620" fill="#0b0b0b" stroke="#292929" stroke-width="2" rx="4"/>
    <rect width="600" height="620" fill="url(#macroFabric)" opacity="0.7"/>

    <g transform="translate(300, 240)">
      <circle cx="0" cy="0" r="160" fill="#080808" stroke="${accent}" stroke-width="3" stroke-dasharray="12 6"/>
      <text x="0" y="-20" font-family="Bebas Neue, sans-serif" font-size="56" fill="#F2EFE8" text-anchor="middle" font-weight="900">
        ${prod.frontMain.split(' ')[0]}
      </text>
      <text x="0" y="25" font-family="sans-serif" font-size="13" fill="${accent}" text-anchor="middle" font-weight="900" letter-spacing="3">
        BATIK REWORKED MOTIF DETAIL
      </text>

      <g transform="translate(0, 80) scale(0.9)">
        <circle cx="0" cy="0" r="8" fill="none" stroke="${batikCol}" stroke-width="2"/>
        <path d="M 0 -22 Q -8 -10 0 0 Q 8 -10 0 -22 Z" fill="${batikCol}"/>
        <path d="M 0 22 Q -8 10 0 0 Q 8 10 0 22 Z" fill="${batikCol}"/>
        <path d="M -22 0 Q -10 -8 0 0 Q -10 8 -22 0 Z" fill="${batikCol}"/>
        <path d="M 22 0 Q 10 -8 0 0 Q 10 8 22 0 Z" fill="${batikCol}"/>
      </g>
    </g>

    <rect x="30" y="530" width="160" height="50" fill="#141414" stroke="#333" stroke-width="1"/>
    <text x="110" y="552" font-family="sans-serif" font-size="10" font-weight="bold" fill="#F2EFE8" text-anchor="middle">240-260 GSM</text>
    <text x="110" y="566" font-family="sans-serif" font-size="8" fill="#8C8C8C" text-anchor="middle">HEAVY COTTON</text>

    <rect x="220" y="530" width="160" height="50" fill="#141414" stroke="#333" stroke-width="1"/>
    <text x="300" y="552" font-family="sans-serif" font-size="10" font-weight="bold" fill="${accent}" text-anchor="middle">BATIK FLORAL</text>
    <text x="300" y="566" font-family="sans-serif" font-size="8" fill="#8C8C8C" text-anchor="middle">SIDE TRAIL ARTWORK</text>

    <rect x="410" y="530" width="160" height="50" fill="#141414" stroke="#333" stroke-width="1"/>
    <text x="490" y="552" font-family="sans-serif" font-size="10" font-weight="bold" fill="#F2EFE8" text-anchor="middle">PRINTED IN MY</text>
    <text x="490" y="566" font-family="sans-serif" font-size="8" fill="#8C8C8C" text-anchor="middle">ATTITUDE GLOBAL</text>
  </g>

  <!-- Editorial Info Overlay -->
  <text x="40" y="930" font-family="Bebas Neue, sans-serif" font-size="32" fill="#F2EFE8" letter-spacing="2">${prod.name}</text>
  <text x="40" y="955" font-family="sans-serif" font-size="12" fill="#8C8C8C" font-weight="600">PRINT & FABRIC MACRO DETAIL // HEAVY COTTON WEAVE & BATIK TRAIL</text>
  <rect x="700" y="920" width="60" height="24" fill="#111111" stroke="${accent}" stroke-width="1"/>
  <text x="730" y="936" font-family="sans-serif" font-size="10" font-weight="bold" fill="${accent}" text-anchor="middle">DETAIL</text>
</svg>`;
}

function generateModelSVG(prod) {
  const accent = prod.accentColor;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#080808" />
      <stop offset="100%" stop-color="#181818" />
    </linearGradient>
  </defs>

  <rect width="100%" height="100%" fill="url(#bgGrad)" />

  <line x1="0" y1="200" x2="800" y2="200" stroke="#1c1c1c" stroke-width="1"/>
  <line x1="0" y1="400" x2="800" y2="400" stroke="#1c1c1c" stroke-width="1"/>
  <line x1="0" y1="600" x2="800" y2="600" stroke="#1c1c1c" stroke-width="1"/>

  <g transform="translate(400, 480)">
    <circle cx="0" cy="-300" r="45" fill="#1a1a1a" stroke="#333" stroke-width="2"/>
    <path d="M -55 -315 L 55 -315 L 65 -300 L -65 -300 Z" fill="#080808" stroke="${accent}" stroke-width="2"/>

    <path d="M -160 -240 L -80 -255 L 80 -255 L 160 -240 L 210 -50 L 150 -30 L 130 -120 L 130 180 L -130 180 L -130 -120 L -150 -30 L -210 -50 Z" fill="#111111" stroke="#333" stroke-width="3"/>

    <text x="0" y="-120" font-family="Bebas Neue, sans-serif" font-size="38" fill="#F2EFE8" text-anchor="middle" font-weight="900">
      ${prod.frontMain}
    </text>
    <text x="0" y="-95" font-family="sans-serif" font-size="10" fill="${accent}" text-anchor="middle" font-weight="bold">
      ${prod.frontSub.toUpperCase()}
    </text>

    <path d="M -120 180 L -30 180 L -20 400 L -90 400 Z" fill="#0d0d0d" stroke="#222" stroke-width="2"/>
    <path d="M 30 180 L 120 180 L 90 400 L 20 400 Z" fill="#0d0d0d" stroke="#222" stroke-width="2"/>
  </g>

  <rect x="40" y="40" width="240" height="60" fill="#111111" stroke="#292929" stroke-width="1" rx="2"/>
  <text x="55" y="62" font-family="sans-serif" font-size="11" font-weight="bold" fill="${accent}">STREET LOOKBOOK // KL</text>
  <text x="55" y="80" font-family="sans-serif" font-size="10" fill="#8C8C8C">MODEL IS 182CM WEARING SIZE L</text>

  <text x="40" y="930" font-family="Bebas Neue, sans-serif" font-size="32" fill="#F2EFE8" letter-spacing="2">${prod.name}</text>
  <text x="40" y="955" font-family="sans-serif" font-size="12" fill="#8C8C8C" font-weight="600">ON MODEL EDITORIAL LOOK // KUALA LUMPUR STREETS</text>
  <rect x="700" y="920" width="60" height="24" fill="#111111" stroke="${accent}" stroke-width="1"/>
  <text x="730" y="936" font-family="sans-serif" font-size="10" font-weight="bold" fill="${accent}" text-anchor="middle">MODEL</text>
</svg>`;
}

// Generate images for all 12 products in BOTH .png and .jpg format
PRODUCTS_DATA.forEach((prod) => {
  const prodDir = path.join(__dirname, '..', 'public', 'images', 'products', prod.slug);
  if (!fs.existsSync(prodDir)) {
    fs.mkdirSync(prodDir, { recursive: true });
  }

  const frontSvg = generateFrontSVG(prod);
  const backSvg = generateBackSVG(prod);
  const detailSvg = generateDetailSVG(prod);
  const modelSvg = generateModelSVG(prod);

  fs.writeFileSync(path.join(prodDir, 'front.png'), frontSvg, 'utf8');
  fs.writeFileSync(path.join(prodDir, 'back.png'), backSvg, 'utf8');
  fs.writeFileSync(path.join(prodDir, 'detail.png'), detailSvg, 'utf8');
  fs.writeFileSync(path.join(prodDir, 'model.png'), modelSvg, 'utf8');

  fs.writeFileSync(path.join(prodDir, 'front.jpg'), frontSvg, 'utf8');
  fs.writeFileSync(path.join(prodDir, 'back.jpg'), backSvg, 'utf8');
  fs.writeFileSync(path.join(prodDir, 'detail.jpg'), detailSvg, 'utf8');
  fs.writeFileSync(path.join(prodDir, 'model.jpg'), modelSvg, 'utf8');

  console.log(`Generated side-trailing Batik product visual suite for [${prod.slug}]`);
});

console.log('All 12 products (96 image asset files) updated with side-trailing Batik artwork and reference lookbook style!');
