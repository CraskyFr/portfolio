export const about = [
  "Ingénieur diplômé de l'ESIEA, je me suis spécialisé dans le développement backend Java. Depuis 2024, je travaille sur la supply chain de Maisons du Monde, où j'ai participé au cadrage et au développement de l'intégration d'un nouvel OMS, avec la refonte de l'ensemble des flux autour d'une architecture événementielle sur Google Cloud.",
  "J'aime concevoir des systèmes lisibles et robustes : des API bien contractualisées, des flux qui résistent aux pannes et un code que l'équipe a plaisir à reprendre. Le pair programming, les revues de code et la qualité du RUN font partie de ma façon de travailler.",
  "J'ai aussi une expérience full stack (Angular, React) et une sensibilité à l'accessibilité (RGAA) et au numérique responsable.",
];

export const skills = [
  { label: 'Langages', items: ['Java', 'SQL', 'TypeScript', 'JavaScript', 'Python', 'Bash'] },
  {
    label: 'Backend',
    items: ['Spring Boot', 'Spring Data JPA', 'Hibernate', 'API REST', 'OpenAPI', 'JUnit'],
  },
  { label: 'Cloud', items: ['Google Cloud Platform', 'Pub/Sub', 'AWS', 'Rancher'] },
  { label: 'Données', items: ['PostgreSQL', 'Oracle', 'MariaDB', 'MongoDB', 'Redis'] },
  { label: 'DevOps', items: ['Docker', 'Kubernetes', 'GitLab CI', 'Jenkins', 'Maven', 'Rundeck'] },
  { label: 'Front', items: ['Angular', 'React', 'Node.js'] },
  { label: 'Méthodes', items: ['Agile Scrum', 'Pair programming', 'Revue de code', 'Jira'] },
];

export const domains = [
  'Transport',
  'Stock',
  'Publicité',
  'Accessibilité',
  'Numérique responsable',
];

export const education = {
  school: "ESIEA, école d'ingénieurs du numérique",
  degree: "Diplôme d'ingénieur, majeure Software Engineering",
  period: '2018 – 2023',
};

export const languages = [
  { name: 'Anglais', level: 'Avancé (TOEIC 850)' },
  { name: 'Espagnol', level: 'Intermédiaire' },
];

export const interests = [
  'Course à pied et tennis',
  'Échecs et lecture',
  'Soutien scolaire bénévole en maison de quartier',
];

export const projects = [
  {
    name: 'CraskyApi',
    description:
      "API REST de gestion d'inventaire Counter-Strike 2, conçue en approche contract-first : le contrat OpenAPI génère les interfaces des contrôleurs.",
    stack: ['Java 24', 'Spring Boot 3', 'OpenAPI', 'PostgreSQL', 'Docker'],
  },
  {
    name: 'CraskyUI',
    description: 'Interface web de CraskyApi, en composants standalone et signals.',
    stack: ['Angular 20', 'TypeScript'],
  },
  {
    name: 'Template Spring Boot',
    description:
      'Socle de projet réutilisable qui fixe mes conventions : architecture en couches, contrat OpenAPI, base PostgreSQL conteneurisée.',
    stack: ['Java', 'Spring Boot 3', 'OpenAPI', 'Docker'],
  },
];
