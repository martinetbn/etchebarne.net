import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { contentAtom } from '../atoms/contentAtoms';
import { prefix } from '../lib/config';

export default function Content() {
  const [content] = useAtom(contentAtom);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [content]);

  if (content.length === 0) return;

  return (
    <div className="flex flex-col">
      {content.map((line, index) =>
        line.startsWith(prefix) ? (
          <div className="flex flex-nowrap" key={index}>
            <pre className="text-accent">{prefix}</pre>
            <pre>{line.slice(prefix.length)}</pre>
          </div>
        ) : (
          <pre key={index}>{line}</pre>
        ),
      )}
    </div>
  );
}
