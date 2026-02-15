import clearHandler from '../commands/clear';
import helpHandler from '../commands/help';

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
};

export default commands;
