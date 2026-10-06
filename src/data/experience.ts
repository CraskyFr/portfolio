import type { CollectionEntry } from 'astro:content';

type Experience = CollectionEntry<'experiences'>;

const month = new Intl.DateTimeFormat('fr-FR', { month: 'long', year: 'numeric' });

/** Période complète, ex. « février 2024 - aujourd'hui ». */
export const periodOf = ({ data }: Experience) =>
  `${month.format(data.start)} - ${data.end ? month.format(data.end) : "aujourd'hui"}`;

/** Titre d'une mission : le client chez qui elle a eu lieu, sinon l'employeur. */
export const titleOf = ({ data }: Experience) => data.client ?? data.company;
