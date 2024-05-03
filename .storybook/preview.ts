import type { Preview } from "@storybook/react";
import AXE_LOCALE_JA from "axe-core/locales/ja.json";
import '@/app/globals.css';
import { withScreenshot } from 'storycap';
import { initialize, mswDecorator } from "msw-storybook-addon";

export const decorators = [withScreenshot, mswDecorator];

initialize();

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
