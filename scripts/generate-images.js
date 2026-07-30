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
  },
];

// Helper to generate SVG mockup for Front View
function generateFrontSVG(prod) {
  const isSleeveless = prod.type === 'sleeveless';
  const accent = prod.accentColor;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#080808" />
      <stop offset="100%" stop-color="#141414" />
    </linearGradient>
    <pattern id="batikOverlay" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 15 0 L 30 15 L 15 30 L 0 15 Z" fill="none" stroke="#222222" stroke-width="0.6" opacity="0.4"/>
      <circle cx="15" cy="15" r="1.5" fill="${accent}" opacity="0.3"/>
    </pattern>
  </defs>

  <!-- Studio Background -->
  <rect width="100%" height="100%" fill="url(#bgGrad)" />
  <rect width="100%" height="100%" fill="url(#batikOverlay)" />

  <!-- Garment Silhouette (Black Heavy Cotton 260GSM) -->
  <g transform="translate(0, 50)">
    ${
      isSleeveless
        ? `<!-- Sleeveless Cut -->
           <path d="M 280 160 L 340 140 L 460 140 L 520 160 L 510 320 L 490 350 L 500 780 L 300 780 L 310 350 L 290 320 Z" fill="#111111" stroke="#292929" stroke-width="3"/>
           <!-- Deep Raw Armhole Ribbing -->
           <path d="M 520 160 Q 480 250 510 320" fill="none" stroke="#222222" stroke-width="4" stroke-dasharray="4 2"/>
           <path d="M 280 160 Q 320 250 290 320" fill="none" stroke="#222222" stroke-width="4" stroke-dasharray="4 2"/>`
        : `<!-- Drop-Shoulder Oversized Tee -->
           <path d="M 220 210 L 330 140 L 470 140 L 580 210 L 640 370 L 550 410 L 520 340 L 520 780 L 280 780 L 280 340 L 250 410 L 160 370 Z" fill="#111111" stroke="#292929" stroke-width="3"/>
           <!-- Dropped Shoulder Seam -->
           <line x1="280" y1="180" x2="280" y2="340" stroke="#222222" stroke-width="2" stroke-dasharray="4 2"/>
           <line x1="520" y1="180" x2="520" y2="340" stroke="#222222" stroke-width="2" stroke-dasharray="4 2"/>`
    }

    <!-- Chunky Collar Rib -->
    <path d="M 330 140 Q 400 200 470 140" fill="none" stroke="#222222" stroke-width="12" />
    <path d="M 330 140 Q 400 200 470 140" fill="none" stroke="${accent}" stroke-width="2" opacity="0.8"/>

    <!-- Woven Brand Neck Tag Inside -->
    <rect x="365" y="155" width="70" height="25" fill="#080808" stroke="#333" stroke-width="1"/>
    <text x="400" y="167" font-family="Bebas Neue, sans-serif" font-size="10" font-weight="bold" fill="#F2EFE8" text-anchor="middle">LOKAL//LOUD</text>
    <text x="400" y="175" font-family="sans-serif" font-size="6" fill="${accent}" text-anchor="middle">260 GSM • HEAVY</text>

    <!-- Front Chest Graphic Print -->
    <g transform="translate(400, 360)">
      <!-- Batik Side Accents -->
      <path d="M -160 -40 L -140 -40 L -140 40 L -160 40 Z" fill="${accent}" opacity="0.8"/>
      <path d="M 140 -40 L 160 -40 L 160 40 L 140 40 Z" fill="${accent}" opacity="0.8"/>

      <!-- Main Headline Typography -->
      <text x="0" y="-5" font-family="Bebas Neue, sans-serif" font-size="52" font-weight="900" fill="#F2EFE8" text-anchor="middle" letter-spacing="3">
        ${prod.frontMain}
      </text>

      <!-- Subtitle English Text -->
      <text x="0" y="28" font-family="sans-serif" font-size="14" font-weight="800" fill="${accent}" text-anchor="middle" letter-spacing="4">
        ${prod.frontSub.toUpperCase()}
      </text>

      <!-- Distressed Streetwear Frame -->
      <rect x="-130" y="-45" width="260" height="85" fill="none" stroke="#333333" stroke-width="1.5" stroke-dasharray="8 4"/>
    </g>

    <!-- Woven Hem Label Tag -->
    <rect x="290" y="750" width="30" height="18" fill="#080808" stroke="${accent}" stroke-width="1"/>
    <text x="305" y="762" font-family="sans-serif" font-size="7" font-weight="bold" fill="${accent}" text-anchor="middle">🇲🇾 260G</text>
  </g>

  <!-- Editorial Info overlay at bottom -->
  <text x="40" y="930" font-family="Bebas Neue, sans-serif" font-size="28" fill="#F2EFE8" letter-spacing="2">${prod.name}</text>
  <text x="40" y="955" font-family="sans-serif" font-size="12" fill="#8C8C8C" font-weight="500">FRONT VIEW // 260 GSM DROP-SHOULDER SILHOUETTE</text>
  <rect x="700" y="920" width="60" height="24" fill="#111111" stroke="${accent}" stroke-width="1"/>
  <text x="730" y="936" font-family="sans-serif" font-size="10" font-weight="bold" fill="${accent}" text-anchor="middle">FRONT</text>
</svg>`;
}

// Helper to generate SVG mockup for Back View
function generateBackSVG(prod) {
  const isSleeveless = prod.type === 'sleeveless';
  const accent = prod.accentColor;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#080808" />
      <stop offset="100%" stop-color="#141414" />
    </linearGradient>
  </defs>

  <rect width="100%" height="100%" fill="url(#bgGrad)" />

  <!-- Garment Back Silhouette -->
  <g transform="translate(0, 50)">
    ${
      isSleeveless
        ? `<path d="M 280 160 L 340 140 L 460 140 L 520 160 L 510 320 L 490 350 L 500 780 L 300 780 L 310 350 L 290 320 Z" fill="#111111" stroke="#292929" stroke-width="3"/>`
        : `<path d="M 220 210 L 330 140 L 470 140 L 580 210 L 640 370 L 550 410 L 520 340 L 520 780 L 280 780 L 280 340 L 250 410 L 160 370 Z" fill="#111111" stroke="#292929" stroke-width="3"/>
           <line x1="280" y1="180" x2="280" y2="340" stroke="#222222" stroke-width="2" stroke-dasharray="4 2"/>
           <line x1="520" y1="180" x2="520" y2="340" stroke="#222222" stroke-width="2" stroke-dasharray="4 2"/>`
    }

    <!-- High Collar Rib Back -->
    <path d="M 340 140 L 460 140" stroke="#222222" stroke-width="14"/>

    <!-- Large Editorial Back Graphic Print -->
    <g transform="translate(400, 360)">
      <!-- Giant Back Slang Typography -->
      <text x="0" y="-80" font-family="Bebas Neue, sans-serif" font-size="64" font-weight="900" fill="${accent}" text-anchor="middle" letter-spacing="4">
        ${prod.frontMain}
      </text>

      <!-- Back Malay Copy -->
      <rect x="-180" y="-20" width="360" height="60" fill="#080808" stroke="#333" stroke-width="1.5" rx="2"/>
      <text x="0" y="16" font-family="sans-serif" font-size="18" font-weight="900" fill="#F2EFE8" text-anchor="middle" letter-spacing="1">
        "${prod.backCopy}"
      </text>

      <!-- Batik Graphic Box Accent -->
      <g opacity="0.6">
        <path d="M -160 70 L 160 70" stroke="${accent}" stroke-width="2" stroke-dasharray="6 4"/>
        <text x="0" y="100" font-family="sans-serif" font-size="11" font-weight="700" fill="#8C8C8C" text-anchor="middle" letter-spacing="3">
          MALAYSIAN STREET SATIRE • ORIGINAL ARTWORK
        </text>
        <!-- Fake Barcode -->
        <rect x="-60" y="120" width="120" height="30" fill="#080808" stroke="#333" stroke-width="1"/>
        <line x1="-50" y1="125" x2="-50" y2="145" stroke="#FFF" stroke-width="2"/>
        <line x1="-44" y1="125" x2="-44" y2="145" stroke="#FFF" stroke-width="4"/>
        <line x1="-34" y1="125" x2="-34" y2="145" stroke="#FFF" stroke-width="1"/>
        <line x1="-25" y1="125" x2="-25" y2="145" stroke="#FFF" stroke-width="3"/>
        <line x1="-15" y1="125" x2="-15" y2="145" stroke="#FFF" stroke-width="5"/>
        <line x1="-2" y1="125" x2="-2" y2="145" stroke="#FFF" stroke-width="2"/>
        <line x1="8" y1="125" x2="8" y2="145" stroke="#FFF" stroke-width="4"/>
        <line x1="20" y1="125" x2="20" y2="145" stroke="#FFF" stroke-width="2"/>
        <line x1="30" y1="125" x2="30" y2="145" stroke="#FFF" stroke-width="3"/>
        <line x1="45" y1="125" x2="45" y2="145" stroke="#FFF" stroke-width="2"/>
      </g>
    </g>
  </g>

  <!-- Editorial Info overlay at bottom -->
  <text x="40" y="930" font-family="Bebas Neue, sans-serif" font-size="28" fill="#F2EFE8" letter-spacing="2">${prod.name}</text>
  <text x="40" y="955" font-family="sans-serif" font-size="12" fill="#8C8C8C" font-weight="500">BACK PRINT VIEW // "${prod.backCopy}"</text>
  <rect x="700" y="920" width="60" height="24" fill="#111111" stroke="${accent}" stroke-width="1"/>
  <text x="730" y="936" font-family="sans-serif" font-size="10" font-weight="bold" fill="${accent}" text-anchor="middle">BACK</text>
</svg>`;
}

