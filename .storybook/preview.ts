import type { Preview } from "@storybook/react";
import AXE_LOCALE_JA from "axe-core/locales/ja.json";
import '@/app/globals.css';

const preview: Preview = {
  parameters: {
    a11y: {
      config: {
        locale: AXE_LOCALE_JA
      }
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
