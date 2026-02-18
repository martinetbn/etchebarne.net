import { getDefaultStore } from 'jotai';
import { contentAtom } from '../atoms/contentAtoms';

export default function socialsHandler() {
  const store = getDefaultStore();

  const socials = [
    { name: 'x', url: 'https://x.com/martinetbn' },
    { name: 'github', url: 'https://github.com/martinetbn' },
    { name: 'youtube', url: 'https://youtube.com/@etchebarne' },
    { name: 'linkedin', url: 'https://linkedin.com/in/martinetbn' },
  ];

  const message: string = socials
    .map(({ name, url }) => `${name}: ${url}`)
    .join('\n');

  store.set(contentAtom, (prev) => [...prev, message]);
}
