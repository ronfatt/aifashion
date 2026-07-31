const fs = require('fs');

const mappings = [
  {
    src: '/Users/rms/.gemini/antigravity/brain/4404ebd6-fd01-4fb8-92d2-88afdbe486d0/social_fit_01_1785460951771.jpg',
    dest: 'public/images/social/social-01.jpg',
  },
  {
    src: '/Users/rms/.gemini/antigravity/brain/4404ebd6-fd01-4fb8-92d2-88afdbe486d0/social_fit_02_1785460970588.jpg',
    dest: 'public/images/social/social-02.jpg',
  },
  {
    src: '/Users/rms/.gemini/antigravity/brain/4404ebd6-fd01-4fb8-92d2-88afdbe486d0/social_fit_03_1785460991557.jpg',
    dest: 'public/images/social/social-03.jpg',
  },
  {
    src: '/Users/rms/.gemini/antigravity/brain/4404ebd6-fd01-4fb8-92d2-88afdbe486d0/social_fit_04_1785461009356.jpg',
    dest: 'public/images/social/social-04.jpg',
  },
];

mappings.forEach(({ src, dest }) => {
  if (fs.existsSync(src)) {
    const dir = dest.substring(0, dest.lastIndexOf('/'));
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.copyFileSync(src, dest);
    console.log(`Successfully copied ${src} -> ${dest}`);
  }
});
