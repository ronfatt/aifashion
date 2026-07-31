const fs = require('fs');

const heroMappings = [
  {
    src: '/Users/rms/.gemini/antigravity/brain/4404ebd6-fd01-4fb8-92d2-88afdbe486d0/hero_fashion_model_01_1785459493307.jpg',
    dest: 'public/images/hero/hero-01.jpg',
  },
  {
    src: '/Users/rms/.gemini/antigravity/brain/4404ebd6-fd01-4fb8-92d2-88afdbe486d0/hero_fashion_model_02_1785459509495.jpg',
    dest: 'public/images/hero/hero-02.jpg',
  },
  {
    src: '/Users/rms/.gemini/antigravity/brain/4404ebd6-fd01-4fb8-92d2-88afdbe486d0/hero_fashion_model_03_1785459526759.jpg',
    dest: 'public/images/hero/hero-03.jpg',
  },
];

heroMappings.forEach(({ src, dest }) => {
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Successfully copied ${src} -> ${dest}`);
  }
});
