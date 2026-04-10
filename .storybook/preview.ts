import '../src/assets/main.css'
import type { Preview } from '@storybook/vue3-vite'

const preview: Preview = {
  parameters: {
    layout: 'padded',
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo'
    },
    docs: {
      story: {
        inline: true,
        iframeHeight: 400,
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Theme',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  decorators: [
    (story, context) => ({
      components: { story },
      setup() {
        const isDark = context.globals.theme === 'dark'
        return { isDark }
      },
      template: `<div :class="isDark ? 'dark' : ''" style="min-height: 200px; overflow: visible;"><div style="padding: 16px;" :style="isDark ? 'background: #141414; color: #f0f0f0' : ''"><story /></div></div>`,
    }),
  ],
};

export default preview;
