export const about = [
  "Ingénieur diplômé de l'ESIEA, je suis développeur backend Java. Depuis 2024, j'interviens sur la supply chain de Maisons du Monde : j'ai participé au cadrage technique de l'intégration d'un nouvel OMS et à la refonte des flux autour d'une architecture événementielle sur Google Cloud, dont j'assure aussi le RUN.",
  "J'aime les systèmes lisibles et robustes : des API bien contractualisées, des flux qui résistent aux pannes et un code que l'équipe a plaisir à reprendre.",
  "Le travail d'équipe compte autant que le code : pair programming, revues techniques, formation des nouveaux arrivants. J'ai aussi présenté un projet devant la direction et une centaine de personnes.",
  "Mon expérience full stack (Angular, React) et mes projets autour de l'accessibilité (RGAA) et du numérique responsable complètent ce profil.",
];

// Section « Comment je travaille » : chaque principe s'appuie sur du vécu.
export const principles = [
  {
    title: "Aller jusqu'à la production",
    text: "Je ne m'arrête pas au merge : j'assure le RUN de ce que je construis, du diagnostic à la correction.",
  },
  {
    title: 'Concevoir pour la panne',
    text: "Des flux découplés par messages, rejouables en cas d'incident (Pub/Sub).",
  },
  {
    title: 'Tester ce que je livre',
    text: 'Tests unitaires (JUnit, Mockito, Jasmine), intégration continue et analyse de code (Jenkins, SonarQube).',
  },
  {
    title: 'Partager ce que je sais',
    text: 'Pair programming, revues techniques, formation des nouveaux arrivants.',
  },
];

export const skills = [
  { label: 'Langages', items: ['Java', 'SQL', 'TypeScript', 'JavaScript', 'Python', 'Bash'] },
  {
    label: 'Backend',
    items: [
      'Spring Boot',
      'Spring Data JPA',
      'Hibernate',
      'API REST',
      'OpenAPI',
      'JUnit',
      'Mockito',
    ],
  },
  { label: 'Cloud', items: ['Google Cloud Platform', 'Pub/Sub', 'AWS', 'Rancher'] },
  { label: 'Données', items: ['PostgreSQL', 'Oracle', 'MariaDB', 'MongoDB', 'Redis'] },
  {
    label: 'DevOps',
    items: ['Docker', 'Kubernetes', 'GitLab CI', 'Jenkins', 'SonarQube', 'Maven', 'Rundeck'],
  },
  { label: 'Front', items: ['Angular', 'React', 'Node.js'] },
  {
    label: 'Méthodes',
    items: ['Agile Scrum', 'Kanban', 'Pair programming', 'Revue de code', 'Jira'],
  },
];

export const domains = [
  'Transport',
  'Stock',
  'Publicité',
  'Marketing',
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
  "ELOP Tour : relier à vélo les deux campus de l'ESIEA, de Laval à Paris",
  'Échecs et lecture',
];

export const projects = [
  {
    name: 'Template',
    description: 'Test',
    stack: ['Java', 'Spring Boot 3', 'OpenAPI', 'Docker'],
  },
];
