import { getDefaultStore } from 'jotai';
import { contentAtom } from '../atoms/contentAtoms';

export default function dateHandler() {
  const store = getDefaultStore();

  const now = new Date();
  const myTimezone = 'America/Argentina/Buenos_Aires';
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const format = (tz: string) => now.toLocaleString('en-US', { timeZone: tz });

  const myDate = format(myTimezone);
  const userDate = format(userTimezone);

  const getOffset = (tz: string) => {
    const utc = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }));
    const local = new Date(now.toLocaleString('en-US', { timeZone: tz }));
    return (local.getTime() - utc.getTime()) / 3_600_000;
  };
  const diff = Math.abs(getOffset(myTimezone) - getOffset(userTimezone));

  const message =
    diff === 0
      ? `it's ${myDate}, we're on the same timezone ;)`
      : `my local date is ${myDate}, while yours is ${userDate}, that's a ${diff}h difference :o`;

  store.set(contentAtom, (prev) => [...prev, message]);
}
