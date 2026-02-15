import { getDefaultStore } from 'jotai';
import { contentAtom } from '../atoms/contentAtoms';
import commands from '../lib/commands';

export default function helpHandler() {
  const store = getDefaultStore();
  let message: string = '';
  for (const command in commands) {
    message += `${command}: ${commands[command].description}\n`;
  }
  store.set(contentAtom, (prev) => [...prev, message]);
}
