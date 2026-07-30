export interface NavLink {
  label: string;
  href: string;
  badge?: string;
}

export const MAIN_NAV: NavLink[] = [
  { label: "NEW DROP", href: "/#new-drop", badge: "VOL. 01" },
  { label: "BEST SELLERS", href: "/#best-sellers" },
  { label: "SHOP", href: "/shop" },
  { label: "COLLECTIONS", href: "/#collections" },
  { label: "ABOUT", href: "/#about" },
  { label: "SALE", href: "/shop?sale=true", badge: "HOT" },
];

export const FOOTER_NAV = {
  shop: [
    { label: "New Drop", href: "/#new-drop" },
    { label: "Best Sellers", href: "/#best-sellers" },
    { label: "Oversized Tee", href: "/shop?category=oversized-tee" },
    { label: "Sleeveless", href: "/shop?category=sleeveless" },
    { label: "Accessories", href: "/shop?category=accessories" },
  ],
  customerCare: [
    { label: "Contact Us", href: "#" },
    { label: "Shipping Policy", href: "#" },
    { label: "Returns & Exchanges", href: "#" },
    { label: "Size Guide", href: "#" },
    { label: "Track Order", href: "#" },
  ],
  about: [
    { label: "Our Story", href: "/#about" },
    { label: "Lookbook", href: "/#lookbook" },
    { label: "Journal", href: "#" },
    { label: "Collaborations", href: "#" },
  ],
  legal: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Refund Policy", href: "#" },
  ],
};
