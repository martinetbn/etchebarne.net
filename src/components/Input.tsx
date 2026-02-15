import { useEffect, useRef } from 'react';
import commands from '../lib/commands';

export default function Input() {
  const ref = useRef<HTMLInputElement>(null);

  const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!ref.current?.value) return;
    for (const command in commands) {
      if (ref.current.value === command) {
        commands[command].handler();
      }
    }
    ref.current.value = '';
    window.scrollTo(0, document.body.scrollHeight);
  };

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      if (event.ctrlKey || event.metaKey) return;
      ref.current?.focus();
      window.scrollTo(0, document.body.scrollHeight);
    });
  }, []);

  return (
    <div className="flex flex-nowrap gap-2.5">
      <span className="text-accent text-nowrap">~ $</span>
      <form onSubmit={onSubmit} className="w-full">
        <input ref={ref} autoFocus className="w-full outline-none" />
      </form>
    </div>
  );
}
