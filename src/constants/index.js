import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  docker,
  php,
  java,
  python,
  bash,
  k8s,
  linux,
  Jenkins,
  helm,
  Grafana,
  GitHubactions,
  NGINX,
  prom,
  Terraform,
  Argocd,
  Ansible,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  tailwind,
} from "../assets";

// Import Tekisky separately
import company from "../assets/company/PAT.jpg";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
    {
    id: "skills",
    title: "Skills",
  },
  {
    id: "Experience",
    title: "Experience",
  },
  {
    id: "work",
    title: "Projects",
  },

  {
    id: "Education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "cloud Engineer",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
   {
    name: "Php",
    icon: php,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node js",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "Git",
    icon: git,
  },
  {
    name: "Linux",
    icon: linux,
  },
   {
    name: "Bash",
    icon: bash,
  },
  {
    name: "Jenkins",
    icon: Jenkins,
  },
  {
    name: "GitHubactions",
    icon: GitHubactions,
  },

  {
    name: "Argocd",
    icon: Argocd,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: k8s,
  },
  {
    name: "Helm",
    icon: helm,
  },
  {
    name: "Prometheus",
    icon: prom,
  },
  {
    name: "Grafana",
    icon: Grafana,
  },
  {
    name: "NGINX",
    icon: NGINX,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Terraform",
    icon: Terraform,
  },
  {
    name: "Ansible",
    icon: Ansible,
  },
];

const experiences = [
  {
    title: "Web developer Intern",
    company_name: "PAT Technologies Pvt Ltd",
    icon: company,
    iconBg: "#383E56",
    date: "Feb 2026 - May 2026",
    points: [
      "Collaborated on building responsive full-stack applications using the MERN stack, leveraging component-based architecture in ReactJS to optimize frontend performance.",
      "Designed and integrated secure RESTful APIs executing database-driven CRUD operations to handle high-throughput client-server requests.",
      "Optimized backend application logic with Node.js and ExpressJS, facilitating seamless workflow transitions and improving application response times.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "TruLeaf – Digital Food Traceability Platform",
    description:
      "Engineered a production-grade supply chain visibility application using the MERN stack to track historical food logistics transparently from origin to marketplace.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Vercel",
        color: "blue-text-gradient",
      },
      {
        name: "Render",
        color: "white-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://truleaf.vercel.app/",
  },
  {
    name: "AWS Infrastructure Automation using Terraform",
    description:
      "Architected a highly available multi-AZ network topology on AWS featuring public subnets for external traffic and private subnets for secure resource isolation.",
    tags: [
      {
        name: "Terraform",
        color: "blue-text-gradient",
      },
      {
        name: "aws",
        color: "white-text-gradient",
      },
    ],
    image: project2,
    source_code_link:
      "https://github.com/AvinashShetty7/AWS-Infrastructure-Automation-using-Terraform",
  },
  {
    name: "Kubernetes-Based GitOps Deployment of OpsDesk on AWS EKS",
    description:
      "Containerized distributed frontend and backend services via multi-stage Docker builds, hosting cloud-native applications seamlessly on a managed AWS EKS cluster.",
    tags: [
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "Kubernetes",
        color: "green-text-gradient",
      },
      {
        name: "AWS EKS",
        color: "pink-text-gradient",
      },
      {
        name: "NGINX",
        color: "blue-text-gradient",
      },
      {
        name: "GitHub Actions",
        color: "green-text-gradient",
      },
      {
        name: "Helm",
        color: "pink-text-gradient",
      },
      {
        name: "Argo CD",
        color: "blue-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link:
      "https://github.com/AvinashShetty7/Kubernetes-Based-CI-CD-Deployment-of-OpsDesk-Application-on-AWS-EKS-",
  },
];

export { services, technologies, experiences, projects };
