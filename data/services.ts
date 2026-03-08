export interface ServicePageData {
  title: string;
  description: string;
  image: string;
  services: string[];
}

export const servicesPageData: ServicePageData[] = [
  {
    title: 'Application & Software Development',
    description: 'Custom software solutions built to scale your business and streamline operations. From web applications to complex enterprise systems, we deliver robust software that drives growth.',
    image: '/images/services/software-development.png',
    services: [
      'Software Development',
      'Web Application Development',
      'SaaS Development',
      'API Development',
      'MVP Development',
      'Microservices Development'
    ]
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences. We build apps that users love and businesses rely on.',
    image: '/images/services/mobile-development.png',
    services: [
      'iOS App Development',
      'Android App Development',
      'Hybrid App Development',
      'Cross Platform Development'
    ]
  },
  {
    title: 'AI & Automation Services',
    description: 'Intelligent solutions powered by artificial intelligence and machine learning. Transform your business with AI-driven automation and data insights.',
    image: '/images/services/ai-automation.png',
    services: [
      'AI Application Development',
      'Machine Learning Solutions',
      'Chatbot Development',
      'Generative AI Integration',
      'AI Automation Systems',
      'Data Intelligence Solutions'
    ]
  },
  {
    title: 'Cloud & DevOps',
    description: 'Scalable cloud infrastructure and automated deployment pipelines. Ensure your applications are secure, reliable, and always available.',
    image: '/images/services/cloud-devops.png',
    services: [
      'AWS Infrastructure',
      'Google Cloud Deployment',
      'Cloud Architecture',
      'DevOps CI/CD Pipelines'
    ]
  },
  {
    title: 'Design & UX',
    description: 'Beautiful, user-centered designs that convert visitors into customers. We create interfaces that are both stunning and functional.',
    image: '/images/services/design-ux.png',
    services: [
      'UI/UX Design',
      'Product Design',
      'SaaS Dashboard Design',
      'Landing Page Design'
    ]
  },
  {
    title: 'CMS & Web Platforms',
    description: 'Content management systems and web platforms for easy content updates. Empower your team to manage content without technical expertise.',
    image: '/images/services/cms-platforms.png',
    services: [
      'WordPress Development',
      'Content Management Systems',
      'Web Platforms'
    ]
  },
  {
    title: 'Ecommerce & Marketplace',
    description: 'Online stores and marketplace platforms that drive sales. Build the digital storefront that turns visitors into customers.',
    image: '/images/services/ecommerce.png',
    services: [
      'Ecommerce Development',
      'Marketplace Platforms'
    ]
  },
  {
    title: 'QA & Testing',
    description: 'Comprehensive testing to ensure quality and performance. Deliver bug-free applications that your users can trust.',
    image: '/images/services/qa-testing.png',
    services: [
      'Software Testing',
      'Performance Testing',
      'Quality Assurance'
    ]
  },
  {
    title: 'Virtual CTO & Dedicated Teams',
    description: 'Strategic technical leadership and dedicated development resources. Get the expertise you need without the overhead.',
    image: '/images/services/virtual-cto.png',
    services: [
      'Virtual CTO Services',
      'Dedicated Remote Developers',
      'Startup Technical Consulting'
    ]
  }
];

export interface Service {
  id: string;
  title: string;
  description: string;
  services: string[];
  icon?: string;
}

export const services: Service[] = [
  {
    id: 'application-software',
    title: 'Application & Software Development',
    description: 'Custom software solutions built to scale your business and streamline operations.',
    services: [
      'Software Development',
      'Web Application Development',
      'SaaS Development',
      'API Development',
      'MVP Development',
      'Microservices Development'
    ]
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    services: [
      'iOS App Development',
      'Android App Development',
      'Hybrid App Development',
      'Cross Platform Development'
    ]
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation Services',
    description: 'Intelligent solutions powered by artificial intelligence and machine learning.',
    services: [
      'AI Application Development',
      'Machine Learning Solutions',
      'Chatbot Development',
      'Generative AI Integration',
      'AI Automation Systems',
      'Data Intelligence Solutions'
    ]
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    description: 'Scalable cloud infrastructure and automated deployment pipelines.',
    services: [
      'AWS Infrastructure',
      'Google Cloud Deployment',
      'Cloud Architecture',
      'DevOps CI/CD Pipelines'
    ]
  },
  {
    id: 'design-ux',
    title: 'Design & UX',
    description: 'Beautiful, user-centered designs that convert visitors into customers.',
    services: [
      'UI/UX Design',
      'Product Design',
      'SaaS Dashboard Design',
      'Landing Page Design'
    ]
  },
  {
    id: 'cms-web-platforms',
    title: 'CMS & Web Platforms',
    description: 'Content management systems and web platforms for easy content updates.',
    services: [
      'WordPress Development',
      'Content Management Systems',
      'Web Platforms'
    ]
  },
  {
    id: 'ecommerce-marketplace',
    title: 'Ecommerce & Marketplace',
    description: 'Online stores and marketplace platforms that drive sales.',
    services: [
      'Ecommerce Development',
      'Marketplace Platforms'
    ]
  },
  {
    id: 'qa-testing',
    title: 'QA & Testing',
    description: 'Comprehensive testing to ensure quality and performance.',
    services: [
      'Software Testing',
      'Performance Testing',
      'Quality Assurance'
    ]
  },
  {
    id: 'virtual-cto',
    title: 'Virtual CTO & Dedicated Teams',
    description: 'Strategic technical leadership and dedicated development resources.',
    services: [
      'Virtual CTO Services',
      'Dedicated Remote Developers',
      'Startup Technical Consulting'
    ]
  }
];