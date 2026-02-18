import clearHandler from '../commands/clear';
import helpHandler from '../commands/help';
import dateHandler from '../commands/date';
import socialsHandler from '../commands/socials';

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
  socials: {
    description: 'get a link to all my socials',
    handler: socialsHandler,
  },
};

export default commands;
