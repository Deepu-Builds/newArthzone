export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 'project-cost',
    question: 'How much does a project cost?',
    answer: 'Project costs vary based on scope, complexity, and timeline. We provide custom quotes after understanding your requirements during our free consultation. Our pricing is transparent with no hidden fees, and we offer flexible payment terms for startups.'
  },
  {
    id: 'development-timeline',
    question: 'What is the typical development timeline?',
    answer: 'Timelines depend on project complexity. A simple MVP might take 4-8 weeks, while complex applications can take 3-6 months. We provide detailed timelines during planning and keep you updated with weekly progress reports.'
  },
  {
    id: 'startup-work',
    question: 'Do you work with startups?',
    answer: 'Absolutely! We specialize in working with startups and understand the unique challenges they face. We offer flexible pricing, rapid prototyping, and can work with limited budgets. Many of our clients are early-stage startups who have gone on to secure funding.'
  },
  {
    id: 'post-launch-support',
    question: 'Do you provide post-launch support?',
    answer: 'Yes, we offer comprehensive post-launch support including maintenance, updates, performance monitoring, and feature enhancements. We also provide training for your team and documentation to ensure smooth handover.'
  },
  {
    id: 'technologies',
    question: 'What technologies do you use?',
    answer: 'We use modern, scalable technologies including React, Next.js, Node.js, Python, AWS, Google Cloud, and various AI/ML frameworks. We choose the best technology stack for each project based on your specific requirements and goals.'
  },
  {
    id: 'communication',
    question: 'How do you handle communication and project updates?',
    answer: 'We maintain transparent communication through weekly stand-ups, progress reports, and dedicated Slack channels. You\'ll have direct access to our development team and receive regular updates on milestones and deliverables.'
  },
  {
    id: 'revisions',
    question: 'How many revisions are included in the project?',
    answer: 'We include unlimited revisions during the development phase to ensure the final product meets your vision. Our iterative approach means we refine and improve until you\'re completely satisfied with the result.'
  },
  {
    id: 'ownership',
    question: 'Who owns the code and intellectual property?',
    answer: 'You own full rights to the code, designs, and intellectual property we create for your project. We provide complete source code, documentation, and transfer all assets upon project completion.'
  }
];