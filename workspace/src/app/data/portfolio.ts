export type AudienceMode = 'hiring' | 'project';

export type ScreenId = 'mira' | 'hitched' | 'illustra';

export interface ProjectFact {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  name: string;
  line: string;
  year: string;
  summary: string;
  facts: ProjectFact[];
  stack: string[];
  screen: ScreenId;
  media: {
    src: string;
    alt: string;
    credit: string;
  };
  link?: {
    label: string;
    href: string;
  };
}

export interface ExperienceRow {
  years: string;
  org: string;
  role: string;
  points: string[];
}

export interface EducationRow {
  years: string;
  org: string;
  detail: string;
  result: string;
}

export interface Capability {
  id: string;
  name: string;
  body: string;
  tone: 'dark' | 'mid' | 'warm';
}

export const SITE = {
  name: 'Ishaan Patel',
  email: 'ishaanpatel29976@gmail.com',
  phone: '+91 70076 35116',
  phoneHref: '+917007635116',
  linkedin: 'https://www.linkedin.com/in/patelishaan2529/',
  github: 'https://github.com/patelishaan',
  resume: 'ishaan-patel-resume.pdf',
};

export const PROJECTS: Project[] = [
  {
    id: 'mira',
    name: 'MIRA',
    line: 'AI stylist',
    year: '2025',
    summary:
      'A stylist that reads a shopper’s attributes, builds a look, and shows it on them before they buy. Built for the fashion startup Merorr.',
    facts: [
      { label: 'Type', value: 'Company build' },
      { label: 'Role', value: 'AI intern' },
      { label: 'Focus', value: 'Multi-agent' },
    ],
    stack: ['Agentic AI', 'MCP', 'OpenCV', 'API integration'],
    screen: 'mira',
    media: {
      src: 'images/textile-weave.jpg',
      alt: 'A historical figured silk weave, the kind of fabric a stylist works with.',
      credit: 'World image: “Textile with Figured Silk Weave”, The Met, CC0.',
    },
  },
  {
    id: 'hitched',
    name: 'Hitched',
    line: 'Multi-agent wedding planner',
    year: '2026',
    summary:
      'A planner that takes one sentence and returns a wedding plan: a venue shortlist, flights and a sangeet playlist, run by specialist agents.',
    facts: [
      { label: 'Type', value: 'Personal project' },
      { label: 'Focus', value: 'Orchestration' },
      { label: 'Guard', value: 'Prompt checks' },
    ],
    stack: ['LangChain', 'Mistral', 'Tavily', 'Kiwi MCP', 'Pydantic'],
    screen: 'hitched',
    media: {
      src: 'images/wedding-roses-crop.jpg',
      alt: 'Pink roses arranged for an Indian wedding celebration.',
      credit:
        'World image: “Flower decorations at a wedding in India 04”, Kritzolina, CC BY-SA 4.0.',
    },
    link: {
      label: 'View the code on GitHub',
      href: 'https://github.com/patel-ishaan/hitched',
    },
  },
  {
    id: 'illustra',
    name: 'Illustra',
    line: 'Data visualisation',
    year: '2025',
    summary:
      'A no-code workspace that turns a raw CSV or Excel file into interactive charts and model-backed insights, without asking anyone to write code.',
    facts: [
      { label: 'Type', value: 'Personal project' },
      { label: 'Scale', value: '100k+ rows' },
      { label: 'Output', value: '10+ charts' },
    ],
    stack: ['Python', 'Streamlit', 'Pandas', 'Matplotlib', 'DeepSeek'],
    screen: 'illustra',
    media: {
      src: 'images/survey-of-india-1922.jpg',
      alt: 'A 1922 index map of the Great Trigonometrical Survey of India.',
      credit:
        'World image: “1922 Index of the Great Trigonometrical Survey of India”, public domain.',
    },
    link: {
      label: 'View the code on GitHub',
      href: 'https://github.com/patelishaan/Illustra_dataviz_BITWARS',
    },
  },
];

export const EXPERIENCE: ExperienceRow[] = [
  {
    years: 'Aug 2026 – Present',
    org: 'Capgemini',
    role: 'Software Engineer',
    points: [
      'Completed full-stack training in Spring Boot and Angular: layered architecture, JPA/Hibernate, REST APIs and Spring Security.',
      'Built an Insurance Management System with a four-person team, covering end-to-end CRUD workflows and role-based access.',
      'Built an Inventory Management System with layered REST architecture, JPQL, Mockito unit tests and Thymeleaf server-side rendering.',
    ],
  },
  {
    years: 'Aug 2025 – Oct 2025',
    org: 'Merrorr',
    role: 'AI Intern',
    points: [
      'Built MIRA, a multi-agent AI stylist that recommends personalised clothing from a shopper’s attributes.',
      'Designed a modular agent architecture so decisions could scale and adapt across different inputs.',
      'Shipped a virtual try-on feature using image processing and overlay, so users could see a selected outfit on themselves.',
    ],
  },
];

export const EDUCATION: EducationRow[] = [
  {
    years: '2022 – 2026',
    org: 'Galgotias College of Engineering & Technology',
    detail: 'B.Tech, Computer Science (AI/ML)',
    result: '7.53 CGPA',
  },
  {
    years: '2020 – 2021',
    org: 'Takshila Academy',
    detail: 'Class 12, CBSE – Physics, Chemistry, Maths',
    result: '91.84%',
  },
  {
    years: '2018 – 2019',
    org: 'Takshila Academy',
    detail: 'Class 10, CBSE',
    result: '93%',
  },
];

export const CAPABILITIES: Capability[] = [
  {
    id: 'agents',
    name: 'Agent systems',
    body:
      'Specialist agents, tool calls and structured outputs, with retries and prompt-injection guards before anything reaches a model. I design the loop, not only the prompt.',
    tone: 'dark',
  },
  {
    id: 'product',
    name: 'Product delivery',
    body:
      'The model is half the product. I build the Angular screen, the Spring Boot API and the persistence behind it, with role-based security and tests, so the demo survives a real user.',
    tone: 'mid',
  },
  {
    id: 'data',
    name: 'Data and evidence',
    body:
      'I work from the data up: cleaning, statistical tests, then charts that can be read. My NCRB study covered twelve years of records and used OLS regression, not just a line chart.',
    tone: 'warm',
  },
];

export const STACK = [
  'Python',
  'Java',
  'TypeScript',
  'LangChain',
  'MCP',
  'OpenCV',
  'Pandas',
  'scikit-learn',
  'Streamlit',
  'Flask',
  'Django',
  'Spring Boot',
  'Angular',
  'Hibernate',
  'MySQL',
  'Git',
];
