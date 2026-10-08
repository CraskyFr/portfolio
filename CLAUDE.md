# Portfolio — Paul Bodin

Site vitrine statique (Astro 7 + Tailwind CSS 4), en français uniquement, déployé sur https://paulbodin.fr.
Le contenu brut est dans `CONTENU.md`.

## Commandes

```bash
npm run dev      # serveur de dev (en arrière-plan : npx astro dev --background, puis astro dev stop)
npm run build    # build statique dans dist/
npm run check    # vérification TypeScript / Astro
npm run format   # Prettier (100 caractères, quotes simples) ; format:check pour la CI
bash scripts/generate-images.sh  # régénère og.png, apple-touch-icon.png et favicon.ico (via Edge headless)
```

## Structure

- `src/data/site.ts` : identité, accroche, liens
- `src/content/experiences/*.md` : une expérience par fichier (schéma dans `src/content.config.ts`)
- `src/layouts/BaseLayout.astro` : HTML commun, SEO, Open Graph
- `src/components/` : composants réutilisables
- `public/` : fichiers servis tels quels (favicon, CV publié)

## Conventions

- Tout le texte du site est en français.
- Ne jamais publier le numéro de téléphone ni d'informations confidentielles sur les missions client.
- Les CV sources (`Profile.pdf`, `CV_*.pdf`, `CV_*.docx`) à la racine sont ignorés par git.
- Git : Claude peut commiter, pousser et ouvrir des PR (via `gh`), toujours sur une branche de feature (jamais directement sur `main` : vérifier la branche avant chaque commit). Fusion dans `main` uniquement par PR, une fois la CI verte.
- Paul doit apparaître seul sur GitHub : commits avec son identité Git, PR ouvertes et fusionnées avec son compte `gh` ; aucune ligne `Co-Authored-By` ni mention de Claude dans les commits, les titres ou les descriptions de PR.

## Documentation Astro

https://docs.astro.build — notamment les guides content collections, routing et styling.
