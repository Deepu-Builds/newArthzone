export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  company: string;
  role?: string;
  image?: string;
  videoUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'sarah-johnson',
    quote: "Arthzone Technologies transformed our startup's vision into reality. Their expertise in AI integration helped us launch 3 months ahead of schedule. The team's communication was exceptional throughout the entire process.",
    name: 'Sarah Johnson',
    company: 'TechFlow Solutions',
    role: 'CEO & Founder',
    image: '/img/testimonials/sarah-johnson.jpg'
  },
  {
    id: 'michael-chen',
    quote: "Working with Arthzone was a game-changer for our e-commerce platform. They delivered a scalable solution that handles 10x our initial traffic projections. Their attention to detail and technical expertise is unmatched.",
    name: 'Michael Chen',
    company: 'ShopSmart Inc.',
    role: 'CTO',
    image: '/img/testimonials/michael-chen.jpg'
  },
  {
    id: 'emily-rodriguez',
    quote: "The mobile app they built for us exceeded all expectations. Not only did it look beautiful, but it also performed flawlessly. Our user engagement increased by 300% after launch. Highly recommend their services!",
    name: 'Emily Rodriguez',
    company: 'FitLife App',
    role: 'Product Manager',
    image: '/img/testimonials/emily-rodriguez.jpg'
  },
  {
    id: 'david-kim',
    quote: "Arthzone's cloud infrastructure setup saved us thousands in operational costs. Their DevOps expertise ensured zero downtime during our peak seasons. Professional, reliable, and results-driven.",
    name: 'David Kim',
    company: 'DataFlow Analytics',
    role: 'VP of Engineering',
    image: '/img/testimonials/david-kim.jpg'
  },
  {
    id: 'lisa-wang',
    quote: "From MVP to full-scale SaaS platform, Arthzone guided us through every step. Their strategic thinking and technical implementation helped us secure Series A funding. They're more than developers – they're partners.",
    name: 'Lisa Wang',
    company: 'InnovateAI',
    role: 'Founder',
    image: '/img/testimonials/lisa-wang.jpg'
  },
  {
    id: 'james-miller',
    quote: "The chatbot they developed for our customer service reduced response times by 80%. Their AI solutions are cutting-edge, and the integration was seamless. Outstanding work from start to finish.",
    name: 'James Miller',
    company: 'SupportPro',
    role: 'Head of Customer Success',
    image: '/img/testimonials/james-miller.jpg'
  }
];