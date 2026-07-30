const fs = require('fs');

const mappings = [
  {
    src: '/Users/rms/.gemini/antigravity/brain/4404ebd6-fd01-4fb8-92d2-88afdbe486d0/sembang_kencang_front_1785422749806.jpg',
    dests: [
      'public/images/products/sembang-kencang-tee/front.png',
      'public/images/products/sembang-kencang-tee/front.jpg',
    ],
  },
  {
    src: '/Users/rms/.gemini/antigravity/brain/4404ebd6-fd01-4fb8-92d2-88afdbe486d0/acah_padu_front_1785422764584.jpg',
    dests: [
      'public/images/products/acah-padu-sleeveless/front.png',
      'public/images/products/acah-padu-sleeveless/front.jpg',
      'public/images/products/acah-padu-sleeveless/model.png',
      'public/images/products/acah-padu-sleeveless/model.jpg',
    ],
  },
  {
    src: '/Users/rms/.gemini/antigravity/brain/4404ebd6-fd01-4fb8-92d2-88afdbe486d0/terpaling_on_front_1785422777046.jpg',
    dests: [
      'public/images/products/terpaling-on-tee/front.png',
      'public/images/products/terpaling-on-tee/front.jpg',
    ],
  },
];

mappings.forEach(({ src, dests }) => {
  if (fs.existsSync(src)) {
    dests.forEach((dest) => {
      fs.copyFileSync(src, dest);
      console.log(`Copied ${src} -> ${dest}`);
    });
  }
});
