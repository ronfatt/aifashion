const fs = require('fs');
const path = require('path');

const dirs = [
  'public/images/hero',
  'public/images/products',
  'public/images/collections',
  'public/images/lookbook',
  'public/images/social',
  'public/images/details',
];

dirs.forEach((dir) => {
  const fullPath = path.join(__dirname, '..', dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
});

function createStreetwearSVG(title, subtitle, tag, width = 800, height = 1000, bgGradient = ['#080808', '#171717'], accent = '#C8FF00') {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bgGradient[0]}" />
      <stop offset="100%" stop-color="${bgGradient[1]}" />
    </linearGradient>
    <linearGradient id="overlay" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#080808" stop-opacity="0.9" />
      <stop offset="60%" stop-color="#080808" stop-opacity="0.2" />
      <stop offset="100%" stop-color="#080808" stop-opacity="0.5" />
    </linearGradient>
    <pattern id="batikGrid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 40 20 L 20 40 L 0 20 Z" fill="none" stroke="#292929" stroke-width="0.8" opacity="0.4"/>
      <circle cx="20" cy="20" r="3" fill="${accent}" opacity="0.3"/>
      <path d="M 0 0 L 40 40 M 40 0 L 0 40" stroke="#171717" stroke-width="0.5" opacity="0.3"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="url(#bgGrad)" />
  <rect width="100%" height="100%" fill="url(#batikGrid)" />

  <!-- Streetwear Silhouettes / Graphics -->
  <g opacity="0.85">
    <!-- Oversized Tee Silhouette -->
    <path d="M ${width * 0.25} ${height * 0.25} L ${width * 0.35} ${height * 0.2} L ${width * 0.65} ${height * 0.2} L ${width * 0.75} ${height * 0.25} L ${width * 0.85} ${height * 0.4} L ${width * 0.75} ${height * 0.45} L ${width * 0.72} ${height * 0.8} L ${width * 0.28} ${height * 0.8} L ${width * 0.25} ${height * 0.45} L ${width * 0.15} ${height * 0.4} Z" 
          fill="#111111" stroke="#292929" stroke-width="2"/>
    <!-- Collar -->
    <path d="M ${width * 0.4} ${height * 0.2} Q ${width * 0.5} ${height * 0.26} ${width * 0.6} ${height * 0.2}" 
          fill="none" stroke="${accent}" stroke-width="3" />
    <!-- Graphic Print on Shirt -->
    <rect x="${width * 0.36}" y="${height * 0.35}" width="${width * 0.28}" height="${height * 0.3}" fill="#080808" stroke="#292929" rx="4"/>
    <text x="50%" y="${height * 0.45}" font-family="Bebas Neue, sans-serif" font-size="${width * 0.06}" font-weight="900" fill="#F2EFE8" text-anchor="middle" letter-spacing="2">
      LOKAL//LOUD
    </text>
    <text x="50%" y="${height * 0.52}" font-family="sans-serif" font-size="${width * 0.035}" font-weight="700" fill="${accent}" text-anchor="middle" letter-spacing="1">
      ${tag || 'STREET SATIRE'}
    </text>
  </g>

  <!-- Dark Overlay for Editorial Depth -->
  <rect width="100%" height="100%" fill="url(#overlay)" />

  <!-- Badge Top Right -->
  <rect x="${width - 130}" y="30" width="100" height="28" fill="#111111" stroke="${accent}" stroke-width="1" rx="2"/>
  <text x="${width - 80}" y="48" font-family="sans-serif" font-size="11" font-weight="800" fill="${accent}" text-anchor="middle">
    MALAYSIA
  </text>

  <!-- Typography -->
  <text x="40" y="${height - 90}" font-family="Bebas Neue, sans-serif" font-size="${width * 0.08}" font-weight="900" fill="#F2EFE8" letter-spacing="2">
    ${title}
  </text>
  <text x="40" y="${height - 50}" font-family="sans-serif" font-size="${width * 0.035}" font-weight="500" fill="#8C8C8C">
    ${subtitle}
  </text>

  <!-- Accent Line -->
  <line x1="40" y1="${height - 35}" x2="${width - 40}" y2="${height - 35}" stroke="#292929" stroke-width="1" />
  <rect x="40" y="${height - 36}" width="60" height="3" fill="${accent}" />
</svg>`;
}

const imagesToCreate = [
  // Hero
  { path: 'public/images/hero/hero-01.jpg', title: 'BE LOUD. BE LOKAL.', subtitle: 'VOL. 01 STREET SATIRE COLLECTION', tag: 'SEMBANG KENCANG', w: 1600, h: 1000 },
  { path: 'public/images/hero/hero-02.jpg', title: 'BATIK REWORKED', subtitle: 'WARISAN LAMA. ATTITUDE BARU.', tag: 'BATIK AFTER DARK', w: 1600, h: 1000 },
  { path: 'public/images/hero/hero-03.jpg', title: 'LEPAK CLUB UNIFORM', subtitle: 'NO AGENDA. JUST VIBES.', tag: 'JOM LEPAK', w: 1600, h: 1000 },

  // Categories
  { path: 'public/images/products/cat-oversized-tee.jpg', title: 'OVERSIZED TEE', subtitle: 'Baju Sembang Loose', tag: 'OVERSIZED' },
  { path: 'public/images/products/cat-sleeveless.jpg', title: 'SLEEVELESS', subtitle: 'Baju Singlet Padu', tag: 'SLEEVELESS' },
  { path: 'public/images/products/cat-hoodie.jpg', title: 'HOODIE', subtitle: 'Hoodie Lepak KL', tag: 'HOODIE' },
  { path: 'public/images/products/cat-longsleeve.jpg', title: 'LONG SLEEVE', subtitle: 'Baju Lengan Panjang', tag: 'LONGSLEEVE' },
  { path: 'public/images/products/cat-shorts.jpg', title: 'SHORTS', subtitle: 'Seluar Pendek Relax', tag: 'SHORTS' },
  { path: 'public/images/products/cat-accessories.jpg', title: 'ACCESSORIES', subtitle: 'Cap & Crossbody', tag: 'CAP & BAG' },

  // Collections
  { path: 'public/images/collections/collection-local-irony.jpg', title: 'LOCAL IRONY', subtitle: 'Banyak cakap. Sedikit gerak.', tag: 'COLLECTION 01', w: 1000, h: 1250 },
  { path: 'public/images/collections/collection-batik-dark.jpg', title: 'BATIK AFTER DARK', subtitle: 'Warisan lama. Attitude baru.', tag: 'COLLECTION 02', w: 1000, h: 1250 },
  { path: 'public/images/collections/collection-lepak-club.jpg', title: 'LEPAK CLUB', subtitle: 'No agenda. Just vibes.', tag: 'COLLECTION 03', w: 1000, h: 1250 },

  // Lookbook
  { path: 'public/images/lookbook/lookbook-01.jpg', title: 'CHINATOWN KL', subtitle: 'Kopitiam Midnight Vibes', tag: 'LOOKBOOK 01', w: 800, h: 1066 },
  { path: 'public/images/lookbook/lookbook-02.jpg', title: 'BATIK REWORKED', subtitle: 'Studio 03 Subang Jaya', tag: 'LOOKBOOK 02', w: 800, h: 1000 },
  { path: 'public/images/lookbook/lookbook-03.jpg', title: 'REXKL ALLEYWAY', subtitle: 'Urban Alleyway Attitude', tag: 'LOOKBOOK 03', w: 1600, h: 900 },
  { path: 'public/images/lookbook/lookbook-04.jpg', title: 'BANGSAR CONCRETE', subtitle: 'Raw Industrial Silhouette', tag: 'LOOKBOOK 04', w: 800, h: 1066 },
  { path: 'public/images/lookbook/lookbook-05.jpg', title: 'BUKIT BINTANG', subtitle: 'Street Satire Uniform', tag: 'LOOKBOOK 05', w: 800, h: 1000 },

  // Social
  { path: 'public/images/social/social-01.jpg', title: '@AKMAL_STREET', subtitle: 'KL Streetwear Scene', tag: 'UGC 01', w: 600, h: 600 },
  { path: 'public/images/social/social-02.jpg', title: '@SITI_LOUD', subtitle: 'Batik Sleeveless Fit', tag: 'UGC 02', w: 600, h: 600 },
  { path: 'public/images/social/social-03.jpg', title: '@SUBANG_CREW', subtitle: 'Sembang Kencang Tee', tag: 'UGC 03', w: 600, h: 600 },
  { path: 'public/images/social/social-04.jpg', title: '@DANIAL_VIBES', subtitle: 'Jom Lepak Hoodie', tag: 'UGC 04', w: 600, h: 600 },

  // Products
  // Product 1
  { path: 'public/images/products/sembang-kencang-front.jpg', title: 'SEMBANG KENCANG', subtitle: 'FRONT VIEW', tag: 'RM129' },
  { path: 'public/images/products/sembang-kencang-back.jpg', title: 'SEMBANG KENCANG', subtitle: 'BACK PRINT VIEW', tag: 'RM129' },
  { path: 'public/images/products/sembang-kencang-detail.jpg', title: 'BATIK EMBROIDERED', subtitle: 'DETAIL CLOSE-UP', tag: '260 GSM' },
  { path: 'public/images/products/sembang-kencang-model.jpg', title: 'MODEL FIT', subtitle: 'MODEL IS 182CM WEARING L', tag: 'OVERSIZED' },

  // Product 2
  { path: 'public/images/products/acah-padu-front.jpg', title: 'ACAH PADU', subtitle: 'FRONT VIEW', tag: 'RM109' },
  { path: 'public/images/products/acah-padu-back.jpg', title: 'ACAH PADU', subtitle: 'BACK VIEW', tag: 'RM109' },
  { path: 'public/images/products/acah-padu-detail.jpg', title: 'ARMHOLE DETAIL', subtitle: 'RAW CUT DETAIL', tag: '240 GSM' },
  { path: 'public/images/products/acah-padu-model.jpg', title: 'MODEL FIT', subtitle: 'MODEL IS 178CM WEARING M', tag: 'SLEEVELESS' },

  // Product 3
  { path: 'public/images/products/terpaling-on-front.jpg', title: 'TERPALING ON', subtitle: 'FRONT VIEW', tag: 'RM129' },
  { path: 'public/images/products/terpaling-on-back.jpg', title: 'TERPALING ON', subtitle: 'BACK GRAPHIC VIEW', tag: 'RM129' },
  { path: 'public/images/products/terpaling-on-detail.jpg', title: 'SILKSCREEN PRINT', subtitle: 'METALLIC THREAD', tag: 'NEW DROP' },
  { path: 'public/images/products/terpaling-on-model.jpg', title: 'MODEL FIT', subtitle: 'MODEL IS 185CM WEARING XL', tag: 'OVERSIZED' },

  // Product 4
  { path: 'public/images/products/boleh-lah-front.jpg', title: 'BOLEH LAH', subtitle: 'FRONT VIEW', tag: 'RM109' },
  { path: 'public/images/products/boleh-lah-back.jpg', title: 'BOLEH LAH', subtitle: 'REFLECTIVE BACK PATCH', tag: 'RM109' },
  { path: 'public/images/products/boleh-lah-detail.jpg', title: 'DISTRESSED HEM', subtitle: 'DETAIL VIEW', tag: 'CHARCOAL' },
  { path: 'public/images/products/boleh-lah-model.jpg', title: 'MODEL FIT', subtitle: 'MODEL IS 175CM WEARING M', tag: 'LIMITED' },

  // Product 5
  { path: 'public/images/products/padu-gila-front.jpg', title: 'PADU GILA', subtitle: 'FRONT VIEW', tag: 'RM129' },
  { path: 'public/images/products/padu-gila-back.jpg', title: 'PADU GILA', subtitle: 'ACID LIME PRINT', tag: 'RM129' },
  { path: 'public/images/products/padu-gila-detail.jpg', title: 'SHADOW WATERMARK', subtitle: 'BATIK EMBOSS', tag: 'HOT' },
  { path: 'public/images/products/padu-gila-model.jpg', title: 'MODEL FIT', subtitle: 'MODEL IS 180CM WEARING L', tag: 'OVERSIZED' },

  // Product 6-10
  { path: 'public/images/products/jom-lepak-front.jpg', title: 'JOM LEPAK HOODIE', subtitle: 'FRONT VIEW', tag: 'RM239' },
  { path: 'public/images/products/jom-lepak-back.jpg', title: 'JOM LEPAK HOODIE', subtitle: 'BACK VIEW', tag: 'RM239' },
  { path: 'public/images/products/jom-lepak-detail.jpg', title: '3D EMBROIDERY', subtitle: '420 GSM FLEECE', tag: 'NEW DROP' },
  { path: 'public/images/products/jom-lepak-model.jpg', title: 'MODEL FIT', subtitle: 'MODEL IS 183CM WEARING L', tag: 'HOODIE' },

  { path: 'public/images/products/ngam-lah-front.jpg', title: 'NGAM LAH LONGSLEEVE', subtitle: 'FRONT VIEW', tag: 'RM159' },
  { path: 'public/images/products/ngam-lah-back.jpg', title: 'NGAM LAH LONGSLEEVE', subtitle: 'BACK VIEW', tag: 'RM159' },
  { path: 'public/images/products/ngam-lah-detail.jpg', title: 'BATIK SLEEVE PRINT', subtitle: 'DETAIL VIEW', tag: 'LIMITED' },
  { path: 'public/images/products/ngam-lah-model.jpg', title: 'MODEL FIT', subtitle: 'MODEL IS 180CM WEARING L', tag: 'LONGSLEEVE' },

  { path: 'public/images/products/syok-lah-front.jpg', title: 'SYOK LAH SHORTS', subtitle: 'FRONT VIEW', tag: 'RM139' },
  { path: 'public/images/products/syok-lah-back.jpg', title: 'SYOK LAH SHORTS', subtitle: 'BACK VIEW', tag: 'RM139' },
  { path: 'public/images/products/syok-lah-detail.jpg', title: 'CARGO POCKETS', subtitle: 'ACID LIME TIPS', tag: 'SHORTS' },
  { path: 'public/images/products/syok-lah-model.jpg', title: 'MODEL FIT', subtitle: 'MODEL IS 178CM WEARING M', tag: 'SHORTS' },

  { path: 'public/images/products/cap-front.jpg', title: 'LOKAL CAP', subtitle: 'FRONT VIEW', tag: 'RM89' },
  { path: 'public/images/products/cap-back.jpg', title: 'LOKAL CAP', subtitle: 'STRAPBACK VIEW', tag: 'RM89' },
  { path: 'public/images/products/cap-detail.jpg', title: 'DISTRESSED TWILL', subtitle: '3D EMBROIDERY', tag: 'CAP' },
  { path: 'public/images/products/cap-model.jpg', title: 'MODEL FIT', subtitle: 'STREET LOOK', tag: 'CAP' },

  { path: 'public/images/products/bag-front.jpg', title: 'BATIK SLING BAG', subtitle: 'FRONT VIEW', tag: 'RM119' },
  { path: 'public/images/products/bag-back.jpg', title: 'BATIK SLING BAG', subtitle: 'BACK POCKET VIEW', tag: 'RM119' },
  { path: 'public/images/products/bag-detail.jpg', title: 'BATIK LINED INTERIOR', subtitle: 'FIDLOCK BUCKLE', tag: 'BAG' },
  { path: 'public/images/products/bag-model.jpg', title: 'MODEL FIT', subtitle: 'CROSSBODY FIT', tag: 'BAG' },
];

imagesToCreate.forEach((item) => {
  const svg = createStreetwearSVG(item.title, item.subtitle, item.tag, item.w || 800, item.h || 1000);
  const fullPath = path.join(__dirname, '..', item.path);
  fs.writeFileSync(fullPath, svg, 'utf8');
});

console.log(`Successfully generated ${imagesToCreate.length} streetwear visual assets.`);
