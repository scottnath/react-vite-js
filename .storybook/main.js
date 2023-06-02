
import istanbul from 'vite-plugin-istanbul';
import { defaultExtensions, defaultExclude } from '@storybook/addon-coverage/dist/cjs/constants';

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-coverage'
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config, options) {
    config.plugins?.push(istanbul({
      exclude: defaultExclude,
      extension: defaultExtensions
    }));
    return config;
  },
};
export default config;
