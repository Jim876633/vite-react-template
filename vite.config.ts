/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import { baseUrl } from "./src/constants";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: process.env.NODE_ENV === "production" ? baseUrl : "/", // for github pages setting base path
  css: {
    preprocessorOptions: {
      scss: {
        // global sass variables and mixins
        additionalData: `@import "@styles/_variables.scss";@import "@styles/_mixins.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      "@styles": "/src/utils/styles",
      "@img": "/src/assets/img",
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.ts",
  },
});
