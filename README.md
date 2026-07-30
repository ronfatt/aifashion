# LOKAL//LOUD — International Malaysian Streetwear E-Commerce

> **Brand Slogan**: *Pakai attitude. Bukan sekadar baju.*  
> **Brand Concept**: *Malaysian street irony, printed loud.*

---

## 🇲🇾 Project Overview

**LOKAL//LOUD** is a high-end streetwear e-commerce platform built for the vibrant Malaysian street fashion scene (18–38 target demographic). It fuses iconic Malaysian street slang (*SEMBANG KENCANG*, *ACAH PADU*, *TERPALING ON*, *BOLEH LAH*, *PADU GILA*, *JOM LEPAK*, *NGAM LAH*, *SYOK LAH*), dark rebellious irony, and reworked traditional Batik motifs into 240–260 GSM drop-shoulder oversized streetwear uniforms.

---

## ⚡ Technology Stack

* **Framework**: Next.js 14 (App Router)
* **Language**: TypeScript
* **Styling**: Tailwind CSS
* **Animations**: Framer Motion
* **Iconography**: Lucide Icons
* **State Management**: React Context + LocalStorage persistence for Cart & Wishlist

---

## 🎨 Visual Design System & Color Tokens

* **Background Black**: `#080808`
* **Surface Black**: `#111111`
* **Card Black**: `#171717`
* **Off White**: `#F2EFE8`
* **Muted Grey**: `#8C8C8C`
* **Border Grey**: `#292929`
* **Acid Lime (Accent)**: `#C8FF00` (Used exclusively for CTAs, active states, hover effects, product tags, slide indicators, and numeric badges)
* **Secondary Accents**:
  * Burnt Orange: `#D65A20`
  * Dark Teal: `#0E5B5F`
  * Heritage Red: `#8D2025`
  * Batik Gold: `#B7945A`
  * Cream: `#E8DFCF`

---

## 📂 Project Architecture

```
lokal-loud/
├── public/
│   └── images/
│       ├── hero/          # Hero carousel visuals
│       ├── products/      # Product catalog, front, back, detail & model views
│       ├── collections/   # Collection editorial banners
│       ├── lookbook/      # Magazine lookbook photos
│       └── social/        # Community fit photos (#LOKALLOUD)
├── scripts/
│   └── generate-images.js # Visual asset synthesizer
├── src/
│   ├── app/
│   │   ├── page.tsx       # 13 Homepage Sections
│   │   ├── shop/page.tsx  # Catalog & Filtering page
│   │   ├── products/[slug]/page.tsx # Dynamic Product Detail Page
│   │   ├── layout.tsx     # Context Providers & SEO Root Layout
│   │   ├── globals.css    # Custom scrollbar, selection & typography
│   │   ├── robots.ts      # Search engine robots configuration
│   │   └── sitemap.ts     # Dynamic sitemap generator
│   ├── components/
│   │   ├── AnnouncementBar.tsx
│   │   ├── Navbar.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── Hero.tsx
│   │   ├── ShopByCategory.tsx
│   │   ├── BestSellers.tsx
│   │   ├── StatementBanner.tsx
│   │   ├── FeaturedCollections.tsx
│   │   ├── NewDropCountdown.tsx
│   │   ├── Lookbook.tsx
│   │   ├── BrandStory.tsx
│   │   ├── SocialCommunity.tsx
│   │   ├── ServiceBenefits.tsx
│   │   ├── Footer.tsx
│   │   ├── ProductCard.tsx
│   │   ├── QuickAddModal.tsx
│   │   ├── SizeGuideModal.tsx
│   │   ├── CartDrawer.tsx
│   │   ├── WishlistDrawer.tsx
│   │   └── SearchModal.tsx
│   ├── context/
│   │   ├── CartContext.tsx
│   │   ├── WishlistContext.tsx
│   │   └── SearchContext.tsx
│   └── data/
│       ├── config.ts
│       ├── categories.ts
│       ├── collections.ts
│       ├── navigation.ts
│       ├── lookbook.ts
│       └── products.ts
```

---

## 🚀 Running locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Start
```bash
npm run build
npm run start
```

---

## 🖼 Image Assets & Replacement Guide

All synthetic streetwear vector graphic assets have been generated into `public/images/`. To replace them with real photoshoot model photographs, replace the files maintaining the aspect ratios:

* **Hero Banner Images** (16:9 / Fullscreen): `public/images/hero/hero-01.jpg`, `hero-02.jpg`, `hero-03.jpg`
* **Product Catalog Photos** (4:5): `public/images/products/*.jpg`
* **Collection Covers** (4:5 / 16:9): `public/images/collections/*.jpg`
* **Lookbook Editorial Shots** (3:4, 4:5, 16:9): `public/images/lookbook/*.jpg`
* **Social Photos** (1:1): `public/images/social/*.jpg`

---

## ✅ Quality Checklist & Features

- [x] Responsive layout verified from 375px mobile to 1440px+ desktop
- [x] Functional live drop countdown timer with stateful email subscription
- [x] Shopping Cart drawer with local storage persistence and RM200 free shipping progress bar
- [x] Wishlist drawer with item counter badge and move-to-cart action
- [x] Fullscreen live search modal matching slang terms, product names, and categories
- [x] Product detail page with size selection error handling and mobile sticky Add to Cart bar
- [x] Zero console warnings / build errors during Next.js production build
