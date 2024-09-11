import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000, // Change the default port
    open: true, // Automatically open in the browser
  },
  build: {
    target: "esnext",
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "@/styles/_variables.scss";`, // Use your path here
      },
    },
  },
});
