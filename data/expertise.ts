export interface ExpertiseItem {
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

export const expertisePageData: ExpertiseItem[] = [
  {
    title: "Full Stack Development",
    description: "We build scalable web applications using modern frontend and backend technologies designed for performance and long-term growth. Our full-stack solutions combine robust server-side architecture with intuitive user interfaces.",
    image: "/images/expertise/fullstack.png",
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "REST APIs",
      "Microservices",
      "PostgreSQL",
      "MongoDB"
    ]
  },
  {
    title: "AI & Machine Learning",
    description: "We integrate cutting-edge AI capabilities into your applications, from intelligent automation to predictive analytics. Our AI solutions help businesses make data-driven decisions and automate complex processes.",
    image: "/images/expertise/ai-ml.png",
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "OpenAI API",
      "Scikit-learn",
      "NLP",
      "Computer Vision",
      "MLOps"
    ]
  },
  {
    title: "Cloud Architecture",
    description: "We design and implement scalable cloud infrastructure that grows with your business. Our cloud solutions ensure high availability, security, and cost optimization across all major cloud platforms.",
    image: "/images/expertise/cloud.jpeg",
    technologies: [
      "AWS",
      "Google Cloud",
      "Azure",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Serverless",
      "CI/CD"
    ]
  },
  {
    title: "Mobile Development",
    description: "We create native and cross-platform mobile applications that deliver exceptional user experiences. Our mobile solutions are built for performance, security, and seamless integration with backend systems.",
    image: "/images/expertise/mobile.png",
    technologies: [
      "React Native",
      "Flutter",
      "iOS (Swift)",
      "Android (Kotlin)",
      "Firebase",
      "App Store",
      "Play Store",
      "Mobile UI/UX"
    ]
  },
  {
    title: "DevOps & Automation",
    description: "We streamline development workflows and deployment processes through comprehensive DevOps practices. Our automation solutions reduce manual work, improve reliability, and accelerate time-to-market.",
    image: "/images/expertise/devops.png",
    technologies: [
      "Jenkins",
      "GitLab CI",
      "GitHub Actions",
      "Docker",
      "Kubernetes",
      "Monitoring",
      "Infrastructure as Code",
      "Security Automation"
    ]
  },
  {
    title: "UI/UX Design",
    description: "We create intuitive and beautiful user interfaces that drive engagement and conversion. Our design process combines user research, modern design principles, and cutting-edge tools to deliver exceptional digital experiences.",
    image: "/images/expertise/design.png",
    technologies: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "Prototyping",
      "User Research",
      "Design Systems",
      "Accessibility",
      "Motion Design"
    ]
  }
];