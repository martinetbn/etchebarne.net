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
};

export default commands;
