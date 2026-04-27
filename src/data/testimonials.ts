export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Client Name",
    role: "Managing Director",
    company: "Company",
    quote:
      "Harzotech approached the project with strategy and clarity. The delivery was structured, responsive, and focused on business outcomes — not just aesthetics.",
  },
  {
    name: "Client Name",
    role: "Operations Lead",
    company: "Company",
    quote:
      "The team understood our workflow quickly and delivered a system that reduced manual work and improved our day-to-day operations.",
  },
  {
    name: "Client Name",
    role: "Founder",
    company: "Company",
    quote:
      "Professional communication, premium execution, and strong attention to detail. Harzotech felt like a long-term technology partner.",
  },
];
