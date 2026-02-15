type Command = {
  description: string;
  handler: () => void;
};

const commands: Record<string, Command> = {
  help: {
    description: 'show this message',
    handler: () => {
      console.log('help triggered');
    },
  },
};

export default commands;
