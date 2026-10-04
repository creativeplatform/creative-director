import {defineConfig} from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['tests/**/*.test.ts'],
    env: {
      GOOGLE_CLOUD_PROJECT: 'creative-ai-491118',
    },
  },
});
