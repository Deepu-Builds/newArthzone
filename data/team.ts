export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Arjun Sharma",
    role: "Founder & CEO",
    image: "/images/team/arjun.jpg",
    bio: "Visionary leader with 10+ years in tech entrepreneurship. Expert in scaling startups and building high-performance teams.",
    linkedin: "https://linkedin.com/in/arjun-sharma"
  },
  {
    name: "Priya Patel",
    role: "Lead Software Engineer",
    image: "/images/team/priya.jpg",
    bio: "Full-stack engineer specializing in scalable backend systems and cloud infrastructure. Passionate about clean code and system architecture.",
    linkedin: "https://linkedin.com/in/priya-patel"
  },
  {
    name: "Rahul Kumar",
    role: "AI/ML Engineer",
    image: "/images/team/rahul.jpg",
    bio: "Machine learning expert with deep knowledge in computer vision and natural language processing. PhD in Artificial Intelligence.",
    linkedin: "https://linkedin.com/in/rahul-kumar"
  },
  {
    name: "Sneha Gupta",
    role: "Product Designer",
    image: "/images/team/sneha.jpg",
    bio: "Creative designer focused on user-centered design and product strategy. Expert in creating intuitive digital experiences.",
    linkedin: "https://linkedin.com/in/sneha-gupta"
  },
  {
    name: "Vikram Singh",
    role: "DevOps Engineer",
    image: "/images/team/vikram.jpg",
    bio: "Infrastructure specialist with expertise in cloud platforms and automation. Ensures reliable and scalable deployment pipelines.",
    linkedin: "https://linkedin.com/in/vikram-singh"
  },
  {
    name: "Ananya Reddy",
    role: "Mobile Developer",
    image: "/images/team/ananya.jpg",
    bio: "Cross-platform mobile developer with expertise in React Native and Flutter. Passionate about creating seamless mobile experiences.",
    linkedin: "https://linkedin.com/in/ananya-reddy"
  },
  {
    name: "Karan Mehta",
    role: "Frontend Developer",
    image: "/images/team/karan.jpg",
    bio: "Frontend specialist focused on modern JavaScript frameworks and performance optimization. Loves creating beautiful user interfaces.",
    linkedin: "https://linkedin.com/in/karan-mehta"
  },
  {
    name: "Meera Joshi",
    role: "QA Engineer",
    image: "/images/team/meera.jpg",
    bio: "Quality assurance expert ensuring product reliability and user satisfaction. Specializes in automated testing and quality processes.",
    linkedin: "https://linkedin.com/in/meera-joshi"
  }
];