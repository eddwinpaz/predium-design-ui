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
  decorators: [
    (story) => ({
      components: { story },
      template: '<div style="padding: 16px; min-height: 200px; overflow: visible;"><story /></div>',
    }),
  ],
};

export default preview;
