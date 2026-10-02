# Plan — Portfolio développeur backend

Objectif : un site sobre, rapide et professionnel centré sur l'**expérience professionnelle** : missions, responsabilités, impact, choix techniques.

---

## Étape 0 — Décisions ✅

| Sujet | Choix |
|---|---|
| Stack | **Astro + TypeScript + Tailwind CSS** |
| Langue | **Français uniquement** |
| Domaine | **paulbodin.fr** (libre au 02/10/2026, à réserver) |
| Hébergement | **Vercel** (gratuit, déploiement auto depuis GitHub) |
| Mise en avant | **Expérience professionnelle** (projets perso en secondaire) |
| LinkedIn | https://www.linkedin.com/in/paulbodiin/ |

---

## Étape 1 — Contenu (avant le code)

- [ ] **Accroche** : une phrase claire (ex. « Développeur backend Java/Spring — je conçois des API robustes et maintenables »)
- [ ] **Expériences professionnelles** — pour chaque poste :
  - Entreprise, intitulé du poste, dates, lieu
  - Contexte (secteur, produit, taille de l'équipe)
  - Missions et responsabilités
  - **Réalisations chiffrées** (perf, volumétrie, délais, qualité…)
  - Stack technique
- [ ] **À propos** : parcours, ce que tu aimes faire, ce que tu recherches
- [ ] **Compétences** groupées par domaine (sans barres de pourcentage)
- [ ] **Formation / certifications**
- [ ] **Projets personnels** (section secondaire) : CraskyApi, CraskyUI, template Spring Boot
- [ ] **Contact** : email, LinkedIn, GitHub, CV en PDF

## Étape 2 — Initialisation du projet

- [x] Créer le projet Astro (TypeScript strict) dans `portfolio/`
- [x] Ajouter Tailwind CSS, Prettier, astro check (ESLint écarté pour l'instant)
- [x] Structure :
  ```
  src/
    components/   Header, Footer, ExperienceItem, SkillGroup, ProjectCard…
    layouts/      BaseLayout (SEO, meta, thème)
    pages/        index, experiences/[slug], 404
    content/      expériences et projets en Markdown (Content Collections)
  public/         CV.pdf, images, favicon
  ```
- [ ] Premier commit + dépôt GitHub

## Étape 3 — Design system

- [x] Palette (neutres + 1 accent), typographies (ex. Inter + JetBrains Mono)
- [x] Mode clair / sombre
- [x] Composants de base : boutons, cartes, badges de technos, sections

## Étape 4 — Pages et sections

- [x] Layout global (header, navigation, footer)
- [x] Hero (nom, titre, accroche, boutons CV / Contact / LinkedIn)
- [x] **Expérience** : timeline détaillée, section principale du site
- [x] *(optionnel)* Page détaillée par mission (étude de cas avec schéma d'architecture)
- [x] Compétences
- [x] À propos + formation
- [x] Projets personnels
- [x] Contact
- [x] Page 404

## Étape 5 — Touche backend

- [ ] Schémas d'architecture (Mermaid) dans les missions marquantes, sans données confidentielles
- [ ] *(optionnel)* Démo live de CraskyApi (Swagger UI hébergé)

## Étape 6 — Qualité

- [x] Responsive (mobile, tablette, desktop)
- [x] Accessibilité (contrastes, navigation clavier, `alt` sur les images)
- [x] SEO : meta, Open Graph (aperçu LinkedIn), sitemap, `robots.txt`
- [x] Lighthouse ≥ 95 sur toutes les catégories (99–100 mesuré le 01/10/2026)
- [x] Relecture orthographique

## Étape 7 — Déploiement

- [x] GitHub Actions (format, typage, build)
- [x] Déploiement Vercel
- [ ] Domaine paulbodin.fr + HTTPS
- [x] README propre sur le dépôt

## Étape 8 — Après la mise en ligne

- [ ] Lien sur LinkedIn, GitHub, CV
- [ ] Analytics respectueux de la vie privée (Plausible / Umami), optionnel
- [ ] Mettre à jour à chaque nouvelle mission

## Étape 9 — Animations

Sobres et courtes (< 1 s), sans bibliothèque, désactivées si `prefers-reduced-motion: reduce`, contenu visible sans JavaScript, Lighthouse ≥ 95 conservé.

- [x] Fondations : animation `fade-up` et décalage `--delay` dans `global.css`, respect de `prefers-reduced-motion`
- [x] Hero : apparition en cascade (localisation, nom, accroche, boutons) et effet machine à écrire sur « Développeur Backend Java » (texte complet conservé pour le SEO et les lecteurs d'écran)
- [x] Apparition au défilement (`IntersectionObserver`, attribut `data-reveal`) : titres de section, expériences, compétences, projets, à propos, contact
- [x] Micro-interactions : survol des boutons, cartes et lien « étude de cas », frise qui se dessine au défilement (CSS scroll-driven), changement de thème en cercle (View Transitions)
- [ ] Vérifications : clavier, animations réduites, sans JavaScript, mobile, clair/sombre, Lighthouse (LCP)
