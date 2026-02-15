import { getDefaultStore } from 'jotai';
import { contentAtom } from '../atoms/contentAtoms';

export default function clearHandler() {
  const store = getDefaultStore();
  store.set(contentAtom, []);
}
