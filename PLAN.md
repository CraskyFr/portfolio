# Plan — Portfolio développeur backend

Objectif : un site sobre, rapide et professionnel centré sur l'**expérience professionnelle** : missions, responsabilités, impact, choix techniques.

**État au 04/10/2026** : site en ligne sur paulbodin.fr, étapes 0 à 7, 9 et 12 terminées. Le travail restant porte sur le contenu (étapes 10 et 11) et la diffusion (étape 8).

## Prochaines étapes (par priorité)

1. **Impact des missions** (étape 11.1) : réponses de Paul encore attendues
   - Toutes missions : une réalisation dont Paul est fier (bug coriace, gain de performance, initiative)
2. **Diffusion** (étape 8) : lien du site sur LinkedIn, GitHub et dans le CV
3. **À propos plus personnel** (étape 11.4) : motivations, ce que Paul recherche
4. *(optionnel)* Une note technique, puis le schéma agrandissable dans les études de cas

---

## Étape 0 — Décisions ✅

| Sujet | Choix |
|---|---|
| Stack | **Astro + TypeScript + Tailwind CSS** |
| Langue | **Français uniquement** |
| Domaine | **paulbodin.fr** (réservé chez OVH, DNS chez OVH) |
| Hébergement | **Vercel** (gratuit, déploiement auto depuis GitHub) |
| Mise en avant | **Expérience professionnelle** (projets perso en secondaire) |
| LinkedIn | https://www.linkedin.com/in/paulbodiin/ |

---

## Étape 1 — Contenu (avant le code) ✅

