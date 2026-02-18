import clearHandler from '../commands/clear';
import helpHandler from '../commands/help';
import dateHandler from '../commands/date';

type Command = {
  description: string;
  handler: () => void;
};

const commands: Record<string, Command> = {
  help: {
    description: 'show this message',
    handler: helpHandler,
  },
  clear: {
    description: 'clear the screen',
    handler: clearHandler,
  },
  date: {
    description: 'my local date compared to yours',
    handler: dateHandler,
  },
};

export default commands;
