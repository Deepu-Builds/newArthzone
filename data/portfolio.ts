export interface PortfolioItem {
  id: string;
  client: string;
  problem: string;
  solution: string;
  result: string;
  image: string;
  technologies?: string[];
}

export const portfolio: PortfolioItem[] = [
  {
    id: 'food-platform',
    client: 'Startup Food Platform',
    problem: 'No online ordering system leading to lost sales and inefficient operations.',
    solution: 'Built custom web platform and mobile ordering system with real-time inventory management.',
    result: '3x increase in orders within 60 days, improved customer satisfaction scores by 40%.',
    image: '/img/portfolio/food-platform.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe']
  },
  {
    id: 'healthcare-app',
    client: 'Healthcare Startup',
    problem: 'Fragmented patient data and manual appointment scheduling causing delays.',
    solution: 'Developed comprehensive healthcare management system with AI-powered scheduling.',
    result: 'Reduced appointment wait times by 60%, increased patient engagement by 200%.',
    image: '/img/portfolio/healthcare-app.jpg',
    technologies: ['React Native', 'Python', 'PostgreSQL', 'AWS']
  },
  {
    id: 'ecommerce-platform',
    client: 'E-commerce Brand',
    problem: 'Outdated website with poor user experience and low conversion rates.',
    solution: 'Complete redesign and rebuild with modern UX, advanced filtering, and payment integration.',
    result: '250% increase in conversion rate, 180% growth in mobile sales.',
    image: '/img/portfolio/ecommerce-platform.jpg',
    technologies: ['Next.js', 'Shopify', 'Stripe', 'TailwindCSS']
  },
  {
    id: 'fintech-dashboard',
    client: 'FinTech Startup',
    problem: 'Complex financial data difficult to visualize and analyze for users.',
    solution: 'Built intuitive dashboard with real-time analytics and automated reporting.',
    result: '95% user satisfaction rate, reduced data analysis time by 75%.',
    image: '/img/portfolio/fintech-dashboard.jpg',
    technologies: ['Vue.js', 'D3.js', 'Python', 'Redis']
  },
  {
    id: 'ai-chatbot',
    client: 'Customer Service Company',
    problem: 'High volume of repetitive customer inquiries overwhelming support team.',
    solution: 'Implemented AI-powered chatbot with natural language processing and CRM integration.',
    result: 'Resolved 70% of inquiries automatically, reduced support tickets by 50%.',
    image: '/img/portfolio/ai-chatbot.jpg',
    technologies: ['Python', 'TensorFlow', 'Dialogflow', 'Node.js']
  },
  {
    id: 'marketplace-app',
    client: 'Local Services Marketplace',
    problem: 'No centralized platform for service providers and customers to connect.',
    solution: 'Developed cross-platform marketplace app with geolocation and booking system.',
    result: '10,000+ active users, 500+ service providers onboarded in first year.',
    image: '/img/portfolio/marketplace-app.jpg',
    technologies: ['React Native', 'Firebase', 'Stripe', 'Google Maps API']
  }
];