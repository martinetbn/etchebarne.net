export default function Header() {
  return (
    <div className="flex flex-col">
      <pre className="text-[min(1rem,2cqw)] text-accent leading-[1.125] tracking-tighter font-bold">
        {
          "          .           '||              '||                                       "
        }
        <br />
        {
          '  ....  .||.    ....   || ..     ....   || ...   ....   ... ..  .. ...     ....  '
        }
        <br />
        {
          ".|...||  ||   .|   ''  ||' ||  .|...||  ||'  || '' .||   ||' ''  ||  ||  .|...|| "
        }
        <br />
        {
          "||       ||   ||       ||  ||  ||       ||    | .|' ||   ||      ||  ||  ||"
        }
        <br />
        {
          " '|...'  '|.'  '|...' .||. ||.  '|...'  '|...'  '|..'|' .||.    .||. ||.  '|...'"
        }
      </pre>
      <br />
      <pre>
        welcome to etchebarne.net,
        <br />
        type "help" to get started.
        <br />
        <br />
        for inquires:{' '}
        <a
          href="mailto:martin@etchebarne.net"
          className="text-accent underline font-semibold"
        >
          martin@etchebarne.net
        </a>
      </pre>
    </div>
  );
}
