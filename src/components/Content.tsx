import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { contentAtom } from '../atoms/contentAtoms';

export default function Content() {
  const [content] = useAtom(contentAtom);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [content]);

  if (content.length === 0) return;

  return (
    <div className="flex flex-col">
      {content.map((line, index) => (
        <pre key={index}>{line}</pre>
      ))}
    </div>
  );
}
