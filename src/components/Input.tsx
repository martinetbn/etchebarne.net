import { useEffect, useRef } from 'react';

export default function Input() {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      if (event.ctrlKey || event.metaKey) return;
      ref.current?.focus();
    });
  }, []);

  return (
    <div>
      <span className="text-accent text-nowrap">~ $ </span>
      <input ref={ref} autoFocus className="w-full outline-none" />
    </div>
  );
}
