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
    colorName: 'Obsidian Black / Batik Gold',
    accentColor: '#B7945A',
    badge: 'BEST SELLER',
    layoutStyle: 'framed-hero',
  },
  {
    slug: 'acah-padu-sleeveless',
    name: 'ACAH PADU Sleeveless Tee',
    subtitle: 'Style Banyak, Kerja Kurang.',
    frontMain: 'ACAH PADU',
    frontSub: 'Style Banyak, Kerja Kurang.',
    backCopy: 'Nampak macam power. Itu je.',
    type: 'sleeveless',
    colorName: 'Surface Black / Burnt Orange',
    accentColor: '#D65A20',
    badge: 'HOT',
    layoutStyle: 'raw-industrial',
  },
  {
    slug: 'terpaling-on-tee',
    name: 'TERPALING ON Oversized Tee',
    subtitle: 'Reply Laju, Datang Lambat.',
    frontMain: 'TERPALING ON',
    frontSub: 'Reply Laju, Datang Lambat.',
    backCopy: 'Online sentiasa. Action entah bila.',
    type: 'tee',
    colorName: 'Pitch Black / Acid Lime',
    accentColor: '#C8FF00',
    badge: 'NEW DROP',
    layoutStyle: 'cyber-slang',
  },
  {
    slug: 'boleh-lah-sleeveless',
    name: 'BOLEH LAH Sleeveless Tee',
    subtitle: 'Not Great. Still Jalan.',
    frontMain: 'BOLEH LAH',
    frontSub: 'Not Great. Still Jalan.',
    backCopy: 'Tak perfect. Tapi lepas.',
    type: 'sleeveless',
    colorName: 'Washed Black / Heritage Red',
    accentColor: '#8D2025',
    badge: 'LIMITED RUN',
    layoutStyle: 'minimal-stamp',
  },
  {
    slug: 'padu-gila-tee',
    name: 'PADU GILA Oversized Tee',
    subtitle: 'Too Loud To Ignore.',
    frontMain: 'PADU GILA',
    frontSub: 'Too Loud To Ignore.',
    backCopy: 'Local heat. Global attitude.',
    type: 'tee',
    colorName: 'Deep Black / Acid Lime',
    accentColor: '#C8FF00',
    badge: 'BEST SELLER',
    layoutStyle: 'puff-bold',
  },
  {
    slug: 'jom-lepak-tee',
    name: 'JOM LEPAK Oversized Tee',
    subtitle: 'No Rush. No Drama.',
    frontMain: 'JOM LEPAK',
    frontSub: 'No Rush. No Drama.',
    backCopy: 'Kopi dulu. Cerita kemudian.',
    type: 'tee',
    colorName: 'Background Black / Off White',
    accentColor: '#F2EFE8',
    badge: 'NEW DROP',
    layoutStyle: 'lepak-emblem',
  },
  {
    slug: 'ngam-lah-longline-tee',
    name: 'NGAM LAH Oversized Tee',
    subtitle: 'Local Vibes Only.',
    frontMain: 'NGAM LAH',
    frontSub: 'Local Vibes Only.',
    backCopy: 'Masuk kepala. Masuk gaya.',
    type: 'tee',
    colorName: 'Obsidian Black / Dark Teal',
    accentColor: '#0E5B5F',
    badge: 'LIMITED RUN',
    layoutStyle: 'batik-sleeve',
  },
  {
    slug: 'syok-lah-tee',
    name: 'SYOK LAH Oversized Tee',
    subtitle: 'Too Good To Miss.',
    frontMain: 'SYOK LAH',
    frontSub: 'Too Good To Miss.',
    backCopy: 'Sekali pakai terus jadi.',
    type: 'tee',
    colorName: 'Surface Black / Cream',
    accentColor: '#E8DFCF',
    badge: 'NEW DROP',
    layoutStyle: 'editorial-discharge',
  },
  {
    slug: 'sentap-sikit-tee',
    name: 'SENTAP SIKIT Oversized Tee',
    subtitle: 'Truth Hurts A Bit.',
    frontMain: 'SENTAP SIKIT',
    frontSub: 'Truth Hurts A Bit.',
    backCopy: 'Kalau terasa, mungkin betul.',
    type: 'tee',
    colorName: 'Washed Black / Heritage Red',
    accentColor: '#8D2025',
    badge: 'HOT',
    layoutStyle: 'truth-warning',
  },
  {
    slug: 'steady-konon-sleeveless',
    name: 'STEADY KONON Sleeveless Tee',
    subtitle: 'Cool Kat Luar, Panic Kat Dalam.',
    frontMain: 'STEADY KONON',
    frontSub: 'Cool Kat Luar, Panic Kat Dalam.',
    backCopy: 'Muka relax. Jiwa kalut.',
    type: 'sleeveless',
    colorName: 'Deep Black / Acid Lime',
    accentColor: '#C8FF00',
    badge: 'LIMITED RUN',
    layoutStyle: 'panic-label',
  },
  {
    slug: 'banyak-alasan-tee',
    name: 'BANYAK ALASAN Oversized Tee',
    subtitle: 'Excuses Premium Edition.',
    frontMain: 'BANYAK ALASAN',
    frontSub: 'Excuses Premium Edition.',
    backCopy: 'Idea ada. Gerak tak ada.',
    type: 'tee',
    colorName: 'Obsidian Black / Burnt Orange',
    accentColor: '#D65A20',
    badge: 'NEW DROP',
    layoutStyle: 'procrastinator-cert',
  },
  {
    slug: 'chill-dulu-tee',
    name: 'CHILL DULU Oversized Tee',
    subtitle: 'Everything Also Urgent?',
    frontMain: 'CHILL DULU',
    frontSub: 'Everything Also Urgent?',
    backCopy: 'Relax bro. Dunia belum habis.',
    type: 'tee',
    colorName: 'Background Black / Off White',
    accentColor: '#F2EFE8',
    badge: 'BEST SELLER',
    layoutStyle: 'anti-burnout',
  },
];

