# paulbodin.fr

Portfolio de **Paul Bodin**, développeur backend Java à Nantes.

[![CI](https://github.com/CraskyFr/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/CraskyFr/portfolio/actions/workflows/ci.yml)

## Stack

- [Astro 7](https://astro.build) : site 100 % statique, aucun JavaScript inutile côté client
- [Tailwind CSS 4](https://tailwindcss.com) : design system en variables CSS, thèmes clair et sombre
- TypeScript strict, contenu en Markdown / MDX (content collections typées)
- Polices auto-hébergées (Inter, JetBrains Mono), sitemap, Open Graph, données structurées schema.org

Score Lighthouse : 99 à 100 sur les quatre catégories (performance, accessibilité, bonnes pratiques, SEO).

## Démarrer

Prérequis : Node.js 22.12 ou plus.

```bash
npm install
npm run dev          # http://localhost:4321
```

| Commande               | Rôle                                           |
| ---------------------- | ---------------------------------------------- |
| `npm run build`        | Build statique dans `dist/`                    |
| `npm run preview`      | Sert le build localement                       |
| `npm run check`        | Vérification TypeScript et Astro               |
| `npm run format`       | Formate le code avec Prettier                  |
| `npm run format:check` | Vérifie le formatage (utilisé par la CI)       |

Les images dérivées (`og.png`, `apple-touch-icon.png`, `favicon.ico`) se régénèrent avec `bash scripts/generate-images.sh` (nécessite Microsoft Edge ou Chrome).

## Organisation

```
src/
  content/experiences/   une expérience par fichier Markdown / MDX
  data/                  identité, compétences, projets, formation
  components/            composants Astro réutilisables
  layouts/               layout commun (SEO, thème)
  pages/                 accueil, études de cas, 404
public/                  favicon, image d'aperçu, CV
scripts/                 génération des images
```

Ajouter une expérience : créer un fichier dans `src/content/experiences/`. Le schéma est validé au build (`src/content.config.ts`). Une expérience avec `featured: true` obtient sa page d'étude de cas.

## Déploiement

Chaque push sur `main` est vérifié par GitHub Actions (formatage, typage, build) et déployé automatiquement par l'hébergeur.
