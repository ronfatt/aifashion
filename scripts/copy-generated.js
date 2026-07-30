const fs = require('fs');

const mappings = [
  {
    src: '/Users/rms/.gemini/antigravity/brain/4404ebd6-fd01-4fb8-92d2-88afdbe486d0/sembang_kencang_front_1785422749806.jpg',
    dests: [
      'public/images/products/sembang-kencang-tee/front.png',
      'public/images/products/sembang-kencang-tee/front.jpg',
      'public/images/products/sembang-kencang-tee/model.png',
      'public/images/products/sembang-kencang-tee/model.jpg',
    ],
  },
  {
    src: '/Users/rms/.gemini/antigravity/brain/4404ebd6-fd01-4fb8-92d2-88afdbe486d0/acah_padu_front_1785422764584.jpg',
    dests: [
      'public/images/products/acah-padu-sleeveless/front.png',
      'public/images/products/acah-padu-sleeveless/front.jpg',
      'public/images/products/acah-padu-sleeveless/model.png',
      'public/images/products/acah-padu-sleeveless/model.jpg',
      'public/images/products/steady-konon-sleeveless/front.png',
      'public/images/products/steady-konon-sleeveless/front.jpg',
      'public/images/products/boleh-lah-sleeveless/front.png',
      'public/images/products/boleh-lah-sleeveless/front.jpg',
    ],
  },
  {
    src: '/Users/rms/.gemini/antigravity/brain/4404ebd6-fd01-4fb8-92d2-88afdbe486d0/terpaling_on_front_1785422777046.jpg',
    dests: [
      'public/images/products/terpaling-on-tee/front.png',
      'public/images/products/terpaling-on-tee/front.jpg',
      'public/images/products/syok-lah-tee/front.png',
      'public/images/products/syok-lah-tee/front.jpg',
    ],
  },
  {
    src: '/Users/rms/.gemini/antigravity/brain/4404ebd6-fd01-4fb8-92d2-88afdbe486d0/padu_gila_front_1785422891283.jpg',
    dests: [
      'public/images/products/padu-gila-tee/front.png',
      'public/images/products/padu-gila-tee/front.jpg',
      'public/images/products/padu-gila-tee/model.png',
      'public/images/products/padu-gila-tee/model.jpg',
      'public/images/products/sentap-sikit-tee/front.png',
      'public/images/products/sentap-sikit-tee/front.jpg',
    ],
  },
  {
    src: '/Users/rms/.gemini/antigravity/brain/4404ebd6-fd01-4fb8-92d2-88afdbe486d0/jom_lepak_front_1785422906623.jpg',
    dests: [
      'public/images/products/jom-lepak-tee/front.png',
      'public/images/products/jom-lepak-tee/front.jpg',
      'public/images/products/jom-lepak-tee/model.png',
      'public/images/products/jom-lepak-tee/model.jpg',
      'public/images/products/ngam-lah-tee/front.png',
      'public/images/products/ngam-lah-tee/front.jpg',
    ],
  },
  {
    src: '/Users/rms/.gemini/antigravity/brain/4404ebd6-fd01-4fb8-92d2-88afdbe486d0/chill_dulu_front_1785422920565.jpg',
    dests: [
      'public/images/products/chill-dulu-tee/front.png',
      'public/images/products/chill-dulu-tee/front.jpg',
      'public/images/products/banyak-alasan-tee/front.png',
      'public/images/products/banyak-alasan-tee/front.jpg',
    ],
  },
];

mappings.forEach(({ src, dests }) => {
  if (fs.existsSync(src)) {
    dests.forEach((dest) => {
      const dir = dest.substring(0, dest.lastIndexOf('/'));
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.copyFileSync(src, dest);
      console.log(`Copied ${src} -> ${dest}`);
    });
  }
});