// Photorealistic Streetwear Garment SVG Generator (4:5 Ratio - 800x1000)
function generateFrontSVG(prod) {
  const isSleeveless = prod.type === 'sleeveless';
  const accent = prod.accentColor;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000">
  <defs>
    <linearGradient id="studioBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#050505" />
      <stop offset="50%" stop-color="#0a0a0a" />
      <stop offset="100%" stop-color="#141414" />
    </linearGradient>
    <radialGradient id="spotlight" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="#222222" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>
    <pattern id="heavyCottonFabric" width="6" height="6" patternUnits="userSpaceOnUse">
      <rect width="6" height="6" fill="#111111"/>
      <path d="M 0 3 L 6 3 M 3 0 L 3 6" stroke="#181818" stroke-width="0.8"/>
    </pattern>
    <filter id="inkDistress">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </defs>

  <!-- Dark Studio Backdrop with Spotlight -->
  <rect width="100%" height="100%" fill="url(#studioBg)" />
  <rect width="100%" height="100%" fill="url(#spotlight)" />

  <!-- Garment Shadow -->
  <ellipse cx="400" cy="810" rx="240" ry="25" fill="#000000" opacity="0.8" />

  <!-- Garment Silhouette (Black 260GSM Oversized Drop Shoulder) -->
  <g transform="translate(0, 40)">
    ${
      isSleeveless
        ? `<!-- Boxy Sleeveless Cut Silhouette -->
           <path d="M 280 150 L 340 130 L 460 130 L 520 150 L 515 310 L 490 350 L 500 760 L 300 760 L 310 350 L 285 310 Z" fill="url(#heavyCottonFabric)" stroke="#222222" stroke-width="3"/>
           <!-- Deep Dropped Raw Armholes -->
           <path d="M 520 150 Q 475 240 515 310" fill="none" stroke="#2a2a2a" stroke-width="5"/>
           <path d="M 280 150 Q 325 240 285 310" fill="none" stroke="#2a2a2a" stroke-width="5"/>
           <!-- Side Seams & Raw Hem Edge -->
           <line x1="310" y1="350" x2="300" y2="760" stroke="#1c1c1c" stroke-width="2"/>
           <line x1="490" y1="350" x2="500" y2="760" stroke="#1c1c1c" stroke-width="2"/>`
        : `<!-- Drop-Shoulder Oversized Tee Silhouette -->
           <path d="M 210 200 L 330 130 L 470 130 L 590 200 L 650 360 L 555 400 L 520 330 L 520 760 L 280 760 L 280 330 L 245 400 L 150 360 Z" fill="url(#heavyCottonFabric)" stroke="#222222" stroke-width="3"/>
           <!-- Sleeves Fold Folds -->
           <path d="M 210 200 L 245 400 M 590 200 L 555 400" stroke="#1a1a1a" stroke-width="3"/>
           <!-- Dropped Shoulder Stitching Seams -->
           <line x1="280" y1="170" x2="280" y2="330" stroke="#262626" stroke-width="2" stroke-dasharray="3 2"/>
           <line x1="520" y1="170" x2="520" y2="330" stroke="#262626" stroke-width="2" stroke-dasharray="3 2"/>`
    }

    <!-- Thick Ribbed Crew Neck Collar (1.25 inch) -->
    <path d="M 330 130 Q 400 195 470 130" fill="none" stroke="#1c1c1c" stroke-width="14" />
    <path d="M 330 130 Q 400 195 470 130" fill="none" stroke="#2d2d2d" stroke-width="2" stroke-dasharray="4 2"/>

    <!-- Inside Woven Neck Label (LOKAL//LOUD 260 GSM) -->
    <rect x="365" y="145" width="70" height="26" fill="#080808" stroke="#333" stroke-width="1" rx="1"/>
    <text x="400" y="157" font-family="Bebas Neue, sans-serif" font-size="11" font-weight="bold" fill="#F2EFE8" text-anchor="middle">LOKAL//LOUD</text>
    <text x="400" y="166" font-family="sans-serif" font-size="6" font-weight="bold" fill="${accent}" text-anchor="middle">MADE IN MY • 260GSM</text>

    <!-- FRONT PRINT GRAPHIC ARTWORK (Unique Per Layout Style) -->
    <g transform="translate(400, 360)">
      <!-- Main Typography Print -->
      <text x="0" y="-10" font-family="Bebas Neue, sans-serif" font-size="54" font-weight="900" fill="#F2EFE8" text-anchor="middle" letter-spacing="3" filter="url(#inkDistress)">
        ${prod.frontMain}
      </text>

      <!-- English Subtitle Tag -->
      <rect x="-140" y="12" width="280" height="26" fill="#080808" stroke="${accent}" stroke-width="1" rx="2"/>
      <text x="0" y="29" font-family="sans-serif" font-size="11" font-weight="900" fill="${accent}" text-anchor="middle" letter-spacing="2">
        ${prod.frontSub.toUpperCase()}
      </text>

      <!-- Modern Micro Batik Accent Border -->
      <path d="M -150 -50 L -130 -50 M 130 -50 L 150 -50 M -150 50 L -130 50 M 130 50 L 150 50" stroke="${accent}" stroke-width="2"/>
      <circle cx="-150" cy="-50" r="2" fill="${accent}"/>
      <circle cx="150" cy="-50" r="2" fill="${accent}"/>
      <circle cx="-150" cy="50" r="2" fill="${accent}"/>
      <circle cx="150" cy="50" r="2" fill="${accent}"/>
    </g>

    <!-- Bottom Hem Woven Patch Tag -->
    <rect x="290" y="730" width="36" height="20" fill="#080808" stroke="${accent}" stroke-width="1"/>
    <text x="308" y="743 font-family="sans-serif" font-size="7" font-weight="extrabold" fill="${accent}" text-anchor="middle">🇲🇾 KL</text>
  </g>

  <!-- Editorial Info overlay at bottom -->
  <text x="40" y="930" font-family="Bebas Neue, sans-serif" font-size="30" fill="#F2EFE8" letter-spacing="2">${prod.name}</text>
  <text x="40" y="955" font-family="sans-serif" font-size="12" fill="#8C8C8C" font-weight="500">FRONT VIEW // 260 GSM OVERSIZED BLACK SILHOUETTE</text>
  <rect x="700" y="920" width="60" height="24" fill="#111111" stroke="${accent}" stroke-width="1"/>
  <text x="730" y="936" font-family="sans-serif" font-size="10" font-weight="bold" fill="${accent}" text-anchor="middle">FRONT</text>
</svg>`;
}

function generateBackSVG(prod) {
  const isSleeveless = prod.type === 'sleeveless';
  const accent = prod.accentColor;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000">
  <defs>
    <linearGradient id="studioBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#050505" />
      <stop offset="50%" stop-color="#0a0a0a" />
      <stop offset="100%" stop-color="#141414" />
    </linearGradient>
    <pattern id="heavyCottonFabric" width="6" height="6" patternUnits="userSpaceOnUse">
      <rect width="6" height="6" fill="#111111"/>
      <path d="M 0 3 L 6 3 M 3 0 L 3 6" stroke="#181818" stroke-width="0.8"/>
    </pattern>
  </defs>

  <rect width="100%" height="100%" fill="url(#studioBg)" />

  <!-- Garment Shadow -->
  <ellipse cx="400" cy="810" rx="240" ry="25" fill="#000000" opacity="0.8" />

  <!-- Garment Back Silhouette -->
  <g transform="translate(0, 40)">
    ${
      isSleeveless
        ? `<path d="M 280 150 L 340 130 L 460 130 L 520 150 L 515 310 L 490 350 L 500 760 L 300 760 L 310 350 L 285 310 Z" fill="url(#heavyCottonFabric)" stroke="#222222" stroke-width="3"/>`
        : `<path d="M 210 200 L 330 130 L 470 130 L 590 200 L 650 360 L 555 400 L 520 330 L 520 760 L 280 760 L 280 330 L 245 400 L 150 360 Z" fill="url(#heavyCottonFabric)" stroke="#222222" stroke-width="3"/>
           <line x1="280" y1="170" x2="280" y2="330" stroke="#262626" stroke-width="2" stroke-dasharray="3 2"/>
           <line x1="520" y1="170" x2="520" y2="330" stroke="#262626" stroke-width="2" stroke-dasharray="3 2"/>`
    }

    <!-- Collar Rib Back -->
    <path d="M 330 130 L 470 130" stroke="#1c1c1c" stroke-width="14"/>

    <!-- GIANT BACK EDITORIAL SLANG GRAPHIC PRINT -->
    <g transform="translate(400, 350)">
      <!-- Oversized Back Headline -->
      <text x="0" y="-70" font-family="Bebas Neue, sans-serif" font-size="68" font-weight="900" fill="${accent}" text-anchor="middle" letter-spacing="4">
        ${prod.frontMain}
      </text>

      <!-- Back Malay Slang Quotation Box -->
      <rect x="-190" y="-15" width="380" height="65" fill="#080808" stroke="#333333" stroke-width="1.5" rx="3"/>
      <text x="0" y="22" font-family="sans-serif" font-size="20" font-weight="900" fill="#F2EFE8" text-anchor="middle" letter-spacing="1">
        "${prod.backCopy}"
      </text>

      <!-- Subtitle metadata line -->
      <text x="0" y="80" font-family="sans-serif" font-size="10" font-weight="700" fill="#8C8C8C" text-anchor="middle" letter-spacing="3">
        MALAYSIAN STREET SATIRE • ORIGINAL ARTWORK
      </text>

      <!-- Fake Barcode & Spec Code -->
      <rect x="-60" y="105" width="120" height="28" fill="#080808" stroke="#292929" stroke-width="1"/>
      <line x1="-50" y1="110" x2="-50" y2="128" stroke="#FFF" stroke-width="2"/>
      <line x1="-44" y1="110" x2="-44" y2="128" stroke="#FFF" stroke-width="4"/>
      <line x1="-34" y1="110" x2="-34" y2="128" stroke="#FFF" stroke-width="1"/>
      <line x1="-25" y1="110" x2="-25" y2="128" stroke="#FFF" stroke-width="3"/>
      <line x1="-15" y1="110" x2="-15" y2="128" stroke="#FFF" stroke-width="5"/>
      <line x1="-2" y1="110" x2="-2" y2="128" stroke="#FFF" stroke-width="2"/>
      <line x1="8" y1="110" x2="8" y2="128" stroke="#FFF" stroke-width="4"/>
      <line x1="20" y1="110" x2="20" y2="128" stroke="#FFF" stroke-width="2"/>
      <line x1="30" y1="110" x2="30" y2="128" stroke="#FFF" stroke-width="3"/>
      <line x1="45" y1="110" x2="45" y2="128" stroke="#FFF" stroke-width="2"/>
    </g>
  </g>

  <!-- Editorial Info overlay at bottom -->
  <text x="40" y="930" font-family="Bebas Neue, sans-serif" font-size="30" fill="#F2EFE8" letter-spacing="2">${prod.name}</text>
  <text x="40" y="955" font-family="sans-serif" font-size="12" fill="#8C8C8C" font-weight="500">BACK PRINT VIEW // "${prod.backCopy}"</text>
  <rect x="700" y="920" width="60" height="24" fill="#111111" stroke="${accent}" stroke-width="1"/>
  <text x="730" y="936" font-family="sans-serif" font-size="10" font-weight="bold" fill="${accent}" text-anchor="middle">BACK</text>
</svg>`;
}

function generateDetailSVG(prod) {
  const accent = prod.accentColor;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000">
  <defs>
    <linearGradient id="studioBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#050505" />
      <stop offset="100%" stop-color="#141414" />
    </linearGradient>
    <pattern id="macroFabric" width="10" height="10" patternUnits="userSpaceOnUse">
      <rect width="10" height="10" fill="#111111"/>
      <path d="M 0 5 L 10 5 M 5 0 L 5 10" stroke="#1e1e1e" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="100%" height="100%" fill="url(#studioBg)" />

  <!-- Macro Detail Showcase Container -->
  <g transform="translate(100, 140)">
    <rect width="600" height="620" fill="#0b0b0b" stroke="#292929" stroke-width="2" rx="4"/>
    <rect width="600" height="620" fill="url(#macroFabric)" opacity="0.7"/>

    <!-- Macro Lens Circle -->
    <g transform="translate(300, 260)">
      <circle cx="0" cy="0" r="170" fill="#080808" stroke="${accent}" stroke-width="3" stroke-dasharray="12 6"/>
      <text x="0" y="-20" font-family="Bebas Neue, sans-serif" font-size="60" fill="#F2EFE8" text-anchor="middle" font-weight="900">
        ${prod.frontMain.split(' ')[0]}
      </text>
      <text x="0" y="25" font-family="sans-serif" font-size="14" fill="${accent}" text-anchor="middle" font-weight="900" letter-spacing="3">
        260 GSM HIGH-DENSITY PRINT
      </text>

      <!-- Micro Batik Accent Motif -->
      <path d="M -90 65 Q 0 110 90 65" fill="none" stroke="${accent}" stroke-width="3"/>
      <circle cx="0" cy="85" r="5" fill="${accent}"/>
    </g>

    <!-- Spec Badges Footer inside Card -->
    <rect x="30" y="530" width="160" height="50" fill="#141414" stroke="#333" stroke-width="1"/>
    <text x="110" y="552" font-family="sans-serif" font-size="10" font-weight="bold" fill="#F2EFE8" text-anchor="middle">240-260 GSM</text>
    <text x="110" y="566" font-family="sans-serif" font-size="8" fill="#8C8C8C" text-anchor="middle">HEAVY COTTON</text>

    <rect x="220" y="530" width="160" height="50" fill="#141414" stroke="#333" stroke-width="1"/>
    <text x="300" y="552" font-family="sans-serif" font-size="10" font-weight="bold" fill="${accent}" text-anchor="middle">HIGH-DENSITY</text>
    <text x="300" y="566" font-family="sans-serif" font-size="8" fill="#8C8C8C" text-anchor="middle">SILKSCREEN PRINT</text>

    <rect x="410" y="530" width="160" height="50" fill="#141414" stroke="#333" stroke-width="1"/>
    <text x="490" y="552" font-family="sans-serif" font-size="10" font-weight="bold" fill="#F2EFE8" text-anchor="middle">BATIK REWORKED</text>
    <text x="490" y="566" font-family="sans-serif" font-size="8" fill="#8C8C8C" text-anchor="middle">SUBTLE CORNER ACCENT</text>
  </g>

  <!-- Editorial Info overlay at bottom -->
  <text x="40" y="930" font-family="Bebas Neue, sans-serif" font-size="30" fill="#F2EFE8" letter-spacing="2">${prod.name}</text>
  <text x="40" y="955" font-family="sans-serif" font-size="12" fill="#8C8C8C" font-weight="500">PRINT & FABRIC MACRO DETAIL // HEAVY COTTON WEAVE</text>
  <rect x="700" y="920" width="60" height="24" fill="#111111" stroke="${accent}" stroke-width="1"/>
  <text x="730" y="936" font-family="sans-serif" font-size="10" font-weight="bold" fill="${accent}" text-anchor="middle">DETAIL</text>
</svg>`;
}

function generateModelSVG(prod) {
  const accent = prod.accentColor;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000">
  <defs>
    <linearGradient id="studioBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#080808" />
      <stop offset="100%" stop-color="#181818" />
    </linearGradient>
  </defs>

  <rect width="100%" height="100%" fill="url(#studioBg)" />

  <!-- Urban Industrial Concrete Grid Backdrop -->
  <line x1="0" y1="200" x2="800" y2="200" stroke="#1c1c1c" stroke-width="1"/>
  <line x1="0" y1="400" x2="800" y2="400" stroke="#1c1c1c" stroke-width="1"/>
  <line x1="0" y1="600" x2="800" y2="600" stroke="#1c1c1c" stroke-width="1"/>

  <!-- Model Wear Fit Preview -->
  <g transform="translate(400, 480)">
    <!-- Head / Mask -->
    <circle cx="0" cy="-300" r="45" fill="#1a1a1a" stroke="#333" stroke-width="2"/>
    <path d="M -55 -315 L 55 -315 L 65 -300 L -65 -300 Z" fill="#080808" stroke="${accent}" stroke-width="2"/>

    <!-- Model Body in Black Heavy Tee -->
    <path d="M -160 -240 L -80 -255 L 80 -255 L 160 -240 L 210 -50 L 150 -30 L 130 -120 L 130 180 L -130 180 L -130 -120 L -150 -30 L -210 -50 Z" fill="#111111" stroke="#333" stroke-width="3"/>

    <!-- Print Preview on Model Shirt -->
    <text x="0" y="-120" font-family="Bebas Neue, sans-serif" font-size="38" fill="#F2EFE8" text-anchor="middle" font-weight="900">
      ${prod.frontMain}
    </text>
    <text x="0" y="-95" font-family="sans-serif" font-size="10" fill="${accent}" text-anchor="middle" font-weight="bold">
      ${prod.frontSub.toUpperCase()}
    </text>

    <!-- Cargo Pants -->
    <path d="M -120 180 L -30 180 L -20 400 L -90 400 Z" fill="#0d0d0d" stroke="#222" stroke-width="2"/>
    <path d="M 30 180 L 120 180 L 90 400 L 20 400 Z" fill="#0d0d0d" stroke="#222" stroke-width="2"/>
  </g>

  <!-- Model Info Tag -->
  <rect x="40" y="40" width="240" height="60" fill="#111111" stroke="#292929" stroke-width="1" rx="2"/>
  <text x="55" y="62" font-family="sans-serif" font-size="11" font-weight="bold" fill="${accent}">STREET LOOKBOOK // KL</text>
  <text x="55" y="80" font-family="sans-serif" font-size="10" fill="#8C8C8C">MODEL IS 182CM WEARING SIZE L</text>

  <!-- Editorial Info overlay at bottom -->
  <text x="40" y="930" font-family="Bebas Neue, sans-serif" font-size="30" fill="#F2EFE8" letter-spacing="2">${prod.name}</text>
  <text x="40" y="955" font-family="sans-serif" font-size="12" fill="#8C8C8C" font-weight="500">ON MODEL EDITORIAL LOOK // KUALA LUMPUR STREETS</text>
  <rect x="700" y="920" width="60" height="24" fill="#111111" stroke="${accent}" stroke-width="1"/>
  <text x="730" y="936" font-family="sans-serif" font-size="10" font-weight="bold" fill="${accent}" text-anchor="middle">MODEL</text>
</svg>`;
}

// Generate images for all 12 products
PRODUCTS_DATA.forEach((prod) => {
  const prodDir = path.join(__dirname, '..', 'public', 'images', 'products', prod.slug);
  if (!fs.existsSync(prodDir)) {
    fs.mkdirSync(prodDir, { recursive: true });
  }

  // Strictly write in order: front, back, detail, model
  fs.writeFileSync(path.join(prodDir, 'front.jpg'), generateFrontSVG(prod), 'utf8');
  fs.writeFileSync(path.join(prodDir, 'back.jpg'), generateBackSVG(prod), 'utf8');
  fs.writeFileSync(path.join(prodDir, 'detail.jpg'), generateDetailSVG(prod), 'utf8');
  fs.writeFileSync(path.join(prodDir, 'model.jpg'), generateModelSVG(prod), 'utf8');

  console.log(`Generated product visual suite for [${prod.slug}]`);
});

console.log('All 12 products (48 visual image files) fine-tuned and generated!');
