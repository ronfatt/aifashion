const fs = require('fs');

const mappings = [
  {
    src: '/Users/rms/.gemini/antigravity/brain/4404ebd6-fd01-4fb8-92d2-88afdbe486d0/lookbook_01_1785459829374.jpg',
    dest: 'public/images/lookbook/lookbook-01.jpg',
  },
  {
    src: '/Users/rms/.gemini/antigravity/brain/4404ebd6-fd01-4fb8-92d2-88afdbe486d0/lookbook_02_1785459843398.jpg',
    dest: 'public/images/lookbook/lookbook-02.jpg',
  },
  {
    src: '/Users/rms/.gemini/antigravity/brain/4404ebd6-fd01-4fb8-92d2-88afdbe486d0/lookbook_03_1785459858078.jpg',
    dest: 'public/images/lookbook/lookbook-03.jpg',
  },
  {
    src: '/Users/rms/.gemini/antigravity/brain/4404ebd6-fd01-4fb8-92d2-88afdbe486d0/lookbook_04_1785459876190.jpg',
    dest: 'public/images/lookbook/lookbook-04.jpg',
  },
  {
    src: '/Users/rms/.gemini/antigravity/brain/4404ebd6-fd01-4fb8-92d2-88afdbe486d0/lookbook_05_1785459891213.jpg',
    dest: 'public/images/lookbook/lookbook-05.jpg',
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