- [x] **Accroche** : une phrase claire (ex. « Développeur backend Java/Spring — je conçois des API robustes et maintenables »)
- [x] **Expériences professionnelles** — pour chaque poste :
  - Entreprise, intitulé du poste, dates, lieu
  - Contexte (secteur, produit, taille de l'équipe)
  - Missions et responsabilités
  - **Réalisations chiffrées** (perf, volumétrie, délais, qualité…)
  - Stack technique
- [x] **À propos** : parcours, ce que tu aimes faire, ce que tu recherches
- [x] **Compétences** groupées par domaine (sans barres de pourcentage)
- [x] **Formation** (certifications : aucune pour l'instant)
- [x] **Projets personnels** (section secondaire) : le portfolio pour l'instant ; CraskyApi, CraskyUI et le template Spring Boot une fois aboutis et publics
- [x] **Contact** : email, LinkedIn, GitHub, CV en PDF

## Étape 2 — Initialisation du projet ✅

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
- [x] Premier commit + dépôt GitHub (https://github.com/CraskyFr/portfolio)

## Étape 3 — Design system ✅

- [x] Palette (neutres + 1 accent), typographies (Inter + JetBrains Mono, remplacées par Geist + Geist Mono à l'étape 12)
- [x] Mode clair / sombre
- [x] Composants de base : boutons, cartes, badges de technos, sections

## Étape 4 — Pages et sections ✅

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

- [x] Schémas d'architecture dans les missions marquantes (composant `ArchitectureDiagram` en HTML/CSS plutôt que Mermaid), sans données confidentielles
- [ ] *(optionnel)* Démo live de CraskyApi (Swagger UI hébergé)

## Étape 6 — Qualité ✅

- [x] Responsive (mobile, tablette, desktop)
- [x] Accessibilité (contrastes, navigation clavier, `alt` sur les images)
- [x] SEO : meta, Open Graph (aperçu LinkedIn), sitemap, `robots.txt`
- [x] Lighthouse ≥ 95 sur toutes les catégories (99–100 mesuré le 01/10/2026)
- [x] Relecture orthographique

## Étape 7 — Déploiement ✅

- [x] GitHub Actions (format, typage, build)
- [x] Déploiement Vercel
- [x] Domaine paulbodin.fr + HTTPS (DNS chez OVH, certificat Let's Encrypt géré par Vercel)
- [x] README propre sur le dépôt

## Étape 8 — Après la mise en ligne

- [ ] Lien sur LinkedIn, GitHub, CV
- [x] Mesure d'audience : Vercel Analytics (sans cookie)
- [ ] Mettre à jour à chaque nouvelle mission

## Étape 9 — Animations ✅

Sobres et courtes (< 1 s), sans bibliothèque, désactivées si `prefers-reduced-motion: reduce`, contenu visible sans JavaScript, Lighthouse ≥ 95 conservé.

- [x] Fondations : animation `fade-up` et décalage `--delay` dans `global.css`, respect de `prefers-reduced-motion`
- [x] Hero : arrivée en machine à écrire sur toute la partie haute (nom, titre, localisation, accroche, l'un après l'autre), photo en fondu au début et boutons à la fin ; texte complet dans le HTML (SEO, lecteurs d'écran, sans JS), sans décalage de mise en page
- [x] Apparition au défilement (`IntersectionObserver`, attribut `data-reveal`) : titres de section, expériences, compétences, projets, à propos, contact
- [x] Micro-interactions : survol des boutons, cartes et lien « étude de cas », frise qui se dessine au défilement (CSS scroll-driven), changement de thème en cercle (View Transitions)
- [x] Vérifications : clavier (focus visible, révélation immédiate au focus), animations réduites, sans JavaScript, mobile (360 px, sans débordement), clair/sombre, Lighthouse 99–100 (LCP 1,9 s mobile, 0,4 s ordinateur, mesuré le 03/10/2026)

## Étape 10 — Études de cas : contenu et ergonomie

- [x] Gabarit commun : « En bref » (équipe, méthode, environnement), « Contexte et enjeux », « Ce que j'ai fait », « Résultats » (seulement quand Paul fournit des éléments, rien d'inventé)
- [x] Lecture continue à la place des onglets : bulles en sommaire qui suivent la lecture (scrollspy), hauteur adaptée au contenu
- [x] Carte plein écran sur mobile
- [x] Navigation : étude plus récente / plus ancienne (boutons et flèches ← →), adresse propre `/#etude-…` (partageable, bouton retour qui ferme la carte)
- [x] Barre de progression de lecture (carte et page dédiée, CSS scroll-driven, sans JS)
- [ ] *(optionnel)* Panneau latéral sur ordinateur, schéma agrandissable
- [ ] Résultats chiffrés des missions : faits pour les quatre missions (03/10/2026) ; volumes Maisons du Monde confidentiels, prototype Clear Channel non repris (à ne pas mentionner)

## Étape 11 — Contenu qui se démarque

Objectif : montrer ce que le travail a changé (impact, responsabilités, preuves), pas seulement la liste des tâches. Uniquement des faits fournis par Paul, rien de confidentiel sur les clients.

### 1. Réalisations orientées impact (priorité)

- [ ] 3 ou 4 lignes fortes par mission, classées par impact (verbe d'action + quoi + résultat)
- [x] Maisons du Monde : RUN (analyse et correction des anomalies en production), relation avec le métier et d'autres équipes, formation des nouveaux arrivants
- [x] Code Factory : SVS livré en production et utilisé pour présenter aux clients les projets d'innovation (première section « Résultats »)
- [x] Maisons du Monde : une quinzaine de flux, Dead Letter Queues pour rejouer les erreurs techniques et fonctionnelles, formation de plusieurs nouveaux arrivants, intégration de OneStock pensée pour un déploiement progressif (sans pays ni mise en production affirmée : OneStock n'est pas encore en production)
- [x] Code Factory : SVS respecte l'ensemble des critères RGAA, en français et en anglais
- [x] Code Factory : Green Code Pattern a servi à auditer plusieurs projets réels
- [x] ACDP : les POC ont débouché sur des recommandations pour le client sur l'exploitation de ses données
- [x] Clear Channel : sources intégrées (API TomTom et Google Maps)

### 2. Points forts du profil mis en avant (accroche, À propos, tête des réalisations)

- [x] Architecture événementielle en production (GCP, Pub/Sub, webhooks)
- [x] Cadrage technique (accroche « Du cadrage technique au RUN… » et À propos)
- [x] Responsabilité du RUN et transmission (formation des nouveaux arrivants)
- [x] IA au quotidien (Gemini Code Assist) : productivité sur les tâches répétitives, analyse de code (améliorations, failles)
- [x] Accessibilité RGAA et numérique responsable
- [x] Prise de parole (présentation devant la direction)

### 3. Preuves

- [x] ~~Témoignages : 2 ou 3 citations (recommandations LinkedIn, avec accord)~~ (écarté : pas de recommandation disponible)
- [x] Lien GitHub sur la carte projet (dépôt public du portfolio) ; README des futurs projets à soigner
- [x] ~~Certifications ou formations (ex. GCP Associate Cloud Engineer)~~ (écarté : pas de certification pour l'instant)

### 4. Pour aller plus loin

- [x] Section « Comment je travaille » : 4 principes illustrés par du vécu
- [ ] *(optionnel)* 1 ou 2 notes techniques (flux Pub/Sub rejouable, contract-first avec OpenAPI, intégration d'un OMS par API et webhooks)
- [x] Projets personnels : ce portfolio en projet phare, avec lien GitHub (CraskyApi et CraskyUI à ajouter une fois aboutis)
- [ ] « À propos » plus personnel : motivations, ce que Paul recherche (ELOP Tour et échange avec un collège britannique écartés)

## Étape 12 — Finition visuelle ✅

Audit et corrections guidés par les skills de design Taste (design-taste-frontend, minimalist-ui, high-end-visual-design, redesign) et editorial : garder la structure, retirer ce qui fait « modèle généré ». Écartés : effet agence (double bordure, navigation en verre, flou), police serif en texte courant, bibliothèques d'animation.

- [x] Nettoyage : plus de tirets longs, vrais titres de section au lieu des libellés mono en capitales, pas de point de statut décoratif, bouton principal sans ombre, `text-wrap: balance` / `pretty`
- [x] Typographie : Geist et Geist Mono (Fontsource), titres en semi-gras, image Open Graph régénérée
- [x] Couleur : pastilles de technos neutres, bleu réservé aux liens, au bouton principal, à la frise et à la barre de lecture ; ombre teintée au survol des cartes
- [x] Mise en page : hero en deux colonnes sur grand écran, compétences en listes de texte, principes sans numéros, projet en rangée pleine largeur avec une vraie capture, adresse mail en grand
- [x] Mouvement : une seule courbe (`cubic-bezier(0.16, 1, 0.3, 1)`), apparitions décalées de 80 ms dans les listes
- [x] Vérifications (04/10/2026, build local) : Lighthouse mobile 100 / 100 / 96 / 100 (LCP 1,7 s), ordinateur 100 / 100 / 96 / 100 (LCP 0,4 s) ; le 96 vient du script Vercel Analytics absent en local. 360 px sans débordement en clair et en sombre, contenu visible sans JavaScript, carte d'étude de cas au clavier et à Échap
- [ ] *(à décider)* Garder seulement les 3 lignes d'impact les plus fortes par mission dans la frise, le détail restant dans l'étude de cas (choix des lignes par Paul)
