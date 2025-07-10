import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/detailed-status-messages.ts', 'src/localization/**/*.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  splitting: false,
  minify: true,
});
