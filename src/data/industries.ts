export const industries = [
  "Healthcare",
  "Real Estate",
  "Hospitality",
  "Education",
  "E-commerce",
  "Logistics",
  "Consulting",
  "Manufacturing",
  "Financial Services",
  "NGOs",
  "Corporate Organizations",
  "Startups and SMEs",
] as const;

export type Industry = (typeof industries)[number];
