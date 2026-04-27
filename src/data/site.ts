export const site = {
  name: "Harzotech Nig Ltd",
  legalName: "Harzotech Nig Ltd",
  domain: "harzotech.com.ng",
  tagline: "Technology Solutions Built to Help Businesses Grow, Automate, and Scale.",
  description:
    "Harzotech helps businesses build premium websites, custom software, AI automation systems, IT solutions, SEO visibility, and digital growth systems designed to improve operations, attract customers, and support long-term business growth.",
  contact: {
    phone: "+234 70 6971 6822",
    email: "info@harzotech.com.ng",
    addressLines: [
      "The Waterside,",
      "5 Admiralty Road off Admiralty Way,",
      "Lekki, Lagos, Nigeria",
    ],
  },
  founder: {
    name: "Azeez Agbona O.",
    title:
      "IT specialist, developer, AI enthusiast, and digital strategist with over 10 years of experience.",
    quote:
      "Technology should not just exist in a business. It should help the business grow, operate better, and serve customers more efficiently.",
  },
  social: {
    linkedin: "#",
    x: "#",
    instagram: "#",
    facebook: "#",
  },
} as const;

export type Site = typeof site;