// Helper to generate SVG mockup for Detail View
function generateDetailSVG(prod) {
  const accent = prod.accentColor;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#050505" />
      <stop offset="100%" stop-color="#141414" />
    </linearGradient>
    <pattern id="fabricWeave" width="8" height="8" patternUnits="userSpaceOnUse">
      <path d="M 0 4 L 8 4 M 4 0 L 4 8" stroke="#1c1c1c" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="100%" height="100%" fill="url(#bgGrad)" />
  <rect width="100%" height="100%" fill="url(#fabricWeave)" />

  <!-- Macro Detail Showcase Box -->
  <g transform="translate(100, 150)">
    <rect width="600" height="600" fill="#0c0c0c" stroke="#292929" stroke-width="2" rx="4"/>
    <rect width="600" height="600" fill="url(#fabricWeave)" opacity="0.6"/>

    <!-- High Density Print Detail Macro -->
    <g transform="translate(300, 240)">
      <circle cx="0" cy="0" r="160" fill="#080808" stroke="${accent}" stroke-width="2" stroke-dasharray="10 5"/>
      <text x="0" y="-20" font-family="Bebas Neue, sans-serif" font-size="56" fill="#F2EFE8" text-anchor="middle" font-weight="900">
        ${prod.frontMain.split(' ')[0]}
      </text>
      <text x="0" y="25" font-family="sans-serif" font-size="14" fill="${accent}" text-anchor="middle" font-weight="900" letter-spacing="3">
        260 GSM SILKSCREEN
      </text>

      <!-- Batik Corner Embroidery Motif -->
      <path d="M -80 60 Q 0 100 80 60" fill="none" stroke="${accent}" stroke-width="3"/>
      <circle cx="0" cy="80" r="5" fill="${accent}"/>
    </g>

    <!-- Spec Badges -->
    <rect x="30" y="520" width="160" height="50" fill="#141414" stroke="#333" stroke-width="1"/>
    <text x="110" y="542" font-family="sans-serif" font-size="10" font-weight="bold" fill="#F2EFE8" text-anchor="middle">240-260 GSM</text>
    <text x="110" y="556" font-family="sans-serif" font-size="8" fill="#8C8C8C" text-anchor="middle">HEAVY COTTON</text>

    <rect x="220" y="520" width="160" height="50" fill="#141414" stroke="#333" stroke-width="1"/>
    <text x="300" y="542" font-family="sans-serif" font-size="10" font-weight="bold" fill="${accent}" text-anchor="middle">HIGH-DENSITY</text>
    <text x="300" y="556" font-family="sans-serif" font-size="8" fill="#8C8C8C" text-anchor="middle">PUFF SCREENPRINT</text>

    <rect x="410" y="520" width="160" height="50" fill="#141414" stroke="#333" stroke-width="1"/>
    <text x="490" y="542" font-family="sans-serif" font-size="10" font-weight="bold" fill="#F2EFE8" text-anchor="middle">BATIK REWORKED</text>
    <text x="490" y="556" font-family="sans-serif" font-size="8" fill="#8C8C8C" text-anchor="middle">TRADITIONAL ACCENT</text>
  </g>

  <!-- Editorial Info overlay at bottom -->
  <text x="40" y="930" font-family="Bebas Neue, sans-serif" font-size="28" fill="#F2EFE8" letter-spacing="2">${prod.name}</text>
  <text x="40" y="955" font-family="sans-serif" font-size="12" fill="#8C8C8C" font-weight="500">FABRIC & PRINT MACRO DETAIL // HEAVY COTTON WEAVE</text>
  <rect x="700" y="920" width="60" height="24" fill="#111111" stroke="${accent}" stroke-width="1"/>
  <text x="730" y="936" font-family="sans-serif" font-size="10" font-weight="bold" fill="${accent}" text-anchor="middle">DETAIL</text>
</svg>`;
}

// Helper to generate SVG mockup for Model View
function generateModelSVG(prod) {
  const accent = prod.accentColor;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#080808" />
      <stop offset="100%" stop-color="#171717" />
    </linearGradient>
  </defs>

  <rect width="100%" height="100%" fill="url(#bgGrad)" />

  <!-- Urban Industrial Street Background Grid -->
  <line x1="0" y1="200" x2="800" y2="200" stroke="#1c1c1c" stroke-width="1"/>
  <line x1="0" y1="400" x2="800" y2="400" stroke="#1c1c1c" stroke-width="1"/>
  <line x1="0" y1="600" x2="800" y2="600" stroke="#1c1c1c" stroke-width="1"/>
  <line x1="0" y1="800" x2="800" y2="800" stroke="#1c1c1c" stroke-width="1"/>

  <!-- Stylized Editorial Model Silhouette Wear Preview -->
  <g transform="translate(400, 480)">
    <!-- Head / Mask Silhouette -->
    <circle cx="0" cy="-300" r="45" fill="#1a1a1a" stroke="#333" stroke-width="2"/>
    <!-- Bucket Cap -->
    <path d="M -55 -315 L 55 -315 L 65 -300 L -65 -300 Z" fill="#080808" stroke="${accent}" stroke-width="2"/>

    <!-- Model Body wearing Garment -->
    <path d="M -160 -240 L -80 -255 L 80 -255 L 160 -240 L 210 -50 L 150 -30 L 130 -120 L 130 180 L -130 180 L -130 -120 L -150 -30 L -210 -50 Z" fill="#111111" stroke="#333" stroke-width="3"/>

    <!-- Front Print on Model -->
    <text x="0" y="-120" font-family="Bebas Neue, sans-serif" font-size="36" fill="#F2EFE8" text-anchor="middle" font-weight="900">
      ${prod.frontMain}
    </text>
    <text x="0" y="-95" font-family="sans-serif" font-size="10" fill="${accent}" text-anchor="middle" font-weight="bold">
      ${prod.frontSub.toUpperCase()}
    </text>

    <!-- Cargo Pants & Sneaker Preview -->
    <path d="M -120 180 L -30 180 L -20 400 L -90 400 Z" fill="#0d0d0d" stroke="#222" stroke-width="2"/>
    <path d="M 30 180 L 120 180 L 90 400 L 20 400 Z" fill="#0d0d0d" stroke="#222" stroke-width="2"/>
  </g>

  <!-- Model Info Tag -->
  <rect x="40" y="40" width="220" height="60" fill="#111111" stroke="#292929" stroke-width="1" rx="2"/>
  <text x="55" y="62" font-family="sans-serif" font-size="11" font-weight="bold" fill="${accent}">STREET LOOKBOOK // KL</text>
  <text x="55" y="80" font-family="sans-serif" font-size="10" fill="#8C8C8C">MODEL IS 182CM WEARING SIZE L</text>

  <!-- Editorial Info overlay at bottom -->
  <text x="40" y="930" font-family="Bebas Neue, sans-serif" font-size="28" fill="#F2EFE8" letter-spacing="2">${prod.name}</text>
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

  fs.writeFileSync(path.join(prodDir, 'front.jpg'), generateFrontSVG(prod), 'utf8');
  fs.writeFileSync(path.join(prodDir, 'back.jpg'), generateBackSVG(prod), 'utf8');
  fs.writeFileSync(path.join(prodDir, 'detail.jpg'), generateDetailSVG(prod), 'utf8');
  fs.writeFileSync(path.join(prodDir, 'model.jpg'), generateModelSVG(prod), 'utf8');

  console.log(`Generated product visual suite for [${prod.slug}]`);
});

console.log('All 12 products (48 visual image files) successfully generated in 4:5 aspect ratio!');
