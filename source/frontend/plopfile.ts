import type { ActionType, NodePlopAPI } from 'plop';

const types = {
  pages: 'pages',
  components: 'components',
} as const;

type Keys = keyof typeof types;
type Type = (typeof types)[Keys];

export default function plopfile(plop: NodePlopAPI): void {
  plop.setGenerator('component', {
    description: 'Component generator',
    prompts: [
      {
        name: 'type',
        type: 'list',
        message: 'What type of component would you like to generate?',
        choices: [
          { name: 'Component', value: types.components },
          { name: 'Page', value: types.pages },
        ],
      },
      {
        type: 'input',
        name: 'name',
        message: ({ type }) =>
          `What is the name of your ${type === types.pages ? 'page' : 'component'}?`,
        validate: (value, { type } = {}) =>
          value.length === 0
            ? `Please enter a ${type === types.pages ? 'page' : 'component'} name`
            : true,
      },
      {
        type: 'input',
        name: 'pathname',
        message: ({ type }) =>
          `What is the pathname to the ${
            type === types.pages ? 'page' : 'component'
          } (i.e path/to/${type === types.pages ? 'page' : 'component'}/ or leave blank)?`,
        validate: (value) =>
          // eslint-disable-next-line prefer-named-capture-group, unicorn/no-unsafe-regex
          value !== '' && !/^([a-z]+(-[a-z]+)*\/)+$/u.test(value)
            ? 'The pathname needs to be lowercase and only use the symbols / and -.'
            : true,
      },
      {
        type: 'confirm',
        name: 'useForwardRef',
        when: ({ type }) => type === types.components,
        message: () => `Do you want to use a forwardRef?`,
      },
      {
        type: 'confirm',
        name: 'createStory',
        when: ({ type }) => type === types.components,
        message: () => `Do you want to create a storybook story?`,
        default: true,
      },
    ],
    actions(answers) {
      const { type } = answers as { type: Type };

      return getActions(type, answers ?? { type: 'none' });
    },
  });
}

function getActions(
  type: Type,
  { name, useForwardRef, pathname, createStory }: Record<string, string>,
): Array<ActionType> {
  return [
    {
      data: {
        name,
        useForwardRef,
        root: '../'.repeat(
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          (pathname?.match(/\//gu) ?? '').length + (type === types.components ? 2 : 1),
        ),
        pathname,
      },
      type: 'addMany',
      base: `plop-templates/${type === types.pages ? 'page' : 'component'}`,
      templateFiles: [
        `plop-templates/${type === types.pages ? 'page' : 'component'}/*.*`,
        createStory
          ? ''
          : `!plop-templates/${type === types.pages ? 'page' : 'component'}/*.stories.*`,
      ].filter(Boolean),
      destination: `src/${type === types.pages ? 'pages' : 'components'}/{{pathname}}${
        type === types.pages ? '' : '{{dashCase name}}/'
      }`,
    },
  ];
}
