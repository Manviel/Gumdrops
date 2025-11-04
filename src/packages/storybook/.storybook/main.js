/** @type { import('@storybook/vue3-vite').StorybookConfig } */
import { dirname } from 'path';
import { fileURLToPath } from 'url';

function getAbsolutePath(value) {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}

const config = {
  stories: [
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx|vue|mdx)',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-a11y')
  ],
  framework: {
    name: getAbsolutePath('@storybook/vue3-vite'),
    options: {}
  },
  core: {
    builder: '@storybook/builder-vite'
  }
  ,
  async viteFinal(config, { configType }) {
    // ensure plugin-vue is available to handle .vue SFCs from linked packages
    const { default: vue } = await import('@vitejs/plugin-vue');
    const path = (await import('path')).default;
    config.plugins = [...(config.plugins || []), vue()];
    config.resolve = config.resolve || {};
    // compute ESM-safe dirname and resolve local core source path
    const baseDir = dirname(fileURLToPath(import.meta.url));
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@gumdrops/core': path.resolve(baseDir, '../../core/src')
    };
    return config;
  }
};

export default config;
